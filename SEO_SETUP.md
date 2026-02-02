# Configuração de SEO - Destak

Este documento descreve todas as configurações de SEO implementadas no site da Destak para melhorar o posicionamento nas pesquisas do Google.

## ✅ Configurações Implementadas

### 1. Metadados Completos (`app/layout.tsx`)

- **Title otimizado**: "Destak - Pinturas e Gesso | Drywall e Pintura em Uberlândia"
- **Description rica**: Descrição detalhada com palavras-chave relevantes
- **Keywords**: Lista completa de palavras-chave relacionadas aos serviços
- **Open Graph**: Metadados para compartilhamento em redes sociais (Facebook, LinkedIn, etc.)
- **Twitter Cards**: Metadados otimizados para Twitter
- **Canonical URL**: URL canônica para evitar conteúdo duplicado
- **Robots**: Configuração para indexação pelos buscadores

### 2. Structured Data (JSON-LD)

Implementado na página principal (`app/page.tsx`) com:
- **LocalBusiness Schema**: Informações da empresa local
- **Endereço**: Uberlândia, MG
- **Contato**: Telefone, email, WhatsApp
- **Serviços**: Lista completa de serviços oferecidos
- **Área de Atuação**: Uberlândia

Isso ajuda o Google a entender melhor o negócio e pode resultar em:
- Rich snippets nos resultados de busca
- Aparecer no Google Maps
- Melhor posicionamento em buscas locais

### 3. Robots.txt (`public/robots.txt`)

Arquivo que orienta os buscadores sobre quais páginas indexar:
- Permite indexação de todo o site
- Aponta para o sitemap

### 4. Sitemap (`app/sitemap.ts`)

Sitemap dinâmico gerado automaticamente pelo Next.js com:
- Página principal
- Todas as seções (início, serviços, sobre, galeria, contato)
- Prioridades e frequências de atualização configuradas

Acessível em: `https://destakmg.com.br/sitemap.xml`

## 📋 Próximos Passos Recomendados

### 1. Google Search Console

1. Acesse [Google Search Console](https://search.google.com/search-console)
2. Adicione a propriedade `https://destakmg.com.br`
3. Verifique a propriedade usando um dos métodos:
   - Arquivo HTML (baixe e coloque em `public/`)
   - Tag HTML (adicione no `layout.tsx` em `metadata.verification`)
   - DNS (se tiver acesso ao DNS do domínio)

### 2. Google My Business

1. Crie ou otimize o perfil no [Google Meu Negócio](https://www.google.com/business/)
2. Adicione todas as informações:
   - Endereço completo
   - Horários de funcionamento
   - Fotos dos trabalhos
   - Categorias de serviços
   - Avaliações de clientes

### 3. Google Analytics

1. Crie uma conta no [Google Analytics](https://analytics.google.com)
2. Adicione o código de rastreamento no `layout.tsx` ou use o Google Tag Manager

### 4. Otimizações Adicionais

- **Imagens**: Certifique-se de que todas as imagens têm `alt` text descritivo (já implementado)
- **Performance**: Use `next/image` para otimização automática (já implementado)
- **Mobile-First**: Site já é responsivo
- **HTTPS**: Certifique-se de que o site está rodando com HTTPS em produção
- **Velocidade**: Use ferramentas como PageSpeed Insights para monitorar

### 5. Conteúdo

- Adicione mais conteúdo textual nas seções (já temos conteúdo bom)
- Considere adicionar um blog com dicas de pintura e manutenção
- Adicione depoimentos de clientes (pode melhorar a confiança)

### 6. Backlinks

- Liste o site em diretórios locais
- Participe de grupos locais no Facebook/LinkedIn
- Peça para clientes satisfeitos deixarem avaliações no Google

## 🔍 Ferramentas Úteis

- **Google Search Console**: Monitorar indexação e performance
- **Google PageSpeed Insights**: Testar velocidade do site
- **Google Rich Results Test**: Verificar structured data
- **Schema Markup Validator**: Validar JSON-LD
- **Mobile-Friendly Test**: Verificar responsividade

## 📊 Monitoramento

Após implementar:
1. Monitore o Google Search Console regularmente
2. Acompanhe as palavras-chave que trazem tráfego
3. Verifique se há erros de indexação
4. Analise o desempenho das páginas

## 🎯 Palavras-chave Principais

O site está otimizado para:
- pintura residencial Uberlândia
- pintura comercial Uberlândia
- drywall Uberlândia
- gesso Uberlândia
- pintor em Uberlândia
- cimento queimado
- texturas
- papel de parede
- forros e sancas
- boisserie

## 📝 Notas Importantes

- O sitemap é gerado automaticamente pelo Next.js
- O structured data está na página principal
- Todos os metadados estão configurados no `layout.tsx`
- O site já está otimizado para mobile
- As imagens usam `next/image` para otimização automática
