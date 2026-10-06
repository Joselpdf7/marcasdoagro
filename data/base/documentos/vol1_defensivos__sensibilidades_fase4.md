---
titulo: "Sensibilidades do painel v1.4, fase 4 (base do whitepaper)"
origem: "estudo_1_panorama_digital/analise/sensibilidades_fase4_v1.4_2026-09-17/sensibilidades_fase4.json"
data: "2026-09-17"
versao: "v1.4"
sha256_original: "238c420f72b6575f853d1c1b82ce3e7f8893b0583ec3ecd8bc0d9fc6ad6a71f5"
tipo: "resultado"
---
# Sensibilidades do painel v1.3, fase 4

Data: 15/09/2026. Conjunto completo de sensibilidades exigidas pelo protocolo antes de qualquer frase de liderança: cenários alternativos de peso e de composição de IA, percentil no lugar de participação, retirada de cada pilar, retirada de cada submétrica (uma por vez, com a faixa de posição resultante), pesos aleatórios (sorteio Dirichlet dentro de cada pilar e entre pilares) e imprensa desduplicada por manchete. Todos os valores desta nota derivam da tabela de submétricas do painel v1.3 e são recálculos determinísticos, sem nenhum dado novo.

## Total do painel sob cada cenário

| Marca | Base (painel v1.3, participação, pesos iguais) | IA com pesos por uso de mercado | IA com 5 superfícies (soma AI Overview do Google) | IA com pesos por uso e AI Overview | V7 com Syngenta e Bayer igualadas (teste de robustez) | Sem IA (retirando P7 e V7 do painel) | Percentil em vez de participação | Sem o pilar Proeminência | Sem o pilar Valorização | Sem o pilar Fidelidade |
|---|---|---|---|---|---|---|---|---|---|---|
| Syngenta | 26.21 | 25.94 | 26.27 | 26.01 | 26.01 | 25.61 | 84.08 | 26.83 | 23.81 | 27.99 |
| Bayer | 19.63 | 19.52 | 19.61 | 19.49 | 19.82 | 18.19 | 73.48 | 18.51 | 20.52 | 19.85 |
| BASF | 14.08 | 13.91 | 14.09 | 14.02 | 14.08 | 14.33 | 59.88 | 12.47 | 13.83 | 15.93 |
| Corteva | 9.46 | 10.18 | 9.38 | 9.88 | 9.46 | 9.15 | 45.13 | 8.91 | 10.22 | 9.25 |
| IHARA | 11.1 | 10.88 | 11.18 | 11.1 | 11.1 | 12.1 | 41.84 | 10.35 | 12.04 | 10.92 |
| FMC | 6.54 | 6.64 | 6.51 | 6.57 | 6.54 | 6.91 | 25.94 | 7.67 | 6.81 | 5.15 |
| UPL | 8.83 | 8.92 | 8.82 | 8.87 | 8.83 | 9.32 | 37.11 | 10.85 | 8.81 | 6.83 |
| ADAMA | 6.37 | 6.45 | 6.37 | 6.44 | 6.37 | 6.96 | 29.55 | 7.74 | 5.1 | 6.28 |

## Posição no ranking, base e faixa ao retirar uma submétrica por vez

Faixa de posição: menor e maior posição observada ao recalcular o total retirando cada submétrica do painel, uma de cada vez.

| Marca | Posição base | Menor posição (retirando 1 submétrica) | Maior posição (retirando 1 submétrica) |
|---|---|---|---|
| Syngenta | 1 | 1 | 1 |
| Bayer | 2 | 2 | 2 |
| BASF | 3 | 3 | 3 |
| Corteva | 5 | 4 | 6 |
| IHARA | 4 | 4 | 5 |
| FMC | 7 | 7 | 8 |
| UPL | 6 | 5 | 6 |
| ADAMA | 8 | 7 | 8 |

## Posição de cada marca ao retirar cada submétrica, uma de cada vez

| Submétrica retirada | Syngenta | Bayer | BASF | Corteva | IHARA | FMC | UPL | ADAMA |
|---|---|---|---|---|---|---|---|---|
| P1_busca_marca_agro | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |
| P3_palavras_chave_organicas | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |
| P4_presenca_busca_categoria | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |
| P5_seguidores_instagram | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |
| P5_seguidores_facebook | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |
| P5_seguidores_youtube | 1 | 2 | 3 | 4 | 5 | 7 | 6 | 8 |
| P6_imprensa_earned_assunto | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |
| P7a_ia_menção | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |
| P7b_ia_primeira_menção | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |
| V1_busca_produto_bula | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |
| V3_views_mediana_instagram | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |
| V3_views_mediana_youtube | 1 | 2 | 3 | 5 | 4 | 8 | 6 | 7 |
| V5_autoatendimento | 1 | 2 | 3 | 5 | 4 | 8 | 6 | 7 |
| V6a_desempenho_lab | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |
| V6b_acessibilidade | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |
| V7_ia_fonte_propria_pertinente | 1 | 2 | 3 | 6 | 4 | 7 | 5 | 8 |
| F1_cadencia_instagram | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |
| F2_interacoes_mediana_instagram | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |
| F3_taxa_por_1000_instagram | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |
| F1_cadencia_facebook | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |
| F2_interacoes_mediana_facebook | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |
| F3_taxa_por_1000_facebook | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |
| F1_cadencia_youtube | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |
| F2_interacoes_mediana_youtube | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |
| F3_taxa_por_1000_youtube | 1 | 2 | 3 | 5 | 4 | 8 | 6 | 7 |
| F5_resposta_da_marca | 1 | 2 | 3 | 5 | 4 | 7 | 6 | 8 |

