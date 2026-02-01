# Pasta de Imagens

Coloque aqui todas as imagens do site, incluindo:

## Logo
- `logo.png` ou `logo.svg` - Logo principal da empresa (recomendado: SVG para melhor qualidade)

## Outras imagens
- Fotos de trabalhos realizados
- Imagens de serviços
- Imagens de fundo (se necessário)
- Ícones personalizados

## Como usar no código

No Next.js, você pode referenciar imagens da pasta `public` assim:

```tsx
import Image from 'next/image'

<Image src="/images/logo.png" alt="Logo Destak" width={200} height={50} />
```

Ou usando tag img normal:
```tsx
<img src="/images/logo.png" alt="Logo Destak" />
```

## Formatos recomendados
- **Logo**: SVG ou PNG com fundo transparente
- **Fotos**: JPG ou WebP (WebP é mais otimizado)
- **Ícones**: SVG ou PNG
