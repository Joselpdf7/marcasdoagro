---
titulo: "Checklist V5, autoatendimento e jornada, oito fabricantes, com regras de adjudicação"
origem: "analise/experiencia_autoatendimento_2026-09-14/CHECKLIST_V5.md"
data: "2026-09-14"
versao: "v5"
sha256_original: "23c2b07e534cff29cea14f5fc642aaae4937f761f11e2a7dc12bce519df228a0"
tipo: "regra"
---
# Checklist V5, autoatendimento e jornada, Estudo 2 (10 itens, regra idêntica para as 8 marcas)

Cada item recebe: presente, ausente ou não verificável (bloqueio técnico), com URL da evidência, trecho literal da página (até 200 caracteres) e horário UTC da abertura. Só conta o que está no site Brasil da marca (domínio ou subpasta validados) ou em domínio próprio listado nas entidades. Site de concessionária não conta.

1. Localizador de concessionária com busca por cidade, estado ou CEP.
2. Contato direto: telefone, WhatsApp, formulário ou chat com a marca.
3. Portal ou app do cliente: link para área logada ou para app nas lojas (App Store ou Google Play), na própria página.
4. Busca interna no site.
5. Navegação por tipo de máquina e por cultura ou aplicação (menu ou filtro).
6. Catálogo com ficha técnica: página de modelo com especificações ou PDF de folheto.
7. Configurador ou simulador: de máquina, de consórcio ou de financiamento.
8. Peças e manuais: loja ou catálogo de peças, ou manuais do operador.
9. Imprensa: sala de imprensa ou seção de notícias da marca.
10. Redes sociais no rodapé (links para perfis oficiais).

## Regra de adjudicação R-V5-7 (escrita em 14/09/2026 às 20h05 BRT, antes de consolidar as notas)

Os auditores automáticos divergiram sobre simuladores de consórcio e financiamento hospedados em domínio da própria marca (consorcio<marca>.com.br, banco<marca>.com.br): um contou, dois não contaram. Regra única para as oito marcas: o item 7 é presente quando o simulador ou configurador (a) está no site Brasil ou em domínio próprio das entidades, OU (b) está em domínio que carrega o nome da marca (consórcio, banco ou financeira da marca) e é linkado a partir do site Brasil da marca. O item 7 das oito marcas foi reaberto com essa regra, com registro de URL e trecho. O mesmo vale para o item 8 (loja de peças em domínio da marca linkada do site oficial).

## Regras de adjudicação complementares (14/09/2026, 20h40 BRT, antes da consolidação)

- R-V5-8: loja ou catálogo de peças em domínio da marca (por exemplo loja da marca em domínio próprio) linkado a partir do site Brasil conta como presente; portal de peças que exige login conta como presente se a página pública descrever o serviço e oferecer o acesso (o critério é autoatendimento oferecido, não conteúdo aberto).
- R-V5-10: links para os perfis oficiais na área inferior persistente da página contam como presente, esteja ou não dentro da tag HTML footer. Quando os ícones são renderizados só por JavaScript e não aparecem no HTML estático, o item é "não verificável", nunca "ausente".
- R-V5-5: navegação por tipo de máquina presente e navegação por cultura ausente contam como presente parcial, registrado como presente com observação (o item mede navegação por tipo; cultura é complemento).
- Evidência para o item 7 (acesso direto, 14/09): consorciojohndeere.com.br (simulador, linkado da home), consorcionewholland.com.br/simulador (linkado da home), consorciovaltra.com.br (simulador, linkado de valtra.com.br/compre-um-valtra), consorcio.stara.com.br e starafinanceira.com.br (simuladores, linkados da home). Case IH só linka o consórcio de uma concessionária (Primorossi), que não é domínio da marca. Jacto linka landings de consórcio em conteudo.jacto.com e consorciojacto.com.br redireciona para a administradora Comauto (terceiro).

## Verificação complementar em navegador (16/09/2026, após a revisão externa)

R-V5-11: quando a ferramenta é um aplicativo só em JavaScript, a verificação é feita em navegador (verificação por navegador); se mesmo assim não renderizar, conta como presente apenas quando o site oficial linka a ferramenta em domínio da marca e o título da página a identifica (a ferramenta é oferecida ao produtor), e o caso fica anotado. Nenhum item permanece "não verificável": ou se verificou, ou é ausente.
- John Deere, item 1: a home oficial linka "Onde Comprar" para dealerlocator.deere.com/servlet/country=BR, cujo título é "Localizador Global de Concessionários"; o aplicativo não renderizou em navegador headless. Presente por R-V5-11, anotado.
- Massey Ferguson, item 5: em navegador, o menu de produtos oferece navegação por linha (Tratores, Colheitadeiras, Plantadeiras, Plataformas, Equipamentos de Aplicação) e por aplicação (Cultivo, Cuidados com o terreno, Pecuária, Sistemas agrícolas mistos). Presente.
- Massey Ferguson, item 10: em navegador renderizado não há link para Instagram, Facebook, YouTube ou LinkedIn na página inicial. Ausente.
