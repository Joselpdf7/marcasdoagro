---
titulo: "Sensibilidades do painel v5, fase 4 (conjunto completo de cenários)"
origem: "analise/sensibilidades_fase4_v5_2026-09-18/sensibilidades_fase4.json"
data: "2026-09-18"
versao: "v5"
sha256_original: "835114eeddce168f09c928f777b444fefb064e2b5832fa1bae66399d5dcc6077"
tipo: "resultado"
---
# Sensibilidades do painel v5, fase 4

Conjunto completo de sensibilidades exigidas pelo protocolo e pelas regras unificadas do programa antes de qualquer frase de liderança: cenários alternativos de peso e de composição de IA, percentil no lugar de participação, retirada de cada pilar, retirada de cada submétrica (uma por vez, com a faixa de posição resultante), pesos aleatórios (sorteio Dirichlet dentro de cada pilar e entre pilares), z-score winsorizado, base mínima de seguidores, bootstrap conjunto das unidades e imprensa desduplicada por manchete. Todos os valores desta nota derivam da tabela de submétricas do painel v5 e são recálculos determinísticos, sem nenhum dado novo.

## Total do painel sob cada cenário

| Marca | Base (painel v5, participação, pesos iguais) | Percentil em vez de participação | Sem IA (retirando P7 e V7 do painel) | Sem Facebook nas submétricas sociais | Sem o pilar Proeminência | Sem o pilar Valorização | Sem o pilar Fidelidade | P1 com dicionário v1, sem nomes de modelo | V1 pela consulta "modelo + preço" | V1 pela consulta "modelo + ficha técnica" | F5 com vínculo de resposta por arroba (variante 3) | Só as cinco marcas com maior escala (teste de robustez) | IA com pesos por uso de mercado | IA com 5 superfícies (soma AI Overview do Google) | IA com pesos por uso e AI Overview | P6 calibrado pela precisão medida na revisão (0,83) | V7 (fonte própria) dentro da nota, sem diagnóstico | F3 sem base mínima de seguidores | Z-score winsorizado, percentil 10 a 90 | F3 com base mínima de 5 mil seguidores | P1 com dicionário v1.1, incluindo nomes de modelo | P6 somando earned e release republicado | V3 sem peças com views acima de 20 vezes a base | P4 ponderado por volume de busca da consulta | P4 só na família pulverização e plantio | P4 só na família tratores e colheitadeiras |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| John Deere | 23.28 | 76.06 | 22.9 | 22.91 | 16.45 | 24.76 | 28.63 | 23.36 | 22.08 | 21.1 | 23.92 | 31.89 | 23.41 | 23.3 | 23.4 | 23.28 | 23.87 | 23.22 | 0.811 | 23.28 | 23.28 | 23.3 | 23.83 | 23.79 | 23.26 | 23.38 |
| Case IH | 10.08 | 44.95 | 10 | 10.4 | 10.43 | 10.66 | 9.15 | 9.84 | 10.09 | 9.94 | 8.94 | 15.3 | 10.04 | 10.06 | 10.02 | 10.08 | 10.19 | 9.81 | -0.193 | 10.08 | 10.09 | 10.09 | 10.31 | 10 | 10.08 | 10.12 |
| New Holland Agriculture | 13.83 | 67.01 | 13.87 | 14.27 | 14.81 | 13.97 | 12.71 | 13.87 | 12.97 | 12.73 | 12.76 | 20.42 | 13.88 | 13.81 | 13.83 | 13.83 | 13.74 | 13.62 | 0.482 | 13.83 | 13.85 | 13.81 | 14.08 | 13.82 | 13.54 | 14.01 |
| Massey Ferguson | 10.99 | 45.42 | 10.8 | 11.27 | 9.74 | 11.31 | 11.93 | 11.02 | 10.57 | 11.75 | 11.18 | 16 | 10.99 | 10.97 | 10.96 | 10.99 | 10.99 | 10.87 | -0.089 | 10.99 | 10.97 | 11.01 | 11.34 | 10.81 | 10.74 | 11.17 |
| Valtra | 10.72 | 45.21 | 10.62 | 11.64 | 12.09 | 11.27 | 8.79 | 10.75 | 12.29 | 13.1 | 11.17 | 16.4 | 10.62 | 10.71 | 10.65 | 10.72 | 10.81 | 9.16 | -0.123 | 10.72 | 10.7 | 10.72 | 10.94 | 10.47 | 10.42 | 10.94 |
| Fendt | 9.72 | 33.6 | 9.74 | 9.9 | 12.38 | 6.37 | 10.4 | 9.72 | 9.6 | 9.54 | 9.93 | | 9.75 | 9.7 | 9.72 | 9.72 | 8.99 | 12.41 | -0.46 | 9.72 | 9.73 | 9.68 | 7.61 | 9.67 | 9.66 | 9.73 |
| Jacto | 9.17 | 37.25 | 9.58 | 9.03 | 9.16 | 9.2 | 9.14 | 9.21 | 9.43 | 9.92 | 9.55 | | 9.18 | 9.16 | 9.15 | 9.17 | 9.23 | 8.85 | -0.462 | 9.17 | 9.16 | 9.18 | 9.4 | 9.26 | 9.18 | 9.03 |
| Stara | 12.5 | 49.89 | 12.77 | 11 | 15.36 | 12.89 | 9.24 | 12.51 | 13.25 | 12.2 | 12.84 | | 12.42 | 12.57 | 12.55 | 12.5 | 12.47 | 12.06 | 0.016 | 12.5 | 12.5 | 12.5 | 12.77 | 12.46 | 13.4 | 11.91 |

