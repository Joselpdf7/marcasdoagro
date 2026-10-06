---
titulo: "Regras de adjudicação, revisão de fontes de IA, Estudo 3"
origem: "analise/ia_2026-09-21/REGRAS_ADJUDICACAO.md"
data: "2026-09-21"
versao: "v1"
sha256_original: "d53e3db2a22e20a156a0069367f5d166a4e79f94dc5d869383134fa569d64e64"
tipo: "regra"
---
# Regras do terceiro julgamento, revisão de fontes de IA, P1

Data: 13/09/2026 (defensivos), reaplicadas ao Estudo 3 em 21/09/2026 com os exemplos trocados para o segmento. Complementam o `CODEBOOK_PARA_REVISORES.md`, não o substituem.

R1. Pertinência direta exige que a página traga conteúdo específico que responda à pergunta agrícola concreta: produtos, práticas, dados ou instrumentos (ficha técnica ou garantias de produto, recomendação por cultura, tabela de doses, localizador, calculadora) ligados ao que foi perguntado. Menção ao tema sem conteúdo específico é parcial.

R2. Quando a pergunta trata de completude ou de mais de um objeto (por exemplo, "quais micronutrientes aplicar na soja", "calcário e adubo para pastagem"), a página só é direta se cobrir o conjunto perguntado ou mais de um componente dele. Página de um único componente (só um nutriente, só um produto) é parcial.

R3. Em pergunta comparativa ou superlativa (melhor, mais recomendada, lideram, quem oferece os melhores), a pertinência julga se a página evidência o atributo perguntado, não o superlativo. Página que demonstra concretamente o atributo (hub de conteúdo técnico para "melhores conteúdos técnicos"; ação digital documentada para "melhor presença digital") é direta. Página que não aborda o atributo (página de um produto ou catálogo para "maiores empresas"; página institucional genérica para "mais recomendadas") é não pertinente ou parcial. O superlativo em si nunca é sustentado por uma página própria; isso fica registrado na coluna de suporte, que é diagnóstica.

R4. Suporte à alegação é "sim" quando ao menos uma frase específica da resposta sobre aquela marca está sustentada pelo texto da página (crawl ou página viva); é "não" quando os elementos citados não aparecem na página; é "não verificável" apenas quando não há texto legível da página.

R5. Estado da fonte: página viva bloqueada com crawl legível é "arquivo_preservado", não "acessível" nem "bloqueada".

R6. A mesma URL em respostas diferentes é julgada de novo. Linhas duplicadas por qa_id distinto não são deduplicadas.

R7. Indicador principal por resposta e marca: elegível se ao menos uma linha daquela resposta tiver vertical agro e pertinência direta. Parcial vai para sensibilidade. Não verificável fica pendente e é reportado.

Nota de aplicação (aprendida nos volumes anteriores): R2 vale só para pergunta de completude ou de mais de um objeto. Pergunta de manejo de uma cultura, de um nutriente ou de uma operação é R1. Proibido decidir por presença de palavras-chave: a evidência precisa citar uma frase da página.
