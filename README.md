# Destak - Site Institucional

Site institucional da empresa Destak, especializada em serviços de pintura e gesso.

## Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **ESLint** - Linting de código

## Como executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Scripts disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## Estrutura do projeto

```
destak/
├── app/
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Página inicial
│   └── globals.css     # Estilos globais
├── public/             # Arquivos estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Próximos passos

- Adicionar formulário de contato funcional
- Integrar com API de envio de emails
- Adicionar galeria de fotos dos trabalhos
- Implementar depoimentos de clientes
- Adicionar blog com dicas de pintura