## Posição no ranking, base e faixa ao retirar uma submétrica por vez

Faixa de posição: menor e maior posição observada ao recalcular o total retirando cada submétrica do painel, uma de cada vez.

| Marca | Posição base | Menor posição (retirando 1 submétrica) | Maior posição (retirando 1 submétrica) |
|---|---|---|---|
| John Deere | 1 | 1 | 1 |
| Case IH | 6 | 5 | 8 |
| New Holland Agriculture | 2 | 2 | 2 |
| Massey Ferguson | 4 | 3 | 5 |
| Valtra | 5 | 4 | 7 |
| Fendt | 7 | 6 | 8 |
| Jacto | 8 | 7 | 8 |
| Stara | 3 | 3 | 5 |

## Posição de cada marca ao retirar cada submétrica, uma de cada vez

| Submétrica retirada | John Deere | Case IH | New Holland Agriculture | Massey Ferguson | Valtra | Fendt | Jacto | Stara |
|---|---|---|---|---|---|---|---|---|
| P1_busca_marca_agro | 1 | 6 | 2 | 4 | 5 | 7 | 8 | 3 |
| P3_palavras_chave_organicas | 1 | 6 | 2 | 4 | 5 | 7 | 8 | 3 |
| P4_presenca_busca_categoria | 1 | 6 | 2 | 4 | 5 | 7 | 8 | 3 |
| P5_seguidores_instagram | 1 | 6 | 2 | 4 | 5 | 7 | 8 | 3 |
| P5_seguidores_facebook | 1 | 6 | 2 | 4 | 5 | 7 | 8 | 3 |
| P5_seguidores_youtube | 1 | 6 | 2 | 5 | 4 | 7 | 8 | 3 |
| P6_imprensa_earned_assunto | 1 | 6 | 2 | 4 | 5 | 8 | 7 | 3 |
| P7a_ia_menção | 1 | 6 | 2 | 4 | 5 | 7 | 8 | 3 |
| P7b_ia_primeira_menção | 1 | 6 | 2 | 4 | 5 | 7 | 8 | 3 |
| V1_busca_marca_modelo | 1 | 7 | 2 | 4 | 5 | 6 | 8 | 3 |
| V3_views_mediana_instagram | 1 | 7 | 2 | 4 | 5 | 6 | 8 | 3 |
| V3_views_mediana_youtube | 1 | 6 | 2 | 4 | 5 | 8 | 7 | 3 |
| V5_autoatendimento | 1 | 7 | 2 | 4 | 5 | 6 | 8 | 3 |
| V6a_desempenho_lab | 1 | 7 | 2 | 4 | 5 | 6 | 8 | 3 |
| V6b_acessibilidade | 1 | 7 | 2 | 4 | 5 | 6 | 8 | 3 |
| F1_cadencia_instagram | 1 | 6 | 2 | 4 | 5 | 7 | 8 | 3 |
| F2_interacoes_mediana_instagram | 1 | 6 | 2 | 4 | 5 | 7 | 8 | 3 |
| F3_taxa_por_1000_instagram | 1 | 6 | 2 | 4 | 5 | 7 | 8 | 3 |
| F1_cadencia_facebook | 1 | 6 | 2 | 5 | 4 | 7 | 8 | 3 |
| F2_interacoes_mediana_facebook | 1 | 6 | 2 | 4 | 5 | 7 | 8 | 3 |
| F3_taxa_por_1000_facebook | 1 | 6 | 2 | 3 | 4 | 7 | 8 | 5 |
| F1_cadencia_youtube | 1 | 6 | 2 | 5 | 4 | 7 | 8 | 3 |
| F2_interacoes_mediana_youtube | 1 | 6 | 2 | 4 | 5 | 8 | 7 | 3 |
| F3_taxa_por_1000_youtube | 1 | 5 | 2 | 4 | 7 | 6 | 8 | 3 |
| F5_resposta_da_marca | 1 | 8 | 2 | 4 | 5 | 6 | 7 | 3 |

