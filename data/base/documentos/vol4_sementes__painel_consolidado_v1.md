---
titulo: "Painel consolidado v1, leitura por pilar e por grupo (painel oficial)"
origem: "analise/notas_v1_2026-10-02/PAINEL_CONSOLIDADO_v1.md"
data: "2026-10-02"
versao: "v1"
sha256_original: "5b82920f8c8c38f8aad6e9e94fc87795d89cbb55c3ccaa358786c7e40eb558dd"
tipo: "resultado"
---
# Painel v1, Estudo 4 (sementes)

Gerada em 02/10/2026 por (rotina reprodutível do estudo). Painel do Estudo 4 por grupo. Participação de referência: 12,5%. P2, P7c, V2, V6c fora da nota; V1 na nota; V7 diagnóstico.

## Total e pilares por grupo (participação no painel; referência de 12,5%)

| Posição | Grupo | Total | Proeminência | Valorização | Fidelidade | Total por percentil |
|---:|---|---:|---:|---:|---:|---:|
| 1 | Corteva | 21,6 | 26,0 (cob. 100%) | 13,0 (cob. 100%) | 25,6 (cob. 100%) | 69,5 |
| 2 | Syngenta | 19,0 | 18,8 (cob. 100%) | 24,7 (cob. 100%) | 13,4 (cob. 100%) | 59,7 |
| 3 | GDM | 17,5 | 20,9 (cob. 100%) | 13,3 (cob. 100%) | 18,3 (cob. 100%) | 62,0 |
| 4 | TMG | 10,5 | 5,3 (cob. 100%) | 9,0 (cob. 100%) | 17,2 (cob. 90%) | 40,7 |
| 5 | Longping High-Tech | 10,2 | 6,0 (cob. 100%) | 12,9 (cob. 83%) | 11,8 (cob. 80%) | 43,0 |
| 6 | Limagrain | 9,1 | 3,6 (cob. 100%) | 10,7 (cob. 83%) | 12,9 (cob. 80%) | 27,6 |
| 7 | Bayer | N/A | 18,3 (cob. 78%) | 16,7 (cob. 83%) | N/A (cob. 40%) | N/A |
| 8 | BASF | N/A | 7,8 (cob. 67%) | 9,5 (cob. 67%) | N/A (cob. 0%) | N/A |

Grupo sem total: cobertura abaixo de 60% em algum pilar (regra 7.1); publicado com os pilares que pontuam.

## Estabilidade

| Grupo | Posição base | Faixa ao retirar uma submétrica | Posição modal com pesos aleatórios | Bootstrap conjunto: probabilidade por posição | Cenários em que fica sem total |
|---|---:|---|---|---|---:|
| Corteva | 1 | 1 a 1 | 1 (68%) | 1ª 93%, 2ª 7% | 0 |
| Syngenta | 2 | 2 a 3 | 3 (34%) | 2ª 77%, 3ª 18% | 0 |
| GDM | 3 | 2 a 3 | 3 (48%) | 2ª 16%, 3ª 82% | 0 |
| TMG | 4 | 4 a 5 | 4 (42%) | 4ª 46%, 5ª 52% | 0 |
| Longping High-Tech | 5 | 4 a 5 | 4 (44%) | 4ª 53%, 5ª 46% | 0 |
| Limagrain | 6 | 6 a 6 | 6 (67%) | 6ª 97% | 0 |
| Bayer | None | None a None | None (0%) | | 34 |
| BASF | None | None a None | None (0%) | | 34 |

## Ordem por cenário

