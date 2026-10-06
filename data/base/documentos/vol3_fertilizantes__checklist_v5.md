---
titulo: "Checklist de autoatendimento, dez itens do segmento, com regras de adjudicação"
origem: "analise/experiencia_autoatendimento_2026-09-18/CHECKLIST_V5.md"
data: "2026-09-18"
versao: "v5"
sha256_original: "68e80b3a5bfd55f1d82106e4a45c8b5eb491e4d2b07611c21c57307a9d16baf4"
tipo: "regra"
---
# Checklist V5, autoatendimento e jornada, Estudo 3 (10 itens, regra idêntica para as 9 marcas)

Escrito em 18/09/2026, antes de qualquer auditoria. Cada item recebe status `presente`, `ausente` ou `nao_verificavel` (só por bloqueio técnico), com URL da evidência, trecho literal da página (até 200 caracteres) e horário UTC da abertura. Conta o que está em domínio próprio da marca listado em (registro interno do estudo) (campo dominios_proprios), o que inclui o portal sem marca da Mosaic. Site de revenda, distribuidor ou marketplace de terceiros não conta.

1. Localizador de revenda, distribuidor, unidade ou representante (onde comprar), com busca ou lista por cidade, estado ou região.
2. Contato direto com a marca: telefone, WhatsApp, formulário ou chat.
3. Portal, área logada ou aplicativo do produtor ou cliente: link para login ou para o aplicativo nas lojas, na própria página.
4. Busca interna no site.
5. Navegação por cultura (menu, filtro ou páginas por cultura).
6. Catálogo com ficha técnica e garantias: página de produto com garantias, composição ou ficha técnica visível.
7. Calculadora, simulador ou recomendação de adubação, de calagem ou de dose.
8. Documentos para download: tabela de garantias, bula, ficha de segurança (FISPQ ou FDS), catálogo ou folheto em PDF.
9. Sala de imprensa ou seção de notícias da marca.
10. Redes sociais oficiais ligadas na área inferior ou superior persistente da página.

Diagnóstico fora da nota: disponibilidade técnica (status HTTP da página inicial, bloqueio a acesso automatizado, páginas quebradas encontradas).

## Regras de adjudicação (escritas antes da auditoria, herdadas do Estudo 2 sem as contagens de lá)

- R-V5-1: item 1 é presente com lista de unidades próprias com endereço por estado quando a marca vende direto; mapa ou lista de revendas conta; só "fale conosco para saber onde comprar" é ausente.
- R-V5-3: programa de fidelidade com login em domínio próprio conta como área do produtor quando a página pública descreve o serviço e oferece o acesso. Portal só para fornecedores, investidores ou candidatos não conta.
- R-V5-5: navegação por tipo de produto sem navegação por cultura é ausente neste segmento (o item mede cultura; tipo de produto é o mínimo de qualquer catálogo).
- R-V5-6: basta uma página de produto com garantias ou composição visível no HTML ou em PDF ligado na própria página.
- R-V5-7: ferramenta em domínio ou subdomínio da marca, ligada a partir do site oficial, conta. Planilha ou e-book de recomendação não conta; precisa calcular ou simular.
- R-V5-8: documento atrás de formulário de cadastro conta como presente com observação "exige cadastro".
- R-V5-10: links na área persistente da página contam, dentro ou fora da tag footer; ícone com href vazio ou "#" é ausente; ícones só por JavaScript ficam `nao_verificavel` para a passada de navegador.
- R-V5-11: tudo o que ficar `nao_verificavel` na auditoria estática passa por verificação em navegador; ao final nenhum item fica não verificável, salvo bloqueio confirmado também no navegador, que vira N/A da marca (nunca zero).
- Rótulos: exatamente `presente`, `ausente`, `nao_verificavel`; o consolidador normaliza sublinhado, espaço e acento antes de comparar.
