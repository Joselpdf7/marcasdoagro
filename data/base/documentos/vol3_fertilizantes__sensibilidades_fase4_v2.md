---
titulo: "Nota do bloco: sensibilidades do painel v2"
origem: "analise/notas_v2_2026-09-29/SENSIBILIDADES_FASE4_v2.md"
data: "2026-09-29"
versao: "v2"
sha256_original: "dd1b2a41e74a0abc141c45dea5be686d0e578b48e8aae20e2a37c9b3618f2765"
tipo: "resultado"
---
# Sensibilidades da Fase 4, painel v2

Todos os cenários da regra 7.2 mais os do protocolo do segmento; imprensa definitiva.

## Total por cenário

| Cenário | Yara | Mosaic | EuroChem | Cibra | Fertipar | Stoller | Timac | Vittia | Ubyfol |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| base_participação | 20,8 | 18,2 | 7,5 | 12,5 | 5,9 | 9,8 | 10,9 | 9,0 | 12,1 |
| percentil | 72,4 | 71,7 | 41,3 | 51,0 | 31,4 | 45,6 | 47,5 | 53,7 | 35,9 |
| zscore_winsorizado_p10_p90 | 0,84 | 0,81 | -0,28 | -0,01 | -0,68 | -0,13 | -0,15 | 0,08 | -0,43 |
| sem_pilar_Proeminência | 15,7 | 13,6 | 7,0 | 15,2 | 6,6 | 9,5 | 13,2 | 11,3 | 17,5 |
| sem_pilar_Valorização | 24,0 | 17,4 | 8,0 | 10,4 | 5,8 | 11,0 | 13,1 | 9,8 | 7,3 |
| sem_pilar_Fidelidade | 22,8 | 23,6 | 7,6 | 11,8 | 5,3 | 8,8 | 6,3 | 5,7 | 11,4 |
| sem_IA | 17,7 | 17,7 | 8,0 | 12,0 | 5,8 | 10,9 | 11,5 | 9,5 | 13,6 |
| sem_facebook | 22,4 | 18,5 | 7,7 | 13,6 | 5,9 | 9,0 | 10,4 | N/A | 11,6 |
| v7_na_nota | 20,8 | 18,2 | 7,5 | 12,5 | 5,9 | 9,8 | 10,9 | 9,0 | 12,1 |
| v1_na_nota | 20,4 | 17,2 | 7,5 | 12,5 | 5,6 | 13,0 | 11,0 | 9,0 | 11,5 |
| f3_sem_base_minima | 20,4 | 18,2 | 7,1 | 12,5 | 5,5 | 9,4 | 8,9 | 9,0 | 14,2 |
| sem_minimo_de_12_pecas_regra_anterior_emenda_2 | 20,7 | 18,2 | 7,4 | 16,0 | 5,9 | 9,7 | 10,8 | 8,9 | 7,5 |
| curtidas_ocultas_como_zero_regra_anterior_emenda_1 | 20,8 | 18,2 | 7,5 | 12,5 | 5,9 | 9,8 | 10,9 | 8,3 | 12,1 |
| v3_sem_pecas_com_views_acima_de_20x_seguidores | 21,7 | 19,1 | 9,0 | 11,3 | 6,3 | 11,1 | 11,9 | 10,2 | 7,2 |
| mosaic_so_site_oficial_em_p3_p4_v5 | 22,1 | 15,4 | 7,7 | 13,1 | 6,1 | 9,9 | 11,1 | 9,1 | 12,1 |
| mosaic_marca_mais_perfis_do_portal | 20,0 | 24,8 | 6,9 | 13,0 | 5,9 | 8,6 | 9,7 | 8,4 | 7,5 |
| p6_earned_mais_release | 20,8 | 18,3 | 7,5 | 12,4 | 5,9 | 9,8 | 10,9 | 8,9 | 12,1 |
| p6_classificacao_v2_1_regra_anterior_emenda_3 | 20,9 | 18,2 | 7,3 | 12,5 | 5,9 | 9,8 | 10,9 | 9,0 | 12,1 |
| p1_com_termos_de_produto | 20,7 | 18,2 | 7,5 | 12,4 | 5,9 | 9,9 | 10,9 | 9,0 | 12,1 |
| p1_explicito_mais_neutro | 19,6 | 19,0 | 7,6 | 12,3 | 6,0 | 10,0 | 10,8 | 9,0 | 12,1 |
| ia_pesos_por_uso_sem_copilot | 20,7 | 18,4 | 7,6 | 12,2 | 6,0 | 9,8 | 10,9 | 9,0 | 12,1 |
| ai_overview_como_quinta_superficie | 21,0 | 18,1 | 7,5 | 12,4 | 5,9 | 9,8 | 10,8 | 9,0 | 12,1 |
| p4_ponderado_por_volume | 20,2 | 18,6 | 7,7 | 12,8 | 5,9 | 9,8 | 10,8 | 8,9 | 12,1 |
| p4_media_das_familias | 20,7 | 18,3 | 7,5 | 12,5 | 5,9 | 9,8 | 10,8 | 9,0 | 12,1 |
| so_piloto_6_marcas | 28,6 | 22,7 | 13,9 | 16,6 | 8,3 | 16,2 | N/A | N/A | N/A |
| sem_stoller | 23,0 | 20,1 | 8,6 | 13,4 | 6,5 | N/A | 12,5 | 10,3 | 12,9 |

## Ordem por cenário