| Cenário | Ordem |
|---|---|
| base_participação | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| percentil | Corteva > GDM > Syngenta > Longping High-Tech > TMG > Limagrain |
| zscore_winsorizado_p10_p90 | Corteva > GDM > Syngenta > TMG > Longping High-Tech > Limagrain |
| sem_pilar_Proeminência | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| sem_pilar_Valorização | Corteva > GDM > Syngenta > TMG > Longping High-Tech > Limagrain |
| sem_pilar_Fidelidade | Syngenta > Corteva > Bayer > GDM > Longping High-Tech > BASF > Limagrain > TMG |
| sem_IA | Corteva > Syngenta > GDM > Longping High-Tech > TMG > Limagrain |
| sem_facebook | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| sem_youtube | Corteva > GDM > Syngenta > TMG > Longping High-Tech > Limagrain |
| v7_na_nota | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| v1_fora_da_nota | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| p1_regra_v1_do_dicionario_antes_da_emenda_1 | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| p1_com_termos_de_cultivar | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| p1_mais_neutro_nomes_nao_ambiguos | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| p1_so_intencao_de_sementes | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| p3_biotrigo_sem_nutricao_animal | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| sem_marca_mae_em_p1_e_p3 | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| v1_codigo_exato | Corteva > GDM > Syngenta > TMG > Longping High-Tech > Limagrain |
| v1_marca_numero_sem_cultura | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| p4_ponderado_por_volume | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| p4_media_das_familias | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| p4_com_secao_mista_do_grupo | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| p4_sem_familia_cultivar_e_tecnologia | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| p6_earned_mais_release | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| p6_regra_ampla_da_marca_mae | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| p6_automatica_antes_da_revisao_humana | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| p6_so_submarcas_sem_marca_mae | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| ia_pesos_por_uso_sem_copilot | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| ai_overview_como_quinta_superficie | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| f3_sem_base_minima_de_seguidores | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| sem_minimo_de_12_pecas | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| curtidas_ocultas_como_zero | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| v3_sem_pecas_com_views_acima_de_20x_seguidores | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| perfil_generico_do_grupo_para_quem_nao_tem_marca_propria | Bayer > Syngenta > Corteva > GDM > BASF > Longping High-Tech > TMG > Limagrain |
| v6_com_pagina_da_secao_mista | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| v5_maior_submarca_em_vez_da_soma_do_grupo | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| so_piloto_5_grupos | Corteva > Syngenta > GDM |
| sem_TMG | Corteva > Syngenta > GDM > Longping High-Tech > Limagrain |
| sem_Longping | Corteva > Syngenta > GDM > TMG > Limagrain |
| sem_Limagrain | Corteva > Syngenta > GDM > TMG > Longping High-Tech |

## Sem cada submarca (grupos com três ou mais submarcas)

| Cenário | Ordem |
|---|---|
| GDM sem Brasmax | GDM > Corteva > Syngenta > Longping High-Tech > TMG > Limagrain |
| GDM sem Neogen | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| GDM sem Biotrigo Genética | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| GDM sem DONMARIO Sementes | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| GDM sem Supra Sementes | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| Corteva sem Pioneer | Syngenta > GDM > Corteva > TMG > Longping High-Tech > Limagrain |
| Corteva sem Brevant Sementes | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| Corteva sem Cordius | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| Bayer sem Dekalb | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| Bayer sem Agroeste | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| Bayer sem Monsoy | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| Bayer sem Sementes Agroceres | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| Bayer sem Deltapine | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| Syngenta sem NK Sementes | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| Syngenta sem Nidera Sementes | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| Syngenta sem Golden Harvest | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| Syngenta sem Série Syn (soja licenciada) | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| BASF sem Credenz | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| BASF sem SoyTech | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| BASF sem FiberMax | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |
| BASF sem Lidero | Corteva > Syngenta > GDM > TMG > Longping High-Tech > Limagrain |

## Submétricas por grupo (valor nativo e participação)

**P1_busca_marca_intencao_sementes** (buscas/mês; na nota). base de busca, 8 sementes por linha, dicionário v1 com emenda 1 (02/10), soma por grupo sem dupla contagem, sem termos de cultivar.

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 5810 (19,6%) | 5760 (19,4%) | 7230 (24,4%) | 5620 (18,9%) | 1410 (4,8%) | 730 (2,5%) | 1840 (6,2%) | 1260 (4,2%) |

**P2_autoridade** (0 a 100; fora da nota). domínio raiz por alvo. diagnóstico fora da nota

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 27 (10,3%) | 41 (15,7%) | 45 (17,2%) | 19 (7,2%) | 55 (21,0%) | 26 (9,9%) | 28 (10,7%) | 21 (8,0%) |

**P3_palavras_chave_organicas** (palavras-chave; na nota). soma dos alvos de sementes do grupo com desconto de sobreposição.

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 3443 (38,0%) | 1674 (18,5%) | 372 (4,1%) | 765 (8,4%) | 686 (7,6%) | 906 (10,0%) | 735 (8,1%) | 470 (5,2%) |

**P4_presenca_busca_categoria** (taxa top 10, 100 consultas; na nota). Google ao vivo, 3 passes; alvo de sementes ou hotsite do grupo; uma vez por consulta.

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 0,1567 (35,9%) | 0,1067 (24,4%) | 0,0567 (13,0%) | 0,0933 (21,4%) | 0 (0,0%) | 0,0033 (0,8%) | 0,02 (4,6%) | 0 (0,0%) |

**P5_seguidores_instagram** (seguidores; na nota). snapshot de 30/09/2026, maior marca própria do grupo na rede; N/A sem marca própria.

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 76700 (18,7%) | 129277 (31,6%) | 14902 (3,6%) | 64036 (15,6%) | N/A | 35639 (8,7%) | 55543 (13,6%) | 33530 (8,2%) |

