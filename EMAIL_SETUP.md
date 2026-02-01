# Configuração de Envio de Email

O formulário de contato está configurado para usar **Resend** (serviço de email moderno e gratuito).

## Passos para Configurar

### 1. Instalar o pacote Resend

```bash
npm install resend
```

### 2. Criar conta no Resend

1. Acesse [https://resend.com](https://resend.com)
2. Crie uma conta gratuita (até 3.000 emails/mês)
3. Vá em **API Keys** e crie uma nova chave
4. Copie a chave (começa com `re_`)

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Resend API Key (obrigatório)
RESEND_API_KEY=re_sua_chave_aqui

# Email de origem (opcional)
# Se não configurado, usará "onboarding@resend.dev"
# Para usar seu próprio domínio, você precisa verificá-lo no Resend
RESEND_FROM_EMAIL=contato@destak.com.br
```

### 4. Verificar domínio (Opcional - Recomendado)

Para usar um email personalizado (ex: `contato@destak.com.br`):

1. No painel do Resend, vá em **Domains**
2. Adicione seu domínio
3. Configure os registros DNS conforme instruções
4. Aguarde a verificação

**Nota:** Enquanto o domínio não estiver verificado, você pode usar `onboarding@resend.dev` que já funciona por padrão.

### 5. Testar o formulário

1. Execute o servidor: `npm run dev`
2. Acesse a seção de contato
3. Preencha e envie uma mensagem de teste
4. Verifique se o email chegou em `destak.ofc@gmail.com`

## Funcionalidades Implementadas

✅ Validação de campos obrigatórios  
✅ Validação de formato de email  
✅ Envio de email em HTML e texto  
✅ Reply-To configurado com o email do remetente  
✅ Tratamento de erros  
✅ Feedback visual para o usuário  

## Troubleshooting

**Erro: "Serviço de email não configurado"**
- Verifique se o arquivo `.env.local` existe
- Confirme que a `RESEND_API_KEY` está correta
- Reinicie o servidor após adicionar variáveis de ambiente

**Emails não estão chegando**
- Verifique a pasta de spam
- Confirme que o email de destino está correto: `destak.ofc@gmail.com`
- Verifique os logs do servidor para erros
- No Resend, vá em **Logs** para ver o status dos envios

## Pronto!

Após seguir esses passos, o formulário estará totalmente funcional e enviando emails reais para `destak.ofc@gmail.com`.
