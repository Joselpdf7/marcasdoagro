---
titulo: "Nota do bloco: sensibilidades do painel v1"
origem: "analise/notas_v1_2026-10-02/SENSIBILIDADES_FASE4_v1.md"
data: "2026-10-02"
versao: "v1"
sha256_original: "93e2c2400174bcbf3702de9bfd117da5a682ee066d5e09180c147453ca58f0ef"
tipo: "resultado"
---
# Sensibilidades da Fase 4, painel v1, Estudo 4 (sementes)

Regra 7.2 das regras unificadas v1.1 mais as do protocolo do segmento e as emendas do volume. Principal: participação no painel, média simples no pilar, pilares iguais, cobertura de 60%, N/A nunca zero. Cada cenário recalcula o total dos oito grupos; a tabela traz o total por grupo e a ordem.

| Cenário | Corteva | Syngenta | GDM | TMG | Longping | Limagrain | Bayer | BASF | Ordem |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| base_participação | 21,6 | 19,0 | 17,5 | 10,5 | 10,2 | 9,1 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| percentil | 69,5 | 59,7 | 62,0 | 40,7 | 43,0 | 27,5 | N/A | N/A | Corteva > GDM > Syngenta > Longping > TMG > Limagrain |
| zscore_winsorizado_p10_p90 | 0,449 | 0,344 | 0,409 | -0,196 | -0,207 | -0,665 | N/A | N/A | Corteva > GDM > Syngenta > TMG > Longping > Limagrain |
| sem_pilar_Proeminência | 19,3 | 19,0 | 15,8 | 13,1 | 12,3 | 11,8 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| sem_pilar_Valorização | 25,8 | 16,1 | 19,6 | 11,2 | 8,9 | 8,2 | N/A | N/A | Corteva > GDM > Syngenta > TMG > Longping > Limagrain |
| sem_pilar_Fidelidade | 19,5 | 21,8 | 17,1 | 7,1 | 9,4 | 7,2 | 17,5 | 8,6 | Syngenta > Corteva > Bayer > GDM > Longping > BASF > Limagrain > TMG |
| sem_IA | 22,5 | 19,4 | 17,7 | 10,1 | 10,4 | 9,2 | N/A | N/A | Corteva > Syngenta > GDM > Longping > TMG > Limagrain |
| sem_facebook | 22,3 | 19,3 | 18,1 | 10,2 | 8,6 | 7,6 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| sem_youtube | 18,9 | 15,1 | 15,6 | 10,9 | 10,9 | 9,6 | N/A | N/A | Corteva > GDM > Syngenta > TMG > Longping > Limagrain |
| v7_na_nota | 21,4 | 19,1 | 18,2 | 10,2 | 9,8 | 8,6 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| v1_fora_da_nota | 22,3 | 19,9 | 17,6 | 10,5 | 10,2 | 9,4 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| p1_regra_v1_do_dicionario_antes_da_emenda_1 | 21,7 | 18,9 | 17,9 | 10,5 | 10,2 | 9,0 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| p1_com_termos_de_cultivar | 21,5 | 18,9 | 17,6 | 10,6 | 10,2 | 9,1 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| p1_mais_neutro_nomes_nao_ambiguos | 21,2 | 18,6 | 17,5 | 10,4 | 10,1 | 9,0 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| p1_so_intencao_de_sementes | 21,6 | 19,0 | 17,5 | 10,5 | 10,2 | 9,1 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| p3_biotrigo_sem_nutricao_animal | 21,6 | 19,0 | 17,5 | 10,5 | 10,2 | 9,1 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| sem_marca_mae_em_p1_e_p3 | 21,8 | 18,6 | 17,5 | 10,6 | 10,1 | 9,1 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| v1_codigo_exato | 21,5 | 18,8 | 19,0 | 12,5 | 9,4 | 8,9 | N/A | N/A | Corteva > GDM > Syngenta > TMG > Longping > Limagrain |
| v1_marca_numero_sem_cultura | 21,5 | 18,7 | 18,2 | 11,3 | 10,0 | 8,8 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| p4_ponderado_por_volume | 21,8 | 18,3 | 17,0 | 10,5 | 10,1 | 9,1 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| p4_media_das_familias | 21,5 | 18,9 | 17,6 | 10,5 | 10,2 | 9,1 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| p4_com_secao_mista_do_grupo | 21,4 | 18,9 | 17,3 | 10,5 | 10,2 | 9,1 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| p4_sem_familia_cultivar_e_tecnologia | 21,2 | 18,9 | 18,0 | 10,5 | 10,2 | 9,1 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| p6_earned_mais_release | 21,6 | 18,9 | 17,5 | 10,5 | 10,2 | 9,1 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| p6_regra_ampla_da_marca_mae | 21,4 | 18,9 | 17,5 | 10,5 | 10,2 | 9,1 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| p6_automatica_antes_da_revisao_humana | 21,6 | 18,9 | 17,5 | 10,5 | 10,2 | 9,1 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| p6_so_submarcas_sem_marca_mae | 21,8 | 19,2 | 18,0 | 10,5 | 10,3 | 9,1 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| ia_pesos_por_uso_sem_copilot | 21,7 | 18,8 | 17,5 | 10,6 | 10,1 | 9,1 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| ai_overview_como_quinta_superficie | 21,6 | 18,9 | 17,6 | 10,5 | 10,2 | 9,1 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| f3_sem_base_minima_de_seguidores | 20,7 | 18,5 | 16,0 | 12,8 | 10,2 | 9,1 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| sem_minimo_de_12_pecas | 21,6 | 19,0 | 17,5 | 10,5 | 10,2 | 9,1 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| curtidas_ocultas_como_zero | 21,6 | 18,9 | 17,5 | 10,5 | 10,2 | 9,1 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| v3_sem_pecas_com_views_acima_de_20x_seguidores | 21,4 | 19,6 | 16,9 | 10,5 | 10,2 | 9,2 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| perfil_generico_do_grupo_para_quem_nao_tem_marca_propria | 15,1 | 15,6 | 13,8 | 8,3 | 8,9 | 7,8 | 20,1 | 13,3 | Bayer > Syngenta > Corteva > GDM > BASF > Longping > TMG > Limagrain |
| v6_com_pagina_da_secao_mista | 21,5 | 19,0 | 17,5 | 10,5 | 10,2 | 9,1 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| v5_maior_submarca_em_vez_da_soma_do_grupo | 21,6 | 19,0 | 17,6 | 10,6 | 10,3 | 9,2 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping > Limagrain |
| so_piloto_5_grupos | 30,5 | 24,4 | 24,0 | N/A | N/A | N/A | N/A | N/A | Corteva > Syngenta > GDM |
| sem_TMG | 24,1 | 20,4 | 19,3 | N/A | 11,8 | 10,7 | N/A | N/A | Corteva > Syngenta > GDM > Longping > Limagrain |
| sem_Longping | 23,4 | 20,3 | 19,0 | 11,9 | N/A | 10,6 | N/A | N/A | Corteva > Syngenta > GDM > TMG > Limagrain |
| sem_Limagrain | 23,3 | 20,1 | 18,7 | 11,9 | 11,7 | N/A | N/A | N/A | Corteva > Syngenta > GDM > TMG > Longping |

