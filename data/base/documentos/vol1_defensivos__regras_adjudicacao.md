---
titulo: "Regras do terceiro julgamento, revisão de fontes de IA"
origem: "estudo_1_panorama_digital/analise/revisao_independente_ia_p1_2026-09-13/adjudicacao_2026-09-13/REGRAS_ADJUDICACAO.md"
data: "2026-09-13"
versao: "v1"
sha256_original: "e11ceb49a3bc8268cc79dc5909d4273b638c814063899a802c5657bbdc80c814"
tipo: "regra"
---
# Regras do terceiro julgamento, revisão de fontes de IA, P1

Data: 13/09/2026. Escritas antes de decidir cada linha; aplicadas às 25 divergências e válidas para a recodificação integral das 540 ocorrências. Complementam o `CODEBOOK_PARA_REVISORES.md`, não o substituem.

R1. Pertinência direta exige que a página traga conteúdo específico que responda à pergunta agrícola concreta: produtos, práticas, dados ou instrumentos (buscador de bulas, catálogo por cultura) ligados ao que foi perguntado. Menção ao tema sem conteúdo específico é parcial.

R2. Quando a pergunta trata de completude ou de mais de um objeto (por exemplo, "soluções completas para milho", "soluções para soja e milho"), a página só é direta se cobrir o conjunto perguntado ou mais de um componente dele. Página de um único componente (só sementes, só proteção, só uma cultura) é parcial.

R3. Em pergunta comparativa ou superlativa (melhor, mais recomendada, lideram, quem oferece os melhores), a pertinência julga se a página evidência o atributo perguntado, não o superlativo. Página que demonstra concretamente o atributo (hub de conteúdo técnico para "melhores conteúdos técnicos"; ação digital documentada para "melhor presença digital") é direta. Página que não aborda o atributo (bula de produto ou guia de cultivares para "lideram o mercado"; página institucional genérica para "mais recomendadas") é não pertinente ou parcial. O superlativo em si nunca é sustentado por uma página própria; isso fica registrado na coluna de suporte, que é diagnóstica.

R4. Suporte à alegação é "sim" quando ao menos uma frase específica da resposta sobre aquela marca está sustentada pelo texto da página (crawl ou página viva); é "não" quando os elementos citados não aparecem na página; é "não verificável" apenas quando não há texto legível da página. O revisor principal marcou "não verificável" em 335 de 540 linhas como padrão, inclusive com crawl utilizável; isso não é julgamento e será recodificado.

R5. Estado da fonte: página viva bloqueada com crawl legível é "arquivo_preservado", não "acessível" nem "bloqueada".

R6. A mesma URL em respostas diferentes é julgada de novo. Linhas duplicadas por qa_id distinto não são deduplicadas.

R7. Indicador principal por resposta e marca: elegível se ao menos uma linha daquela resposta tiver vertical agro e pertinência direta. Parcial vai para sensibilidade. Não verificável fica pendente e é reportado.