| Cenário | Ordem |
|---|---|
| base_participação | Yara > Mosaic > Cibra > Ubyfol > Timac > Stoller > Vittia > EuroChem > Fertipar |
| percentil | Yara > Mosaic > Vittia > Cibra > Timac > Stoller > EuroChem > Ubyfol > Fertipar |
| zscore_winsorizado_p10_p90 | Yara > Mosaic > Vittia > Cibra > Stoller > Timac > EuroChem > Ubyfol > Fertipar |
| sem_pilar_Proeminência | Ubyfol > Yara > Cibra > Mosaic > Timac > Vittia > Stoller > EuroChem > Fertipar |
| sem_pilar_Valorização | Yara > Mosaic > Timac > Stoller > Cibra > Vittia > EuroChem > Ubyfol > Fertipar |
| sem_pilar_Fidelidade | Mosaic > Yara > Cibra > Ubyfol > Stoller > EuroChem > Timac > Vittia > Fertipar |
| sem_IA | Yara > Mosaic > Ubyfol > Cibra > Timac > Stoller > Vittia > EuroChem > Fertipar |
| sem_facebook | Yara > Mosaic > Cibra > Ubyfol > Timac > Stoller > EuroChem > Fertipar |
| v7_na_nota | Yara > Mosaic > Cibra > Ubyfol > Timac > Stoller > Vittia > EuroChem > Fertipar |
| v1_na_nota | Yara > Mosaic > Stoller > Cibra > Ubyfol > Timac > Vittia > EuroChem > Fertipar |
| f3_sem_base_minima | Yara > Mosaic > Ubyfol > Cibra > Stoller > Vittia > Timac > EuroChem > Fertipar |
| sem_minimo_de_12_pecas_regra_anterior_emenda_2 | Yara > Mosaic > Cibra > Timac > Stoller > Vittia > Ubyfol > EuroChem > Fertipar |
| curtidas_ocultas_como_zero_regra_anterior_emenda_1 | Yara > Mosaic > Cibra > Ubyfol > Timac > Stoller > Vittia > EuroChem > Fertipar |
| v3_sem_pecas_com_views_acima_de_20x_seguidores | Yara > Mosaic > Timac > Cibra > Stoller > Vittia > EuroChem > Ubyfol > Fertipar |
| mosaic_so_site_oficial_em_p3_p4_v5 | Yara > Mosaic > Cibra > Ubyfol > Timac > Stoller > Vittia > EuroChem > Fertipar |
| mosaic_marca_mais_perfis_do_portal | Mosaic > Yara > Cibra > Timac > Stoller > Vittia > Ubyfol > EuroChem > Fertipar |
| p6_earned_mais_release | Yara > Mosaic > Cibra > Ubyfol > Timac > Stoller > Vittia > EuroChem > Fertipar |
| p6_classificacao_v2_1_regra_anterior_emenda_3 | Yara > Mosaic > Cibra > Ubyfol > Timac > Stoller > Vittia > EuroChem > Fertipar |
| p1_com_termos_de_produto | Yara > Mosaic > Cibra > Ubyfol > Timac > Stoller > Vittia > EuroChem > Fertipar |
| p1_explicito_mais_neutro | Yara > Mosaic > Cibra > Ubyfol > Timac > Stoller > Vittia > EuroChem > Fertipar |
| ia_pesos_por_uso_sem_copilot | Yara > Mosaic > Cibra > Ubyfol > Timac > Stoller > Vittia > EuroChem > Fertipar |
| ai_overview_como_quinta_superficie | Yara > Mosaic > Cibra > Ubyfol > Timac > Stoller > Vittia > EuroChem > Fertipar |
| p4_ponderado_por_volume | Yara > Mosaic > Cibra > Ubyfol > Timac > Stoller > Vittia > EuroChem > Fertipar |
| p4_media_das_familias | Yara > Mosaic > Cibra > Ubyfol > Timac > Stoller > Vittia > EuroChem > Fertipar |
| so_piloto_6_marcas | Yara > Mosaic > Cibra > Stoller > EuroChem > Fertipar |
| sem_stoller | Yara > Mosaic > Cibra > Ubyfol > Timac > Vittia > EuroChem > Fertipar |

## Estabilidade

| Marca | Posição base | Faixa ao retirar uma submétrica | Posição modal (pesos aleatórios) | Bootstrap conjunto |
|---|---:|---|---|---|
| Yara Brasil | 1 | 1 a 1 | 1 (59%) | 1ª 96% |
| Mosaic Fertilizantes | 2 | 2 a 2 | 2 (53%) | 2ª 96% |
| EuroChem Brasil | 8 | 7 a 8 | 8 (44%) | 3ª 8%, 5ª 7%, 8ª 75% |
| Cibra | 3 | 3 a 5 | 3 (34%) | 3ª 25%, 4ª 57%, 5ª 18% |
| Fertipar | 9 | 9 a 9 | 9 (68%) | 9ª 100% |
| Stoller do Brasil | 6 | 5 a 7 | 5 (23%) | 5ª 7%, 6ª 84%, 7ª 8% |
| Timac Agro Brasil | 5 | 4 a 6 | 5 (25%) | 3ª 13%, 4ª 25%, 5ª 52%, 6ª 7% |
| Vittia | 7 | 6 a 7 | 6 (28%) | 7ª 81%, 8ª 15% |
| Ubyfol | 4 | 3 a 8 | 4 (16%) | 3ª 55%, 4ª 14%, 5ª 16%, 8ª 9% |