## Leitura

Posições com probabilidade de 75% ou mais no bootstrap conjunto: Corteva (1ª, 93%), Syngenta (2ª, 77%), GDM (3ª, 82%), Limagrain (6ª, 97%). As demais posições são empates declarados.
- Corteva: posição base 1, melhor 1, pior 3 nos cenários com os oito grupos.
- Syngenta: posição base 2, melhor 1, pior 3 nos cenários com os oito grupos.
- GDM: posição base 3, melhor 2, pior 4 nos cenários com os oito grupos.
- TMG: posição base 4, melhor 4, pior 8 nos cenários com os oito grupos.
- Longping High-Tech: posição base 5, melhor 4, pior 6 nos cenários com os oito grupos.
- Limagrain: posição base 6, melhor 6, pior 8 nos cenários com os oito grupos.
- Bayer: posição base None, melhor 1, pior 3 nos cenários com os oito grupos; sem total em 34 cenários (base_participação, percentil, zscore_winsorizado_p10_p90, sem_pilar_Proeminência, sem_pilar_Valorização, sem_IA...).
- BASF: posição base None, melhor 5, pior 6 nos cenários com os oito grupos; sem total em 34 cenários (base_participação, percentil, zscore_winsorizado_p10_p90, sem_pilar_Proeminência, sem_pilar_Valorização, sem_IA...).