## Pesos aleatórios (sorteio Dirichlet dentro de cada pilar e entre pilares)

Posição modal: posição mais frequente da marca nos sorteios de pesos. Parcela na posição modal: fração dos sorteios em que a marca ficou exatamente nessa posição.

| Marca | Posição modal | Parcela na posição modal | Distribuição completa de posições (posição: parcela) |
|---|---|---|---|
| John Deere | 1 | 0.841 | 1: 0.841; 2: 0.098; 3: 0.035; 4: 0.016; 5: 0.007; 6: 0.002; 7: 0.001 |
| Case IH | 6 | 0.272 | 2: 0.004; 3: 0.031; 4: 0.17; 5: 0.232; 6: 0.272; 7: 0.201; 8: 0.09 |
| New Holland Agriculture | 2 | 0.503 | 1: 0.025; 2: 0.503; 3: 0.347; 4: 0.107; 5: 0.015; 6: 0.003 |
| Massey Ferguson | 4 | 0.197 | 2: 0.096; 3: 0.188; 4: 0.197; 5: 0.188; 6: 0.15; 7: 0.118; 8: 0.064 |
| Valtra | 6 | 0.246 | 1: 0.025; 2: 0.05; 3: 0.077; 4: 0.166; 5: 0.242; 6: 0.246; 7: 0.159; 8: 0.034 |
| Fendt | 8 | 0.457 | 1: 0.035; 2: 0.082; 3: 0.049; 4: 0.081; 5: 0.083; 6: 0.083; 7: 0.132; 8: 0.457 |
| Jacto | 8 | 0.334 | 2: 0.01; 3: 0.019; 4: 0.06; 5: 0.102; 6: 0.165; 7: 0.31; 8: 0.334 |
| Stara | 3 | 0.254 | 1: 0.074; 2: 0.158; 3: 0.254; 4: 0.203; 5: 0.132; 6: 0.08; 7: 0.08; 8: 0.021 |

## Bootstrap conjunto das unidades, probabilidade por posição

| Marca | Probabilidade por posição (posição: probabilidade) |
|---|---|
| John Deere | 1: 1.0 |
| Case IH | 6: 0.073; 7: 0.417; 8: 0.51 |
| New Holland Agriculture | 2: 0.987; 3: 0.013 |
| Massey Ferguson | 3: 0.037; 4: 0.713; 5: 0.24; 6: 0.01 |
| Valtra | 4: 0.14; 5: 0.663; 6: 0.19; 7: 0.007 |
| Fendt | 4: 0.11; 5: 0.087; 6: 0.327; 7: 0.063; 8: 0.413 |
| Jacto | 5: 0.01; 6: 0.4; 7: 0.513; 8: 0.077 |
| Stara | 2: 0.013; 3: 0.95; 4: 0.037 |

## Sensibilidade: imprensa desduplicada por manchete (lide)

Matérias removidas por desduplicação de manchete equivalente entre veículos: 5.

| Marca | Total do painel com imprensa desduplicada |
|---|---|
| John Deere | 23.31 |
| Case IH | 10.11 |
| New Holland Agriculture | 13.84 |
| Massey Ferguson | 11.05 |
| Valtra | 10.7 |
| Fendt | 9.59 |
| Jacto | 9.17 |
| Stara | 12.53 |

## Ordem das marcas (1ª a 8ª posição) em cada cenário