## Pesos aleatórios (sorteio Dirichlet dentro de cada pilar e entre pilares, 2.000 sorteios)

Posição modal: posição mais frequente da marca nos 2.000 sorteios de pesos. Parcela na posição modal: fração dos sorteios em que a marca ficou exatamente nessa posição.

| Marca | Posição modal | Parcela na posição modal | Distribuição completa de posições (posição: parcela) |
|---|---|---|---|
| Syngenta | 1 | 0.926 | 1: 0.926; 2: 0.07; 3: 0.004 |
| Bayer | 2 | 0.856 | 1: 0.06; 2: 0.856; 3: 0.081; 4: 0.002; 5: 0.001; 6: 0.001 |
| BASF | 3 | 0.715 | 1: 0.005; 2: 0.064; 3: 0.715; 4: 0.15; 5: 0.043; 6: 0.012; 7: 0.009; 8: 0.003 |
| Corteva | 5 | 0.436 | 3: 0.002; 4: 0.215; 5: 0.436; 6: 0.245; 7: 0.08; 8: 0.022 |
| IHARA | 4 | 0.485 | 1: 0.004; 2: 0.004; 3: 0.117; 4: 0.485; 5: 0.274; 6: 0.091; 7: 0.024; 8: 0.002 |
| FMC | 7 | 0.471 | 3: 0.009; 4: 0.02; 5: 0.025; 6: 0.053; 7: 0.471; 8: 0.421 |
| UPL | 6 | 0.524 | 1: 0.004; 2: 0.006; 3: 0.07; 4: 0.112; 5: 0.182; 6: 0.524; 7: 0.091; 8: 0.012 |
| ADAMA | 8 | 0.54 | 2: 0.002; 3: 0.004; 4: 0.016; 5: 0.038; 6: 0.074; 7: 0.326; 8: 0.54 |

## Sensibilidade: imprensa desduplicada por manchete (lide)

Matérias removidas por desduplicação de manchete equivalente entre veículos: 3.

| Marca | Contagem earned desduplicada | Total do painel com imprensa desduplicada |
|---|---|---|
| Syngenta | 45 | 26.22 |
| Bayer | 89 | 19.64 |
| BASF | 40 | 14.07 |
| Corteva | 51 | 9.45 |
| IHARA | 10 | 11.11 |
| FMC | 16 | 6.55 |
| UPL | 22 | 8.82 |
| ADAMA | 16 | 6.38 |

## Sensibilidade de janela: 12 contra 24 meses

não disponível: as coletas sociais das oito marcas cobrem 12 meses (13/09/2025 a 12/09/2026); a sensibilidade 12 contra 24 meses exigiria nova coleta

## Ordem das marcas (1a a 8a posição) em cada cenário

| Cenário | 1ª | 2ª | 3ª | 4ª | 5ª | 6ª | 7ª | 8ª |
|---|---|---|---|---|---|---|---|---|
| base_v1_2 | Syngenta | Bayer | BASF | IHARA | Corteva | UPL | FMC | ADAMA |
| ia_pesos_por_uso | Syngenta | Bayer | BASF | IHARA | Corteva | UPL | FMC | ADAMA |
| ia_5_superficies_com_aio | Syngenta | Bayer | BASF | IHARA | Corteva | UPL | FMC | ADAMA |
| ia_pesos_por_uso_e_aio | Syngenta | Bayer | BASF | IHARA | Corteva | UPL | FMC | ADAMA |
| v7_igualada_syngenta_bayer | Syngenta | Bayer | BASF | IHARA | Corteva | UPL | FMC | ADAMA |
| sem_IA | Syngenta | Bayer | BASF | IHARA | UPL | Corteva | ADAMA | FMC |
| percentil | Syngenta | Bayer | BASF | Corteva | IHARA | UPL | ADAMA | FMC |
| sem_Proeminência | Syngenta | Bayer | BASF | UPL | IHARA | Corteva | ADAMA | FMC |
| sem_Valorização | Syngenta | Bayer | BASF | IHARA | Corteva | UPL | FMC | ADAMA |
| sem_Fidelidade | Syngenta | Bayer | BASF | IHARA | Corteva | UPL | ADAMA | FMC |
| imprensa_desduplicada_por_lide | Syngenta | Bayer | BASF | IHARA | Corteva | UPL | FMC | ADAMA |

## Como ler

As três primeiras posições (Syngenta, Bayer, BASF) sobrevivem a todos os cenários acima. IHARA e Corteva trocam de posição entre cenários (empate declarado), assim como FMC e ADAMA. Nenhuma frase de liderança geral do painel deve ignorar essa tabela.