**P5_seguidores_facebook** (seguidores; na nota). snapshot de 30/09/2026, maior marca própria do grupo na rede; N/A sem marca própria.

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 97561 (20,2%) | 138580 (28,6%) | N/A | 145807 (30,1%) | N/A | 23847 (4,9%) | 41469 (8,6%) | 36602 (7,6%) |

**P5_seguidores_youtube** (seguidores; na nota). snapshot de 30/09/2026, maior marca própria do grupo na rede; N/A sem marca própria.

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 8450 (13,1%) | 36400 (56,4%) | N/A | 15300 (23,7%) | N/A | 1220 (1,9%) | 1270 (2,0%) | 1950 (3,0%) |

**P6_imprensa_earned_assunto** (matérias 12m; na nota). 15 veículos, 2 passes com união, classificação v2.2 por linha, uma URL por grupo. definitiva: revisão humana cega de 72 matérias com concordância acima do alvo e 11 correções aplicadas

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 8 (5,9%) | 32 (23,7%) | 35 (25,9%) | 32 (23,7%) | 25 (18,5%) | 0 (0,0%) | 3 (2,2%) | 0 (0,0%) |

**P7a_ia_menção** (taxa; na nota). 4 superfícies, 3 passes, peso igual; qualquer submarca, cultivar ou nome do grupo.

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 0,25 (15,7%) | 0,2916 (18,3%) | 0,3611 (22,7%) | 0,2639 (16,6%) | 0,1375 (8,6%) | 0,1528 (9,6%) | 0,0805 (5,0%) | 0,0556 (3,5%) |

**P7b_ia_primeira_menção** (taxa; na nota). idem; grupo cuja marca ou nome aparece primeiro.

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 0,1222 (21,5%) | 0,0736 (12,9%) | 0,1958 (34,4%) | 0,0611 (10,7%) | 0,0403 (7,1%) | 0,0514 (9,0%) | 0,0194 (3,4%) | 0,0056 (1,0%) |

**P7c_ia_so_nome_do_grupo** (taxa; fora da nota). coluna à parte (regra 3.3). fora da nota

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 0,025 (5,8%) | 0,0708 (16,4%) | 0,1042 (24,2%) | 0,125 (29,0%) | 0,0625 (14,5%) | 0 (0,0%) | 0,0125 (2,9%) | 0,0306 (7,1%) |

**V1_busca_cultivar** (buscas/mês; na nota). cesta de cultivares, 'cultura marca número'. na nota pelo critério pré-registrado

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 570 (12,6%) | 80 (1,8%) | 2010 (44,5%) | 510 (11,3%) | 60 (1,3%) | 410 (9,1%) | 570 (12,6%) | 310 (6,9%) |

**V2_cultivares_com_pagina_propria** (cultivares; fora da nota). cesta v1, páginas próprias somadas por grupo. descritiva

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 115 (20,5%) | 84 (15,0%) | 101 (18,0%) | 70 (12,5%) | 33 (5,9%) | 76 (13,6%) | 51 (9,1%) | 31 (5,5%) |

**V3_views_mediana_instagram** (views; na nota). 12 meses, posts com views, maior marca própria.

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 965 (10,7%) | 3352,5 (37,1%) | 194 (2,1%) | 1514 (16,8%) | N/A | 769,5 (8,5%) | 853 (9,4%) | 1382 (15,3%) |

**V3_views_mediana_youtube** (views; na nota). 12 meses; mínimo de 12 peças.

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 4338 (18,8%) | 270 (1,2%) | N/A | 18410 (79,6%) | N/A | 103 (0,5%) | N/A | N/A |

**V5_autoatendimento** (parcela dos itens verificáveis; na nota). auditoria automatizada, regras R-V5 e passada de navegador; item presente em qualquer alvo do grupo.

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 (13,9%) | 0,7 (9,7%) | 0,9 (12,5%) | 1 (13,9%) | 0,8889 (12,4%) | 0,9 (12,5%) | 1 (13,9%) | 0,8 (11,1%) |

**V6a_desempenho_lab** (0 a 100; na nota). páginas comparáveis (inicial, cultivar, conteúdo) em 2 estratégias, mediana de 3 repetições; Bayer e BASF sem página de conteúdo em alvo de sementes (média de 2 páginas).

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 45,3 (11,6%) | 61,7 (15,7%) | 38 (9,7%) | 55,5 (14,2%) | 41,8 (10,7%) | 42,2 (10,8%) | 68 (17,3%) | 39,7 (10,1%) |

