# ⚖️ Site do Advogado(a) — Angular

Landing page para advogado(a) autônomo(a), com estrutura inspirada em sites de escritórios de advocacia, mas adaptada para atendimento individual (pessoa física) em vez de escritório.

## ✨ Sobre o projeto

Site institucional em Angular, pensado para ser fácil de customizar: praticamente todo o conteúdo (textos, contatos, áreas de atuação) fica centralizado em um único arquivo, sem precisar mexer nos componentes para trocar as informações.

## 🛠️ Tecnologias

- Angular (standalone components)
- TypeScript
- SCSS

## 🚀 Como rodar

Pré-requisito: [Node.js](https://nodejs.org) 18+

```bash
npm install
npm start
```

Acesse em `http://localhost:4200`.

Para gerar a versão de produção (arquivos estáticos para hospedar em qualquer servidor):

```bash
npm run build
```

Os arquivos finais ficam em `dist/advogado-site/`.

## ✏️ Onde editar o conteúdo

Todo o texto e dados de contato ficam em um único arquivo:

```
src/app/core/content.ts
```

Edite ali:

- Nome, OAB, área de atuação, cidade
- Textos de "Sobre mim" e "Quando contratar um advogado"
- Lista de serviços/áreas de atuação (cards)
- Lista de "para quem atendo"
- WhatsApp, telefone, e-mail e endereço
- Links de redes sociais
- Foto (campo `fotoUrl`) — coloque a imagem em `src/assets/` e aponte o caminho, ex: `fotoUrl: 'assets/foto.jpg'`

Depois de editar, salve o arquivo — se o `npm start` estiver rodando, o site recarrega sozinho.

## 🎨 Onde editar cores e fontes

Tokens de design (cores, fontes, espaçamento) ficam no topo de:

```
src/styles.scss
```

Paleta atual:

| Variável | Uso |
|---|---|
| `--color-paper` | fundo |
| `--color-ink` | texto |
| `--color-wine` | cor de destaque/assinatura |
| `--color-gold` | detalhes e linhas |

## 📁 Estrutura

```
src/app/
  core/content.ts                  -> todo o conteúdo editável
  directives/reveal.directive.ts   -> efeito de entrada suave ao rolar a página
  components/
    header/    -> menu fixo + selo com iniciais
    hero/      -> seção de abertura com nome e chamada para agendar
    about/     -> sobre mim + quando contratar um advogado
    services/  -> áreas de atuação (cards)
    audience/  -> para quem atendo
    contact/   -> telefone, e-mail, endereço, mapa e WhatsApp
    footer/    -> rodapé
```
