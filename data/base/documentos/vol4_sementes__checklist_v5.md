---
titulo: "Checklist de autoatendimento, itens do segmento, com regras de adjudicação"
origem: "analise/experiencia_autoatendimento_2026-09-30/CHECKLIST_V5.md"
data: "2026-09-30"
versao: "v1"
sha256_original: "4b04d5b4102ddd96ddb186b9619d53bb5cb4bb83d12b49e11c182d54dbb9cc99"
tipo: "regra"
---
# Checklist V5, autoatendimento, Estudo 4 (10 itens, regra idêntica para os 8 grupos e todas as submarcas)

Escrito em 30/09/2026, antes de qualquer auditoria. Unidade: o GRUPO, auditado sobre o conjunto dos seus alvos de sementes (domínios próprios das submarcas, subpastas de marca e seção de sementes do site do grupo, mais hotsites de tecnologia listados em (registro interno do estudo), campo dominios_proprios). Item presente em qualquer alvo do grupo conta presente para o grupo (regra de soma); a auditoria registra também em qual submarca está, para o painel por submarca. Cada item recebe status `presente`, `ausente` ou `nao_verificavel` (só por bloqueio técnico), com URL da evidência, trecho literal da página (até 200 caracteres) e horário UTC da abertura. Site de multiplicador, revenda, distribuidor ou marketplace de terceiros não conta. Conteúdo de defensivos do mesmo grupo não conta: o item precisa servir ao produtor de sementes (catálogo de cultivares, posicionamento de cultivar, ensaio de cultivar).

1. Localizador de revenda, multiplicador, franquia, representante ou unidade (onde comprar), com busca ou lista por cidade, estado ou região.
2. Contato direto com a marca: telefone, WhatsApp, formulário ou chat.
3. Portal, área logada ou aplicativo do produtor ou cliente: link para login ou para o aplicativo nas lojas, na própria página.
4. Busca interna no site.
5. Navegação por cultura e por região (menu, filtro ou páginas por cultura; recorte por região, estado ou macrorregião em alguma página de cultivares).
6. Catálogo de cultivares com ficha técnica na página: ao menos uma página de cultivar com características agronômicas (ciclo, grupo de maturação, tecnologia, população, região) visíveis no HTML ou em PDF ligado na própria página.
7. Posicionamento por região ou ferramenta de recomendação de cultivar: comparador, mapa de posicionamento, recomendador por cidade ou aplicativo em domínio ou subdomínio do grupo, ligado a partir do site oficial.
8. Resultados de ensaios, campos demonstrativos ou relatos de produtividade publicados (página ou PDF), na janela de doze meses ou sem data.
9. Sala de imprensa ou seção de notícias com conteúdo de sementes.
10. Redes sociais oficiais ligadas na área inferior ou superior persistente da página (da submarca ou do grupo).

Diagnóstico fora da nota: disponibilidade técnica (status HTTP da página inicial de cada alvo, bloqueio a acesso automatizado, páginas quebradas encontradas).

## Regras de adjudicação (escritas antes da auditoria, herdadas dos volumes 2 e 3 sem as contagens de lá)

- R-V5-1: mapa ou lista de multiplicadores, franqueados, representantes ou revendas em domínio do grupo conta; só "fale conosco para saber onde comprar" é ausente; localizador de revenda de defensivos do grupo conta só se a página incluir sementes.
- R-V5-3: programa de fidelidade ou portal com login em domínio do grupo conta como área do produtor quando a página pública descreve o serviço e oferece o acesso; portal só para multiplicadores, fornecedores, investidores ou candidatos não conta.
- R-V5-5: navegação por tipo de produto sem navegação por cultura é ausente; navegação por cultura sem nenhum recorte regional em página de cultivares é presente com observação "sem região".
- R-V5-6: basta uma página de cultivar com características agronômicas visíveis; folder em PDF ligado na página de catálogo conta com observação "só PDF".
- R-V5-7: ferramenta que devolve uma recomendação ou comparação a partir de entrada do produtor (cidade, estado, ciclo) conta; tabela estática de posicionamento em PDF conta como item 6 e não como 7; aplicativo conta com link para loja ou página própria.
- R-V5-8: relato de produtividade de produtor publicado pela marca conta com observação "relato, não ensaio"; ensaio formal conta sem observação.
- R-V5-9: seção de notícias mista (defensivos e sementes) conta se houver ao menos uma matéria de sementes na primeira página da listagem.
- R-V5-10: links na área persistente da página contam, dentro ou fora da tag footer; ícone com href vazio ou "#" é ausente; ícones só por JavaScript ficam `nao_verificavel` para a passada de navegador; perfil genérico do grupo no rodapé da subpasta da marca conta para o grupo.
- R-V5-11: tudo o que ficar `nao_verificavel` na auditoria estática passa por verificação em navegador; ao final nenhum item fica não verificável, salvo bloqueio confirmado também no navegador, que vira N/A do grupo (nunca zero).
- Rótulos: exatamente `presente`, `ausente`, `nao_verificavel`; o consolidador normaliza sublinhado, espaço e acento antes de comparar.