**V6b_acessibilidade** (0 a 100; na nota). idem.

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 84 (12,2%) | 87 (12,7%) | 100 (14,6%) | 85,8 (12,5%) | 94 (13,7%) | 87,7 (12,8%) | 77,7 (11,3%) | 70,3 (10,2%) |

**V6c_campo_lcp_celular** (ms; fora da nota). dados de campo por origem. diagnóstico fora da nota

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 4808 (17,3%) | 2705 (9,8%) | 3525 (12,7%) | 3992 (14,4%) | 3574 (12,9%) | 5448 (19,6%) | 1094 (3,9%) | 2607 (9,4%) |

**V7_ia_fonte_propria_pertinente** (taxa; fora da nota). dois revisores independentes (kappa 0,82) e adjudicação. kappa humano 0.395 em 49 ocorrências (revisao_humana_2026-09-30): diagnóstico

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 0,0514 (28,0%) | 0,0181 (9,9%) | 0,0264 (14,4%) | 0,05 (27,3%) | 0,0195 (10,6%) | 0,0069 (3,8%) | 0,0083 (4,5%) | 0,0028 (1,5%) |

**F1_cadencia_instagram** (peças/semana; na nota). 12 meses, maior marca própria; conta sem peça = 0.

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 4,72 (15,7%) | 8,48 (28,2%) | 3,11 (10,3%) | 3,3 (11,0%) | N/A | 4,68 (15,6%) | 3,24 (10,8%) | 2,51 (8,4%) |

**F2_interacoes_mediana_instagram** (interações/peça; na nota). 12 meses; curtidas ocultas = N/A; mínimo de 12 peças.

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 41 (9,7%) | 107 (25,2%) | 21 (5,0%) | 73 (17,2%) | N/A | 71 (16,8%) | 55 (13,0%) | 56 (13,2%) |

**F3_taxa_por_1000_instagram** (por 1.000 seguidores; na nota). base mínima de 5 mil seguidores (regra 7.1).

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 0,535 (6,2%) | 0,828 (9,7%) | 1,409 (16,4%) | 1,14 (13,3%) | N/A | 1,992 (23,3%) | 0,99 (11,6%) | 1,67 (19,5%) |

**F1_cadencia_facebook** (peças/semana; na nota). 12 meses, maior marca própria; conta sem peça = 0.

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 4,85 (19,6%) | 5,98 (24,2%) | N/A | 3,09 (12,5%) | N/A | 4,97 (20,1%) | 3,3 (13,3%) | 2,53 (10,2%) |

**F2_interacoes_mediana_facebook** (interações/peça; na nota). 12 meses; curtidas ocultas = N/A; mínimo de 12 peças.

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 4 (15,7%) | 6,5 (25,5%) | N/A | 2 (7,8%) | N/A | 3 (11,8%) | 5 (19,6%) | 5 (19,6%) |

**F3_taxa_por_1000_facebook** (por 1.000 seguidores; na nota). base mínima de 5 mil seguidores (regra 7.1).

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 0,041 (8,4%) | 0,047 (9,7%) | N/A | 0,014 (2,9%) | N/A | 0,126 (25,9%) | 0,121 (24,9%) | 0,137 (28,2%) |

**F1_cadencia_youtube** (peças/semana; na nota). 12 meses, maior marca própria; conta sem peça = 0.

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 1,13 (22,6%) | 2,34 (46,7%) | N/A | 0,79 (15,8%) | N/A | 0,65 (13,0%) | 0,02 (0,4%) | 0,08 (1,6%) |

**F2_interacoes_mediana_youtube** (interações/peça; na nota). 12 meses; curtidas ocultas = N/A; mínimo de 12 peças.

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 2 (18,2%) | 5 (45,5%) | N/A | 1 (9,1%) | N/A | 3 (27,3%) | N/A | N/A |

**F3_taxa_por_1000_youtube** (por 1.000 seguidores; na nota). base mínima de 5 mil seguidores (regra 7.1).

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 0,237 (54,0%) | 0,137 (31,2%) | N/A | 0,065 (14,8%) | N/A | N/A | N/A | N/A |

**F5_resposta_da_marca** (respostas por comentário do público, teto 1; na nota). amostra estratificada por mês, seed fixa, maior marca própria no Instagram.

| GDM | Corteva | Bayer | Syngenta | BASF | TMG | Longping | Limagrain |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 0,2277 (12,8%) | 0,1867 (10,5%) | 0,7765 (43,5%) | 0,5248 (29,4%) | N/A | 0,0225 (1,3%) | 0,0083 (0,5%) | 0,0392 (2,2%) |
