---
titulo: "Regras de adjudicação, revisão de fontes de IA, Estudo 2"
origem: "analise/ia_2026-09-14/REGRAS_ADJUDICACAO.md"
data: "2026-09-14"
versao: "v1"
sha256_original: "39568d1afb801f43ce04239c30cbec5571d1f6083e70ebe7744b61770467a5ee"
tipo: "regra"
---
# Regras do terceiro julgamento, revisão de fontes de IA, P1

Data: 13/09/2026 (defensivos), reaplicadas sem alteração ao Estudo 2 em 14/09/2026. Complementam o `CODEBOOK_PARA_REVISORES.md`, não o substituem.

R1. Pertinência direta exige que a página traga conteúdo específico que responda à pergunta agrícola concreta: produtos, práticas, dados ou instrumentos (ficha técnica, catálogo por tipo de máquina ou cultura, localizador, simulador) ligados ao que foi perguntado. Menção ao tema sem conteúdo específico é parcial.

R2. Quando a pergunta trata de completude ou de mais de um objeto (por exemplo, "soluções completas para milho", "soluções para soja e milho"), a página só é direta se cobrir o conjunto perguntado ou mais de um componente dele. Página de um único componente (só tratores, só um modelo, só uma cultura) é parcial.

R3. Em pergunta comparativa ou superlativa (melhor, mais recomendada, lideram, quem oferece os melhores), a pertinência julga se a página evidência o atributo perguntado, não o superlativo. Página que demonstra concretamente o atributo (hub de conteúdo técnico para "melhores conteúdos técnicos"; ação digital documentada para "melhor presença digital") é direta. Página que não aborda o atributo (ficha de um modelo ou catálogo para "lideram o mercado"; página institucional genérica para "mais recomendadas") é não pertinente ou parcial. O superlativo em si nunca é sustentado por uma página própria; isso fica registrado na coluna de suporte, que é diagnóstica.

R4. Suporte à alegação é "sim" quando ao menos uma frase específica da resposta sobre aquela marca está sustentada pelo texto da página (crawl ou página viva); é "não" quando os elementos citados não aparecem na página; é "não verificável" apenas quando não há texto legível da página.

R5. Estado da fonte: página viva bloqueada com crawl legível é "arquivo_preservado", não "acessível" nem "bloqueada".

R6. A mesma URL em respostas diferentes é julgada de novo. Linhas duplicadas por qa_id distinto não são deduplicadas.

R7. Indicador principal por resposta e marca: elegível se ao menos uma linha daquela resposta tiver vertical agro e pertinência direta. Parcial vai para sensibilidade. Não verificável fica pendente e é reportado.
