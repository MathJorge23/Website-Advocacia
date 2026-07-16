# Site do Advogado(a) — Angular

Landing page pessoal para advogado(a) autônomo(a), inspirada na estrutura do site da
Torres & Ramon Advogados, mas adaptada para atendimento individual (pessoa física),
em vez de escritório.

## Como rodar

Pré-requisitos: [Node.js](https://nodejs.org) 18+ instalado.

```bash
npm install
npm start
```

Abra http://localhost:4200 no navegador.

Para gerar a versão de produção (arquivos estáticos para hospedar em qualquer servidor):

```bash
npm run build
```

Os arquivos finais ficam em `dist/advogado-site/`.

## Onde editar o conteúdo

Praticamente **todo o texto e dados de contato ficam em um único arquivo**:

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
- Foto (campo `fotoUrl`) — coloque a imagem em `src/assets/` e aponte o caminho,
  ex: `fotoUrl: 'assets/foto.jpg'`

Depois de editar, salve o arquivo — se o `npm start` estiver rodando, o site
recarrega sozinho.

## Onde editar cores e fontes

Tokens de design (cores, fontes, espaçamento) ficam no topo de:

```
src/styles.scss
```

Palette atual: papel (`--color-paper`), tinta (`--color-ink`), vinho (`--color-wine`,
cor de destaque/assinatura) e latão (`--color-gold`, usado em detalhes/linhas).

## Estrutura

```
src/app/
  core/content.ts        -> todo o conteúdo editável
  directives/reveal.directive.ts -> efeito de entrada suave ao rolar a página
  components/
    header/    -> menu fixo + selo com iniciais
    hero/      -> seção de abertura com nome e chamada para agendar
    about/     -> sobre mim + quando contratar um advogado
    services/  -> áreas de atuação (cards)
    audience/  -> para quem atendo
    contact/   -> telefone, e-mail, endereço, mapa e WhatsApp
    footer/    -> rodapé
```

## Próximos passos sugeridos

- Trocar o placeholder de foto pela sua foto profissional
- Revisar todos os textos (eles estão com conteúdo de exemplo)
- Conferir o número de WhatsApp e mensagem padrão
- Se quiser, registrar um domínio e hospedar (Vercel, Netlify, ou qualquer host
  de arquivos estáticos após rodar `npm run build`)
