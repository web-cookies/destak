import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos" },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // Se não tiver API key do Resend, retorna erro informativo
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY não configurada");
      return NextResponse.json(
        { error: "Serviço de email não configurado. Por favor, configure a RESEND_API_KEY." },
        { status: 500 }
      );
    }

    const emailContent = `
Nova mensagem do site Destak:

Nome: ${name}
Email: ${email}
Telefone: ${phone || "Não informado"}

Mensagem:
${message}

---
Enviado através do formulário de contato do site.
Data: ${new Date().toLocaleString("pt-BR")}
    `;

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: "destak.ofc@gmail.com",
      replyTo: email,
      subject: `Nova mensagem de ${name} - Site Destak`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3a64ff;">Nova mensagem do site Destak</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
          </div>
          <div style="background: #fff; padding: 20px; border-left: 4px solid #e06e00; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Mensagem:</h3>
            <p style="color: #666; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 30px;">
            Enviado através do formulário de contato do site.<br>
            Data: ${new Date().toLocaleString("pt-BR")}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Erro ao enviar email:", error);
      return NextResponse.json(
        { error: "Erro ao enviar email. Tente novamente mais tarde." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso!", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao processar formulário:", error);
    return NextResponse.json(
      { error: "Erro ao processar sua mensagem" },
      { status: 500 }
    );
  }
}
