---
titulo: "Leitura do sinal de IA v2: quatro superfícies (ChatGPT, Gemini, Copilot, Claude)"
origem: "estudo_1_panorama_digital/analise/ia_pilar_2026-09-13/LEITURA_IA_PILAR_v2.md"
data: "2026-09-13"
versao: "v2"
sha256_original: "d072c44b8e8ff4e2cb50989730055db7600a037b68ff78e9e9cef7ec7ef27fb7"
tipo: "resultado"
---
# Leitura do sinal de IA, v2: quatro superfícies (ChatGPT, Gemini, Copilot, Claude)

Data: 13/09/2026, noite. Substitui a v1 (três motores) acrescentando o Claude como superfície mandatória, por decisão da coordenação do estudo. Perplexity foi coletada e codificada com o mesmo rigor, mas fica fora da nota (uso marginal no Brasil); seus números ficam em `sensibilidade_ia_com_perplexity_4_superficies_2026-09-13.csv`.

## Como o Claude foi medido

API Anthropic, Claude, ferramenta de busca na web básica (citações no texto), no máximo 5 buscas por resposta, localização aproximada Brasil, sem prompt de sistema (simula o uso direto). Mesmas 60 perguntas pré-registradas, 3 passes, 180 respostas. Em 24 das 180 respostas o modelo escolheu não pesquisar; essas respostas contam para menção e primeira menção, mas não podem ter fonte própria. Média de 1,8 buscas e 5,7 citações por resposta. Bruto com manifesto em (registro interno do estudo) (o piloto de 46 respostas com outra variante da ferramenta ficou arquivado à parte e não entra).

Fontes próprias do Claude: 165 ocorrências de páginas próprias citadas; 64 reaproveitam o julgamento adjudicado da tabela das 540 (mesma pergunta e mesma URL); 101 foram codificadas por um revisor automático independente (codebook e regras R1 a R7) e, às cegas, pelo adjudicador por par pergunta x URL (69 pares). Concordância de elegibilidade de 77,2%; 23 linhas (16 pares) adjudicadas com justificativa em (registro interno do estudo). Padrão das divergências: o revisor aplicou R2 (completude) por analogia a perguntas de manejo e a perguntas de "melhores soluções" com um único objeto; a regra vale só para completude ou mais de um objeto, e a adjudicação seguiu o texto da regra. Na Perplexity (sensibilidade) a concordância foi de 90,7%.

## Resultado, unidade pergunta x superfície, passes como réplicas, peso igual por superfície, IC 95% por bootstrap de perguntas

| Marca | Menção atribuível | IC 95% | Primeira citada | IC 95% | Fonte própria pertinente (V7) | IC 95% |
|---|---:|---|---:|---|---:|---|
| Syngenta | 43,8% | 35,4 a 52,6 | 20,1% | 14,4 a 26,7 | 13,6% | 9,0 a 18,9 |
| Bayer | 43,8% | 34,9 a 53,3 | 23,3% | 17,6 a 29,6 | 10,6% | 6,5 a 14,9 |
| BASF | 34,2% | 25,6 a 43,5 | 5,8% | 3,5 a 8,2 | 6,4% | 3,5 a 10,3 |
| Corteva | 32,8% | 23,8 a 42,2 | 5,3% | 2,2 a 9,0 | 3,6% | 0,8 a 7,2 |
| UPL | 18,1% | 10,8 a 25,8 | 0,7% | 0,0 a 1,8 | 0,0% | 0,0 a 0,0 |
| FMC | 17,5% | 11,1 a 24,7 | 0,4% | 0,0 a 1,1 | 0,1% | 0,0 a 0,4 |
| IHARA | 14,9% | 8,7 a 21,8 | 1,4% | 0,4 a 2,6 | 1,8% | 0,7 a 3,3 |
| ADAMA | 11,5% | 6,5 a 17,5 | 0,0% | 0,0 a 0,0 | 0,6% | 0,1 a 1,3 |

## Por superfície (taxa por resposta)

| Marca | Menção: ChatGPT / Gemini / Copilot / Claude | Primeira: ChatGPT / Gemini / Copilot / Claude | Fonte própria: ChatGPT / Gemini / Copilot / Claude |
|---|---|---|---|
| Syngenta | 35,0 / 49,4 / 47,8 / 42,8 | 13,3 / 26,1 / 23,3 / 17,8 | 5,6 / 8,9 / 17,2 / 22,8 |
| Bayer | 33,9 / 51,1 / 47,8 / 42,2 | 15,6 / 26,7 / 28,3 / 22,8 | 6,1 / 5,6 / 11,7 / 18,9 |
| BASF | 30,6 / 32,2 / 33,9 / 40,0 | 3,3 / 2,8 / 8,3 / 8,9 | 4,4 / 1,7 / 6,7 / 12,8 |
| Corteva | 35,0 / 35,6 / 26,1 / 34,4 | 3,9 / 3,9 / 5,0 / 8,3 | 5,6 / 3,9 / 0,0 / 5,0 |
| IHARA | 12,2 / 13,3 / 15,6 / 18,3 | 0,0 / 0,0 / 2,8 / 2,8 | 0,6 / 0,0 / 3,3 / 3,3 |
| FMC | 21,1 / 13,9 / 17,8 / 17,2 | 0,6 / 0,0 / 1,1 / 0,0 | 0,6 / 0,0 / 0,0 / 0,0 |
| UPL | 18,9 / 20,6 / 11,1 / 21,7 | 1,7 / 0,6 / 0,6 / 0,0 | 0,0 / 0,0 / 0,0 / 0,0 |
| ADAMA | 12,2 / 5,6 / 9,4 / 18,9 | 0,0 / 0,0 / 0,0 / 0,0 | 1,1 / 0,0 / 1,1 / 0,0 |

## Leitura responsável

Syngenta e Bayer continuam empatadas em menção e em primeira citação, com intervalos sobrepostos; a Bayer é citada primeiro um pouco mais, a Syngenta tem mais respostas apoiadas em página própria pertinente. O Claude é a superfície que mais cita páginas próprias das marcas (22,8% das respostas para a Syngenta, 18,9% para a Bayer, 12,8% para a BASF), o que eleva V7 para as quatro maiores sem mudar a ordem entre elas. O Claude também é a superfície onde BASF e ADAMA aparecem mais (40,0% e 18,9% de menção). Corteva, FMC, UPL e ADAMA quase nunca são a primeira marca citada em nenhuma superfície; UPL não teve página própria pertinente em nenhuma das 720 unidades. Entrar na nota com quatro superfícies, em vez de três, muda os totais do painel em menos de meio ponto e mantém a ordem.

Limites: 24 respostas do Claude sem busca (13%) não podem ter fonte própria; a codificação das fontes do Claude usa o trecho citado pela própria superfície como evidência, não o crawl da página; o adjudicador é o mesmo em todas as superfícies, o que dá coerência mas concentra o julgamento; a codificação do revisor automático fica registrada com o mesmo formato.