| Cenário | 1ª | 2ª | 3ª | 4ª | 5ª | 6ª | 7ª | 8ª |
|---|---|---|---|---|---|---|---|---|
| Base (painel v5, participação, pesos iguais) | John Deere | New Holland Agriculture | Stara | Massey Ferguson | Valtra | Case IH | Fendt | Jacto |
| Percentil em vez de participação | John Deere | New Holland Agriculture | Stara | Massey Ferguson | Valtra | Case IH | Jacto | Fendt |
| Sem IA (retirando P7 e V7 do painel) | John Deere | New Holland Agriculture | Stara | Massey Ferguson | Valtra | Case IH | Fendt | Jacto |
| Sem Facebook nas submétricas sociais | John Deere | New Holland Agriculture | Valtra | Massey Ferguson | Stara | Case IH | Fendt | Jacto |
| Sem o pilar Proeminência | John Deere | Stara | New Holland Agriculture | Fendt | Valtra | Case IH | Massey Ferguson | Jacto |
| Sem o pilar Valorização | John Deere | New Holland Agriculture | Stara | Massey Ferguson | Valtra | Case IH | Jacto | Fendt |
| Sem o pilar Fidelidade | John Deere | New Holland Agriculture | Massey Ferguson | Fendt | Stara | Case IH | Jacto | Valtra |
| P1 com dicionário v1, sem nomes de modelo | John Deere | New Holland Agriculture | Stara | Massey Ferguson | Valtra | Case IH | Fendt | Jacto |
| V1 pela consulta "modelo + preço" | John Deere | Stara | New Holland Agriculture | Valtra | Massey Ferguson | Case IH | Fendt | Jacto |
| V1 pela consulta "modelo + ficha técnica" | John Deere | Valtra | New Holland Agriculture | Stara | Massey Ferguson | Case IH | Jacto | Fendt |
| F5 com vínculo de resposta por arroba (variante 3) | John Deere | Stara | New Holland Agriculture | Massey Ferguson | Valtra | Fendt | Jacto | Case IH |
| IA com pesos por uso de mercado | John Deere | New Holland Agriculture | Stara | Massey Ferguson | Valtra | Case IH | Fendt | Jacto |
| IA com 5 superfícies (soma AI Overview do Google) | John Deere | New Holland Agriculture | Stara | Massey Ferguson | Valtra | Case IH | Fendt | Jacto |
| IA com pesos por uso e AI Overview | John Deere | New Holland Agriculture | Stara | Massey Ferguson | Valtra | Case IH | Fendt | Jacto |
| P6 calibrado pela precisão medida na revisão (0,83) | John Deere | New Holland Agriculture | Stara | Massey Ferguson | Valtra | Case IH | Fendt | Jacto |
| P3 da John Deere sem construção e florestal | John Deere | New Holland Agriculture | Stara | Massey Ferguson | Valtra | Case IH | Fendt | Jacto |
| Imprensa desduplicada por manchete (lide) | John Deere | New Holland Agriculture | Stara | Massey Ferguson | Valtra | Case IH | Fendt | Jacto |
| Só as cinco marcas com maior escala (teste de robustez) | John Deere | New Holland Agriculture | Valtra | Massey Ferguson | Case IH | | | |
| V7 (fonte própria) dentro da nota, sem diagnóstico | John Deere | New Holland Agriculture | Stara | Massey Ferguson | Valtra | Case IH | Jacto | Fendt |
| F3 sem base mínima de seguidores | John Deere | New Holland Agriculture | Fendt | Stara | Massey Ferguson | Case IH | Valtra | Jacto |
| Z-score winsorizado, percentil 10 a 90 | John Deere | New Holland Agriculture | Stara | Massey Ferguson | Valtra | Case IH | Fendt | Jacto |
| F3 com base mínima de 5 mil seguidores | John Deere | New Holland Agriculture | Stara | Massey Ferguson | Valtra | Case IH | Fendt | Jacto |
| P1 com dicionário v1.1, incluindo nomes de modelo | John Deere | New Holland Agriculture | Stara | Massey Ferguson | Valtra | Case IH | Fendt | Jacto |
| P6 somando earned e release republicado | John Deere | New Holland Agriculture | Stara | Massey Ferguson | Valtra | Case IH | Fendt | Jacto |
| V3 sem peças com views acima de 20 vezes a base | John Deere | New Holland Agriculture | Stara | Massey Ferguson | Valtra | Case IH | Jacto | Fendt |
| P4 ponderado por volume de busca da consulta | John Deere | New Holland Agriculture | Stara | Massey Ferguson | Valtra | Case IH | Fendt | Jacto |
| P4 só na família pulverização e plantio | John Deere | New Holland Agriculture | Stara | Massey Ferguson | Valtra | Case IH | Fendt | Jacto |
| P4 só na família tratores e colheitadeiras | John Deere | New Holland Agriculture | Stara | Massey Ferguson | Valtra | Case IH | Fendt | Jacto |

## Como ler

A primeira posição (John Deere) sobrevive a todos os cenários acima. A segunda posição sobrevive a todos os cenários menos ao que retira o pilar Proeminência. As posições do meio da tabela trocam de ordem entre cenários e contam como empate declarado. Nenhuma frase de liderança geral do painel deve ignorar essa tabela.
