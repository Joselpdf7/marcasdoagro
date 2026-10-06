---
titulo: "Pacote de dados do whitepaper, Estudo 2 (fonte única para os capítulos)"
origem: "entregaveis/whitepaper_v1/dados/dados_whitepaper.json"
data: "2026-09-14"
versao: "v1"
sha256_original: "ca5e8190188e044ed9a9f3cedcc3113202c208d533628244a1105021059f9b16"
tipo: "tabela"
---
# Pacote de dados do whitepaper, Estudo 2 (fonte única para os capítulos)

Pacote de dados consolidado usado para escrever os capítulos do whitepaper do Estudo 2. Reúne o painel v5, as sensibilidades, a leitura de IA por marca e por bloco de perguntas, a busca de categoria, o engajamento, os seguidores, a imprensa earned, o autoatendimento item a item e as perguntas do produtor com volume de busca.

## gerado em

2026-09-18

## volume

2

## segmento

maquinário agrícola

## marcas

- John Deere
- Case IH
- New Holland Agriculture
- Massey Ferguson
- Valtra
- Fendt
- Jacto
- Stara

## janela

13/09/2025 a 13/09/2026 (fluxos); fotos de 14/09/2026; volumes de busca como média de 12 meses

## base

painel v4 de 17/09/2026 sob as regras unificadas v1.1 (base mínima de 5 mil seguidores em F3; fonte própria citada pelas IAs como diagnóstico)

## painel v5

### total_participação

| Marca | Valor |
|---|---|
| John Deere | 23.28 |
| Case IH | 10.08 |
| New Holland Agriculture | 13.83 |
| Massey Ferguson | 10.99 |
| Valtra | 10.72 |
| Fendt | 9.72 |
| Jacto | 9.17 |
| Stara | 12.5 |

### total_percentil

| Marca | Valor |
|---|---|
| John Deere | 76.06 |
| Case IH | 44.95 |
| New Holland Agriculture | 67.01 |
| Massey Ferguson | 45.42 |
| Valtra | 45.22 |
| Fendt | 33.6 |
| Jacto | 37.26 |
| Stara | 49.9 |

### pilares

| Categoria | Marca | score | cobertura | n_sub |
|---|---|---|---|---|
| Proeminência | John Deere | 36.94 | 1 | 9 |
| Proeminência | Case IH | 9.38 | 1 | 9 |
| Proeminência | New Holland Agriculture | 11.88 | 1 | 9 |
| Proeminência | Massey Ferguson | 13.5 | 1 | 9 |
| Proeminência | Valtra | 7.97 | 1 | 9 |
| Proeminência | Fendt | 4.39 | 1 | 9 |
| Proeminência | Jacto | 9.17 | 1 | 9 |
| Proeminência | Stara | 6.77 | 1 | 9 |
| Valorização | John Deere | 20.32 | 1 | 6 |
| Valorização | Case IH | 8.93 | 1 | 6 |
| Valorização | New Holland Agriculture | 13.55 | 1 | 6 |
| Valorização | Massey Ferguson | 10.36 | 1 | 6 |
| Valorização | Valtra | 9.61 | 1 | 6 |
| Valorização | Fendt | 16.41 | 1 | 6 |
| Valorização | Jacto | 9.11 | 1 | 6 |
| Valorização | Stara | 11.72 | 1 | 6 |
| Fidelidade | John Deere | 12.58 | 1 | 10 |
| Fidelidade | Case IH | 11.93 | 1 | 10 |
| Fidelidade | New Holland Agriculture | 16.07 | 1 | 10 |
| Fidelidade | Massey Ferguson | 9.11 | 1 | 10 |
| Fidelidade | Valtra | 14.57 | 1 | 10 |
| Fidelidade | Fendt | 8.35 | 0.9 | 10 |
| Fidelidade | Jacto | 9.22 | 1 | 10 |
| Fidelidade | Stara | 19.01 | 1 | 10 |

### sensibilidades_basicas

| Chave | John Deere | Case IH | New Holland Agriculture | Massey Ferguson | Valtra | Fendt | Jacto | Stara |
|---|---|---|---|---|---|---|---|---|
| sem_Proeminência | 16.45 | 10.43 | 14.81 | 9.73 | 12.09 | 12.38 | 9.16 | 15.37 |
| sem_Valorização | 24.76 | 10.66 | 13.98 | 11.3 | 11.27 | 6.37 | 9.2 | 12.89 |
| sem_Fidelidade | 28.63 | 9.16 | 12.71 | 11.93 | 8.79 | 10.4 | 9.14 | 9.25 |
| sem_IA | 22.9 | 10 | 13.87 | 10.8 | 10.62 | 9.75 | 9.58 | 12.78 |
| sem_facebook | 22.91 | 10.4 | 14.28 | 11.27 | 11.64 | 9.89 | 9.03 | 11 |

### cobertura

| Marca | Valor |
|---|---|
| John Deere | 28 |
| Case IH | 26 |
| New Holland Agriculture | 26 |
| Massey Ferguson | 26 |
| Valtra | 28 |
| Fendt | 25 |
| Jacto | 26 |
| Stara | 28 |

**n_submetricas**: 28

### submetricas

| pilar | submetrica | marca | valor | participação | percentil | unidade | fonte | nota |
|---|---|---|---|---|---|---|---|---|
| Proeminência | P1_busca_marca_agro | John Deere | 99260.0 | 30.19 | 100.0 | buscas/mês | base de dados de busca, 8 sementes do nome mais sementes curtas do nome (deere, case, holland, massey) só em palavras agro explícitas; dicionário v1 sem modelos, porque os modelos são medidos em V1 (emendas 7 e 9) | Massey Ferguson: semente curta coletada em 18/09 (emenda 10) dentro do limite de consultas, com as chamadas com sufixo do protocolo limitadas às linhas de maior volume e filtro que exclui o nome completo |
| Proeminência | P1_busca_marca_agro | Case IH | 22710.0 | 6.91 | 28.6 | buscas/mês | base de dados de busca, 8 sementes do nome mais sementes curtas do nome (deere, case, holland, massey) só em palavras agro explícitas; dicionário v1 sem modelos, porque os modelos são medidos em V1 (emendas 7 e 9) | Massey Ferguson: semente curta coletada em 18/09 (emenda 10) dentro do limite de consultas, com as chamadas com sufixo do protocolo limitadas às linhas de maior volume e filtro que exclui o nome completo |
| Proeminência | P1_busca_marca_agro | New Holland Agriculture | 46780.0 | 14.23 | 71.4 | buscas/mês | base de dados de busca, 8 sementes do nome mais sementes curtas do nome (deere, case, holland, massey) só em palavras agro explícitas; dicionário v1 sem modelos, porque os modelos são medidos em V1 (emendas 7 e 9) | Massey Ferguson: semente curta coletada em 18/09 (emenda 10) dentro do limite de consultas, com as chamadas com sufixo do protocolo limitadas às linhas de maior volume e filtro que exclui o nome completo |
| Proeminência | P1_busca_marca_agro | Massey Ferguson | 61860.0 | 18.82 | 85.7 | buscas/mês | base de dados de busca, 8 sementes do nome mais sementes curtas do nome (deere, case, holland, massey) só em palavras agro explícitas; dicionário v1 sem modelos, porque os modelos são medidos em V1 (emendas 7 e 9) | Massey Ferguson: semente curta coletada em 18/09 (emenda 10) dentro do limite de consultas, com as chamadas com sufixo do protocolo limitadas às linhas de maior volume e filtro que exclui o nome completo |
| Proeminência | P1_busca_marca_agro | Valtra | 40420.0 | 12.3 | 42.9 | buscas/mês | base de dados de busca, 8 sementes do nome mais sementes curtas do nome (deere, case, holland, massey) só em palavras agro explícitas; dicionário v1 sem modelos, porque os modelos são medidos em V1 (emendas 7 e 9) | Massey Ferguson: semente curta coletada em 18/09 (emenda 10) dentro do limite de consultas, com as chamadas com sufixo do protocolo limitadas às linhas de maior volume e filtro que exclui o nome completo |
| Proeminência | P1_busca_marca_agro | Fendt | 8530.0 | 2.59 | 14.3 | buscas/mês | base de dados de busca, 8 sementes do nome mais sementes curtas do nome (deere, case, holland, massey) só em palavras agro explícitas; dicionário v1 sem modelos, porque os modelos são medidos em V1 (emendas 7 e 9) | Massey Ferguson: semente curta coletada em 18/09 (emenda 10) dentro do limite de consultas, com as chamadas com sufixo do protocolo limitadas às linhas de maior volume e filtro que exclui o nome completo |
| Proeminência | P1_busca_marca_agro | Jacto | 42150.0 | 12.82 | 57.1 | buscas/mês | base de dados de busca, 8 sementes do nome mais sementes curtas do nome (deere, case, holland, massey) só em palavras agro explícitas; dicionário v1 sem modelos, porque os modelos são medidos em V1 (emendas 7 e 9) | Massey Ferguson: semente curta coletada em 18/09 (emenda 10) dentro do limite de consultas, com as chamadas com sufixo do protocolo limitadas às linhas de maior volume e filtro que exclui o nome completo |
| Proeminência | P1_busca_marca_agro | Stara | 7020.0 | 2.14 | 0.0 | buscas/mês | base de dados de busca, 8 sementes do nome mais sementes curtas do nome (deere, case, holland, massey) só em palavras agro explícitas; dicionário v1 sem modelos, porque os modelos são medidos em V1 (emendas 7 e 9) | Massey Ferguson: semente curta coletada em 18/09 (emenda 10) dentro do limite de consultas, com as chamadas com sufixo do protocolo limitadas às linhas de maior volume e filtro que exclui o nome completo |
| Proeminência | P2_authority_score | John Deere | 45.0 | 40.91 | 100.0 | 0 a 100 | base de dados de busca (referências), domínio raiz | diagnóstico fora da nota; N/A para subpasta de domínio global |
| Proeminência | P2_authority_score | Case IH | | | | 0 a 100 | base de dados de busca (referências), domínio raiz | diagnóstico fora da nota; N/A para subpasta de domínio global |
| Proeminência | P2_authority_score | New Holland Agriculture | | | | 0 a 100 | base de dados de busca (referências), domínio raiz | diagnóstico fora da nota; N/A para subpasta de domínio global |
| Proeminência | P2_authority_score | Massey Ferguson | | | | 0 a 100 | base de dados de busca (referências), domínio raiz | diagnóstico fora da nota; N/A para subpasta de domínio global |
| Proeminência | P2_authority_score | Valtra | 32.0 | 29.09 | 0.0 | 0 a 100 | base de dados de busca (referências), domínio raiz | diagnóstico fora da nota; N/A para subpasta de domínio global |
| Proeminência | P2_authority_score | Fendt | | | | 0 a 100 | base de dados de busca (referências), domínio raiz | diagnóstico fora da nota; N/A para subpasta de domínio global |
| Proeminência | P2_authority_score | Jacto | | | | 0 a 100 | base de dados de busca (referências), domínio raiz | diagnóstico fora da nota; N/A para subpasta de domínio global |
| Proeminência | P2_authority_score | Stara | 33.0 | 30.0 | 50.0 | 0 a 100 | base de dados de busca (referências), domínio raiz | diagnóstico fora da nota; N/A para subpasta de domínio global |
| Proeminência | P3_palavras_chave_organicas | John Deere | 9555.0 | 34.55 | 100.0 | palavras-chave | base de dados de busca por domínio e por subpasta (totais); Case IH, New Holland e Jacto: dois alvos somados com desconto da sobreposição estimada nas listas (emenda 6) | John Deere: domínio inteiro; sensibilidade sem construção e florestal |
| Proeminência | P3_palavras_chave_organicas | Case IH | 3076.0 | 11.12 | 71.4 | palavras-chave | base de dados de busca por domínio e por subpasta (totais); Case IH, New Holland e Jacto: dois alvos somados com desconto da sobreposição estimada nas listas (emenda 6) | John Deere: domínio inteiro; sensibilidade sem construção e florestal |
| Proeminência | P3_palavras_chave_organicas | New Holland Agriculture | 2419.0 | 8.75 | 57.1 | palavras-chave | base de dados de busca por domínio e por subpasta (totais); Case IH, New Holland e Jacto: dois alvos somados com desconto da sobreposição estimada nas listas (emenda 6) | John Deere: domínio inteiro; sensibilidade sem construção e florestal |
| Proeminência | P3_palavras_chave_organicas | Massey Ferguson | 815.0 | 2.95 | 14.3 | palavras-chave | base de dados de busca por domínio e por subpasta (totais); Case IH, New Holland e Jacto: dois alvos somados com desconto da sobreposição estimada nas listas (emenda 6) | John Deere: domínio inteiro; sensibilidade sem construção e florestal |
| Proeminência | P3_palavras_chave_organicas | Valtra | 1497.0 | 5.41 | 28.6 | palavras-chave | base de dados de busca por domínio e por subpasta (totais); Case IH, New Holland e Jacto: dois alvos somados com desconto da sobreposição estimada nas listas (emenda 6) | John Deere: domínio inteiro; sensibilidade sem construção e florestal |
| Proeminência | P3_palavras_chave_organicas | Fendt | 357.0 | 1.29 | 0.0 | palavras-chave | base de dados de busca por domínio e por subpasta (totais); Case IH, New Holland e Jacto: dois alvos somados com desconto da sobreposição estimada nas listas (emenda 6) | John Deere: domínio inteiro; sensibilidade sem construção e florestal |
| Proeminência | P3_palavras_chave_organicas | Jacto | 7712.0 | 27.89 | 85.7 | palavras-chave | base de dados de busca por domínio e por subpasta (totais); Case IH, New Holland e Jacto: dois alvos somados com desconto da sobreposição estimada nas listas (emenda 6) | John Deere: domínio inteiro; sensibilidade sem construção e florestal |
| Proeminência | P3_palavras_chave_organicas | Stara | 2224.0 | 8.04 | 42.9 | palavras-chave | base de dados de busca por domínio e por subpasta (totais); Case IH, New Holland e Jacto: dois alvos somados com desconto da sobreposição estimada nas listas (emenda 6) | John Deere: domínio inteiro; sensibilidade sem construção e florestal |
| Proeminência | P4_presenca_busca_categoria | John Deere | 0.3933 | 40.69 | 100.0 | taxa top 10, 100 consultas | Google ao vivo, 3 passes | |
| Proeminência | P4_presenca_busca_categoria | Case IH | 0.0733 | 7.58 | 28.6 | taxa top 10, 100 consultas | Google ao vivo, 3 passes | |
| Proeminência | P4_presenca_busca_categoria | New Holland Agriculture | 0.0767 | 7.94 | 50.0 | taxa top 10, 100 consultas | Google ao vivo, 3 passes | |
| Proeminência | P4_presenca_busca_categoria | Massey Ferguson | 0.0667 | 6.9 | 14.3 | taxa top 10, 100 consultas | Google ao vivo, 3 passes | |
| Proeminência | P4_presenca_busca_categoria | Valtra | 0.0767 | 7.94 | 50.0 | taxa top 10, 100 consultas | Google ao vivo, 3 passes | |
| Proeminência | P4_presenca_busca_categoria | Fendt | 0.0133 | 1.38 | 0.0 | taxa top 10, 100 consultas | Google ao vivo, 3 passes | |
| Proeminência | P4_presenca_busca_categoria | Jacto | 0.0833 | 8.62 | 71.4 | taxa top 10, 100 consultas | Google ao vivo, 3 passes | |
| Proeminência | P4_presenca_busca_categoria | Stara | 0.1833 | 18.96 | 85.7 | taxa top 10, 100 consultas | Google ao vivo, 3 passes | |
| Proeminência | P5_seguidores_instagram | John Deere | 411099.0 | 26.34 | 100.0 | seguidores | snapshot 14/09 | |
| Proeminência | P5_seguidores_instagram | Case IH | 174221.0 | 11.16 | 71.4 | seguidores | snapshot 14/09 | |
| Proeminência | P5_seguidores_instagram | New Holland Agriculture | 255968.0 | 16.4 | 85.7 | seguidores | snapshot 14/09 | |
| Proeminência | P5_seguidores_instagram | Massey Ferguson | 164226.0 | 10.52 | 42.9 | seguidores | snapshot 14/09 | |
| Proeminência | P5_seguidores_instagram | Valtra | 121841.0 | 7.81 | 14.3 | seguidores | snapshot 14/09 | |
| Proeminência | P5_seguidores_instagram | Fendt | 104147.0 | 6.67 | 0.0 | seguidores | snapshot 14/09 | |
| Proeminência | P5_seguidores_instagram | Jacto | 169028.0 | 10.83 | 57.1 | seguidores | snapshot 14/09 | |
| Proeminência | P5_seguidores_instagram | Stara | 160110.0 | 10.26 | 28.6 | seguidores | snapshot 14/09 | |
| Proeminência | P5_seguidores_facebook | John Deere | 6672786.0 | 53.28 | 100.0 | seguidores | snapshot 14/09 | Facebook: seis marcas em estrutura de página global localizada; sensibilidade sem Facebook |
| Proeminência | P5_seguidores_facebook | Case IH | 1232588.0 | 9.84 | 71.4 | seguidores | snapshot 14/09 | Facebook: seis marcas em estrutura de página global localizada; sensibilidade sem Facebook |
| Proeminência | P5_seguidores_facebook | New Holland Agriculture | 1887112.0 | 15.07 | 85.7 | seguidores | snapshot 14/09 | Facebook: seis marcas em estrutura de página global localizada; sensibilidade sem Facebook |
| Proeminência | P5_seguidores_facebook | Massey Ferguson | 1042098.0 | 8.32 | 57.1 | seguidores | snapshot 14/09 | Facebook: seis marcas em estrutura de página global localizada; sensibilidade sem Facebook |
| Proeminência | P5_seguidores_facebook | Valtra | 620838.0 | 4.96 | 42.9 | seguidores | snapshot 14/09 | Facebook: seis marcas em estrutura de página global localizada; sensibilidade sem Facebook |
| Proeminência | P5_seguidores_facebook | Fendt | 556436.0 | 4.44 | 28.6 | seguidores | snapshot 14/09 | Facebook: seis marcas em estrutura de página global localizada; sensibilidade sem Facebook |
| Proeminência | P5_seguidores_facebook | Jacto | 381363.0 | 3.05 | 14.3 | seguidores | snapshot 14/09 | Facebook: seis marcas em estrutura de página global localizada; sensibilidade sem Facebook |
| Proeminência | P5_seguidores_facebook | Stara | 130486.0 | 1.04 | 0.0 | seguidores | snapshot 14/09 | Facebook: seis marcas em estrutura de página global localizada; sensibilidade sem Facebook |
| Proeminência | P5_seguidores_youtube | John Deere | 202000.0 | 45.69 | 100.0 | seguidores | snapshot 14/09 | |
| Proeminência | P5_seguidores_youtube | Case IH | 25800.0 | 5.84 | 42.9 | seguidores | snapshot 14/09 | |
| Proeminência | P5_seguidores_youtube | New Holland Agriculture | 45800.0 | 10.36 | 71.4 | seguidores | snapshot 14/09 | |
| Proeminência | P5_seguidores_youtube | Massey Ferguson | 96000.0 | 21.71 | 85.7 | seguidores | snapshot 14/09 | |
| Proeminência | P5_seguidores_youtube | Valtra | 15500.0 | 3.51 | 14.3 | seguidores | snapshot 14/09 | |
| Proeminência | P5_seguidores_youtube | Fendt | 916.0 | 0.21 | 0.0 | seguidores | snapshot 14/09 | |
| Proeminência | P5_seguidores_youtube | Jacto | 25300.0 | 5.72 | 28.6 | seguidores | snapshot 14/09 | |
| Proeminência | P5_seguidores_youtube | Stara | 30800.0 | 6.97 | 57.1 | seguidores | snapshot 14/09 | |
| Proeminência | P6_imprensa_earned_assunto | John Deere | 55.0 | 19.78 | 85.7 | matérias 12m | classificação v2.1 automática com precisão de 0,83 na classe earned (revisão humana de 15/09); qualificador ampliado a pulverizador, plantadeira e implemento na v3 (emenda 5) | |
| Proeminência | P6_imprensa_earned_assunto | Case IH | 32.0 | 11.51 | 42.9 | matérias 12m | classificação v2.1 automática com precisão de 0,83 na classe earned (revisão humana de 15/09); qualificador ampliado a pulverizador, plantadeira e implemento na v3 (emenda 5) | |
| Proeminência | P6_imprensa_earned_assunto | New Holland Agriculture | 31.0 | 11.15 | 28.6 | matérias 12m | classificação v2.1 automática com precisão de 0,83 na classe earned (revisão humana de 15/09); qualificador ampliado a pulverizador, plantadeira e implemento na v3 (emenda 5) | |
| Proeminência | P6_imprensa_earned_assunto | Massey Ferguson | 59.0 | 21.22 | 100.0 | matérias 12m | classificação v2.1 automática com precisão de 0,83 na classe earned (revisão humana de 15/09); qualificador ampliado a pulverizador, plantadeira e implemento na v3 (emenda 5) | |
| Proeminência | P6_imprensa_earned_assunto | Valtra | 33.0 | 11.87 | 57.1 | matérias 12m | classificação v2.1 automática com precisão de 0,83 na classe earned (revisão humana de 15/09); qualificador ampliado a pulverizador, plantadeira e implemento na v3 (emenda 5) | |
| Proeminência | P6_imprensa_earned_assunto | Fendt | 41.0 | 14.75 | 71.4 | matérias 12m | classificação v2.1 automática com precisão de 0,83 na classe earned (revisão humana de 15/09); qualificador ampliado a pulverizador, plantadeira e implemento na v3 (emenda 5) | |
| Proeminência | P6_imprensa_earned_assunto | Jacto | 11.0 | 3.96 | 0.0 | matérias 12m | classificação v2.1 automática com precisão de 0,83 na classe earned (revisão humana de 15/09); qualificador ampliado a pulverizador, plantadeira e implemento na v3 (emenda 5) | |
| Proeminência | P6_imprensa_earned_assunto | Stara | 16.0 | 5.76 | 14.3 | matérias 12m | classificação v2.1 automática com precisão de 0,83 na classe earned (revisão humana de 15/09); qualificador ampliado a pulverizador, plantadeira e implemento na v3 (emenda 5) | |
| Proeminência | P7a_ia_menção | John Deere | 0.6403 | 22.49 | 100.0 | taxa | superfícies de IA da nota, 3 passes, peso igual | |
| Proeminência | P7a_ia_menção | Case IH | 0.4667 | 16.39 | 71.4 | taxa | superfícies de IA da nota, 3 passes, peso igual | |
| Proeminência | P7a_ia_menção | New Holland Agriculture | 0.4792 | 16.83 | 85.7 | taxa | superfícies de IA da nota, 3 passes, peso igual | |
| Proeminência | P7a_ia_menção | Massey Ferguson | 0.4584 | 16.1 | 57.1 | taxa | superfícies de IA da nota, 3 passes, peso igual | |
| Proeminência | P7a_ia_menção | Valtra | 0.3805 | 13.36 | 42.9 | taxa | superfícies de IA da nota, 3 passes, peso igual | |
| Proeminência | P7a_ia_menção | Fendt | 0.1444 | 5.07 | 21.4 | taxa | superfícies de IA da nota, 3 passes, peso igual | |
| Proeminência | P7a_ia_menção | Jacto | 0.1333 | 4.68 | 0.0 | taxa | superfícies de IA da nota, 3 passes, peso igual | |
| Proeminência | P7a_ia_menção | Stara | 0.1444 | 5.07 | 21.4 | taxa | superfícies de IA da nota, 3 passes, peso igual | |
| Proeminência | P7b_ia_primeira_menção | John Deere | 0.4292 | 59.44 | 100.0 | taxa | idem | |
| Proeminência | P7b_ia_primeira_menção | Case IH | 0.0292 | 4.04 | 28.6 | taxa | idem | |
| Proeminência | P7b_ia_primeira_menção | New Holland Agriculture | 0.0444 | 6.15 | 71.4 | taxa | idem | |
| Proeminência | P7b_ia_primeira_menção | Massey Ferguson | 0.1083 | 15.0 | 85.7 | taxa | idem | |
| Proeminência | P7b_ia_primeira_menção | Valtra | 0.0333 | 4.61 | 42.9 | taxa | idem | |
| Proeminência | P7b_ia_primeira_menção | Fendt | 0.0222 | 3.07 | 14.3 | taxa | idem | |
| Proeminência | P7b_ia_primeira_menção | Jacto | 0.0361 | 5.0 | 57.1 | taxa | idem | |
| Proeminência | P7b_ia_primeira_menção | Stara | 0.0194 | 2.69 | 0.0 | taxa | idem | |
| Valorização | V1_busca_marca_modelo | John Deere | 3500.0 | 39.15 | 100.0 | buscas/mês, marca + modelo | base de dados de busca, cesta de modelos congelada (emenda 2) | sensibilidades: modelo + preço; modelo + ficha técnica |
| Valorização | V1_busca_marca_modelo | Case IH | 230.0 | 2.57 | 0.0 | buscas/mês, marca + modelo | base de dados de busca, cesta de modelos congelada (emenda 2) | sensibilidades: modelo + preço; modelo + ficha técnica |
| Valorização | V1_busca_marca_modelo | New Holland Agriculture | 1770.0 | 19.8 | 85.7 | buscas/mês, marca + modelo | base de dados de busca, cesta de modelos congelada (emenda 2) | sensibilidades: modelo + preço; modelo + ficha técnica |
| Valorização | V1_busca_marca_modelo | Massey Ferguson | 1020.0 | 11.41 | 64.3 | buscas/mês, marca + modelo | base de dados de busca, cesta de modelos congelada (emenda 2) | sensibilidades: modelo + preço; modelo + ficha técnica |
| Valorização | V1_busca_marca_modelo | Valtra | 640.0 | 7.16 | 42.9 | buscas/mês, marca + modelo | base de dados de busca, cesta de modelos congelada (emenda 2) | sensibilidades: modelo + preço; modelo + ficha técnica |
| Valorização | V1_busca_marca_modelo | Fendt | 280.0 | 3.13 | 14.3 | buscas/mês, marca + modelo | base de dados de busca, cesta de modelos congelada (emenda 2) | sensibilidades: modelo + preço; modelo + ficha técnica |
| Valorização | V1_busca_marca_modelo | Jacto | 1020.0 | 11.41 | 64.3 | buscas/mês, marca + modelo | base de dados de busca, cesta de modelos congelada (emenda 2) | sensibilidades: modelo + preço; modelo + ficha técnica |
| Valorização | V1_busca_marca_modelo | Stara | 480.0 | 5.37 | 28.6 | buscas/mês, marca + modelo | base de dados de busca, cesta de modelos congelada (emenda 2) | sensibilidades: modelo + preço; modelo + ficha técnica |
| Valorização | V3_views_mediana_instagram | John Deere | 14997.0 | 35.1 | 100.0 | views | 12m, posts com views | |
| Valorização | V3_views_mediana_instagram | Case IH | 3480.0 | 8.14 | 42.9 | views | 12m, posts com views | |
| Valorização | V3_views_mediana_instagram | New Holland Agriculture | 7824.0 | 18.31 | 85.7 | views | 12m, posts com views | |
| Valorização | V3_views_mediana_instagram | Massey Ferguson | 3836.0 | 8.98 | 57.1 | views | 12m, posts com views | |
| Valorização | V3_views_mediana_instagram | Valtra | 1804.0 | 4.22 | 0.0 | views | 12m, posts com views | |
| Valorização | V3_views_mediana_instagram | Fendt | 2295.5 | 5.37 | 14.3 | views | 12m, posts com views | |
| Valorização | V3_views_mediana_instagram | Jacto | 2321.5 | 5.43 | 28.6 | views | 12m, posts com views | |
| Valorização | V3_views_mediana_instagram | Stara | 6173.0 | 14.45 | 71.4 | views | 12m, posts com views | |
| Valorização | V3_views_mediana_youtube | John Deere | 1947.5 | 11.97 | 85.7 | views | 12m | |
| Valorização | V3_views_mediana_youtube | Case IH | 807.0 | 4.96 | 0.0 | views | 12m | |
| Valorização | V3_views_mediana_youtube | New Holland Agriculture | 867.0 | 5.33 | 28.6 | views | 12m | |
| Valorização | V3_views_mediana_youtube | Massey Ferguson | 1471.0 | 9.04 | 71.4 | views | 12m | |
| Valorização | V3_views_mediana_youtube | Valtra | 1058.5 | 6.5 | 57.1 | views | 12m | |
| Valorização | V3_views_mediana_youtube | Fendt | 8316.0 | 51.1 | 100.0 | views | 12m | |
| Valorização | V3_views_mediana_youtube | Jacto | 842.0 | 5.17 | 14.3 | views | 12m | |
| Valorização | V3_views_mediana_youtube | Stara | 964.5 | 5.93 | 42.9 | views | 12m | |
| Valorização | V5_autoatendimento | John Deere | 1.0 | 13.33 | 78.6 | parcela de itens presentes entre verificáveis | auditoria automatizada e adjudicação R-V5 (14/09) | |
| Valorização | V5_autoatendimento | Case IH | 0.9 | 12.0 | 28.6 | parcela de itens presentes entre verificáveis | auditoria automatizada e adjudicação R-V5 (14/09) | |
| Valorização | V5_autoatendimento | New Holland Agriculture | 1.0 | 13.33 | 78.6 | parcela de itens presentes entre verificáveis | auditoria automatizada e adjudicação R-V5 (14/09) | |
| Valorização | V5_autoatendimento | Massey Ferguson | 0.8 | 10.67 | 0.0 | parcela de itens presentes entre verificáveis | auditoria automatizada e adjudicação R-V5 (14/09) | |
| Valorização | V5_autoatendimento | Valtra | 1.0 | 13.33 | 78.6 | parcela de itens presentes entre verificáveis | auditoria automatizada e adjudicação R-V5 (14/09) | |
| Valorização | V5_autoatendimento | Fendt | 0.9 | 12.0 | 28.6 | parcela de itens presentes entre verificáveis | auditoria automatizada e adjudicação R-V5 (14/09) | |
| Valorização | V5_autoatendimento | Jacto | 1.0 | 13.33 | 78.6 | parcela de itens presentes entre verificáveis | auditoria automatizada e adjudicação R-V5 (14/09) | |
| Valorização | V5_autoatendimento | Stara | 0.9 | 12.0 | 28.6 | parcela de itens presentes entre verificáveis | auditoria automatizada e adjudicação R-V5 (14/09) | |
| Valorização | V6a_desempenho_lab | John Deere | 38.65 | 9.21 | 14.3 | 0 a 100 | auditoria de desempenho de página, 3 páginas, 3 repetições, 2 estratégias | |
| Valorização | V6a_desempenho_lab | Case IH | 53.35 | 12.72 | 57.1 | 0 a 100 | auditoria de desempenho de página, 3 páginas, 3 repetições, 2 estratégias | |
| Valorização | V6a_desempenho_lab | New Holland Agriculture | 47.0 | 11.2 | 42.9 | 0 a 100 | auditoria de desempenho de página, 3 páginas, 3 repetições, 2 estratégias | |
| Valorização | V6a_desempenho_lab | Massey Ferguson | 45.25 | 10.79 | 28.6 | 0 a 100 | auditoria de desempenho de página, 3 páginas, 3 repetições, 2 estratégias | |
| Valorização | V6a_desempenho_lab | Valtra | 57.55 | 13.72 | 85.7 | 0 a 100 | auditoria de desempenho de página, 3 páginas, 3 repetições, 2 estratégias | |
| Valorização | V6a_desempenho_lab | Fendt | 56.9 | 13.56 | 71.4 | 0 a 100 | auditoria de desempenho de página, 3 páginas, 3 repetições, 2 estratégias | |
| Valorização | V6a_desempenho_lab | Jacto | 36.8 | 8.77 | 0.0 | 0 a 100 | auditoria de desempenho de página, 3 páginas, 3 repetições, 2 estratégias | |
| Valorização | V6a_desempenho_lab | Stara | 84.0 | 20.02 | 100.0 | 0 a 100 | auditoria de desempenho de página, 3 páginas, 3 repetições, 2 estratégias | |
| Valorização | V6b_acessibilidade | John Deere | 92.7 | 13.15 | 57.1 | 0 a 100 | auditoria de desempenho de página | |
| Valorização | V6b_acessibilidade | Case IH | 93.0 | 13.2 | 71.4 | 0 a 100 | auditoria de desempenho de página | |
| Valorização | V6b_acessibilidade | New Holland Agriculture | 93.85 | 13.32 | 100.0 | 0 a 100 | auditoria de desempenho de página | |
| Valorização | V6b_acessibilidade | Massey Ferguson | 79.5 | 11.28 | 14.3 | 0 a 100 | auditoria de desempenho de página | |
| Valorização | V6b_acessibilidade | Valtra | 89.5 | 12.7 | 42.9 | 0 a 100 | auditoria de desempenho de página | |
| Valorização | V6b_acessibilidade | Fendt | 93.7 | 13.3 | 85.7 | 0 a 100 | auditoria de desempenho de página | |
| Valorização | V6b_acessibilidade | Jacto | 74.15 | 10.52 | 0.0 | 0 a 100 | auditoria de desempenho de página | |
| Valorização | V6b_acessibilidade | Stara | 88.3 | 12.53 | 28.6 | 0 a 100 | auditoria de desempenho de página | |
| Valorização | V6c_cwv_campo_lcp_phone | John Deere | 46.8 | 27.73 | 0.0 | 0 a 100 a partir do LCP p75 celular | dados de campo de experiência de página API, 28 dias | diagnóstico; N/A para origens globais |
| Valorização | V6c_cwv_campo_lcp_phone | Case IH | | | | 0 a 100 a partir do LCP p75 celular | dados de campo de experiência de página API, 28 dias | diagnóstico; N/A para origens globais |
| Valorização | V6c_cwv_campo_lcp_phone | New Holland Agriculture | | | | 0 a 100 a partir do LCP p75 celular | dados de campo de experiência de página API, 28 dias | diagnóstico; N/A para origens globais |
| Valorização | V6c_cwv_campo_lcp_phone | Massey Ferguson | | | | 0 a 100 a partir do LCP p75 celular | dados de campo de experiência de página API, 28 dias | diagnóstico; N/A para origens globais |
| Valorização | V6c_cwv_campo_lcp_phone | Valtra | 58.36666666666667 | 34.58 | 50.0 | 0 a 100 a partir do LCP p75 celular | dados de campo de experiência de página API, 28 dias | diagnóstico; N/A para origens globais |
| Valorização | V6c_cwv_campo_lcp_phone | Fendt | | | | 0 a 100 a partir do LCP p75 celular | dados de campo de experiência de página API, 28 dias | diagnóstico; N/A para origens globais |
| Valorização | V6c_cwv_campo_lcp_phone | Jacto | | | | 0 a 100 a partir do LCP p75 celular | dados de campo de experiência de página API, 28 dias | diagnóstico; N/A para origens globais |
| Valorização | V6c_cwv_campo_lcp_phone | Stara | 63.6 | 37.69 | 100.0 | 0 a 100 a partir do LCP p75 celular | dados de campo de experiência de página API, 28 dias | diagnóstico; N/A para origens globais |
| Valorização | V7_ia_fonte_propria_pertinente | John Deere | 0.1139 | 32.66 | 100.0 | taxa de respostas com fonte própria pertinente (vertical agro e pertinência direta) | 4 superfícies da nota; codificação por revisores automáticos independentes, codebook e regras R1 a R7; parciais e não verificáveis como sensibilidade | |
| Valorização | V7_ia_fonte_propria_pertinente | Case IH | 0.0389 | 11.16 | 50.0 | taxa de respostas com fonte própria pertinente (vertical agro e pertinência direta) | 4 superfícies da nota; codificação por revisores automáticos independentes, codebook e regras R1 a R7; parciais e não verificáveis como sensibilidade | |
| Valorização | V7_ia_fonte_propria_pertinente | New Holland Agriculture | 0.0403 | 11.56 | 78.6 | taxa de respostas com fonte própria pertinente (vertical agro e pertinência direta) | 4 superfícies da nota; codificação por revisores automáticos independentes, codebook e regras R1 a R7; parciais e não verificáveis como sensibilidade | |
| Valorização | V7_ia_fonte_propria_pertinente | Massey Ferguson | 0.0361 | 10.35 | 21.4 | taxa de respostas com fonte própria pertinente (vertical agro e pertinência direta) | 4 superfícies da nota; codificação por revisores automáticos independentes, codebook e regras R1 a R7; parciais e não verificáveis como sensibilidade | |
| Valorização | V7_ia_fonte_propria_pertinente | Valtra | 0.0403 | 11.56 | 78.6 | taxa de respostas com fonte própria pertinente (vertical agro e pertinência direta) | 4 superfícies da nota; codificação por revisores automáticos independentes, codebook e regras R1 a R7; parciais e não verificáveis como sensibilidade | |
| Valorização | V7_ia_fonte_propria_pertinente | Fendt | 0.0042 | 1.2 | 0.0 | taxa de respostas com fonte própria pertinente (vertical agro e pertinência direta) | 4 superfícies da nota; codificação por revisores automáticos independentes, codebook e regras R1 a R7; parciais e não verificáveis como sensibilidade | |
| Valorização | V7_ia_fonte_propria_pertinente | Jacto | 0.0361 | 10.35 | 21.4 | taxa de respostas com fonte própria pertinente (vertical agro e pertinência direta) | 4 superfícies da nota; codificação por revisores automáticos independentes, codebook e regras R1 a R7; parciais e não verificáveis como sensibilidade | |
| Valorização | V7_ia_fonte_propria_pertinente | Stara | 0.0389 | 11.16 | 50.0 | taxa de respostas com fonte própria pertinente (vertical agro e pertinência direta) | 4 superfícies da nota; codificação por revisores automáticos independentes, codebook e regras R1 a R7; parciais e não verificáveis como sensibilidade | |
| Fidelidade | F1_cadencia_instagram | John Deere | 9.15 | 22.26 | 100.0 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_instagram | Case IH | 3.87 | 9.42 | 42.9 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_instagram | New Holland Agriculture | 3.28 | 7.98 | 14.3 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_instagram | Massey Ferguson | 7.19 | 17.49 | 85.7 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_instagram | Valtra | 6.6 | 16.06 | 71.4 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_instagram | Fendt | 2.65 | 6.45 | 0.0 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_instagram | Jacto | 3.45 | 8.39 | 28.6 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_instagram | Stara | 4.91 | 11.95 | 57.1 | peças/semana | 12m | |
| Fidelidade | F2_interacoes_mediana_instagram | John Deere | 529.0 | 20.56 | 85.7 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_instagram | Case IH | 264.5 | 10.28 | 57.1 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_instagram | New Holland Agriculture | 683.0 | 26.55 | 100.0 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_instagram | Massey Ferguson | 173.0 | 6.72 | 28.6 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_instagram | Valtra | 124.0 | 4.82 | 0.0 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_instagram | Fendt | 170.0 | 6.61 | 14.3 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_instagram | Jacto | 199.0 | 7.74 | 42.9 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_instagram | Stara | 430.0 | 16.72 | 71.4 | interações/peça | 12m | |
| Fidelidade | F3_taxa_por_1000_instagram | John Deere | 1.287 | 9.87 | 42.9 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_instagram | Case IH | 1.518 | 11.64 | 57.1 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_instagram | New Holland Agriculture | 2.668 | 20.46 | 85.7 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_instagram | Massey Ferguson | 1.053 | 8.08 | 14.3 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_instagram | Valtra | 1.018 | 7.81 | 0.0 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_instagram | Fendt | 1.632 | 12.52 | 71.4 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_instagram | Jacto | 1.177 | 9.03 | 28.6 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_instagram | Stara | 2.686 | 20.6 | 100.0 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F1_cadencia_facebook | John Deere | 7.77 | 18.89 | 85.7 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_facebook | Case IH | 3.89 | 9.46 | 42.9 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_facebook | New Holland Agriculture | 3.68 | 8.95 | 28.6 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_facebook | Massey Ferguson | 8.0 | 19.45 | 100.0 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_facebook | Valtra | 6.54 | 15.9 | 71.4 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_facebook | Fendt | 2.7 | 6.56 | 0.0 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_facebook | Jacto | 3.51 | 8.53 | 14.3 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_facebook | Stara | 5.04 | 12.25 | 57.1 | peças/semana | 12m | |
| Fidelidade | F2_interacoes_mediana_facebook | John Deere | 67.0 | 11.56 | 42.9 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_facebook | Case IH | 83.0 | 14.32 | 71.4 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_facebook | New Holland Agriculture | 128.5 | 22.17 | 100.0 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_facebook | Massey Ferguson | 27.0 | 4.66 | 0.0 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_facebook | Valtra | 38.0 | 6.56 | 14.3 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_facebook | Fendt | 50.0 | 8.63 | 28.6 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_facebook | Jacto | 75.0 | 12.94 | 57.1 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_facebook | Stara | 111.0 | 19.15 | 85.7 | interações/peça | 12m | |
| Fidelidade | F3_taxa_por_1000_facebook | John Deere | 0.01 | 0.73 | 0.0 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_facebook | Case IH | 0.067 | 4.89 | 42.9 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_facebook | New Holland Agriculture | 0.068 | 4.96 | 57.1 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_facebook | Massey Ferguson | 0.026 | 1.9 | 14.3 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_facebook | Valtra | 0.061 | 4.45 | 28.6 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_facebook | Fendt | 0.09 | 6.57 | 71.4 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_facebook | Jacto | 0.197 | 14.38 | 85.7 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_facebook | Stara | 0.851 | 62.12 | 100.0 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F1_cadencia_youtube | John Deere | 3.76 | 19.05 | 85.7 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_youtube | Case IH | 1.92 | 9.73 | 42.9 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_youtube | New Holland Agriculture | 3.84 | 19.45 | 100.0 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_youtube | Massey Ferguson | 3.03 | 15.35 | 64.3 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_youtube | Valtra | 1.73 | 8.76 | 28.6 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_youtube | Fendt | 0.82 | 4.15 | 0.0 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_youtube | Jacto | 1.61 | 8.16 | 14.3 | peças/semana | 12m | |
| Fidelidade | F1_cadencia_youtube | Stara | 3.03 | 15.35 | 64.3 | peças/semana | 12m | |
| Fidelidade | F2_interacoes_mediana_youtube | John Deere | 30.0 | 11.61 | 57.1 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_youtube | Case IH | 16.5 | 6.38 | 0.0 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_youtube | New Holland Agriculture | 23.5 | 9.09 | 28.6 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_youtube | Massey Ferguson | 27.0 | 10.44 | 42.9 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_youtube | Valtra | 57.5 | 22.24 | 100.0 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_youtube | Fendt | 53.0 | 20.5 | 85.7 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_youtube | Jacto | 19.0 | 7.35 | 14.3 | interações/peça | 12m | |
| Fidelidade | F2_interacoes_mediana_youtube | Stara | 32.0 | 12.38 | 71.4 | interações/peça | 12m | |
| Fidelidade | F3_taxa_por_1000_youtube | John Deere | 0.149 | 2.1 | 0.0 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_youtube | Case IH | 0.64 | 9.04 | 50.0 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_youtube | New Holland Agriculture | 0.513 | 7.24 | 33.3 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_youtube | Massey Ferguson | 0.281 | 3.97 | 16.7 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_youtube | Valtra | 3.71 | 52.38 | 100.0 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_youtube | Fendt | | | | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_youtube | Jacto | 0.751 | 10.6 | 66.7 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F3_taxa_por_1000_youtube | Stara | 1.039 | 14.67 | 83.3 | por 1.000 seguidores | 12m e snapshot | base mínima de 5 mil seguidores (regra 7.1 das regras unificadas v1.1); abaixo, N/A |
| Fidelidade | F5_resposta_da_marca | John Deere | 0.2344 | 9.14 | 71.4 | respostas da marca por comentário do público (emenda 3) | amostra estratificada, 27 a 28 posts por marca; taxa v3 por vínculo de @ como sensibilidade | |
| Fidelidade | F5_resposta_da_marca | Case IH | 0.8766 | 34.18 | 100.0 | respostas da marca por comentário do público (emenda 3) | amostra estratificada, 27 a 28 posts por marca; taxa v3 por vínculo de @ como sensibilidade | |
| Fidelidade | F5_resposta_da_marca | New Holland Agriculture | 0.8676 | 33.83 | 85.7 | respostas da marca por comentário do público (emenda 3) | amostra estratificada, 27 a 28 posts por marca; taxa v3 por vínculo de @ como sensibilidade | |
| Fidelidade | F5_resposta_da_marca | Massey Ferguson | 0.0781 | 3.05 | 0.0 | respostas da marca por comentário do público (emenda 3) | amostra estratificada, 27 a 28 posts por marca; taxa v3 por vínculo de @ como sensibilidade | |
| Fidelidade | F5_resposta_da_marca | Valtra | 0.1715 | 6.69 | 57.1 | respostas da marca por comentário do público (emenda 3) | amostra estratificada, 27 a 28 posts por marca; taxa v3 por vínculo de @ como sensibilidade | |
| Fidelidade | F5_resposta_da_marca | Fendt | 0.0805 | 3.14 | 14.3 | respostas da marca por comentário do público (emenda 3) | amostra estratificada, 27 a 28 posts por marca; taxa v3 por vínculo de @ como sensibilidade | |
| Fidelidade | F5_resposta_da_marca | Jacto | 0.1298 | 5.06 | 42.9 | respostas da marca por comentário do público (emenda 3) | amostra estratificada, 27 a 28 posts por marca; taxa v3 por vínculo de @ como sensibilidade | |
| Fidelidade | F5_resposta_da_marca | Stara | 0.1263 | 4.92 | 28.6 | respostas da marca por comentário do público (emenda 3) | amostra estratificada, 27 a 28 posts por marca; taxa v3 por vínculo de @ como sensibilidade | |

## sensibilidades v5

### base

| Marca | Valor |
|---|---|
| John Deere | 23.28 |
| Case IH | 10.08 |
| New Holland Agriculture | 13.83 |
| Massey Ferguson | 10.99 |
| Valtra | 10.72 |
| Fendt | 9.72 |
| Jacto | 9.17 |
| Stara | 12.5 |

### rank_base

| Marca | Valor |
|---|---|
| John Deere | 1 |
| New Holland Agriculture | 2 |
| Stara | 3 |
| Massey Ferguson | 4 |
| Valtra | 5 |
| Case IH | 6 |
| Fendt | 7 |
| Jacto | 8 |

### percentil

| Marca | Valor |
|---|---|
| John Deere | 76.06 |
| Case IH | 44.95 |
| New Holland Agriculture | 67.01 |
| Massey Ferguson | 45.42 |
| Valtra | 45.21 |
| Fendt | 33.6 |
| Jacto | 37.25 |
| Stara | 49.89 |

### sem_IA

| Marca | Valor |
|---|---|
| John Deere | 22.9 |
| Case IH | 10 |
| New Holland Agriculture | 13.87 |
| Massey Ferguson | 10.8 |
| Valtra | 10.62 |
| Fendt | 9.74 |
| Jacto | 9.58 |
| Stara | 12.77 |

### sem_facebook

| Marca | Valor |
|---|---|
| John Deere | 22.91 |
| Case IH | 10.4 |
| New Holland Agriculture | 14.27 |
| Massey Ferguson | 11.27 |
| Valtra | 11.64 |
| Fendt | 9.9 |
| Jacto | 9.03 |
| Stara | 11 |

### sem_Proeminência

| Marca | Valor |
|---|---|
| John Deere | 16.45 |
| Case IH | 10.43 |
| New Holland Agriculture | 14.81 |
| Massey Ferguson | 9.74 |
| Valtra | 12.09 |
| Fendt | 12.38 |
| Jacto | 9.16 |
| Stara | 15.36 |

### sem_Valorização

| Marca | Valor |
|---|---|
| John Deere | 24.76 |
| Case IH | 10.66 |
| New Holland Agriculture | 13.97 |
| Massey Ferguson | 11.31 |
| Valtra | 11.27 |
| Fendt | 6.37 |
| Jacto | 9.2 |
| Stara | 12.89 |

### sem_Fidelidade

| Marca | Valor |
|---|---|
| John Deere | 28.63 |
| Case IH | 9.15 |
| New Holland Agriculture | 12.71 |
| Massey Ferguson | 11.93 |
| Valtra | 8.79 |
| Fendt | 10.4 |
| Jacto | 9.14 |
| Stara | 9.24 |

### retirada_uma_submetrica_rank

| Chave | John Deere | Case IH | New Holland Agriculture | Massey Ferguson | Valtra | Fendt | Jacto | Stara |
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

### retirada_uma_submetrica_faixa

**John Deere**

- 1
- 1

**Case IH**

- 5
- 8

**New Holland Agriculture**

- 2
- 2

**Massey Ferguson**

- 3
- 5

**Valtra**

- 4
- 7

**Fendt**

- 6
- 8

**Jacto**

- 7
- 8

**Stara**

- 3
- 5

### pesos_aleatorios_dirichlet

**John Deere**

**posicao_modal**: 1

**parcela_na_posicao_modal**: 0.841

**distribuição**

| Chave | Valor |
|---|---|
| 1 | 0.841 |
| 2 | 0.098 |
| 3 | 0.035 |
| 4 | 0.016 |
| 5 | 0.007 |
| 6 | 0.002 |
| 7 | 0.001 |

**Case IH**

**posicao_modal**: 6

**parcela_na_posicao_modal**: 0.272

**distribuição**

| Chave | Valor |
|---|---|
| 2 | 0.004 |
| 3 | 0.031 |
| 4 | 0.17 |
| 5 | 0.232 |
| 6 | 0.272 |
| 7 | 0.201 |
| 8 | 0.09 |

**New Holland Agriculture**

**posicao_modal**: 2

**parcela_na_posicao_modal**: 0.503

**distribuição**

| Chave | Valor |
|---|---|
| 1 | 0.025 |
| 2 | 0.503 |
| 3 | 0.347 |
| 4 | 0.107 |
| 5 | 0.015 |
| 6 | 0.003 |

**Massey Ferguson**

**posicao_modal**: 4

**parcela_na_posicao_modal**: 0.197

**distribuição**

| Chave | Valor |
|---|---|
| 2 | 0.096 |
| 3 | 0.188 |
| 4 | 0.197 |
| 5 | 0.188 |
| 6 | 0.15 |
| 7 | 0.118 |
| 8 | 0.064 |

**Valtra**

**posicao_modal**: 6

**parcela_na_posicao_modal**: 0.246

**distribuição**

| Chave | Valor |
|---|---|
| 1 | 0.025 |
| 2 | 0.05 |
| 3 | 0.077 |
| 4 | 0.166 |
| 5 | 0.242 |
| 6 | 0.246 |
| 7 | 0.159 |
| 8 | 0.034 |

**Fendt**

**posicao_modal**: 8

**parcela_na_posicao_modal**: 0.457

**distribuição**

| Chave | Valor |
|---|---|
| 1 | 0.035 |
| 2 | 0.082 |
| 3 | 0.049 |
| 4 | 0.081 |
| 5 | 0.083 |
| 6 | 0.083 |
| 7 | 0.132 |
| 8 | 0.457 |

**Jacto**

**posicao_modal**: 8

**parcela_na_posicao_modal**: 0.334

**distribuição**

| Chave | Valor |
|---|---|
| 2 | 0.01 |
| 3 | 0.019 |
| 4 | 0.06 |
| 5 | 0.102 |
| 6 | 0.165 |
| 7 | 0.31 |
| 8 | 0.334 |

**Stara**

**posicao_modal**: 3

**parcela_na_posicao_modal**: 0.254

**distribuição**

| Chave | Valor |
|---|---|
| 1 | 0.074 |
| 2 | 0.158 |
| 3 | 0.254 |
| 4 | 0.203 |
| 5 | 0.132 |
| 6 | 0.08 |
| 7 | 0.08 |
| 8 | 0.021 |

### p1_dicionario_v1_sem_modelos

| Marca | Valor |
|---|---|
| John Deere | 23.36 |
| Case IH | 9.84 |
| New Holland Agriculture | 13.87 |
| Massey Ferguson | 11.02 |
| Valtra | 10.75 |
| Fendt | 9.72 |
| Jacto | 9.21 |
| Stara | 12.51 |

### p3_john_deere_sem_construcao_florestal

**parcela_agro_e_comum**: 0.8928

**total**

| Marca | Valor |
|---|---|
| John Deere | 23.19 |
| Case IH | 10.1 |
| New Holland Agriculture | 13.84 |
| Massey Ferguson | 11 |
| Valtra | 10.72 |
| Fendt | 9.72 |
| Jacto | 9.21 |
| Stara | 12.51 |

### v1_por_preco

| Marca | Valor |
|---|---|
| John Deere | 22.08 |
| Case IH | 10.09 |
| New Holland Agriculture | 12.97 |
| Massey Ferguson | 10.57 |
| Valtra | 12.29 |
| Fendt | 9.6 |
| Jacto | 9.43 |
| Stara | 13.25 |

### v1_por_ficha_tecnica

| Marca | Valor |
|---|---|
| John Deere | 21.1 |
| Case IH | 9.94 |
| New Holland Agriculture | 12.73 |
| Massey Ferguson | 11.75 |
| Valtra | 13.1 |
| Fendt | 9.54 |
| Jacto | 9.92 |
| Stara | 12.2 |

### f5_vinculo_por_arroba_v3

| Marca | Valor |
|---|---|
| John Deere | 23.92 |
| Case IH | 8.94 |
| New Holland Agriculture | 12.76 |
| Massey Ferguson | 11.18 |
| Valtra | 11.17 |
| Fendt | 9.93 |
| Jacto | 9.55 |
| Stara | 12.84 |

### cinco_marcas_do_piloto

| Marca | Valor |
|---|---|
| John Deere | 31.89 |
| Case IH | 15.3 |
| New Holland Agriculture | 20.42 |
| Massey Ferguson | 16 |
| Valtra | 16.4 |

### ia_pesos_por_uso

| Marca | Valor |
|---|---|
| John Deere | 23.41 |
| Case IH | 10.04 |
| New Holland Agriculture | 13.88 |
| Massey Ferguson | 10.99 |
| Valtra | 10.62 |
| Fendt | 9.75 |
| Jacto | 9.18 |
| Stara | 12.42 |

### ia_5_superficies_com_aio

| Marca | Valor |
|---|---|
| John Deere | 23.3 |
| Case IH | 10.06 |
| New Holland Agriculture | 13.81 |
| Massey Ferguson | 10.97 |
| Valtra | 10.71 |
| Fendt | 9.7 |
| Jacto | 9.16 |
| Stara | 12.57 |

### ia_pesos_por_uso_e_aio

| Marca | Valor |
|---|---|
| John Deere | 23.4 |
| Case IH | 10.02 |
| New Holland Agriculture | 13.83 |
| Massey Ferguson | 10.96 |
| Valtra | 10.65 |
| Fendt | 9.72 |
| Jacto | 9.15 |
| Stara | 12.55 |

### p6_calibrado_precisao_0_83

| Marca | Valor |
|---|---|
| John Deere | 23.28 |
| Case IH | 10.08 |
| New Holland Agriculture | 13.83 |
| Massey Ferguson | 10.99 |
| Valtra | 10.72 |
| Fendt | 9.72 |
| Jacto | 9.17 |
| Stara | 12.5 |

### imprensa_desduplicada_por_lide

**materias_removidas**: 5

**total**

| Marca | Valor |
|---|---|
| John Deere | 23.31 |
| Case IH | 10.11 |
| New Holland Agriculture | 13.84 |
| Massey Ferguson | 11.05 |
| Valtra | 10.7 |
| Fendt | 9.59 |
| Jacto | 9.17 |
| Stara | 12.53 |

### ordem_por_cenario

**base**

- John Deere
- New Holland Agriculture
- Stara
- Massey Ferguson
- Valtra
- Case IH
- Fendt
- Jacto

**percentil**

- John Deere
- New Holland Agriculture
- Stara
- Massey Ferguson
- Valtra
- Case IH
- Jacto
- Fendt

**sem_IA**

- John Deere
- New Holland Agriculture
- Stara
- Massey Ferguson
- Valtra
- Case IH
- Fendt
- Jacto

**sem_facebook**

- John Deere
- New Holland Agriculture
- Valtra
- Massey Ferguson
- Stara
- Case IH
- Fendt
- Jacto

**sem_Proeminência**

- John Deere
- Stara
- New Holland Agriculture
- Fendt
- Valtra
- Case IH
- Massey Ferguson
- Jacto

**sem_Valorização**

- John Deere
- New Holland Agriculture
- Stara
- Massey Ferguson
- Valtra
- Case IH
- Jacto
- Fendt

**sem_Fidelidade**

- John Deere
- New Holland Agriculture
- Massey Ferguson
- Fendt
- Stara
- Case IH
- Jacto
- Valtra

**p1_dicionario_v1_sem_modelos**

- John Deere
- New Holland Agriculture
- Stara
- Massey Ferguson
- Valtra
- Case IH
- Fendt
- Jacto

**v1_por_preco**

- John Deere
- Stara
- New Holland Agriculture
- Valtra
- Massey Ferguson
- Case IH
- Fendt
- Jacto

**v1_por_ficha_tecnica**

- John Deere
- Valtra
- New Holland Agriculture
- Stara
- Massey Ferguson
- Case IH
- Jacto
- Fendt

**f5_vinculo_por_arroba_v3**

- John Deere
- Stara
- New Holland Agriculture
- Massey Ferguson
- Valtra
- Fendt
- Jacto
- Case IH

**ia_pesos_por_uso**

- John Deere
- New Holland Agriculture
- Stara
- Massey Ferguson
- Valtra
- Case IH
- Fendt
- Jacto

**ia_5_superficies_com_aio**

- John Deere
- New Holland Agriculture
- Stara
- Massey Ferguson
- Valtra
- Case IH
- Fendt
- Jacto

**ia_pesos_por_uso_e_aio**

- John Deere
- New Holland Agriculture
- Stara
- Massey Ferguson
- Valtra
- Case IH
- Fendt
- Jacto

**p6_calibrado_precisao_0_83**

- John Deere
- New Holland Agriculture
- Stara
- Massey Ferguson
- Valtra
- Case IH
- Fendt
- Jacto

**p3_john_deere_sem_construcao_florestal**

- John Deere
- New Holland Agriculture
- Stara
- Massey Ferguson
- Valtra
- Case IH
- Fendt
- Jacto

**imprensa_desduplicada_por_lide**

- John Deere
- New Holland Agriculture
- Stara
- Massey Ferguson
- Valtra
- Case IH
- Fendt
- Jacto

**cinco_marcas_do_piloto**

- John Deere
- New Holland Agriculture
- Valtra
- Massey Ferguson
- Case IH

**v7_na_nota**

- John Deere
- New Holland Agriculture
- Stara
- Massey Ferguson
- Valtra
- Case IH
- Jacto
- Fendt

**f3_sem_base_minima**

- John Deere
- New Holland Agriculture
- Fendt
- Stara
- Massey Ferguson
- Case IH
- Valtra
- Jacto

**zscore_winsorizado_p10_p90**

- John Deere
- New Holland Agriculture
- Stara
- Massey Ferguson
- Valtra
- Case IH
- Fendt
- Jacto

**f3_base_minima_5mil_seguidores**

- John Deere
- New Holland Agriculture
- Stara
- Massey Ferguson
- Valtra
- Case IH
- Fendt
- Jacto

**p1_com_modelos_v1_1**

- John Deere
- New Holland Agriculture
- Stara
- Massey Ferguson
- Valtra
- Case IH
- Fendt
- Jacto

**p6_protagonismo_earned_mais_release**

- John Deere
- New Holland Agriculture
- Stara
- Massey Ferguson
- Valtra
- Case IH
- Fendt
- Jacto

**v3_sem_pecas_com_views_acima_de_20x_base**

- John Deere
- New Holland Agriculture
- Stara
- Massey Ferguson
- Valtra
- Case IH
- Jacto
- Fendt

**p4_ponderado_por_volume**

- John Deere
- New Holland Agriculture
- Stara
- Massey Ferguson
- Valtra
- Case IH
- Fendt
- Jacto

**p4_familia_pulverizacao_plantio**

- John Deere
- New Holland Agriculture
- Stara
- Massey Ferguson
- Valtra
- Case IH
- Fendt
- Jacto

**p4_familia_tratores_colheitadeiras**

- John Deere
- New Holland Agriculture
- Stara
- Massey Ferguson
- Valtra
- Case IH
- Fendt
- Jacto

### v7_na_nota

| Marca | Valor |
|---|---|
| John Deere | 23.87 |
| Case IH | 10.19 |
| New Holland Agriculture | 13.74 |
| Massey Ferguson | 10.99 |
| Valtra | 10.81 |
| Fendt | 8.99 |
| Jacto | 9.23 |
| Stara | 12.47 |

### f3_sem_base_minima

| Marca | Valor |
|---|---|
| John Deere | 23.22 |
| Case IH | 9.81 |
| New Holland Agriculture | 13.62 |
| Massey Ferguson | 10.87 |
| Valtra | 9.16 |
| Fendt | 12.41 |
| Jacto | 8.85 |
| Stara | 12.06 |

### zscore_winsorizado_p10_p90

| Marca | Valor |
|---|---|
| John Deere | 0.811 |
| Case IH | -0.193 |
| New Holland Agriculture | 0.482 |
| Massey Ferguson | -0.089 |
| Valtra | -0.123 |
| Fendt | -0.46 |
| Jacto | -0.462 |
| Stara | 0.016 |

### f3_base_minima_5mil_seguidores

| Marca | Valor |
|---|---|
| John Deere | 23.28 |
| Case IH | 10.08 |
| New Holland Agriculture | 13.83 |
| Massey Ferguson | 10.99 |
| Valtra | 10.72 |
| Fendt | 9.72 |
| Jacto | 9.17 |
| Stara | 12.5 |

### p1_com_modelos_v1_1

| Marca | Valor |
|---|---|
| John Deere | 23.28 |
| Case IH | 10.09 |
| New Holland Agriculture | 13.85 |
| Massey Ferguson | 10.97 |
| Valtra | 10.7 |
| Fendt | 9.73 |
| Jacto | 9.16 |
| Stara | 12.5 |

### p6_protagonismo_earned_mais_release

| Marca | Valor |
|---|---|
| John Deere | 23.3 |
| Case IH | 10.09 |
| New Holland Agriculture | 13.81 |
| Massey Ferguson | 11.01 |
| Valtra | 10.72 |
| Fendt | 9.68 |
| Jacto | 9.18 |
| Stara | 12.5 |

### v3_sem_pecas_com_views_acima_de_20x_base

| Marca | Valor |
|---|---|
| John Deere | 23.83 |
| Case IH | 10.31 |
| New Holland Agriculture | 14.08 |
| Massey Ferguson | 11.34 |
| Valtra | 10.94 |
| Fendt | 7.61 |
| Jacto | 9.4 |
| Stara | 12.77 |

### p4_ponderado_por_volume

| Marca | Valor |
|---|---|
| John Deere | 23.79 |
| Case IH | 10 |
| New Holland Agriculture | 13.82 |
| Massey Ferguson | 10.81 |
| Valtra | 10.47 |
| Fendt | 9.67 |
| Jacto | 9.26 |
| Stara | 12.46 |

### p4_familia_pulverizacao_plantio

| Marca | Valor |
|---|---|
| John Deere | 23.26 |
| Case IH | 10.08 |
| New Holland Agriculture | 13.54 |
| Massey Ferguson | 10.74 |
| Valtra | 10.42 |
| Fendt | 9.66 |
| Jacto | 9.18 |
| Stara | 13.4 |

### p4_familia_tratores_colheitadeiras

| Marca | Valor |
|---|---|
| John Deere | 23.38 |
| Case IH | 10.12 |
| New Holland Agriculture | 14.01 |
| Massey Ferguson | 11.17 |
| Valtra | 10.94 |
| Fendt | 9.73 |
| Jacto | 9.03 |
| Stara | 11.91 |

### bootstrap_conjunto_probabilidade_por_posição

| Marca | 1 | 6 | 7 | 8 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|---|---|
| John Deere | 1 | | | | | | | |
| Case IH | | 0.073 | 0.417 | 0.51 | | | | |
| New Holland Agriculture | | | | | 0.987 | 0.013 | | |
| Massey Ferguson | | 0.01 | | | | 0.037 | 0.713 | 0.24 |
| Valtra | | 0.19 | 0.007 | | | | 0.14 | 0.663 |
| Fendt | | 0.327 | 0.063 | 0.413 | | | 0.11 | 0.087 |
| Jacto | | 0.4 | 0.513 | 0.077 | | | | 0.01 |
| Stara | | | | | 0.013 | 0.95 | 0.037 | |

## painel v3 total participação

| Marca | Valor |
|---|---|
| John Deere | 23.81 |
| Case IH | 9.92 |
| New Holland Agriculture | 13.52 |
| Massey Ferguson | 10.85 |
| Valtra | 9.26 |
| Fendt | 11.68 |
| Jacto | 8.91 |
| Stara | 12.04 |

## ia por marca

| marca | mencao_AI Overview | primeira_AI Overview | url_propria_AI Overview | n_AI Overview | mencao_ChatGPT | primeira_ChatGPT | url_propria_ChatGPT | n_ChatGPT | mencao_Claude | primeira_Claude | url_propria_Claude | n_Claude | mencao_Copilot | primeira_Copilot | url_propria_Copilot | n_Copilot | mencao_Gemini | primeira_Gemini | url_propria_Gemini | n_Gemini | mencao_media_superficies_nota | primeira_media_superficies_nota | url_propria_media_superficies_nota | ic95_menção |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| John Deere | 0.5657 | 0.3943 | 0.1086 | 175.0 | 0.6389 | 0.4167 | 0.3667 | 180.0 | 0.6611 | 0.4389 | 0.0889 | 180.0 | 0.5944 | 0.4333 | 0.0444 | 180.0 | 0.6667 | 0.4278 | 0.0556 | 180.0 | 0.6403 | 0.4292 | 0.1389 | 0.546 a 0.735 |
| Case IH | 0.2743 | 0.0229 | 0.0343 | 175.0 | 0.4111 | 0.0167 | 0.1 | 180.0 | 0.5222 | 0.0278 | 0.0167 | 180.0 | 0.4333 | 0.05 | 0.0389 | 180.0 | 0.5 | 0.0222 | 0.0611 | 180.0 | 0.4667 | 0.0292 | 0.0542 | 0.364 a 0.564 |
| New Holland Agriculture | 0.32 | 0.0343 | 0.0 | 175.0 | 0.4722 | 0.0333 | 0.1556 | 180.0 | 0.4944 | 0.0389 | 0.0056 | 180.0 | 0.4611 | 0.0333 | 0.0111 | 180.0 | 0.4889 | 0.0722 | 0.0167 | 180.0 | 0.4792 | 0.0444 | 0.0473 | 0.376 a 0.583 |
| Massey Ferguson | 0.3429 | 0.08 | 0.0343 | 175.0 | 0.3833 | 0.1111 | 0.1 | 180.0 | 0.5167 | 0.1389 | 0.0444 | 180.0 | 0.4667 | 0.0889 | 0.0 | 180.0 | 0.4667 | 0.0944 | 0.0222 | 180.0 | 0.4584 | 0.1083 | 0.0416 | 0.360 a 0.560 |
| Valtra | 0.2571 | 0.0343 | 0.04 | 175.0 | 0.2833 | 0.0222 | 0.05 | 180.0 | 0.4722 | 0.0444 | 0.0556 | 180.0 | 0.3778 | 0.05 | 0.0333 | 180.0 | 0.3889 | 0.0167 | 0.0333 | 180.0 | 0.3805 | 0.0333 | 0.0431 | 0.294 a 0.469 |
| Fendt | 0.0743 | 0.0114 | 0.0 | 175.0 | 0.1667 | 0.0278 | 0.0167 | 180.0 | 0.1278 | 0.0167 | 0.0056 | 180.0 | 0.1611 | 0.0278 | 0.0 | 180.0 | 0.1222 | 0.0167 | 0.0 | 180.0 | 0.1444 | 0.0222 | 0.0056 | 0.093 a 0.203 |
| Jacto | 0.08 | 0.0343 | 0.0286 | 175.0 | 0.0944 | 0.0278 | 0.0556 | 180.0 | 0.1667 | 0.0278 | 0.0722 | 180.0 | 0.1167 | 0.0222 | 0.0056 | 180.0 | 0.1556 | 0.0667 | 0.0278 | 180.0 | 0.1333 | 0.0361 | 0.0403 | 0.071 a 0.200 |
| Stara | 0.1943 | 0.0629 | 0.1543 | 175.0 | 0.1 | 0.0 | 0.0889 | 180.0 | 0.1722 | 0.0278 | 0.0111 | 180.0 | 0.1667 | 0.0278 | 0.0389 | 180.0 | 0.1389 | 0.0222 | 0.0556 | 180.0 | 0.1444 | 0.0194 | 0.0486 | 0.076 a 0.224 |

## v7 adjudicado

| marca | v7_conservador_Claude | v7_com_parcial_Claude | v7_nv_como_valido_Claude | v7_conservador_ChatGPT | v7_com_parcial_ChatGPT | v7_nv_como_valido_ChatGPT | v7_conservador_Gemini | v7_com_parcial_Gemini | v7_nv_como_valido_Gemini | v7_conservador_Copilot | v7_com_parcial_Copilot | v7_nv_como_valido_Copilot | v7_conservador_AI Overview | v7_com_parcial_AI Overview | v7_nv_como_valido_AI Overview | v7_conservador_media_nota | v7_com_parcial_media_nota | v7_nv_como_valido_media_nota | ic95_conservador |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| John Deere | 0.0667 | 0.0889 | 0.0667 | 0.2889 | 0.3667 | 0.2889 | 0.0556 | 0.0556 | 0.0556 | 0.0444 | 0.0444 | 0.0444 | 0.0686 | 0.0743 | 0.0686 | 0.1139 | 0.1389 | 0.1139 | 0.075 a 0.156 |
| Case IH | 0.0 | 0.0 | 0.0167 | 0.0833 | 0.1 | 0.0833 | 0.0556 | 0.0611 | 0.0556 | 0.0167 | 0.0333 | 0.0222 | 0.0229 | 0.0343 | 0.0229 | 0.0389 | 0.0486 | 0.0444 | 0.019 a 0.062 |
| New Holland Agriculture | 0.0056 | 0.0056 | 0.0056 | 0.1278 | 0.1556 | 0.1278 | 0.0167 | 0.0167 | 0.0167 | 0.0111 | 0.0111 | 0.0111 | 0.0 | 0.0 | 0.0 | 0.0403 | 0.0473 | 0.0403 | 0.024 a 0.061 |
| Massey Ferguson | 0.0444 | 0.0444 | 0.0444 | 0.0778 | 0.1 | 0.0778 | 0.0222 | 0.0222 | 0.0222 | 0.0 | 0.0 | 0.0 | 0.0343 | 0.0343 | 0.0343 | 0.0361 | 0.0416 | 0.0361 | 0.017 a 0.057 |
| Valtra | 0.05 | 0.0556 | 0.05 | 0.05 | 0.05 | 0.05 | 0.0278 | 0.0333 | 0.0278 | 0.0333 | 0.0333 | 0.0333 | 0.04 | 0.04 | 0.04 | 0.0403 | 0.0431 | 0.0403 | 0.015 a 0.072 |
| Fendt | 0.0 | 0.0056 | 0.0 | 0.0167 | 0.0167 | 0.0167 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0042 | 0.0056 | 0.0042 | 0.000 a 0.010 |
| Jacto | 0.0667 | 0.0722 | 0.0667 | 0.0444 | 0.0444 | 0.0556 | 0.0278 | 0.0278 | 0.0278 | 0.0056 | 0.0056 | 0.0056 | 0.0229 | 0.0286 | 0.0229 | 0.0361 | 0.0375 | 0.0389 | 0.014 a 0.064 |
| Stara | 0.0111 | 0.0111 | 0.0111 | 0.05 | 0.0889 | 0.05 | 0.0556 | 0.0556 | 0.0556 | 0.0389 | 0.0389 | 0.0389 | 0.12 | 0.1543 | 0.12 | 0.0389 | 0.0486 | 0.0389 | 0.017 a 0.065 |

## v7 resumo codificação

**linhas_fila**: 541

**pares_codificados**: 380

### status_por_linha

| Chave | Valor |
|---|---|
| elegivel | 419 |
| parcial | 99 |
| nao_verificavel | 7 |
| inelegivel | 16 |

## perguntas ia

| bloco | titulo | perguntas |
|---|---|---|
| decisao_categoria | Decisão e categoria | ['Quais fabricantes de máquinas agrícolas são referência no Brasil?', 'Quais são as marcas de tratores mais recomendadas no Brasil?', 'Qual fabricante de máquinas agrícolas é mais confiável?', 'Quais marcas de colheitadeiras são as melhores no Brasil?', 'Qual marca de trator tem a melhor rede de concessionárias no Brasil?', 'Qual marca de máquina agrícola tem a melhor assistência técnica?', 'Qual marca de trator tem melhor revenda na hora de vender usado?', 'Quais fabricantes de máquinas agrícolas produzem no Brasil?', 'Qual marca de máquina agrícola tem peças mais fáceis de encontrar?', 'Qual fabricante de máquinas agrícolas tem a tecnologia mais avançada?', 'Quais marcas de pulverizadores autopropelidos são as melhores?', 'Quais marcas de plantadeiras são as mais usadas no Brasil?'] |
| tratores | Tratores | ['Qual o melhor trator para pequena propriedade?', 'Qual o melhor trator de 100 cavalos do mercado?', 'Qual o melhor trator para soja e milho em grande área?', 'Qual trator tem menor consumo de diesel?', 'Qual trator tem a melhor cabine e conforto para o operador?', 'Qual trator vale mais a pena comprar hoje no Brasil?', 'Qual a diferença entre um trator 4x4 e 4x2 para o produtor?', 'Qual trator é melhor para cana de açúcar?', 'Qual trator é melhor para café?', 'Qual trator é melhor para pecuária e pastagem?', 'Quanto custa um trator novo de 75 cavalos?', 'Trator novo ou usado: o que vale mais a pena para o produtor?'] |
| colheita_pulverização | Colheita e pulverização | ['Qual a melhor colheitadeira de soja do mercado?', 'Qual colheitadeira tem menor perda na colheita?', 'Qual a melhor colheitadeira para pequena e média propriedade?', 'Qual a melhor colhedora de cana de açúcar?', 'Qual a melhor colhedora de café?', 'Qual o melhor pulverizador autopropelido do Brasil?', 'Qual pulverizador tem a melhor tecnologia de aplicação?', 'Pulverizador autopropelido ou de arrasto: qual escolher?', 'Como reduzir perdas na colheita de soja?', 'Qual plataforma de corte é melhor para soja?'] |
| plantio_precisao_outras | Plantio, precisão e outras culturas | ['Qual a melhor plantadeira de precisão para soja?', 'Qual a melhor semeadora para plantio direto?', 'Qual a melhor plantadeira para milho?', 'Qual sistema de piloto automático agrícola é melhor?', 'Vale a pena investir em agricultura de precisão na fazenda?', 'Qual marca tem a melhor telemetria para máquinas agrícolas?', 'Como escolher um distribuidor de fertilizante e calcário?', 'Quais máquinas são essenciais para uma fazenda de grãos?', 'Qual a melhor máquina para o algodão?', 'Qual a melhor máquina para irrigação e manejo em hortaliças?'] |
| confianca_compra_posvenda_digital | Confiança, compra, pós-venda e digital | ['Como saber se uma marca de máquina agrícola é confiável?', 'Quais fontes consultar antes de comprar um trator?', 'Vale a pena pagar mais por um trator premium?', 'Como financiar um trator pelo Plano Safra?', 'Consórcio de máquinas agrícolas vale a pena?', 'Qual a taxa de juros do Moderfrota hoje?', 'Como escolher uma concessionária de máquinas agrícolas?', 'O que verificar na garantia de uma máquina agrícola?', 'Quanto custa a manutenção anual de um trator?', 'Onde comprar peças originais para máquinas agrícolas?', 'Qual fabricante oferece o melhor treinamento para operadores?', 'Quais aplicativos ajudam a gerenciar máquinas agrícolas?', 'Como funciona o monitoramento remoto de máquinas agrícolas?', 'Quais marcas de máquinas agrícolas têm as melhores inovações lançadas na Agrishow?', 'Qual marca de máquina agrícola tem o melhor conteúdo técnico na internet?', 'Onde encontrar a ficha técnica de tratores e colheitadeiras?'] |

## ia por bloco

### decisao_categoria

| Marca | menção | primeira | n |
|---|---|---|---|
| John Deere | 0.9931 | 0.7361 | 144 |
| Case IH | 0.8958 | 0.0069 | 144 |
| New Holland Agriculture | 0.8819 | 0.0069 | 144 |
| Massey Ferguson | 0.8819 | 0.1806 | 144 |
| Valtra | 0.7569 | 0 | 144 |
| Fendt | 0.3056 | 0.0069 | 144 |
| Jacto | 0.2778 | 0.0347 | 144 |
| Stara | 0.3472 | 0.0208 | 144 |

### tratores

| Marca | menção | primeira | n |
|---|---|---|---|
| John Deere | 0.6528 | 0.2153 | 144 |
| Case IH | 0.3264 | 0.0278 | 144 |
| New Holland Agriculture | 0.5625 | 0.0625 | 144 |
| Massey Ferguson | 0.6181 | 0.3056 | 144 |
| Valtra | 0.5694 | 0.1181 | 144 |
| Fendt | 0.1528 | 0.0903 | 144 |
| Jacto | 0 | 0 | 144 |
| Stara | 0 | 0 | 144 |

### colheita_pulverização

| Marca | menção | primeira | n |
|---|---|---|---|
| John Deere | 0.6417 | 0.3333 | 120 |
| Case IH | 0.575 | 0.0917 | 120 |
| New Holland Agriculture | 0.35 | 0.1417 | 120 |
| Massey Ferguson | 0.225 | 0.0333 | 120 |
| Valtra | 0.0833 | 0 | 120 |
| Fendt | 0.0417 | 0 | 120 |
| Jacto | 0.275 | 0.1333 | 120 |
| Stara | 0.1917 | 0.05 | 120 |

### plantio_precisao_outras

| Marca | menção | primeira | n |
|---|---|---|---|
| John Deere | 0.4917 | 0.4583 | 120 |
| Case IH | 0.175 | 0 | 120 |
| New Holland Agriculture | 0.1333 | 0 | 120 |
| Massey Ferguson | 0.1333 | 0 | 120 |
| Valtra | 0.1417 | 0.025 | 120 |
| Fendt | 0.0583 | 0.0083 | 120 |
| Jacto | 0.0583 | 0 | 120 |
| Stara | 0.2083 | 0.0333 | 120 |

### confianca_compra_posvenda_digital

| Marca | menção | primeira | n |
|---|---|---|---|
| John Deere | 0.4583 | 0.401 | 192 |
| Case IH | 0.3646 | 0.026 | 192 |
| New Holland Agriculture | 0.4115 | 0.026 | 192 |
| Massey Ferguson | 0.3698 | 0.0208 | 192 |
| Valtra | 0.2917 | 0.0208 | 192 |
| Fendt | 0.1354 | 0.0052 | 192 |
| Jacto | 0.0833 | 0.026 | 192 |
| Stara | 0.0312 | 0.0052 | 192 |

## ai overview 60 perguntas

| Marca | menção | primeira | n |
|---|---|---|---|
| John Deere | 0.5657 | 0.3943 | 175 |
| Case IH | 0.2743 | 0.0229 | 175 |
| New Holland Agriculture | 0.32 | 0.0343 | 175 |
| Massey Ferguson | 0.3429 | 0.08 | 175 |
| Valtra | 0.2571 | 0.0343 | 175 |
| Fendt | 0.0743 | 0.0114 | 175 |
| Jacto | 0.08 | 0.0343 | 175 |
| Stara | 0.1943 | 0.0629 | 175 |

## ia menção por pergunta

| idx | bloco | pergunta | John Deere | Case IH | New Holland Agriculture | Massey Ferguson | Valtra | Fendt | Jacto | Stara |
|---|---|---|---|---|---|---|---|---|---|---|
| 0 | decisao_categoria | Quais fabricantes de máquinas agrícolas são referência no Brasil? | 1 | 1 | 1 | 1 | 1 | 0.5833 | 0.9167 | 0.5833 |
| 1 | decisao_categoria | Quais são as marcas de tratores mais recomendadas no Brasil? | 1 | 1 | 1 | 1 | 1 | 0.1667 | 0.25 | 0.25 |
| 2 | decisao_categoria | Qual fabricante de máquinas agrícolas é mais confiável? | 1 | 1 | 1 | 1 | 0.6667 | 0.5 | 0 | 0 |
| 3 | decisao_categoria | Quais marcas de colheitadeiras são as melhores no Brasil? | 1 | 1 | 1 | 1 | 0.75 | 0.5 | 0.25 | 0.1667 |
| 4 | decisao_categoria | Qual marca de trator tem a melhor rede de concessionárias no Brasil? | 1 | 0.5 | 1 | 1 | 0.75 | 0.0833 | 0 | 0.1667 |
| 5 | decisao_categoria | Qual marca de máquina agrícola tem a melhor assistência técnica? | 1 | 0.9167 | 0.9167 | 1 | 0.6667 | 0 | 0 | 0.0833 |
| 6 | decisao_categoria | Qual marca de trator tem melhor revenda na hora de vender usado? | 0.9167 | 0.6667 | 0.9167 | 0.9167 | 0.8333 | 0 | 0 | 0 |
| 7 | decisao_categoria | Quais fabricantes de máquinas agrícolas produzem no Brasil? | 1 | 1 | 1 | 1 | 1 | 0.5 | 0.9167 | 0.8333 |
| 8 | decisao_categoria | Qual marca de máquina agrícola tem peças mais fáceis de encontrar? | 1 | 0.8333 | 0.9167 | 1 | 0.8333 | 0.0833 | 0.0833 | 0.0833 |
| 9 | decisao_categoria | Qual fabricante de máquinas agrícolas tem a tecnologia mais avançada? | 1 | 1 | 1 | 0.5 | 0.4167 | 1 | 0 | 0 |
| 10 | decisao_categoria | Quais marcas de pulverizadores autopropelidos são as melhores? | 1 | 1 | 0.3333 | 0.4167 | 0.4167 | 0.0833 | 0.9167 | 1 |
| 11 | decisao_categoria | Quais marcas de plantadeiras são as mais usadas no Brasil? | 1 | 0.8333 | 0.5 | 0.75 | 0.75 | 0.1667 | 0 | 1 |
| 12 | tratores | Qual o melhor trator para pequena propriedade? | 0.75 | 0.0833 | 0.25 | 0.6667 | 0.25 | 0 | 0 | 0 |
| 13 | tratores | Qual o melhor trator de 100 cavalos do mercado? | 0.9167 | 0.6667 | 0.6667 | 0.8333 | 0.6667 | 0.0833 | 0 | 0 |
| 14 | tratores | Qual o melhor trator para soja e milho em grande área? | 1 | 1 | 0.9167 | 0.5833 | 0.6667 | 0.3333 | 0 | 0 |
| 15 | tratores | Qual trator tem menor consumo de diesel? | 0.6667 | 0.1667 | 0.6667 | 0.9167 | 0.3333 | 0.5 | 0 | 0 |
| 16 | tratores | Qual trator tem a melhor cabine e conforto para o operador? | 0.75 | 0.5833 | 1 | 0.5 | 0.6667 | 0.5 | 0 | 0 |
| 17 | tratores | Qual trator vale mais a pena comprar hoje no Brasil? | 0.9167 | 0.3333 | 0.9167 | 1 | 1 | 0.4167 | 0 | 0 |
| 18 | tratores | Qual a diferença entre um trator 4x4 e 4x2 para o produtor? | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 19 | tratores | Qual trator é melhor para cana de açúcar? | 0.75 | 0.6667 | 0.3333 | 0.6667 | 0.9167 | 0 | 0 | 0 |
| 20 | tratores | Qual trator é melhor para café? | 0.3333 | 0.0833 | 0.5 | 0.9167 | 1 | 0 | 0 | 0 |
| 21 | tratores | Qual trator é melhor para pecuária e pastagem? | 0.9167 | 0.0833 | 0.9167 | 0.9167 | 0.75 | 0 | 0 | 0 |
| 22 | tratores | Quanto custa um trator novo de 75 cavalos? | 0.8333 | 0.25 | 0.5833 | 0.4167 | 0.5833 | 0 | 0 | 0 |
| 23 | tratores | Trator novo ou usado: o que vale mais a pena para o produtor? | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 24 | colheita_pulverização | Qual a melhor colheitadeira de soja do mercado? | 1 | 1 | 1 | 0.5833 | 0.1667 | 0.25 | 0 | 0 |
| 25 | colheita_pulverização | Qual colheitadeira tem menor perda na colheita? | 1 | 0.8333 | 0.8333 | 0.3333 | 0 | 0.1667 | 0 | 0 |
| 26 | colheita_pulverização | Qual a melhor colheitadeira para pequena e média propriedade? | 1 | 0.5 | 0.8333 | 0.9167 | 0.3333 | 0 | 0.0833 | 0 |
| 27 | colheita_pulverização | Qual a melhor colhedora de cana de açúcar? | 1 | 0.8333 | 0.0833 | 0 | 0 | 0 | 0.3333 | 0 |
| 28 | colheita_pulverização | Qual a melhor colhedora de café? | 0 | 0.6667 | 0 | 0 | 0 | 0 | 0.9167 | 0 |
| 29 | colheita_pulverização | Qual o melhor pulverizador autopropelido do Brasil? | 0.8333 | 0.8333 | 0.1667 | 0.1667 | 0.0833 | 0 | 0.75 | 0.9167 |
| 30 | colheita_pulverização | Qual pulverizador tem a melhor tecnologia de aplicação? | 0.75 | 0.3333 | 0.0833 | 0 | 0 | 0 | 0.6667 | 0.75 |
| 31 | colheita_pulverização | Pulverizador autopropelido ou de arrasto: qual escolher? | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0.25 |
| 32 | colheita_pulverização | Como reduzir perdas na colheita de soja? | 0.0833 | 0.0833 | 0.0833 | 0 | 0 | 0 | 0 | 0 |
| 33 | colheita_pulverização | Qual plataforma de corte é melhor para soja? | 0.75 | 0.6667 | 0.4167 | 0.25 | 0.25 | 0 | 0 | 0 |
| 34 | plantio_precisao_outras | Qual a melhor plantadeira de precisão para soja? | 0.8333 | 0.1667 | 0 | 0.5833 | 0.6667 | 0 | 0.3333 | 0.9167 |
| 35 | plantio_precisao_outras | Qual a melhor semeadora para plantio direto? | 0.9167 | 0.0833 | 0 | 0.1667 | 0 | 0 | 0 | 0.3333 |
| 36 | plantio_precisao_outras | Qual a melhor plantadeira para milho? | 0.75 | 0 | 0 | 0 | 0.1667 | 0.0833 | 0 | 0.5 |
| 37 | plantio_precisao_outras | Qual sistema de piloto automático agrícola é melhor? | 1 | 0.1667 | 0.1667 | 0.25 | 0.25 | 0 | 0 | 0 |
| 38 | plantio_precisao_outras | Vale a pena investir em agricultura de precisão na fazenda? | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 39 | plantio_precisao_outras | Qual marca tem a melhor telemetria para máquinas agrícolas? | 1 | 1 | 1 | 0.25 | 0.3333 | 0.4167 | 0.25 | 0.25 |
| 40 | plantio_precisao_outras | Como escolher um distribuidor de fertilizante e calcário? | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0.0833 |
| 41 | plantio_precisao_outras | Quais máquinas são essenciais para uma fazenda de grãos? | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 42 | plantio_precisao_outras | Qual a melhor máquina para o algodão? | 0.4167 | 0.3333 | 0.1667 | 0.0833 | 0 | 0.0833 | 0 | 0 |
| 43 | plantio_precisao_outras | Qual a melhor máquina para irrigação e manejo em hortaliças? | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 44 | confianca_compra_posvenda_digital | Como saber se uma marca de máquina agrícola é confiável? | 0.5833 | 0.5 | 0.5833 | 0.5833 | 0.4167 | 0.25 | 0 | 0 |
| 45 | confianca_compra_posvenda_digital | Quais fontes consultar antes de comprar um trator? | 0.6667 | 0.6667 | 0.6667 | 0.6667 | 0.6667 | 0 | 0 | 0 |
| 46 | confianca_compra_posvenda_digital | Vale a pena pagar mais por um trator premium? | 0.6667 | 0.3333 | 0.3333 | 0.25 | 0.3333 | 0.25 | 0 | 0 |
| 47 | confianca_compra_posvenda_digital | Como financiar um trator pelo Plano Safra? | 0.0833 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 48 | confianca_compra_posvenda_digital | Consórcio de máquinas agrícolas vale a pena? | 0 | 0 | 0 | 0 | 0 | 0 | 0.25 | 0.1667 |
| 49 | confianca_compra_posvenda_digital | Qual a taxa de juros do Moderfrota hoje? | 0 | 0 | 0 | 0 | 0 | 0 | 0.0833 | 0 |
| 50 | confianca_compra_posvenda_digital | Como escolher uma concessionária de máquinas agrícolas? | 0.25 | 0.25 | 0.25 | 0.25 | 0.25 | 0 | 0 | 0 |
| 51 | confianca_compra_posvenda_digital | O que verificar na garantia de uma máquina agrícola? | 0.4167 | 0.25 | 0.25 | 0.25 | 0.25 | 0 | 0 | 0 |
| 52 | confianca_compra_posvenda_digital | Quanto custa a manutenção anual de um trator? | 0.0833 | 0 | 0.0833 | 0.0833 | 0.0833 | 0 | 0 | 0 |
| 53 | confianca_compra_posvenda_digital | Onde comprar peças originais para máquinas agrícolas? | 1 | 0.6667 | 0.9167 | 0.9167 | 0.5 | 0.0833 | 0.1667 | 0.0833 |
| 54 | confianca_compra_posvenda_digital | Qual fabricante oferece o melhor treinamento para operadores? | 0.3333 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 55 | confianca_compra_posvenda_digital | Quais aplicativos ajudam a gerenciar máquinas agrícolas? | 0.5 | 0.25 | 0.3333 | 0.25 | 0.0833 | 0 | 0.0833 | 0.1667 |
| 56 | confianca_compra_posvenda_digital | Como funciona o monitoramento remoto de máquinas agrícolas? | 0.4167 | 0.25 | 0.25 | 0.0833 | 0.1667 | 0 | 0.0833 | 0 |
| 57 | confianca_compra_posvenda_digital | Quais marcas de máquinas agrícolas têm as melhores inovações lançadas na Agrishow? | 0.5 | 1 | 1 | 0.8333 | 0.5 | 0.5833 | 0.3333 | 0 |
| 58 | confianca_compra_posvenda_digital | Qual marca de máquina agrícola tem o melhor conteúdo técnico na internet? | 1 | 0.8333 | 0.9167 | 0.8333 | 0.5833 | 0.5 | 0.1667 | 0.0833 |
| 59 | confianca_compra_posvenda_digital | Onde encontrar a ficha técnica de tratores e colheitadeiras? | 0.8333 | 0.8333 | 1 | 0.9167 | 0.8333 | 0.5 | 0.1667 | 0 |

## claude coleta

| Chave | Valor |
|---|---|
| respostas | 180 |
| sem_busca | 47 |
| buscas_total | 259 |

## kappa

| Chave | n | kappa | concordância |
|---|---|---|---|
| ia_humano_x_automatico_elegibilidade | 52 | 0.38 | 0.692 |
| ia_humano_x_automatico_pertinencia_4_classes | 52 | 0.343 | 0.615 |
| ia_revisorA_x_revisorB_parte3_elegibilidade | 95 | 0.467 | 0.8 |
| imprensa_humano_x_automatico_classe | 57 | 0.764 | 0.842 |
| imprensa_humano_x_automatico_earned_vs_outra | 57 | 0.79 | 0.895 |

## revisão humana

### imprensa

**amostra**: 64

**nao_verificaveis_paywall**: 7

**precisao_entre_verificaveis**

| Chave | Valor |
|---|---|
| earned_protagonista | 0.833 |
| release_republicado | 0.625 |
| mencao_incidental | 0.846 |
| ruido | 1 |

**correcoes_aplicadas**: 10

**observacao_do_time**: a contagem de menções no campo motivo (n_men) nem sempre bate com a leitura humana; o campo é diagnóstico do corte de boilerplate, não a classe; registrado como limite

### ia

**amostra**: 52

**concordancia_vertical**: 0.9615

**concordancia_elegibilidade**: 0.692

**divergências**: 21

**erros_nossos_corrigidos**

- 13
- 51
- 17
- 20
- 32
- 8

**divergencias_de_criterio_mantidas_pela_regra**

- 4
- 7
- 35
- 48
- 42
- 41
- 43
- 33
- 50
- 52
- 22
- 6
- 9
- 30

**leitura_do_time**: o time marcou parcial quando a página fazia curadoria dos próprios produtos sem lista comparativa geral em perguntas do tipo 'qual o melhor'; a regra congelada R3 lê o atributo (página de trator evidência 'trator'), não o superlativo; a leitura do time entra como sensibilidade 'R3 estrito'

**ponto_de_atenção**: Moderfrota: página da Jacto responde com juros da safra 2022/2023; mantida direta pela regra (pertinência não julga atualidade), registrado como limite

## busca categoria

| Marca | taxa_top10 | ic95 | consultas_top3_media | consultas_top10_media | aio_fonte_media | aio_mencao_media | n_consultas |
|---|---|---|---|---|---|---|---|
| John Deere | 0.3933 | 0.313 a 0.477 | 27.67 | 39.33 | 10.33 | 25.67 | 100 |
| Case IH | 0.0733 | 0.033 a 0.123 | 3 | 7.33 | 2 | 12 | 100 |
| New Holland Agriculture | 0.0767 | 0.033 a 0.123 | 3 | 7.67 | 2.33 | 15.67 | 100 |
| Massey Ferguson | 0.0667 | 0.027 a 0.117 | 3.33 | 6.67 | 3 | 16.33 | 100 |
| Valtra | 0.0767 | 0.037 a 0.127 | 4.33 | 7.67 | 0.67 | 9.67 | 100 |
| Fendt | 0.0133 | 0.000 a 0.030 | 0 | 1.33 | 0.67 | 3 | 100 |
| Jacto | 0.0833 | 0.043 a 0.130 | 3.33 | 8.33 | 1 | 2.33 | 100 |
| Stara | 0.1833 | 0.117 a 0.253 | 7.67 | 18.33 | 6.67 | 8 | 100 |

## busca categoria resumo

**consultas**: 100

### passes

- 1
- 2
- 3

**consultas_com_ai_overview_media**: 69.6667

### top_dominios_top10

- ["www.deere.com.br", 112]
- ["lista.mercadolivre.com.br", 94]
- ["www.youtube.com", 88]
- ["www.mfrural.com.br", 86]
- ["www.olx.com.br", 71]
- ["www.agrofy.com.br", 68]
- ["www.stara.com.br", 55]
- ["www.instagram.com", 54]
- ["e-agro.com.br", 49]
- ["www.facebook.com", 48]
- ["revistacultivar.com.br", 43]
- ["aegro.com.br", 42]
- ["www.tratoresecolheitadeiras.com.br", 29]
- ["www.olx.pt", 28]
- ["www.embrapa.br", 28]

## universo marca

| Marca | vol_agro_explicito_v1 | vol_agro_explicito_v1_1_com_modelos | vol_semente_curta_agro | termos_semente_curta | vol_agro_explicito_v1_2 | vol_v1_2_com_modelos |
|---|---|---|---|---|---|---|
| John Deere | 98090 | 102530 | 1170 | 62 | 99260 | 103700 |
| Case IH | 1370 | 3400 | 21340 | 699 | 22710 | 24740 |
| New Holland Agriculture | 46460 | 50220 | 320 | 8 | 46780 | 50540 |
| Massey Ferguson | 59150 | 60190 | 2710 | 69 | 61860 | 62900 |
| Valtra | 40420 | 41200 | 0 | 0 | 40420 | 41200 |
| Fendt | 8530 | 10250 | 0 | 0 | 8530 | 10250 |
| Jacto | 42150 | 43290 | 0 | 0 | 42150 | 43290 |
| Stara | 7020 | 7020 | 0 | 0 | 7020 | 7020 |

## escopo organico alvos

| Chave | marca | tipo | palavras_chave | trafego_estimado | nota |
|---|---|---|---|---|---|
| deere.com.br | John Deere | domínio | 9555 | 185004 | domínio próprio BR, mistura agro, construção e florestal |
| deere.com.br/pt/ | John Deere | subpasta | 9073 | 179653 | subpasta pt (todo o site) |
| campus.deere.com.br | John Deere | domínio | 9555 | 185004 | plataforma de cursos |
| caseih.com | Case IH | domínio | 2258 | 25538 | domínio global |
| caseih.com/pt-br/brasil/ | Case IH | subpasta | 1525 | 24558 | subpasta Brasil |
| caseih.com/latam/pt-br/ | Case IH | subpasta | 1 | 18 | subpasta LATAM (caseih.com.br redireciona por JS para cá, que redireciona para pt-br/brasil) |
| blog.caseih.com.br | Case IH | domínio | 1885 | 9552 | blog em subdomínio próprio |
| agriculture.newholland.com | New Holland | domínio | 3951 | 32879 | subdomínio agrícola global |
| agriculture.newholland.com/pt-br/brasil/ | New Holland | subpasta | 2290 | 22339 | subpasta Brasil |
| newholland.com.br | New Holland | domínio | 588 | 23828 | domínio próprio BR (só responde por http) |
| masseyferguson.com | Massey Ferguson | domínio | 1680 | 17792 | domínio global |
| masseyferguson.com/pt_br/ | Massey Ferguson | subpasta | 815 | 5647 | subpasta Brasil |
| valtra.com.br | Valtra | domínio | 1497 | 19828 | domínio próprio BR |
| fendt.com | Fendt | domínio | 633 | 6448 | domínio global |
| fendt.com/br/ | Fendt | subpasta | 357 | 6112 | subpasta Brasil |
| fendtsustentabilidade.com.br | Fendt | domínio | 2 | 0 | microsite próprio |
| jacto.com | Jacto | domínio | 3553 | 31478 | domínio global |
| jacto.com/brasil/ | Jacto | subpasta | 2819 | 21021 | subpasta Brasil |
| blog.jacto.com.br | Jacto | domínio | 5361 | 16964 | blog em domínio próprio |
| stara.com.br | Stara | domínio | 2224 | 17768 | domínio próprio BR |

## p3 dois alvos

**regra**: P3 = total base de dados de busca do alvo 1 mais total do alvo 2 descontada a parcela do alvo 2 já presente no alvo 1, estimada pela interseção das listas orgânicas (palavras únicas); corrige o erro da v1 e v2, que uniam listas truncadas e não comparáveis com os totais

### valores

| Marca | alvo_1 | total_1 | alvo_2 | total_2 | sobreposicao_estimada_no_alvo_2 | p3 |
|---|---|---|---|---|---|---|
| New Holland Agriculture | agriculture.newholland.com/pt-br/brasil/ | 2290 | newholland.com.br | 588 | 0.781 | 2419 |
| Jacto | jacto.com/brasil/ | 2819 | blog.jacto.com.br | 5361 | 0.087 | 7712 |
| Case IH | caseih.com/pt-br/brasil/ | 1525 | caseih.com.br | 1885 | 0.177 | 3076 |

## autoridade

| Marca | alvo | score | dominios_referência |
|---|---|---|---|
| John Deere | deere.com.br | 45 | 2151 |
| Case IH | caseih.com | 50 | 6604 |
| New Holland Agriculture | newholland.com | 49 | 6998 |
| Massey Ferguson | masseyferguson.com | 48 | 4671 |
| Valtra | valtra.com.br | 32 | 624 |
| Fendt | fendt.com | 50 | 5100 |
| Jacto | jacto.com | 35 | 1494 |
| Stara | stara.com.br | 33 | 1453 |

## cesta modelos

| Marca | n_modelos | vol_ficha_tecnica | vol_marca_modelo | vol_preco | n_com_volume_ficha_tecnica | n_com_volume_marca_modelo | n_com_volume_preco |
|---|---|---|---|---|---|---|---|
| John Deere | 96 | 0 | 3500 | 690 | 0 | 44 | 15 |
| Case IH | 23 | 0 | 230 | 110 | 0 | 11 | 2 |
| New Holland Agriculture | 32 | 0 | 1770 | 170 | 0 | 18 | 8 |
| Massey Ferguson | 37 | 20 | 1020 | 150 | 1 | 26 | 8 |
| Valtra | 28 | 40 | 640 | 1390 | 3 | 17 | 10 |
| Fendt | 12 | 0 | 280 | 40 | 0 | 7 | 1 |
| Jacto | 67 | 20 | 1020 | 630 | 1 | 41 | 13 |
| Stara | 19 | 0 | 480 | 740 | 0 | 11 | 2 |

## modelos lista

### John Deere

- 5060e cabinado 60cv
- 5060en estreito 60cv
- 5070e cabinado 70cv
- 5075e
- 5078e cabinado 70cv
- 5080e cabinado 80cv
- 5080en estreito 80cv
- 5085m
- 5090e
- 5090e cabinado 90cv
- 5095m
- 5105m
- 5120m
- 600c
- 600f
- 600r
- 6100e
- 6100j 100cv
- 6115j 115cv
- 6125j 125cv
- 6135j 135cv
- 6135m 135cv
- 6150j 150cv
- 6150m 150cv
- 6170j 170cv
- 6170m 170cv
- 6190j
- 6190m 190cv
- 6210j
- 6210m 210cv
- 624c
- 627c
- 700fd
- 7200m 200cv
- 7215m 215cv
- 7230m 230cv
- 8100
- 8250r 250cv
- 8270r
- 8295r
- 8300
- 8320r
- 8345r
- 8370r
- 8400r
- 8500
- 8r410
- 8r440
- 8r490
- 8r540
- 9600
- 9r 390 cv
- 9r 440 cv
- 9r 490 cv
- 9r 540 cv
- 9r 590 cv
- 9r 640 cv
- 9rx 710
- 9rx 770
- 9rx 830
- ch570
- ch670
- ch950
- cr12
- cr13
- cr14
- cr15
- cr17
- cr18
- cr19
- cr20
- cr21
- cr22
- cr23
- cr24
- cr25
- cr27
- criterio
- criterios
- enfardadora cilindrica 460m
- enfardadora cilindrica 560m
- hd50f
- que
- rigidas hydraflex
- s4 300
- s4 400
- s430
- s440
- s5 500
- s550
- s7 600
- s7 700
- s7 800
- s7 900
- s760
- s770
- s780
- s790

### Case IH

- af10
- austoft 9000
- axial flow 150
- axial flow 160
- axial flow 250
- axial flow 260 automation
- caracol 2010 rigida arrozeira
- caracol 3020 terraflex
- easy riser
- farmall
- farmall c
- farmall m
- farmall max
- fast riser
- fieldops
- patriot 250
- patriot 350
- plataforma 3010
- plataforma fd2
- plataforma milho
- puma
- puma 260 cvx
- quadtrac
- savefarm
- soilxmonitor

### New Holland Agriculture

- 30
- braud 1190x multi
- cr
- cr11
- enfardadeira hayliner
- guardian sp310f
- nova cr
- nova defensor
- pl4000
- pl6000
- pl7000
- plataforma forragem
- plataforma milho
- plataforma superflex
- roll belt 150 plus
- semeadeira p3000
- t3f
- t4 75s
- t5
- t6
- t6 140 eletro command
- t6 methane power
- t7 300 auto command
- t7 lwb
- t7 swb
- t8 plm intelligence
- t9
- t9 plm intelligence
- tc
- tl5
- transporte plataforma
- tt ttf
- tt350
- tt4
- tx

### Massey Ferguson

- 100
- 1840
- 200
- 2200
- 2234
- 2700
- 300
- 3300xtra
- 3400
- 3700
- 400
- 4300
- 4400
- 4700
- 500
- 500 r
- 560r
- 5700
- 5m1
- 600
- 6700
- 6700 r
- 6m
- 700
- 7300
- 7700
- 8225hd
- 8700 s
- 8s
- 8s xtra
- 9s
- fl
- momentum
- rb f
- rb v
- th
- tw

### Valtra

- 800
- a2r
- a2s
- a3f
- a4
- a4 hitech
- a4s
- a5
- a5 hitech
- bh g4
- bm
- bs2225h
- bs2225h hitech
- caracol 600f
- compact
- fertilizer bdf 1300
- fine
- frontier
- hitech
- m5
- momentum
- momentum 30 40 g2
- multiple l
- multiple m
- q5
- r
- r560 dry
- s6

### Fendt

- 1000
- 1100 mt
- 30 and 40 lines
- 700
- 800
- 900
- camera capo 900
- contact momentum
- ideal
- modulo smart farming 900
- momentum
- stability control 900
- ti headland
- variodrive 900

### Jacto

- advance 2000 am18
- advance 3000 am21
- advance 3000 am24
- aj 401
- aplicador granulados gm 1
- aplicador granulos gm 12
- arbus 1000
- arbus 200
- arbus 2000 tf
- arbus 2000 tf 1000
- arbus 2000 tower
- arbus 2000 tp
- arbus 300
- arbus 400
- arbus 4000
- arbus 4000 jav
- bc 610 pec
- cana hover 500
- columbia cross
- condor
- condor 1200
- condor 600 am12 am14
- condor 600 m12
- condor 800 am
- condor 800 am12 am14
- condor 800 m12
- condorito 400
- condorito 600
- db
- djb 20
- djb s
- gb 18
- gm 2
- gm 3
- hd
- implemento 5030 npk
- j 600
- jatao 2000
- jatao 400
- k 3000
- k 3500
- ktr 3000
- lumina 300
- meridia 200
- ph 400
- piloto eletrico omni 700
- pj
- pj 401
- pjb
- pjh
- pjm 25
- sb
- sb 18p
- smartset
- telemetria
- tellus npk
- uniport 2000
- uniport 2030
- uniport 2030 canavieiro
- uniport 2530
- uniport 3030
- uniport 3030 canavieiro
- uniport 3030 eletrovortex
- uniport 3030 npk
- uniport 4530
- uniport 5030 npk
- uniport 8030 npk
- xp

### Stara

- absoluta
- bruttus
- cinderela
- escarificador fox
- estrela
- eva
- guapa
- guapita
- hercules 40
- hercules 60
- hercules 90
- imperador 2000 2000 pv
- imperador 2500
- imperador 30
- imperador 3000 4000
- princesa
- reboke
- reboke ninja
- twister 1500

## cesta categoria volumes

| Chave | Valor |
|---|---|
| trator agrícola | 1900 |
| trator para soja | 0 |
| trator para cana | 0 |
| trator para café | 10 |
| trator para pequena propriedade | 20 |
| trator 75 cv | 90 |
| trator 100 cv | 70 |
| trator 200 cv | 30 |
| trator 4x4 | 320 |
| trator compacto | 140 |
| melhor trator para pequeno produtor | 20 |
| trator agrícola preço | 720 |
| trator agrícola usado | 90 |
| trator seminovo | 30 |
| trator novo preço | 110 |
| tabela de preço de trator | 20 |
| ficha técnica trator | 0 |
| consumo de diesel trator | 20 |
| cabine de trator | 170 |
| colheitadeira de soja | 590 |
| colheitadeira de milho | 1000 |
| colheitadeira de trigo | 70 |
| colheitadeira de arroz | 210 |
| colheitadeira axial | 30 |
| colheitadeira preço | 880 |
| colheitadeira usada | 110 |
| melhor colheitadeira | 20 |
| plataforma de milho | 480 |
| perdas na colheita | 30 |
| colhedora de cana | 1300 |
| colhedora de café | 480 |
| colhedora de algodão | 140 |
| pulverizador autopropelido | 880 |
| pulverizador de arrasto | 260 |
| pulverizador agrícola preço | 20 |
| tecnologia de aplicação | 260 |
| barra de pulverização | 140 |
| pulverizador para soja | 20 |
| pulverizador para cana | 0 |
| plantadeira de soja | 140 |
| plantadeira de milho | 1300 |
| plantadeira de precisão | 20 |
| plantadeira preço | 50 |
| semeadora de plantio direto | 20 |
| semeadora de trigo | 10 |
| semeadora de grãos finos | 0 |
| distribuidor de fertilizante | 30 |
| distribuidor de calcário | 480 |
| grade aradora | 2900 |
| subsolador | 2900 |
| implementos agrícolas | 590 |
| implementos para trator | 210 |
| máquinas agrícolas | 1600 |
| máquinas agrícolas preço | 70 |
| máquinas agrícolas usadas | 20 |
| máquinas agrícolas novas | 0 |
| fabricantes de máquinas agrícolas | 20 |
| marcas de tratores | 1000 |
| marcas de colheitadeiras | 110 |
| agricultura de precisão | 3600 |
| piloto automático agrícola | 50 |
| telemetria agrícola | 30 |
| monitor de plantio | 210 |
| taxa variável | 20 |
| mapa de produtividade | 110 |
| concessionária de tratores | 90 |
| concessionária de máquinas agrícolas | 0 |
| revenda de tratores | 90 |
| peças para trator | 480 |
| peças para colheitadeira | 70 |
| filtro de trator | 70 |
| pneu de trator | 1900 |
| manutenção de trator | 50 |
| revisão de colheitadeira | 0 |
| manual do operador trator | 20 |
| financiamento de trator | 40 |
| financiamento de máquinas agrícolas | 10 |
| moderfrota | 590 |
| consórcio de trator | 40 |
| consórcio de máquinas agrícolas | 20 |
| leilão de máquinas agrícolas | 170 |
| avaliação de trator usado | 0 |
| trator para arroz | 0 |
| forrageira | 9900 |
| ensiladeira | 6600 |
| roçadeira agrícola | 140 |
| pulverizador para café | 30 |
| plantadeira de algodão | 20 |
| agrishow | 14800 |

## cesta categoria

- trator agrícola
- trator para soja
- trator para milho
- trator para cana
- trator para café
- trator para pastagem
- trator para pequena propriedade
- trator 75 cv
- trator 100 cv
- trator 200 cv
- trator 4x4
- trator compacto
- melhor trator agrícola
- melhor trator para pequeno produtor
- trator agrícola preço
- trator agrícola usado
- trator seminovo
- trator novo preço
- tabela de preço de trator
- ficha técnica trator
- consumo de diesel trator
- cabine de trator
- colheitadeira de soja
- colheitadeira de milho
- colheitadeira de trigo
- colheitadeira de arroz
- colheitadeira axial
- colheitadeira preço
- colheitadeira usada
- melhor colheitadeira
- plataforma de corte soja
- plataforma de milho
- perdas na colheita
- colhedora de cana
- colhedora de café
- colhedora de algodão
- pulverizador autopropelido
- pulverizador de arrasto
- pulverizador agrícola preço
- melhor pulverizador autopropelido
- tecnologia de aplicação
- barra de pulverização
- pulverizador para soja
- pulverizador para cana
- plantadeira de soja
- plantadeira de milho
- plantadeira de precisão
- plantadeira preço
- semeadora de plantio direto
- semeadora de trigo
- semeadora de grãos finos
- plantio direto máquinas
- distribuidor de fertilizante
- distribuidor de calcário
- grade aradora
- subsolador
- implementos agrícolas
- implementos para trator
- máquinas agrícolas
- máquinas agrícolas preço
- máquinas agrícolas usadas
- máquinas agrícolas novas
- fabricantes de máquinas agrícolas
- marcas de tratores
- marcas de colheitadeiras
- agricultura de precisão
- piloto automático agrícola
- telemetria agrícola
- monitor de plantio
- taxa variável
- mapa de produtividade
- máquina agrícola conectada
- concessionária de tratores
- concessionária de máquinas agrícolas
- revenda de tratores
- peças para trator
- peças para colheitadeira
- filtro de trator
- pneu de trator
- manutenção de trator
- revisão de colheitadeira
- manual do operador trator
- financiamento de trator
- financiamento de máquinas agrícolas
- plano safra máquinas
- moderfrota
- consórcio de trator
- consórcio de máquinas agrícolas
- leilão de máquinas agrícolas
- avaliação de trator usado
- trator para arroz
- trator para algodão
- máquina para plantio de cana
- máquina para colheita de café
- forrageira
- ensiladeira
- roçadeira agrícola
- pulverizador para café
- plantadeira de algodão
- agrishow

## engajamento

| f1_pecas_por_semana | f2_ic95 | f2_mediana_interações | f3_mediana_por_mil_seguidores | f4_mediana_comentarios | marca | n_com_views | n_pecas | rede | status | v3_mediana_views |
|---|---|---|---|---|---|---|---|---|---|---|
| 9.15 | 468 a 617 | 529.0 | 1.287 | 10.0 | John Deere | 392.0 | 477.0 | instagram | ok | 14997.0 |
| 7.52 | 590 a 817 | 693.0 | 1.686 | 13.0 | John Deere | 392.0 | 392.0 | instagram_reels | ok | 127125.5 |
| 7.77 | 61 a 73 | 67.0 | 0.01 | 1.0 | John Deere | 326.0 | 405.0 | facebook | ok | 4749.5 |
| 3.76 | 26 a 35 | 30.0 | 0.149 | 0.0 | John Deere | 196.0 | 196.0 | youtube | ok | 1947.5 |
| | | | | | John Deere | | 0.0 | tiktok | N/A (sem conta ou sem coleta) | |
| 3.87 | 220 a 339 | 264.5 | 1.518 | 6.0 | Case IH | 126.0 | 202.0 | instagram | ok | 3480.0 |
| 2.42 | 298 a 442 | 348.5 | 2.0 | 10.0 | Case IH | 126.0 | 126.0 | instagram_reels | ok | 15529.0 |
| 3.89 | 62 a 106 | 83.0 | 0.067 | 1.0 | Case IH | 124.0 | 203.0 | facebook | ok | 6631.0 |
| 1.92 | 12 a 23 | 16.5 | 0.64 | 0.0 | Case IH | 100.0 | 100.0 | youtube | ok | 807.0 |
| | | | | | Case IH | | 0.0 | tiktok | N/A (sem conta ou sem coleta) | |
| 3.28 | 528 a 918 | 683.0 | 2.668 | 14.0 | New Holland Agriculture | 116.0 | 171.0 | instagram | ok | 7824.0 |
| 2.65 | 452 a 621 | 542.0 | 2.117 | 13.0 | New Holland Agriculture | 138.0 | 138.0 | instagram_reels | ok | 26046.0 |
| 3.68 | 84 a 195 | 128.5 | 0.068 | 3.0 | New Holland Agriculture | 132.0 | 192.0 | facebook | ok | 7071.0 |
| 3.84 | 19 a 30 | 23.5 | 0.513 | 1.0 | New Holland Agriculture | 200.0 | 200.0 | youtube | ok | 867.0 |
| 2.92 | 43 a 58 | 49.0 | 8.651 | 1.0 | New Holland Agriculture | 152.0 | 152.0 | tiktok | ok | 1043.0 |
| 7.19 | 152 a 201 | 173.0 | 1.053 | 3.0 | Massey Ferguson | 267.0 | 375.0 | instagram | ok | 3836.0 |
| 5.18 | 205 a 279 | 238.0 | 1.449 | 3.0 | Massey Ferguson | 270.0 | 270.0 | instagram_reels | ok | 23429.0 |
| 8.0 | 25 a 30 | 27.0 | 0.026 | 0.0 | Massey Ferguson | 272.0 | 417.0 | facebook | ok | 2201.0 |
| 3.03 | 23 a 32 | 27.0 | 0.281 | 0.0 | Massey Ferguson | 158.0 | 158.0 | youtube | ok | 1471.0 |
| | | | | | Massey Ferguson | | 0.0 | tiktok | N/A (sem conta ou sem coleta) | |
| 6.6 | 105 a 144 | 124.0 | 1.018 | 2.0 | Valtra | 193.0 | 344.0 | instagram | ok | 1804.0 |
| 3.7 | 205 a 272 | 245.0 | 2.011 | 4.0 | Valtra | 193.0 | 193.0 | instagram_reels | ok | 8443.0 |
| 6.54 | 33 a 42 | 38.0 | 0.061 | 0.0 | Valtra | 181.0 | 341.0 | facebook | ok | 2900.0 |
| 1.73 | 32 a 73 | 57.5 | 3.71 | 1.0 | Valtra | 90.0 | 90.0 | youtube | ok | 1058.5 |
| 2.24 | 93 a 131 | 116.0 | 4.427 | 2.0 | Valtra | 117.0 | 117.0 | tiktok | ok | 2142.0 |
| 2.65 | 148 a 204 | 170.0 | 1.632 | 2.0 | Fendt | 72.0 | 138.0 | instagram | ok | 2295.5 |
| 1.38 | 201 a 348 | 242.0 | 2.324 | 3.0 | Fendt | 72.0 | 72.0 | instagram_reels | ok | 9139.0 |
| 2.7 | 37 a 64 | 50.0 | 0.09 | 0.0 | Fendt | 73.0 | 141.0 | facebook | ok | 2398.0 |
| 0.82 | 20 a 76 | 53.0 | 57.86 | 0.0 | Fendt | 43.0 | 43.0 | youtube | ok | 8316.0 |
| | | | | | Fendt | | 0.0 | tiktok | N/A (sem conta ou sem coleta) | |
| 3.45 | 172 a 250 | 199.0 | 1.177 | 5.0 | Jacto | 120.0 | 180.0 | instagram | ok | 2321.5 |
| 2.3 | 267 a 397 | 325.0 | 1.923 | 7.0 | Jacto | 120.0 | 120.0 | instagram_reels | ok | 10155.5 |
| 3.51 | 61 a 101 | 75.0 | 0.197 | 2.0 | Jacto | 95.0 | 183.0 | facebook | ok | 4527.0 |
| 1.61 | 17 a 23 | 19.0 | 0.751 | 0.0 | Jacto | 84.0 | 84.0 | youtube | ok | 842.0 |
| 0.19 | 22 a 396 | 104.5 | 28.069 | 1.5 | Jacto | 10.0 | 10.0 | tiktok | ok | 3094.5 |
| 4.91 | 346 a 506 | 430.0 | 2.686 | 4.0 | Stara | 184.0 | 256.0 | instagram | ok | 6173.0 |
| 3.53 | 508 a 772 | 616.5 | 3.85 | 5.0 | Stara | 184.0 | 184.0 | instagram_reels | ok | 31653.5 |
| 5.04 | 93 a 133 | 111.0 | 0.851 | 2.0 | Stara | 188.0 | 263.0 | facebook | ok | 6841.0 |
| 3.03 | 26 a 39 | 32.0 | 1.039 | 0.0 | Stara | 158.0 | 158.0 | youtube | ok | 964.5 |
| | | | | | Stara | | 0.0 | tiktok | N/A (sem conta ou sem coleta) | |

## seguidores

| Marca | instagram_seguidores | instagram_posts | facebook_seguidores | facebook_curtidas | youtube_inscritos | tiktok_seguidores |
|---|---|---|---|---|---|---|
| John Deere | 411099 | 2079 | 6672786 | 6671143 | 202000 | |
| Case IH | 174221 | 1386 | 1232588 | 1232588 | 25800 | |
| New Holland Agriculture | 255968 | 2067 | 1887112 | 1887076 | 45800 | 5664 |
| Massey Ferguson | 164226 | 2286 | 1042098 | 1042098 | 96000 | |
| Valtra | 121841 | 2497 | 620838 | 620844 | 15500 | 26200 |
| Fendt | 104147 | 1208 | 556436 | 556436 | 916 | |
| Jacto | 169028 | 4025 | 381363 | 381363 | 25300 | 3723 |
| Stara | 160110 | 2144 | 130486 | 130486 | 30800 | |

## f5

| Marca | posts_amostrados | posts_com_comentarios_publicos | posts_com_resposta_da_marca | comentarios_publico | respostas_da_marca | respostas_sem_vinculo | comentarios_publicos_respondidos | taxa_comentarios_respondidos | ic95_bootstrap_por_post | mediana_horas_ate_resposta | p75_horas | n_pares | taxa_respostas_por_comentario_publico | ic95_taxa_respostas_por_comentario | posts_com_resposta_da_marca_qualquer |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Case IH | 28 | 28 | 0 | 235 | 206 | 206 | 0 | 0 | 0.000 a 0.000 | | | 0 | 0.8766 | 0.798 a 0.930 | 27 |
| Fendt | 27 | 27 | 9 | 174 | 14 | 2 | 12 | 0.069 | 0.035 a 0.110 | 10.9 | 16.4 | 12 | 0.0805 | 0.044 a 0.130 | 10 |
| Jacto | 27 | 27 | 13 | 262 | 34 | 0 | 34 | 0.1298 | 0.071 a 0.197 | 14 | 35.2 | 34 | 0.1298 | 0.070 a 0.196 | 13 |
| John Deere | 28 | 28 | 15 | 546 | 128 | 5 | 121 | 0.2216 | 0.064 a 0.453 | 201.4 | 341.9 | 121 | 0.2344 | 0.073 a 0.474 | 16 |
| Massey Ferguson | 28 | 28 | 12 | 333 | 26 | 3 | 23 | 0.0691 | 0.026 a 0.122 | 7.5 | 13.7 | 23 | 0.0781 | 0.041 a 0.124 | 14 |
| New Holland Agriculture | 28 | 28 | 3 | 423 | 367 | 361 | 6 | 0.0142 | 0.000 a 0.027 | 10.1 | 21.2 | 6 | 0.8676 | 0.777 a 0.953 | 28 |
| Stara | 28 | 28 | 11 | 285 | 36 | 2 | 34 | 0.1193 | 0.043 a 0.223 | 2.5 | 13.4 | 34 | 0.1263 | 0.054 a 0.231 | 11 |
| Valtra | 28 | 28 | 12 | 239 | 41 | 3 | 38 | 0.159 | 0.074 a 0.266 | 12.7 | 18.9 | 38 | 0.1715 | 0.085 a 0.272 | 13 |

## imprensa

### earned_por_marca

| Marca | Valor |
|---|---|
| Fendt | 41 |
| Jacto | 11 |
| Case IH | 32 |
| New Holland Agriculture | 31 |
| Massey Ferguson | 59 |
| Stara | 16 |
| John Deere | 55 |
| Valtra | 33 |

### earned_por_veiculo

| Chave | Valor |
|---|---|
| globorural.globo.com | 20 |
| agrolink.com.br | 14 |
| canalrural.com.br | 16 |
| portaldoagronegocio.com.br | 4 |
| revistacultivar.com.br | 127 |
| portalmaquinasagricolas.com.br | 31 |
| noticiasagricolas.com.br | 19 |
| valor.globo.com | 6 |
| comprerural.com | 26 |
| estadao.com.br | 5 |
| folha.uol.com.br | 3 |
| agrorevenda.com.br | 5 |
| safras.com.br | 2 |

### classes_por_marca

| Marca | earned_protagonista | mencao_incidental | ruido | nao_verificavel | release_republicado | catalogo_produto |
|---|---|---|---|---|---|---|
| Case IH | 32 | 36 | 24 | 2 | 3 | |
| Fendt | 41 | 54 | 24 | | | |
| Jacto | 11 | 26 | 40 | 4 | 2 | |
| John Deere | 55 | 71 | 29 | 2 | 6 | |
| Massey Ferguson | 59 | 72 | 17 | | 6 | 1 |
| New Holland Agriculture | 31 | 54 | 27 | | 1 | |
| Stara | 16 | 11 | 19 | | 1 | 1 |
| Valtra | 33 | 54 | 18 | | 3 | |

### veiculos

- agrolink.com.br
- agrorevenda.com.br
- canalrural.com.br
- comprerural.com
- digital.agrishow.com.br
- estadao.com.br
- folha.uol.com.br
- globorural.globo.com
- noticiasagricolas.com.br
- portaldoagronegocio.com.br
- portalmaquinasagricolas.com.br
- revistacultivar.com.br
- safras.com.br
- valor.globo.com

**total_pares_analisados**: 886

**precisao_earned_revisao_humana**: 0.833

**kappa_earned**: 0.79

## imprensa materias earned

| marca | veiculo | titulo | data | url |
|---|---|---|---|---|
| Fendt | globorural.globo.com | Fendt acelera plano de expansão no Brasil | 27 de fev. de 2026 | https://globorural.globo.com/negocios/noticia/2026/02/fendt-acelera-plano-de-expansao-no-brasil.ghtml |
| Fendt | globorural.globo.com | Fendt desembarca na Argentina com três concessionárias | 5 de nov. de 2025 | https://globorural.globo.com/maquinas-agricolas/noticia/2025/11/fendt-desembarca-na-argentina-com-tres-concessionarias.ghtml |
| Fendt | agrolink.com.br | Fendt faz estreia mundial do sistema autônomo... | 12 de nov. de 2025 | https://www.agrolink.com.br/noticias/fendt-faz-estreia-mundial-do-sistema-autonomo-fendt-xaver-gt_507968.html |
| Fendt | canalrural.com.br | Fendt: tecnologia alemã apoia produtor em cada etapa da... | 5 de nov. de 2025 | https://www.canalrural.com.br/agricultura/projeto-soja-brasil/fendt-tecnologia-alema-apoia-produtor-em-cada-etapa-da-safra-do-plantio-a-colheita/ |
| Fendt | canalrural.com.br | Agrishow: fabricantes de máquinas aprovam linha de... | 28 de abr. de 2026 | https://www.canalrural.com.br/agricultura/agrishow-fabricantes-de-maquinas-aprovam-linha-de-credito-de-r-10-bi-anunciada-por-alckmin/ |
| Fendt | portaldoagronegocio.com.br | Fendt celebra 50 mil tratores 900 Vario produzidos com... | 15 de jul. de 2026 | https://www.portaldoagronegocio.com.br/agroindustria/maquinas-e-implementos/noticias/fendt-celebra-50-mil-tratores-900-vario-produzidos-com-edicao-especial-limitada |
| Fendt | revistacultivar.com.br | Fendt amplia eficiência no plantio com máquinas integradas | 14 de abr. de 2026 | https://revistacultivar.com.br/noticias/fendt-amplia-eficiencia-no-plantio-com-maquinas-integradas |
| Fendt | revistacultivar.com.br | Test Drive exclusivo com o trator Fendt 832 Vario Gen5 | 9 de mar. de 2026 | https://revistacultivar.com.br/artigos/test-drive-exclusivo-com-o-trator-fendt-832-vario-gen5 |
| Fendt | revistacultivar.com.br | Trator Fendt 1000 Vario Gen4 apresentado na Agritechnica | 11 de nov. de 2025 | https://revistacultivar.com.br/noticias/trator-fendt-1000-vario-gen4-apresentado-na-agritechnica |
| Fendt | revistacultivar.com.br | Fendt traz ao Brasil tecnologia autônoma para tratores | 7 de mai. de 2026 | https://revistacultivar.com.br/noticias/fendt-traz-ao-brasil-tecnologia-autonoma-para-tratores |
| Fendt | revistacultivar.com.br | Fendt Ideal 8 Classe X | 29 de set. de 2025 | https://revistacultivar.com.br/colhedora/fendt/ideal-8 |
| Fendt | revistacultivar.com.br | Fendt revoluciona a hidráulica agrícola com o e-LS connect | 18 de dez. de 2025 | https://revistacultivar.com.br/noticias/fendt-revoluciona-a-hidraulica-agricola-com-o-e-ls-connect |
| Fendt | revistacultivar.com.br | Fendt 800 Vario e 1000 Vario conquistam AE50 2026 nos... | 16 de fev. de 2026 | https://revistacultivar.com.br/noticias/fendt-800-vario-e-1000-vario-conquistam-ae50-2026-nos-estados-unidos |
| Fendt | revistacultivar.com.br | Fendt oferece crédito em dólar para compra de máquinas | 7 de jul. de 2026 | https://revistacultivar.com.br/noticias/fendt-oferece-credito-em-dolar-para-compra-de-maquinas |
| Fendt | portalmaquinasagricolas.com.br | Novo trator Fendt 800 Vario Gen5 promete elevar o padrão... | 12 de mar. de 2026 | https://portalmaquinasagricolas.com.br/novo-trator-fendt-800-vario-gen5-promete-elevar-o-padrao-de-potencia-e-eficiencia-no-campo/ |
| Fendt | portalmaquinasagricolas.com.br | Fendt apresenta seu novo trator 800 Vario, com... | 12 de nov. de 2025 | https://portalmaquinasagricolas.com.br/fendt-apresenta-seu-novo-trator-800-vario-com-novo-design-e-tecnologia-variodrive/ |
| Fendt | portalmaquinasagricolas.com.br | Fendt destaca suas linhas de crédito em moeda... | 8 de jul. de 2026 | https://portalmaquinasagricolas.com.br/fendt-destaca-suas-linhas-de-credito-em-moeda-estrangeira-para-a-aquisicao-de-maquinas/ |
| Jacto | canalrural.com.br | Jacto lança implemento de adubação 5030 NPK e... | 20 de mar. de 2026 | https://www.canalrural.com.br/projetos/conteudo-patrocinado/jacto-lanca-implemento-de-adubacao-5030-npk-e-apresenta-balancecontrol-no-show-safra-2026/ |
| Fendt | noticiasagricolas.com.br | Fendt IDEAL bate recorde e cria novo patamar ao colher... | 12 de ago. de 2026 | https://www.noticiasagricolas.com.br/noticias/maquinas-e-tecnologias/426287-fendt-ideal-bate-recorde-e-cria-novo-patamar-ao-colher-2-599-toneladas-de-milho-em-24-horas-com-uma-unica-colheitadeira.html |
| Fendt | noticiasagricolas.com.br | Fendt faz estreia mundial do sistema autônomo... | 12 de nov. de 2025 | https://www.noticiasagricolas.com.br/noticias/maquinas-e-tecnologias/410805-fendt-faz-estreia-mundial-do-sistema-autonomo-fendt-xaver-gt.html |
| Fendt | noticiasagricolas.com.br | Fendt anuncia chegada à Argentina e amplia presença na... | 5 de nov. de 2025 | https://www.noticiasagricolas.com.br/noticias/maquinas-e-tecnologias/410438-fendt-anuncia-chegada-a-argentina-e-amplia-presenca-na-america-do-sul.html |
| Jacto | revistacultivar.com.br | Jacto avança na robótica agrícola com Arbus 4000 JAV | 14 de abr. de 2026 | https://revistacultivar.com.br/noticias/jacto-avanca-na-robotica-agricola-com-arbus-4000-jav |
| Jacto | revistacultivar.com.br | Jacto destaca tecnologias e linha Condor durante a... | 11 de mar. de 2026 | https://revistacultivar.com.br/noticias/jacto-destaca-tecnologias-e-linha-condor-durante-a-expodireto-cotrijal |
| Jacto | revistacultivar.com.br | Jacto inicia novo ciclo com entrada em novos mercados | 29 de abr. de 2026 | https://revistacultivar.com.br/noticias/jacto-inicia-novo-ciclo-com-entrada-em-novos-mercados |
| Jacto | revistacultivar.com.br | Novidades da linha Uniport são exibidas pela Jacto no... | 9 de fev. de 2026 | https://revistacultivar.com.br/noticias/novidades-da-linha-uniport-sao-exibidas-pela-jacto-no-show-rural |
| Jacto | valor.globo.com | Mercosul-UE traz oportunidade e risco ao setor | 30 de abr. de 2026 | https://valor.globo.com/agronegocios/noticia/2026/04/30/mercosul-ue-traz-oportunidade-e-risco-ao-setor.ghtml |
| Jacto | noticiasagricolas.com.br | Jacto apresenta tecnologias para pulverização e condições... | | https://www.noticiasagricolas.com.br/videos/agronegocio/421357-jacto-apresenta-tecnologias-para-pulverizacao-e-condicoes-especiais-na-agrobrasilia-2026.html |
| Fendt | comprerural.com | Fendt apresenta trator gigante e plantadeira de 24 metros... | 1 de set. de 2026 | https://www.comprerural.com/fendt-apresenta-trator-gigante-e-plantadeira-de-24-metros-que-impressionam-nos-eua/ |
| Fendt | comprerural.com | Fendt apresenta o futuro da tecnologia agrícola na... | 27 de abr. de 2026 | https://www.comprerural.com/fendt-apresenta-o-futuro-da-tecnologia-agricola-na-agrishow-2026/ |
| Fendt | comprerural.com | Fendt celebra 50 mil tratores da série 900 Vario com... | 6 de jul. de 2026 | https://www.comprerural.com/fendt-celebra-50-mil-tratores-da-serie-900-vario-com-edicao-limitada-que-resgata-um-dos-modelos-mais-iconicos-da-marca/ |
| Case IH | comprerural.com | Case IH lança nova geração de máquinas com drones... | 10 de fev. de 2026 | https://www.comprerural.com/case-ih-lanca-nova-geracao-de-maquinas-com-drones-automacao-e-financiamento-especial/ |
| Case IH | comprerural.com | Conheça os novos tratores Case IH Optum que prometem... | 6 de mar. de 2026 | https://www.comprerural.com/conheca-os-novos-tratores-case-ih-optum-que-prometem-revolucionar-a-produtividade-no-campo/ |
| Case IH | comprerural.com | Maior colheitadeira Axial do mundo chega ao Brasil, em MT | 24 de mar. de 2026 | https://www.comprerural.com/maior-colheitadeira-axial-do-mundo-chega-ao-brasil-em-mt/ |
| Case IH | comprerural.com | Gigante dos tratores lança maior drone de pulverização do... | 2 de jan. de 2026 | https://www.comprerural.com/gigante-dos-tratores-lanca-maior-drone-de-pulverizacao-do-pais-em-2025-relembre/ |
| Case IH | comprerural.com | Um dos maiores Drones de Aplicação realiza desafio... | 21 de jan. de 2026 | https://www.comprerural.com/um-dos-maiores-drones-de-aplicacao-realiza-desafio-inedito-na-fazenda-conectada-case-ih/ |
| Case IH | comprerural.com | Cocari acelera rumo aos R$ 10 bilhões com compra da... | 24 de fev. de 2026 | https://www.comprerural.com/cocari-acelera-rumo-aos-r-10-bilhoes-com-compra-da-pivot-e-amplia-dominio-da-case-ih-e-lindsay/ |
| New Holland Agriculture | estadao.com.br | Agrishow: New Holland investe R$ 100 milhões em fábrica... | 28 de abr. de 2026 | https://www.estadao.com.br/economia/agronegocios/agrishow-new-holland-investe-r-100-milhoes-em-fabrica-de-plataforma-de-colheitadeiras-em-curitiba/ |
| New Holland Agriculture | agrolink.com.br | New Holland destaca a força do agro na Agrishow 2026 | 28 de abr. de 2026 | https://www.agrolink.com.br/noticias/new-holland-destaca-a-forca-do-agro-na-agrishow-2026_513613.html |
| New Holland Agriculture | agrolink.com.br | New Holland leiloa trator comemorativo | 11 de dez. de 2025 | https://www.agrolink.com.br/noticias/new-holland-leiloa-trator-comemorativo_508896.html |
| New Holland Agriculture | agrolink.com.br | New Holland apresenta linha renovada de tratores na... | 29 de abr. de 2026 | https://www.agrolink.com.br/noticias/new-holland-apresenta-linha-renovada-de-tratores-na-agrishow-2026_513666.html |
| New Holland Agriculture | agrolink.com.br | Agrishow 2026: New Holland e CNH investem mais de R$... | 28 de abr. de 2026 | https://www.agrolink.com.br/noticias/agrishow-2026--new-holland-e-cnh-investem-mais-de-r--100-milhoes-para-nacionalizar-producao-de-plataformas-de-colheita-draper_513628.html |
| Case IH | portalmaquinasagricolas.com.br | Case IH destaca colheitadeira de 775 cv e tecnologias... | 10 de jun. de 2026 | https://portalmaquinasagricolas.com.br/case-ih-destaca-colheitadeira-de-775-cv-e-tecnologias-autonomas-na-bahia-farm-show/ |
| Case IH | portalmaquinasagricolas.com.br | Case IH apresenta na Tecnoshow 2026 nova geração de... | 6 de abr. de 2026 | https://portalmaquinasagricolas.com.br/case-ih-apresenta-na-tecnoshow-2026-nova-geracao-de-maquinas-e-solucoes/amp/ |
| Case IH | portalmaquinasagricolas.com.br | Parceria entre Senar MT e Case IH forma mais de 500... | 26 de ago. de 2026 | https://portalmaquinasagricolas.com.br/parceria-entre-senar-mt-e-case-ih-forma-mais-de-500-profissionais-em-tecnologias-de-automacao/ |
| New Holland Agriculture | revistacultivar.com.br | New Holland amplia portfólio para vinhedos estreitos | 24 de nov. de 2025 | https://revistacultivar.com.br/noticias/new-holland-amplia-portfolio-para-vinhedos-estreitos |
| New Holland Agriculture | revistacultivar.com.br | New Holland apresenta colhedora CR11 na Argentina | 28 de mai. de 2026 | https://revistacultivar.com.br/noticias/new-holland-apresenta-colhedora-cr11-na-argentina |
| New Holland Agriculture | revistacultivar.com.br | New Holland apresenta trator conceito inspirado no Fiat 702 | 28 de abr. de 2026 | https://revistacultivar.com.br/noticias/new-holland-apresenta-trator-conceito-inspirado-no-fiat-702 |
| New Holland Agriculture | revistacultivar.com.br | New Holland lança trator T7 HD com bitola de 3 metros na... | 23 de out. de 2025 | https://revistacultivar.com.br/noticias/new-holland-lanca-trator-t7-hd-com-bitola-de-3-metros-na-australia |
| New Holland Agriculture | revistacultivar.com.br | New Holland T4.85 F | 29 de set. de 2025 | https://revistacultivar.com.br/trator/new-holland/t485-f |
| New Holland Agriculture | revistacultivar.com.br | New Holland leva vendimiadora Braud à Sitevinitech 2026 | 11 de mai. de 2026 | https://revistacultivar.com.br/noticias/new-holland-leva-vendimiadora-braud-a-sitevinitech-2026 |
| New Holland Agriculture | revistacultivar.com.br | New Holland recebe Red Dot pelo trator T7 Standard... | 4 de mai. de 2026 | https://revistacultivar.com.br/noticias/new-holland-recebe-red-dot-pelo-trator-t7-standard-wheelbase |
| New Holland Agriculture | revistacultivar.com.br | New Holland apresenta tratores T7 XD na América do Norte | 23 de fev. de 2026 | https://revistacultivar.com.br/noticias/new-holland-apresenta-tratores-t7-xd-na-america-do-norte |
| New Holland Agriculture | canalrural.com.br | Universidade do Agro e New Holland lançam Centro de... | 13 de mai. de 2026 | https://www.canalrural.com.br/projetos/conteudo-patrocinado/educacao-que-constroi-o-futuro-universidade-do-agro-e-new-holland-lancam-centro-de-treinamento-em-mg/ |
| Massey Ferguson | agrolink.com.br | Massey Ferguson lança na Agrishow 2026 plataforma... | 15 de abr. de 2026 | https://www.agrolink.com.br/noticias/massey-ferguson-lanca-na-agrishow-2026-plataforma-digital-que-unifica-frotas-e-reduz-custos-com-combustivel-e-insumos_513136.html |
| Massey Ferguson | agrolink.com.br | Agrishow 2026: inovadora e centenária colheitadeira... | 29 de abr. de 2026 | https://www.agrolink.com.br/noticias/agrishow-2026--inovadora-e-centenaria-colheitadeira-gleaner-chega-ao-brasil_513674.html |
| Massey Ferguson | agrolink.com.br | Pela primeira vez no Brasil, trator MF 9S chega à Agrishow... | 17 de abr. de 2026 | https://www.agrolink.com.br/noticias/pela-primeira-vez-no-brasil--trator-mf-9s-chega-a-agrishow-2026-com-foco-em-automacao--eficiencia-e-conectividade_513245.html |
| Massey Ferguson | agrolink.com.br | Massey Ferguson apresenta motor a etanol com foco na... | 28 de abr. de 2026 | https://www.agrolink.com.br/noticias/massey-ferguson-apresenta-motor-a-etanol-com-foco-na-reducao-de-custos-e-descarbonizacao-na-agrishow-2026_513622.html |
| Massey Ferguson | valor.globo.com | Head global da Massey Ferguson prevê fim da baixa nas... | 5 de mai. de 2026 | https://valor.globo.com/agronegocios/noticia/2026/05/05/head-global-da-massey-ferguson-preve-fim-da-baixa-nas-vendas-de-maquinas-ate-o-fim-do-ano.ghtml |
| Massey Ferguson | valor.globo.com | AGCO fecha primeiro trimestre de 2026 com lucro líquido de... | 5 de mai. de 2026 | https://valor.globo.com/agronegocios/noticia/2026/05/05/agco-fecha-primeiro-trimestre-de-2026-com-lucro-lquido-de-us-55-milhes.ghtml |
| Massey Ferguson | valor.globo.com | Lucro da AGCO quintuplicou no trimestre - Valor Econômico | 6 de mai. de 2026 | https://valor.globo.com/agronegocios/noticia/2026/05/06/lucro-da-agco-quintuplicou-no-trimestre.ghtml |
| New Holland Agriculture | comprerural.com | New Holland leva soluções inovadoras e agricultura digital... | 9 de fev. de 2026 | https://www.comprerural.com/new-holland-leva-solucoes-inovadoras-e-agricultura-digital-do-plantio-a-colheita-ao-show-rural/ |
| Massey Ferguson | canalrural.com.br | Massey aposta em trator de alta potência para ampliar... | 16 de abr. de 2026 | https://www.canalrural.com.br/agricultura/massey-aposta-em-trator-de-alta-potencia-para-ampliar-vendas-a-grandes-produtores-rurais/ |
| Massey Ferguson | canalrural.com.br | Massey Ferguson apresenta motor a etanol com foco na... | 1 de jul. de 2026 | https://www.canalrural.com.br/agricultura/massey-ferguson-apresenta-motor-a-etanol-com-foco-na-reducao-de-custos-e-descarbonizacao/ |
| Massey Ferguson | canalrural.com.br | Massey aposta no Brasil como novo centro global e lança... | 28 de abr. de 2026 | https://www.canalrural.com.br/agricultura/massey-aposta-no-brasil-como-novo-centro-global-e-lanca-seu-trator-mais-potente/ |
| New Holland Agriculture | portalmaquinasagricolas.com.br | New Holland apresenta nova geração de colheitadeiras... | 9 de mar. de 2026 | https://portalmaquinasagricolas.com.br/new-holland-apresenta-nova-geracao-de-colheitadeiras-cr-na-expodireto/ |
| New Holland Agriculture | portalmaquinasagricolas.com.br | New Holland leva pulverização com IA e maior... | 9 de jun. de 2026 | https://portalmaquinasagricolas.com.br/new-holland-leva-pulverizacao-com-ia-e-maior-colheitadeira-do-brasil-a-bahia-farm-show/ |
| New Holland Agriculture | portalmaquinasagricolas.com.br | New Holland vence prêmio de melhor trator de 2026 na... | 13 de nov. de 2025 | https://portalmaquinasagricolas.com.br/new-holland-vence-premio-de-melhor-trator-de-2026-na-categoria-especializado/ |
| New Holland Agriculture | portalmaquinasagricolas.com.br | New Holland apresenta na Tecnoshow linha de... | 6 de abr. de 2026 | https://portalmaquinasagricolas.com.br/new-holland-apresenta-na-tecnoshow-linha-de-colheitadeiras-renovada-com-inteligencia-artificial/ |
| New Holland Agriculture | portalmaquinasagricolas.com.br | New Holland inaugura Centro de Treinamento em... | 12 de ago. de 2026 | https://portalmaquinasagricolas.com.br/new-holland-inaugura-centro-de-treinamento-em-uberaba-mg/ |
| New Holland Agriculture | portalmaquinasagricolas.com.br | New Holland investe mais de R$ 100 milhões para... | 28 de abr. de 2026 | https://portalmaquinasagricolas.com.br/new-holland-investe-mais-de-r-100-milhoes-para-nacionalizar-plataformas-de-corte-draper/ |
| Massey Ferguson | globorural.globo.com | Massey Ferguson trará ao Brasil nova colheitadeira... | 30 de abr. de 2026 | https://globorural.globo.com/feiras/noticia/2026/04/massey-ferguson-trara-ao-brasil-nova-colheitadeira-fabricada-nos-eua.ghtml |
| Massey Ferguson | globorural.globo.com | Massey Ferguson lança trator que pode reduzir consumo... | 16 de abr. de 2026 | https://globorural.globo.com/maquinas-agricolas/noticia/2026/04/massey-ferguson-lanca-trator-que-pode-reduzir-consumo-de-diesel-em-ate-30percent.ghtml |
| Massey Ferguson | globorural.globo.com | Massey Ferguson amplia acesso à agricultura de precisão... | 8 de mai. de 2026 | https://globorural.globo.com/conteudo-de-marca/massey-ferguson/noticia/2026/05/massey-ferguson-amplia-acesso-a-agricultura-de-precisao-e-apresenta-sua-maior-linha-de-tratores-na-agrishow.ghtml |
| Massey Ferguson | globorural.globo.com | Valence Massey Ferguson chega ao Nordeste com... | 16 de mar. de 2026 | https://globorural.globo.com/maquinas-agricolas/noticia/2026/03/valence-massey-ferguson-chega-ao-nordeste-com-investimento-de-r-35-milhoes.ghtml |
| Massey Ferguson | globorural.globo.com | AGCO anuncia nova estrutura de liderança na América... | 19 de jan. de 2026 | https://globorural.globo.com/maquinas-agricolas/noticia/2026/01/agco-anuncia-nova-estrutura-de-lideranca-na-america-latina.ghtml |
| Massey Ferguson | globorural.globo.com | Mecânicos de Jataí (GO) e Itaú de Minas (MG) conquistam... | 28 de nov. de 2025 | https://globorural.globo.com/conteudo-de-marca/massey-ferguson/noticia/2025/11/mecanicos-de-jatai-go-e-itau-de-minas-mg-conquistam-titulo-de-melhores-do-brasil-em-reality-show-da-massey-ferguson.ghtml |
| Massey Ferguson | noticiasagricolas.com.br | Massey Ferguson apresenta soluções com foco no futuro... | 9 de dez. de 2025 | https://www.noticiasagricolas.com.br/videos/agronegocio/412260-massey-ferguson-apresenta-solucoes-com-foco-no-futuro-na-maior-feira-de-tecnologia-agricola-do-mundo.html |
| Massey Ferguson | noticiasagricolas.com.br | Massey Ferguson celebra 65 anos olhando para o futuro... | | https://www.noticiasagricolas.com.br/videos/maquinas-e-tecnologias/427895-massey-ferguson-celebra-65-anos-olhando-para-o-futuro-do-agro.html |
| Massey Ferguson | noticiasagricolas.com.br | Soluções voltadas para o futuro na Agritechnica 2025 | 12 de nov. de 2025 | https://www.noticiasagricolas.com.br/noticias/maquinas-e-tecnologias/410794-solucoes-voltadas-para-o-futuro.html |
| Massey Ferguson | noticiasagricolas.com.br | Máquinas e Tecnologias | | https://www.noticiasagricolas.com.br/videos/maquinas-e-tecnologias/ |
| Massey Ferguson | noticiasagricolas.com.br | AGCO anuncia nova estrutura de liderança na América... | 20 de jan. de 2026 | https://www.noticiasagricolas.com.br/noticias/agronegocio/414139-agco-anuncia-nova-estrutura-de-lideranca-na-america-latina-como-parte-de-sua-estrategia-global.html |
| Stara | globorural.globo.com | Stara amplia presença internacional com novo escritório... | 11 de nov. de 2025 | https://globorural.globo.com/feiras/noticia/2025/11/stara-amplia-presenca-internacional-com-novo-escritorio-na-africa.ghtml |
| Stara | globorural.globo.com | Empresa brasileira une distribuição por barra e... | 4 de mai. de 2026 | https://globorural.globo.com/maquinas-agricolas/noticia/2026/05/empresa-brasileira-une-distribuicao-por-barra-e-pulverizacao-em-uma-unica-maquina.ghtml |
| Stara | canalrural.com.br | Empresas brasileiras adaptam máquinas agrícolas para... | 25 de nov. de 2025 | https://www.canalrural.com.br/agricultura/empresas-brasileiras-adaptam-maquinas-agricolas-para-vender-na-europa/ |
| Stara | canalrural.com.br | Proprietário da Stara, Gilson Trennepohl é resgatado de... | 23 de dez. de 2025 | https://www.canalrural.com.br/seguranca/proprietario-da-stara-gilson-trennepohl-e-resgatado-de-sequestro/ |
| Jacto | portalmaquinasagricolas.com.br | Jacto apresenta pulverizador tratorizado Advance 2000... | 10 de fev. de 2026 | https://portalmaquinasagricolas.com.br/jacto-apresenta-pulverizador-tratorizado-advance-2000-am24/ |
| Jacto | portalmaquinasagricolas.com.br | Jacto incorpora novos equipamentos no portifólio de... | 25 de ago. de 2026 | https://portalmaquinasagricolas.com.br/jacto-incorpora-novos-equipamentos-no-portifolio-de-drones-agricolas/ |
| Stara | revistacultivar.com.br | Stara apresenta máquina multifuncional Spartakus no... | 9 de fev. de 2026 | https://revistacultivar.com.br/noticias/stara-apresenta-maquina-multifuncional-spartakus-no-show-rural |
| Stara | revistacultivar.com.br | Stara lança nova versão da plantadeira Absoluta na... | 11 de mar. de 2026 | https://revistacultivar.com.br/noticias/stara-lanca-nova-versao-da-plantadeira-absoluta-na-expodireto-cotrijal |
| Stara | revistacultivar.com.br | Stara inaugura centro de distribuição de peças em Goiás | 22 de jun. de 2026 | https://revistacultivar.com.br/noticias/stara-inaugura-centro-de-distribuicao-de-pecas-em-goias |
| Stara | revistacultivar.com.br | Stara apresenta Hércules 9.0 na Agrishow | 28 de abr. de 2026 | https://revistacultivar.com.br/noticias/stara-apresenta-hercules-9-0-na-agrishow |
| Stara | revistacultivar.com.br | Principais erros nas operações de máquinas agrícolas e... | 15 de dez. de 2025 | https://revistacultivar.com.br/artigos/principais-erros-nas-operacaos-de-maquinas-agricolas-e-como-evita-los |
| Stara | revistacultivar.com.br | Pulverizador agrícola: por que investir em autopropelidos? | 11 de dez. de 2025 | https://revistacultivar.com.br/artigos/pulverizador-agricola-por-que-investir-em-autopropelidos |
| Stara | portalmaquinasagricolas.com.br | Brasil bate recorde de participação na Agritechnica 2025 | 12 de nov. de 2025 | https://portalmaquinasagricolas.com.br/brasil-bate-recorde-de-participacao-na-agritechnica-2025/ |
| John Deere | globorural.globo.com | John Deere vai fabricar componentes eletrônicos de... | 23 de jul. de 2026 | https://globorural.globo.com/maquinas-agricolas/noticia/2026/07/john-deere-vai-fabricar-componentes-eletronicos-de-maquinas-agricolas-no-brasil.ghtml |
| John Deere | globorural.globo.com | Lucro líquido da Deere & Company cai 24,5% no primeiro... | 19 de fev. de 2026 | https://globorural.globo.com/maquinas-agricolas/noticia/2026/02/lucro-liquido-da-deere-and-company-cai-245percent-no-primeiro-trimestre-fiscal-de-2026.ghtml |
| John Deere | globorural.globo.com | John Deere aposta nos financiamentos em dólar para... | 27 de abr. de 2026 | https://globorural.globo.com/feiras/noticia/2026/04/john-deere-aposta-nos-financiamentos-em-dolar-para-garantir-vendas.ghtml |
| John Deere | globorural.globo.com | John Deere abre inscrições de premiação para reconhecer... | 15 de mai. de 2026 | https://globorural.globo.com/conteudo-de-marca/john-deere/noticia/2026/05/john-deere-abre-inscricoes-de-premiacao-para-reconhecer-os-produtores-mais-tecnologicos-da-america-latina.ghtml |
| John Deere | globorural.globo.com | John Deere demite 150 funcionários na fábrica de... | 18 de set. de 2025 | https://globorural.globo.com/maquinas-agricolas/noticia/2025/09/john-deere-demite-150-funcionarios-na-fabrica-de-horizontina-rs.ghtml |
| Stara | comprerural.com | Conheça os lançamentos apresentados pela Stara no... | 10 de fev. de 2026 | https://www.comprerural.com/conheca-os-lancamentos-apresentados-pela-stara-no-show-rural-coopavel-2026/ |
| John Deere | folha.uol.com.br | John Deere: tarifas de Trump pressionam agricultores - Folha | 10 de dez. de 2025 | https://www1.folha.uol.com.br/mercado/2025/12/tarifas-de-trump-aumentam-pressao-sobre-agricultores-dos-eua-alerta-john-deere.shtml |
| John Deere | folha.uol.com.br | Tratores se destacam entre carros com brilho dos pneus - Folha | 27 de nov. de 2025 | https://www1.folha.uol.com.br/mercado/2025/11/tratores-expostos-no-salao-do-automovel-chamam-atencao-com-pneus-que-brilham.shtml |
| John Deere | valor.globo.com | Câmeras e IA tornam máquinas agrícolas mais precisas | 27 de jul. de 2026 | https://valor.globo.com/publicacoes/especiais/revista-agronegocio/noticia/2026/07/27/cameras-e-ia-tornam-maquinas-agricolas-mais-precisas.ghtml |
| John Deere | canalrural.com.br | John Deere começará a produzir componentes eletrônicos... | 23 de jul. de 2026 | https://www.canalrural.com.br/agricultura/john-deere-comecara-a-produzir-componentes-eletronicos-de-maquinas-no-brasil/ |
| John Deere | canalrural.com.br | SLC Máquinas traz rentabilidade com soluções alinhadas... | 9 de mar. de 2026 | https://www.canalrural.com.br/projetos/conteudo-patrocinado/slc-maquinas-traz-rentabilidade-com-solucoes-alinhadas-as-demandas-gauchas/ |
| John Deere | canalrural.com.br | Tecnologia no cultivo do milho: mais precisão, eficiência e... | 31 de mar. de 2026 | https://matogrosso.canalrural.com.br/projetos/mais-milho/tecnologia-no-cultivo-do-milho-mais-precisao-eficiencia-e-decisoes-baseadas-em-dados/ |
| John Deere | canalrural.com.br | Novas tecnologias aumentam precisão na aplicação de... | | https://www.canalrural.com.br/videos/novas-tecnologias-aumentam-precisao-na-aplicacao-de-defensivos-agricolas/ |
| John Deere | agrolink.com.br | LCA oferece 87% do CDI e isenção de IR | 19 de ago. de 2026 | https://www.agrolink.com.br/noticias/lca-oferece-87--do-cdi-e-isencao-de-ir_518004.html |
| John Deere | noticiasagricolas.com.br | Silvicultura brasileira cresce, passa por modernização e se... | 2 de jul. de 2026 | https://www.noticiasagricolas.com.br/artigos/artigos-geral/424052-silvicultura-brasileira-cresce-passa-por-modernizacao-e-se-torna-referencia-em-produtividade-e-sustentabilidade-em-tres-decadas.html |
| John Deere | portalmaquinasagricolas.com.br | John Deere lança colheitadeira voltada a pequenos e... | 9 de mar. de 2026 | https://portalmaquinasagricolas.com.br/john-deere-lanca-colheitadeira-voltada-a-pequenos-e-medios-agricultores/ |
| John Deere | portalmaquinasagricolas.com.br | John Deere amplia rede de Construção com dois novos... | 7 de jul. de 2026 | https://portalmaquinasagricolas.com.br/john-deere-amplia-rede-de-construcao-com-dois-novos-distribuidores/ |
| John Deere | portalmaquinasagricolas.com.br | John Deere anuncia acordo para distribuição de produtos... | 25 de ago. de 2026 | https://portalmaquinasagricolas.com.br/john-deere-anuncia-acordo-para-distribuicao-de-produtos-da-cmak-agro-forest/ |
| John Deere | portalmaquinasagricolas.com.br | Tratores 8R e pulverizadores Série 400R são destaques... | 24 de mar. de 2026 | https://portalmaquinasagricolas.com.br/tratores-8r-e-pulverizadores-serie-400r-sao-destaques-da-casa-john-deere-2026/ |
| John Deere | portalmaquinasagricolas.com.br | John Deere lança “cidade tecnológica” para maior evento... | 24 de mar. de 2026 | https://portalmaquinasagricolas.com.br/john-deere-lanca-cidade-tecnologica-para-maior-evento-da-marca-no-brasil/ |
| John Deere | portalmaquinasagricolas.com.br | John Deere lança colhedora de cana CH7 com foco em... | 27 de abr. de 2026 | https://portalmaquinasagricolas.com.br/john-deere-lanca-colhedora-de-cana-ch7-com-foco-em-eficiencia-operacional/ |
| John Deere | portalmaquinasagricolas.com.br | John Deere anuncia aquisição de propriedade intelectual... | 19 de fev. de 2026 | https://portalmaquinasagricolas.com.br/john-deere-anuncia-aquisicao-de-propriedade-intelectual-e-ativos-relacionados-da-risutec-oy/ |
| John Deere | comprerural.com | Gigante do trator, John Deere vai investir R$ 75 milhões e... | 24 de jul. de 2026 | https://www.comprerural.com/gigante-do-trator-john-deere-vai-investir-r-75-milhoes-e-amplia-aposta-no-brasil-veja-onde/ |
| John Deere | comprerural.com | Produtores vencem batalha contra John Deere no Estados... | 9 de jul. de 2026 | https://www.comprerural.com/produtores-vencem-batalha-contra-john-deere-no-estados-unidos-entenda/ |
| John Deere | comprerural.com | John Deere cria “ChatGPT do campo”: IA responde... | 2 de set. de 2026 | https://www.comprerural.com/john-deere-cria-chatgpt-do-campo-ia-responde-perguntas-sobre-maquinas-e-lavouras/ |
| John Deere | comprerural.com | Justiça suspende dívidas com Banco John Deere e... | 4 de set. de 2026 | https://www.comprerural.com/justica-suspende-dividas-com-banco-john-deere-e-impede-busca-e-apreensao-de-maquinarios-de-produtor-rural/ |
| John Deere | comprerural.com | John Deere ajusta produção para reduzir estoques na... | 24 de mar. de 2026 | https://www.comprerural.com/john-deere-ajusta-producao-para-reduzir-estoques-na-rede-ante-juros-elevados/ |
| John Deere | comprerural.com | Gigante mundial dos tratores faz demissão em massa no... | 18 de set. de 2025 | https://www.comprerural.com/gigante-mundial-dos-tratores-faz-demissao-em-massa-no-brasil-entenda/ |
| John Deere | comprerural.com | Brutal picape da John Deere pode redefinir o futuro das... | 25 de set. de 2025 | https://www.comprerural.com/brutal-picape-da-john-deere-pode-redefinir-o-futuro-das-caminhonetes-no-brasil/ |
| John Deere | revistacultivar.com.br | John Deere apresenta colhedoras CH7 e CH9 para cana | 28 de abr. de 2026 | https://revistacultivar.com.br/noticias/john-deere-apresenta-colhedoras-ch7-e-ch9-para-cana |
| John Deere | revistacultivar.com.br | John Deere mostra colheitadeira S4 e pulverizador 1025E... | 10 de mar. de 2026 | https://revistacultivar.com.br/noticias/john-deere-mostra-colheitadeira-s4-e-pulverizador-1025e-na-expodireto |
| John Deere | revistacultivar.com.br | John Deere apresenta lançamentos de 2026 no Brasil | 23 de mar. de 2026 | https://revistacultivar.com.br/noticias/john-deere-apresenta-lancamentos-de-2026-no-brasil |
| John Deere | revistacultivar.com.br | John Deere define nova gestão para pós-venda na... | 8 de jan. de 2026 | https://revistacultivar.com.br/noticias/john-deere-define-nova-gestao-para-pos-venda-na-america-latina |
| John Deere | revistacultivar.com.br | John Deere amplia fábrica de Canoas para produzir... | 23 de jul. de 2026 | https://revistacultivar.com.br/noticias/john-deere-amplia-fabrica-de-canoas-para-produzir-eletronicos |
| John Deere | revistacultivar.com.br | John Deere lança tecnologias para reduzir impacto da... | 7 de out. de 2025 | https://revistacultivar.com.br/noticias/john-deere-lanca-tecnologias-para-reduzir-impacto-da-cintilacao-nas-maquinas-agricolas |
| John Deere | revistacultivar.com.br | John Deere amplia automação nas colheitadeiras X9 e S7... | 25 de fev. de 2026 | https://revistacultivar.com.br/noticias/john-deere-amplia-automacao-nas-colheitadeiras-x9-e-s7-para-2027 |
| John Deere | revistacultivar.com.br | John Deere leva tecnologia ao Salão do Automóvel de... | 24 de nov. de 2025 | https://revistacultivar.com.br/noticias/john-deere-leva-tecnologia-ao-salao-do-automovel-de-sao-paulo |
| John Deere | revistacultivar.com.br | John Deere destaca colheitadeira S4 no Show Rural | 9 de fev. de 2026 | https://revistacultivar.com.br/noticias/john-deere-destaca-colheitadeira-s4-no-show-rural |
| John Deere | agrorevenda.com.br | John Deere cria 'cidade do agro' e acelera corrida... | 23 de mar. de 2026 | https://agrorevenda.com.br/destaques/john-deere-cria-cidade-do-agro-e-acelera-corrida-tecnologica/ |
| John Deere | agrorevenda.com.br | Publique fala com executivos na Casa John Deere | 23 de mar. de 2026 | https://agrorevenda.com.br/noticia/grupo-publique-entrevista-executivos-na-casa-john-deere/ |
| John Deere | agrorevenda.com.br | Fábrica da John Deere no RS ganhará linha eletrônica | 23 de jul. de 2026 | https://agrorevenda.com.br/noticia/fabrica-da-john-deere-no-rs-ganhara-linha-eletronica/ |
| Case IH | agrolink.com.br | Agrishow 2026: Máquinas movidas a etanol da Case IH... | 29 de abr. de 2026 | https://www.agrolink.com.br/noticias/agrishow-2026--maquinas-movidas-a-etanol-da-case-ih-apresentam-resultados-e-avancos-no-campo_513670.html |
| Case IH | agrolink.com.br | Case IH participa da Expodireto Cotrijal 2026 com... | 9 de mar. de 2026 | https://www.agrolink.com.br/noticias/case-ih-participa-da-expodireto-cotrijal-2026-com-maquinas-e-solucoes-para-o-produtor-gaucho_511794.html |
| Case IH | agrolink.com.br | Tecnologia aérea supera 800 hectares com alta precisão | 21 de jan. de 2026 | https://www.agrolink.com.br/noticias/tecnologia-aerea-supera-800-hectares-com-alta-precisao_510097.html |
| Case IH | noticiasagricolas.com.br | Case IH leva ecossistema completo de tecnologia e... | 23 de abr. de 2026 | https://www.noticiasagricolas.com.br/noticias/maquinas-e-tecnologias/419519-case-ih-leva-ecossistema-completo-de-tecnologia-e-solucoes-para-a-agrishow-2026.html |
| Case IH | globorural.globo.com | Fazenda-laboratório de agricultura digital colhe safra... | 12 de jan. de 2026 | https://globorural.globo.com/agricultura/noticia/2026/01/fazenda-laboratorio-de-agricultura-digital-colhe-safra-recorde-de-soja-em-mato-grosso.ghtml |
| Case IH | revistacultivar.com.br | Case IH apresenta enfardadora LB436 HD na AgroActiva | 2 de jun. de 2026 | https://revistacultivar.com.br/noticias/case-ih-apresenta-enfardadora-lb436-hd-na-agroactiva |
| Case IH | revistacultivar.com.br | Case IH lança trator Optum com bitola de três metros na... | 30 de set. de 2025 | https://revistacultivar.com.br/noticias/case-ih-lanca-trator-optum-com-bitola-de-tres-metros-na-australia |
| Case IH | revistacultivar.com.br | Case IH apresenta tratores no Show Rural Coopavel | 10 de fev. de 2026 | https://revistacultivar.com.br/noticias/case-ih-apresenta-tratores-no-show-rural-coopavel |
| Case IH | revistacultivar.com.br | Test drive drone P150 Case IH, Um desafio de 24 horas | 20 de mar. de 2026 | https://revistacultivar.com.br/artigos/test-drive-drone-p150-case-ih-um-desafio-de-24-horas |
| Case IH | revistacultivar.com.br | Case IH apresenta nova geração de tecnologias na... | 11 de mar. de 2026 | https://revistacultivar.com.br/noticias/case-ih-apresenta-nova-geracao-de-tecnologias-na-expodireto-cotrijal |
| Case IH | revistacultivar.com.br | Case IH lança Patriot 4050 na Expoagro 2026 | 23 de fev. de 2026 | https://revistacultivar.com.br/noticias/case-ih-lanca-patriot-4050-na-expoagro-2026 |
| Case IH | revistacultivar.com.br | Case IH lança trator Farmall A com 110 cv na Europa | 15 de set. de 2025 | https://revistacultivar.com.br/noticias/case-ih-lanca-trator-farmall-a-com-110-cv-na-europa |
| Case IH | revistacultivar.com.br | Case IH leva tratores Farmall e Puma à Expo Rural 2026 | 13 de jul. de 2026 | https://revistacultivar.com.br/noticias/case-ih-leva-tratores-farmall-e-puma-a-expo-rural-2026 |
| Case IH | revistacultivar.com.br | Case IH testa trator a etanol em parceria com a São Martinho | 17 de nov. de 2025 | https://revistacultivar.com.br/noticias/case-ih-testa-trator-a-etanol-em-parceria-com-a-sao-martinho |
| Massey Ferguson | comprerural.com | Massey reforça presença no grande agronegócio com... | 16 de abr. de 2026 | https://www.comprerural.com/massey-reforca-presenca-no-grande-agronegocio-com-aposta-em-maquinas-de-alta-potencia/ |
| Massey Ferguson | comprerural.com | um trator clássico Massey Ferguson 50x | 26 de fev. de 2026 | https://www.comprerural.com/gusttavo-lima-apresenta-sua-nova-aquisicao-um-trator-classico-massey-ferguson-50x/ |
| Massey Ferguson | comprerural.com | Colheitadeira centenária chega ao país com proposta de... | 27 de abr. de 2026 | https://www.comprerural.com/gleaner-colheitadeira-centenaria-chega-ao-pais-com-proposta-de-simplificar-e-aumentar-a-eficiencia/ |
| Massey Ferguson | comprerural.com | Potência máxima: Massey lança seu maior trator e coloca... | 28 de abr. de 2026 | https://www.comprerural.com/potencia-maxima-massey-lanca-seu-maior-trator-e-coloca-o-brasil-no-centro-do-mapa-global/ |
| Massey Ferguson | comprerural.com | Massey Ferguson lança plantadeira Momentum de 40... | 25 de abr. de 2026 | https://www.comprerural.com/massey-ferguson-lanca-plantadeira-momentum-de-40-linhas-e-promete-elevar-produtividade-no-campo/ |
| Massey Ferguson | revistacultivar.com.br | Massey Ferguson apresenta nova geração de máquinas... | 9 de mar. de 2026 | https://revistacultivar.com.br/noticias/massey-ferguson-apresenta-nova-geracao-de-maquinas-na-expodireto |
| Massey Ferguson | revistacultivar.com.br | Massey Ferguson será colheitadeira oficial da Expoagro... | 28 de jan. de 2026 | https://revistacultivar.com.br/noticias/massey-ferguson-sera-colheitadeira-oficial-da-expoagro-2026 |
| Massey Ferguson | revistacultivar.com.br | MF 9695 - Massey Ferguson | 29 de set. de 2025 | https://revistacultivar.com.br/colhedora/massey-ferguson/mf-9695 |
| Massey Ferguson | revistacultivar.com.br | Massey Ferguson apresenta série de tratores MF 3700 | 10 de abr. de 2026 | https://revistacultivar.com.br/noticias/massey-ferguson-apresenta-serie-de-tratores-mf-3700 |
| Massey Ferguson | revistacultivar.com.br | Massey Ferguson leva novos tratores à AgroActiva 2026 | 28 de mai. de 2026 | https://revistacultivar.com.br/noticias/massey-ferguson-leva-novos-tratores-a-agroactiva-2026 |
| Massey Ferguson | revistacultivar.com.br | Massey Ferguson lança tratores 9S no Brasil | 16 de abr. de 2026 | https://revistacultivar.com.br/noticias/massey-ferguson-lanca-tratores-9s-no-brasil |
| Massey Ferguson | revistacultivar.com.br | Massey Ferguson destaca portfólio na Coopercitrus Expo... | 20 de jul. de 2026 | https://revistacultivar.com.br/noticias/massey-ferguson-destaca-portfolio-na-coopercitrus-expo-2026 |
| Case IH | safras.com.br | Case IH projeta retração do mercado de máquinas em 2026 e... | 28 de abr. de 2026 | https://safras.com.br/case-ih-projeta-na-agrishow-retracao-do-mercado-de-maquinas-em-2026-e-ve-credito-de-alckmin-como-impulso-a-demanda/ |
| Massey Ferguson | portaldoagronegocio.com.br | Massey Ferguson apresenta novas versões dos tratores... | 5 de mar. de 2026 | https://www.portaldoagronegocio.com.br/agroindustria/maquinas-e-implementos/noticias/massey-ferguson-apresenta-novas-versoes-dos-tratores-mf-4700-e-mf-7718-na-expodireto-2026 |
| Massey Ferguson | portaldoagronegocio.com.br | Massey Ferguson amplia portfólio e aposta em tecnologia... | 12 de jun. de 2026 | https://www.portaldoagronegocio.com.br/agroindustria/maquinas-e-implementos/noticias/massey-ferguson-amplia-portfolio-e-aposta-em-tecnologia-para-elevar-produtividade-no-agronegocio-brasileiro |
| Massey Ferguson | portaldoagronegocio.com.br | Massey Ferguson apresenta tratores MF 5M e MF 6M com... | 10 de abr. de 2026 | https://www.portaldoagronegocio.com.br/agroindustria/maquinas-e-implementos/noticias/massey-ferguson-apresenta-tratores-mf-5m-e-mf-6m-com-mais-tecnologia-na-agrishow-2026 |
| Massey Ferguson | estadao.com.br | Massey quer crescer no País com nova geração de... | 6 de abr. de 2026 | https://www.estadao.com.br/economia/coluna-do-broadcast-agro/massey-quer-crescer-no-pais-com-nova-geracao-de-maquinas/ |
| Massey Ferguson | estadao.com.br | Afonso Motta: veja número e partido nas Eleições 2026 | 23 de ago. de 2026 | https://www.estadao.com.br/politica/eleicoes/2026/candidatos-rs/deputado-federal/afonso-motta-1200/ |
| Massey Ferguson | folha.uol.com.br | Mercado de máquinas agrícolas sofre com juros e preços... | 3 de mai. de 2026 | https://www1.folha.uol.com.br/mercado/2026/05/mercado-de-maquinas-agricolas-sofre-com-juros-e-precos-baixos-de-graos.shtml |
| Massey Ferguson | portalmaquinasagricolas.com.br | Massey Ferguson apresenta novo trator MF 9S, o maior e... | 17 de abr. de 2026 | https://portalmaquinasagricolas.com.br/massey-ferguson-apresenta-novo-trator-mf-9s-o-maior-e-mais-potente-da-marca/ |
| Massey Ferguson | portalmaquinasagricolas.com.br | Mecânicos de Jataí (GO) e Itaú de Minas (MG) vencem o... | 31 de out. de 2025 | https://portalmaquinasagricolas.com.br/mecanicos-de-jatai-go-e-itau-de-minas-mg-vencem-o-master-mechanic-brasil/ |
| Massey Ferguson | portalmaquinasagricolas.com.br | Como máquinas inteligentes contribuem para a agricultura... | 7 de jul. de 2026 | https://portalmaquinasagricolas.com.br/como-maquinas-inteligentes-contribuem-para-a-agricultura-regenerativa/ |
| Valtra | globorural.globo.com | Trator 'falante' baseado em IA é uma das novidades de... | 11 de nov. de 2025 | https://globorural.globo.com/feiras/noticia/2025/11/trator-que-fala-a-nova-interacao-entre-humanos-e-maquinas.ghtml |
| Valtra | canalrural.com.br | Do trator ao algoritmo: como a inteligência artificial está... | 27 de abr. de 2026 | https://www.canalrural.com.br/projetos/conteudo-patrocinado/do-trator-ao-algoritmo-como-a-inteligencia-artificial-esta-redesenhando-o-campo-brasileiro/ |
| Valtra | canalrural.com.br | Piloto automático e agricultura de precisão destacam nova... | 16 de mar. de 2026 | https://www.canalrural.com.br/agricultura/piloto-automatico-e-agricultura-de-precisao-sao-destaques-dos-tratores-da-nova-serie-a-da-valtra/ |
| Valtra | valor.globo.com | Diesel caro atrai holofotes a projetos de motores a etanol | 29 de abr. de 2026 | https://valor.globo.com/agronegocios/noticia/2026/04/29/diesel-caro-atrai-holofotes-a-projetos-de-motores-a-etanol.ghtml |
| Valtra | revistacultivar.com.br | Valtra reúne gerações de tratores em expedição na Bahia | | https://revistacultivar.com.br/noticias/valtra-reune-geracoes-de-tratores-em-expedicao-na-bahia |
| Valtra | revistacultivar.com.br | Comparativo analisa tratores da crescente faixa de 250 cv | 8 de jan. de 2026 | https://revistacultivar.com.br/artigos/comparativo-analisa-tratores-da-crescente-faixa-de-250-cv |
| Valtra | revistacultivar.com.br | Valtra mostra conceito de "trator falante" na Agritechnica... | 11 de nov. de 2025 | https://revistacultivar.com.br/noticias/valtra-mostra-conceito-de-trator-falante-na-agritechnica-2025 |
| Valtra | revistacultivar.com.br | Valtra aposta em tecnologia para a agricultura familiar | 22 de jul. de 2026 | https://revistacultivar.com.br/noticias/valtra-aposta-em-tecnologia-para-a-agricultura-familiar |
| Valtra | revistacultivar.com.br | Valtra apresenta soluções em mecanização para a cultura... | 20 de mai. de 2026 | https://revistacultivar.com.br/noticias/valtra-apresenta-solucoes-em-mecanizacao-para-a-cultura-do-cafe |
| Valtra | revistacultivar.com.br | Valtra chega à Agrishow com nova geração de tratores | 27 de abr. de 2026 | https://revistacultivar.com.br/noticias/valtra-chega-a-agrishow-com-nova-geracao-de-tratores |
| Valtra | revistacultivar.com.br | Valtra avança na descarbonização com novos motores | 22 de jun. de 2026 | https://revistacultivar.com.br/noticias/valtra-avanca-na-descarbonizacao-com-novos-motores |
| Valtra | comprerural.com | Valtra aposenta a lendária linha BH e lança Série M5 na... | 2 de mai. de 2026 | https://www.comprerural.com/valtra-aposenta-o-lendario-linha-bh-e-lanca-serie-m5-na-agrishow-2026/ |
| Valtra | comprerural.com | Agrishow 2026: Valtra apresenta o “Talking Tractor”... | 16 de abr. de 2026 | https://www.comprerural.com/agrishow-2026-valtra-apresenta-o-talking-tractor-maquina-que-interage-com-o-produtor-por-voz-e-texto/ |
| Valtra | safras.com.br | Valtra prevê lançamento comercial de máquinas a biometano... | 29 de abr. de 2026 | https://safras.com.br/valtra-preve-lancamento-comercial-de-maquinas-a-biometano-e-etanol-entre-2027-e-2028/ |
| Valtra | noticiasagricolas.com.br | O novo Valtra Série G CVT é apresentado durante a... | 12 de nov. de 2025 | https://www.noticiasagricolas.com.br/noticias/maquinas-e-tecnologias/410831-o-novo-valtra-serie-g-cvt-e-apresentado-durante-a-agritechnica.html |
| Valtra | noticiasagricolas.com.br | V de Valtra: uma jornada pelo agro brasileiro | 21 de ago. de 2026 | https://www.noticiasagricolas.com.br/podcasts/18511-v-de-valtra-uma-jornada-pelo-agro-brasileiro.html |
| Valtra | portalmaquinasagricolas.com.br | Valtra amplia Série G e lança o trator CVT, com modelos... | 11 de nov. de 2025 | https://portalmaquinasagricolas.com.br/valtra-amplia-serie-g-e-lanca-o-trator-cvt-com-modelos-de-100-a-145-cv/amp/ |
| Valtra | portalmaquinasagricolas.com.br | Valtra apresenta 5ª geração de tratores da Série A na... | 9 de mar. de 2026 | https://portalmaquinasagricolas.com.br/valtra-apresenta-5a-geracao-de-tratores-da-serie-a-na-expodireto-cotrijal/ |
| Valtra | portalmaquinasagricolas.com.br | Máquinas agrícolas da Valtra entram para o universo... | 11 de jun. de 2026 | https://portalmaquinasagricolas.com.br/maquinas-agricolas-da-valtra-entram-para-o-universo-gamer-com-o-farming-simulator/ |
| Fendt | revistacultivar.com.br | Fendt lança trator 800 Vario Gen5 com até 343 cv na... | 9 de mar. de 2026 | https://revistacultivar.com.br/noticias/fendt-lanca-trator-800-vario-gen5-com-ate-343-cv-na-expodireto |
| Fendt | revistacultivar.com.br | Fendt leva ao Lamma 2026 quatro novas gerações de... | 21 de nov. de 2025 | https://revistacultivar.com.br/noticias/fendt-leva-ao-lamma-2026-quatro-novas-geracoes-de-tratores |
| Fendt | revistacultivar.com.br | Fendt mostra o Xaver GT, robô agrícola autônomo | 9 de nov. de 2025 | https://revistacultivar.com.br/noticias/fendt-mostra-o-xaver-gt-robo-agricola-autonomo |
| Fendt | revistacultivar.com.br | Fendt inicia operações na Argentina | 5 de nov. de 2025 | https://revistacultivar.com.br/noticias/fendt-inicia-operacoes-na-argentina |
| Fendt | revistacultivar.com.br | Agromec apresenta E600, variante elétrica da série Fendt... | 27 de fev. de 2026 | https://revistacultivar.com.br/noticias/agromec-apresenta-e600-variante-eletrica-da-serie-fendt-600 |
| New Holland Agriculture | revistacultivar.com.br | New Holland mostra robôs autônomos para vinhedos e... | 11 de nov. de 2025 | https://revistacultivar.com.br/noticias/new-holland-mostra-robos-autonomos-para-vinhedos-e-pomares |
| New Holland Agriculture | revistacultivar.com.br | New Holland lança trator T7 Standard Wheelbase na... | 4 de fev. de 2026 | https://revistacultivar.com.br/noticias/new-holland-lanca-trator-t7-standard-wheelbase-na-america-do-norte |
| New Holland Agriculture | revistacultivar.com.br | New Holland aposta na família T5 no Show Rural 2026 | 11 de fev. de 2026 | https://revistacultivar.com.br/noticias/new-holland-aposta-na-familia-t5-no-show-rural-2026 |
| New Holland Agriculture | revistacultivar.com.br | New Holland apresenta pulverizador Defensor 4000 na... | 4 de mar. de 2026 | https://revistacultivar.com.br/noticias/new-holland-apresenta-pulverizador-defensor-4000-na-expoagro-2026 |
| New Holland Agriculture | revistacultivar.com.br | New Holland apresenta robô autônomo R4 em evento na... | 2 de fev. de 2026 | https://revistacultivar.com.br/noticias/new-holland-apresenta-robo-autonomo-r4-em-evento-na-franca |
| Massey Ferguson | globorural.globo.com | Mecânicos agrícolas se reinventam para manutenção de... | 4 de out. de 2025 | https://globorural.globo.com/maquinas-agricolas/noticia/2025/10/mecanicos-agricolas-se-reinventam-para-manutencao-de-maquinas-inteligentes.ghtml |
| Massey Ferguson | globorural.globo.com | Sicoob vai ampliar em 18% recursos para o Plano Safra... | 6 de jul. de 2026 | https://globorural.globo.com/credito-e-investimento/noticia/2026/07/sicoob-vai-ampliar-em-18percent-recursos-para-o-plano-safra-202627.ghtml |
| Stara | revistacultivar.com.br | Calibragem de equipamentos agrícolas | 7 de dez. de 2025 | https://revistacultivar.com.br/artigos/calibragem-de-equipamentos-agricolas-boas-praticas-para-aumentar-a-eficiencia-na-lavoura |
| Stara | revistacultivar.com.br | Como limpar pulverizadores agrícolas corretamente | 18 de dez. de 2025 | https://revistacultivar.com.br/artigos/como-limpar-pulverizadores-agricolas-corretamente |
| Stara | revistacultivar.com.br | Plantio de soja: a escolha dos discos da plantadeira... | 3 de dez. de 2025 | https://revistacultivar.com.br/artigos/plantio-de-soja-a-escolha-dos-discos-da-plantadeira-realmente-afeta-o-resultado |
| Massey Ferguson | noticiasagricolas.com.br | Mecanização como ferramenta para preservar nutrientes e... | 6 de fev. de 2026 | https://www.noticiasagricolas.com.br/videos/boi/415106-mecanizacao-como-ferramenta-para-preservar-nutrientes-e-reduzir-perdas-no-campo.html |
| Case IH | revistacultivar.com.br | Case IH resgata cor original da Steiger em feira australiana | 23 de set. de 2025 | https://revistacultivar.com.br/noticias/case-ih-resgata-cor-original-da-steiger-em-feira-australiana |
| Case IH | revistacultivar.com.br | Case IH divulga novos tratores Optum nos Estados Unidos | 25 de fev. de 2026 | https://revistacultivar.com.br/noticias/case-ih-divulga-novos-tratores-optum-nos-estados-unidos |
| Case IH | revistacultivar.com.br | Case IH amplia atuação no Uruguai durante a Expoactiva | 30 de mar. de 2026 | https://revistacultivar.com.br/noticias/case-ih-amplia-atuacao-no-uruguai-durante-a-expoactiva |
| Case IH | revistacultivar.com.br | Cocari adquire Grupo Pivot e amplia rede Case IH no... | 25 de fev. de 2026 | https://revistacultivar.com.br/noticias/cocari-adquire-grupo-pivot-e-amplia-rede-case-ih-no-cerrado |
| Case IH | revistacultivar.com.br | CNH aponta ganhos recordes na Fazenda Conectada... | 12 de jan. de 2026 | https://revistacultivar.com.br/noticias/cnh-aponta-ganhos-recordes-na-fazenda-conectada-case-ih |
| John Deere | revistacultivar.com.br | John Deere amplia capacidade de semeadura com C1450T | 21 de jul. de 2026 | https://revistacultivar.com.br/noticias/john-deere-amplia-capacidade-de-semeadura-com-c1450t |
| John Deere | revistacultivar.com.br | John Deere mantém projeção anual após lucro de... | 21 de mai. de 2026 | https://revistacultivar.com.br/noticias/john-deere-mantem-projecao-anual-apos-lucro-de-usdollar-1-77-bilhao |
| John Deere | revistacultivar.com.br | John Deere anuncia mudanças em pulverizadores | 22 de jan. de 2026 | https://revistacultivar.com.br/noticias/john-deere-anuncia-mudancas-em-pulverizadores |
| John Deere | revistacultivar.com.br | John Deere lança monitores G5e Universal e... | 10 de fev. de 2026 | https://revistacultivar.com.br/noticias/john-deere-lanca-monitores-g5e-universal-e-commandcenter |
| John Deere | revistacultivar.com.br | John Deere adquire ativos da finlandesa Risutec Oy | 17 de fev. de 2026 | https://revistacultivar.com.br/noticias/john-deere-adquire-ativos-da-finlandesa-risutec-oy |
| John Deere | revistacultivar.com.br | John Deere divulga resultados do ano fiscal de 2025 | 26 de nov. de 2025 | https://revistacultivar.com.br/noticias/john-deere-divulga-resultados-do-ano-fiscal-de-2025 |
| Massey Ferguson | revistacultivar.com.br | Massey Ferguson leva lançamentos à Agroactiva 2026 | 25 de mai. de 2026 | https://revistacultivar.com.br/noticias/massey-ferguson-leva-lancamentos-a-agroactiva-2026 |
| Massey Ferguson | revistacultivar.com.br | Trator MF 9S estreia na Argentina durante a Agroactiva 2026 | 3 de jun. de 2026 | https://revistacultivar.com.br/noticias/trator-mf-9s-estreia-na-argentina-durante-a-agroactiva-2026 |
| Massey Ferguson | revistacultivar.com.br | Massey Ferguson aposta em IA para elevar eficiência no... | 20 de jan. de 2026 | https://revistacultivar.com.br/noticias/massey-ferguson-aposta-em-ia-para-elevar-eficiencia-no-campo |
| Massey Ferguson | revistacultivar.com.br | Massey Ferguson apresenta soluções na Expocafé 2026 | 21 de mai. de 2026 | https://revistacultivar.com.br/noticias/massey-ferguson-apresenta-solucoes-na-expocafe-2026 |
| Massey Ferguson | revistacultivar.com.br | Massey Ferguson apresenta plantadeira Momentum de 30... | 20 de abr. de 2026 | https://revistacultivar.com.br/noticias/massey-ferguson-apresenta-plantadeira-momentum-de-30-e-40-linhas |
| Massey Ferguson | revistacultivar.com.br | Massey Ferguson apresenta trator que completou rally no... | 10 de nov. de 2025 | https://revistacultivar.com.br/noticias/massey-ferguson-apresenta-trator-que-completou-rally-no-deserto-na-agritechnica-2025 |
| Valtra | revistacultivar.com.br | Valtra aposta em ergonomia e eficiência com sistema... | 23 de abr. de 2026 | https://revistacultivar.com.br/noticias/valtra-aposta-em-ergonomia-e-eficiencia-com-sistema-twintrac |
| Valtra | revistacultivar.com.br | Valtra será o trator oficial da Expoagro, na Argentina | 23 de out. de 2025 | https://revistacultivar.com.br/noticias/valtra-sera-o-trator-oficial-da-expoagro-na-argentina |
| Valtra | revistacultivar.com.br | Test drive exclusivo com os tratores da Série M5 da Valtra | 25 de mai. de 2026 | https://revistacultivar.com.br/artigos/test-drive-exclusivo-com-os-tratores-da-serie-m5-da-valtra |
| Valtra | revistacultivar.com.br | Valtra prepara rede para ampliar uso efetivo da tecnologia... | 4 de mar. de 2026 | https://revistacultivar.com.br/noticias/valtra-prepara-rede-para-ampliar-uso-efetivo-da-tecnologia-no-campo |
| Valtra | revistacultivar.com.br | Valtra apresenta tratores A5 e A5 Hitech na Agroactiva | 1 de jun. de 2026 | https://revistacultivar.com.br/noticias/valtra-apresenta-tratores-a5-e-a5-hitech-na-agroactiva |
| Valtra | revistacultivar.com.br | Valtra amplia uso de IA na indústria e no campo | 14 de jan. de 2026 | https://revistacultivar.com.br/noticias/valtra-amplia-uso-de-ia-na-industria-e-no-campo |
| Valtra | revistacultivar.com.br | Valtra leva tecnologia de precisão para a Coopavel 2026 | 10 de fev. de 2026 | https://revistacultivar.com.br/noticias/valtra-leva-tecnologia-de-precisao-para-a-coopavel-2026 |
| Valtra | revistacultivar.com.br | Nova Série M5 da Valtra sucede a família BH HiTech | 27 de abr. de 2026 | https://revistacultivar.com.br/artigos/nova-serie-m5-da-valtra-sucede-a-familia-bh-hitech |
| Fendt | estadao.com.br | AGCO cresce com demanda maior no Cerrado em ano de... | 1 de dez. de 2025 | https://www.estadao.com.br/economia/coluna-do-broadcast-agro/agco-cresce-com-demanda-maior-no-cerrado-em-ano-de-safra-recorde/ |
| Fendt | noticiasagricolas.com.br | Fendt apresenta nova plantadeira de 40 linhas com tanques... | | https://www.noticiasagricolas.com.br/videos/agronegocio/419728-fendt-apresenta-nova-plantadeira-de-40-linhas-com-tanques-de-sementes-e-fertilizantes-otimizados.html |
| Fendt | noticiasagricolas.com.br | Nova série de tratores da Fendt traz de autonomia da colheita... | | https://www.noticiasagricolas.com.br/videos/agronegocio/420930-nova-serie-de-tratores-da-fendt-traz-de-autonomia-da-colheita-a-conectividade-no-campo.html |
| Fendt | noticiasagricolas.com.br | No Dia Mundial do Algodão, Brasil celebra nova safra recorde... | | https://www.noticiasagricolas.com.br/videos/maquinas-e-tecnologias/408874-no-dia-mundial-do-algodao-brasil-celebra-nova-safra-recorde-com-investimento-em-eficiencia-operacional-e-foco-em-sustentabilidade.html |
| Fendt | revistacultivar.com.br | Fendt avança na automação de máquinas para o algodão | | https://revistacultivar.com.br/noticias/fendt-avanca-na-automacao-de-maquinas-para-o-algodao |
| Fendt | revistacultivar.com.br | Fendt 900 Vario chega a 50 mil unidades em 2026 | 25 de jun. de 2026 | https://revistacultivar.com.br/noticias/fendt-900-vario-chega-a-50-mil-unidades-em-2026 |
| Fendt | revistacultivar.com.br | Alta tecnologia e potência marcam estreia da Fendt na... | 26 de mai. de 2026 | https://revistacultivar.com.br/noticias/alta-tecnologia-e-potencia-marcam-estreia-da-fendt-na-agroactiva |
| Fendt | portalmaquinasagricolas.com.br | Fendt apresenta o robô agrícola autônomo Xaver GT na... | 10 de nov. de 2025 | https://portalmaquinasagricolas.com.br/fendt-apresenta-o-robo-agricola-autonomo-xaver-gt-na-agritechnica/amp/ |
| Jacto | noticiasagricolas.com.br | Jacto lança no Show Rural Coopavel tecnologias que... | 6 de fev. de 2026 | https://www.noticiasagricolas.com.br/noticias/agronegocio/415114-jacto-lanca-no-show-rural-coopavel-tecnologias-que-reforcam-lideranca-em-pulverizacao.html |
| Stara | noticiasagricolas.com.br | Stara inaugura novo Centro de Distribuição de Peças em... | 23 de jun. de 2026 | https://www.noticiasagricolas.com.br/noticias/maquinas-e-tecnologias/423395-stara-inaugura-novo-centro-de-distribuicao-de-pecas-em-goias-e-reforca-o-compromisso-com-a-excelencia-do-atendimento.html |
| Massey Ferguson | estadao.com.br | AGCO cresce com demanda maior no Cerrado em ano de... | 1 de dez. de 2025 | https://www.estadao.com.br/economia/coluna-do-broadcast-agro/agco-cresce-com-demanda-maior-no-cerrado-em-ano-de-safra-recorde/ |
| Massey Ferguson | portalmaquinasagricolas.com.br | IA e agricultura de precisão impulsionam novas profissões... | | https://portalmaquinasagricolas.com.br/ia-e-agricultura-de-precisao-impulsionam-novas-profissoes-no-campo/ |
| Massey Ferguson | revistacultivar.com.br | Massey Ferguson lança trator compacto para pequenos... | 31 de ago. de 2026 | https://revistacultivar.com.br/noticias/massey-ferguson-lanca-trator-compacto-para-pequenos-produtores |
| Massey Ferguson | revistacultivar.com.br | MF 9S lidera novidades da Massey Ferguson na Bahia... | 1 de jun. de 2026 | https://revistacultivar.com.br/noticias/mf-9s-lidera-novidades-da-massey-ferguson-na-bahia-farm-show |
| Massey Ferguson | revistacultivar.com.br | Massey Ferguson apresenta novos tratores no Show Rural... | 11 de fev. de 2026 | https://revistacultivar.com.br/noticias/massey-ferguson-apresenta-novos-tratores-no-show-rural-2026 |
| Valtra | portalmaquinasagricolas.com.br | Valtra amplia Série G e lança o trator CVT, com modelos... | 11 de nov. de 2025 | https://portalmaquinasagricolas.com.br/valtra-amplia-serie-g-e-lanca-o-trator-cvt-com-modelos-de-100-a-145-cv/ |
| Valtra | revistacultivar.com.br | Valtra lança Semana Amarela com descontos na Argentina | 7 de set. de 2026 | https://revistacultivar.com.br/noticias/valtra-lanca-semana-amarela-com-descontos-na-argentina |
| Valtra | revistacultivar.com.br | Valtra levará novos tratores à Agroactiva 2026 | 27 de mai. de 2026 | https://revistacultivar.com.br/noticias/valtra-levara-novos-tratores-a-agroactiva-2026 |
| Valtra | agrolink.com.br | Como escolher o pulverizador ideal para cada lavoura | 7 de nov. de 2025 | https://www.agrolink.com.br/noticias/como-escolher-o-pulverizador-ideal-para-cada-lavoura_507791.html |
| Jacto | canalrural.com.br | Jacto aposta em tecnologia embarcada para tornar... | 3 de set. de 2026 | https://www.canalrural.com.br/projetos/conteudo-patrocinado/jacto-aposta-em-tecnologia-embarcada-para-tornar-pulverizacao-mais-eficiente-nas-lavouras/ |
| John Deere | comprerural.com | Fazenda de MT recebe prêmio na Alemanha, na maior... | 11 de nov. de 2025 | https://www.comprerural.com/fazenda-de-mt-recebe-premio-na-alemanha-na-maior-feira-mundial-de-maquinas-agricolas/ |
| John Deere | globorural.globo.com | Empresa chinesa quer ser a 'BYD' das máquinas agrícolas | 30 de abr. de 2026 | https://globorural.globo.com/feiras/noticia/2026/04/empresa-chinesa-quer-ser-a-byd-das-maquinas-agricolas.ghtml |
| John Deere | agrorevenda.com.br | John Deere acelera inovação com 20 lançamentos na... | 28 de abr. de 2026 | https://agrorevenda.com.br/prateleira/john-deere-acelera-inovacao-com-20-lancamentos-na-agrishow/ |
| John Deere | agrorevenda.com.br | Pulverização passa a enxergar antes de aplicar | 31 de ago. de 2026 | https://agrorevenda.com.br/noticia/pulverizacao-passa-a-enxergar-antes-de-aplicar/ |
| Case IH | revistacultivar.com.br | Case IH com novidades nos tratores Farmall, Puma e... | 9 de nov. de 2025 | https://revistacultivar.com.br/noticias/case-ih-com-novidades-nos-tratores-farmall-puma-e-optum-na-agritechnica-2025 |
| Case IH | revistacultivar.com.br | Case IH lança nova série de tratores Optum | 1 de out. de 2025 | https://revistacultivar.com.br/noticias/case-ih-lanca-nova-serie-de-tratores-optum |
| John Deere | revistacultivar.com.br | John Deere apresenta pulverizador autopropelido 500R | 12 de nov. de 2025 | https://revistacultivar.com.br/noticias/john-deere-apresenta-pulverizador-autopropelido-500r |
| New Holland Agriculture | revistacultivar.com.br | New Holland T8.380 | 17 de set. de 2025 | https://revistacultivar.com.br/trator/new-holland/t8-380 |
| Fendt | revistacultivar.com.br | Fendt 936 Vario | 26 de set. de 2025 | https://revistacultivar.com.br/trator/fendt/936-vario |
| Fendt | revistacultivar.com.br | Fendt lança nova geração do trator 800 Vario na... | 9 de nov. de 2025 | https://revistacultivar.com.br/noticias/fendt-lanca-nova-geracao-do-trator-800-vario-na-agritechnica-2025 |
| Fendt | revistacultivar.com.br | Fendt destaca autonomia e conectividade na Agrishow 2026 | 28 de abr. de 2026 | https://revistacultivar.com.br/noticias/fendt-destaca-autonomia-e-conectividade-na-agrishow-2026 |
| Fendt | revistacultivar.com.br | Fendt lidera ranking de imagem de máquinas agrícolas na... | 5 de mar. de 2026 | https://revistacultivar.com.br/noticias/fendt-lidera-ranking-de-imagem-de-maquinas-agricolas-na-alemanha |
| Fendt | revistacultivar.com.br | Fendt 728 Vario lidera registros de tratores na Alemanha... | 5 de fev. de 2026 | https://revistacultivar.com.br/noticias/fendt-728-vario-lidera-registros-de-tratores-na-alemanha-em-2025 |
| Massey Ferguson | revistacultivar.com.br | Remanufatura amplia vida útil de máquinas agrícolas | 4 de ago. de 2026 | https://revistacultivar.com.br/noticias/remanufatura-amplia-vida-util-de-maquinas-agricolas |
| Massey Ferguson | revistacultivar.com.br | Weinbaur é a nova concessionária Massey Ferguson em... | 19 de dez. de 2025 | https://revistacultivar.com.br/noticias/weinbaur-e-a-nova-concessionaria-massey-ferguson-em-portena |
| Massey Ferguson | revistacultivar.com.br | Mecanização contribui para a eficiência da produção de... | 23 de fev. de 2026 | https://revistacultivar.com.br/noticias/mecanizacao-contribui-para-a-eficiencia-da-producao-de-arroz-irrigado |
| John Deere | revistacultivar.com.br | John Deere apresenta novos tratores 8R e 8RX com até... | 25 de fev. de 2026 | https://revistacultivar.com.br/noticias/john-deere-apresenta-novos-tratores-8r-e-8rx-com-ate-540-cv |
| John Deere | revistacultivar.com.br | Gustavo Husak assume novo cargo na John Deere | 20 de jul. de 2026 | https://revistacultivar.com.br/noticias/gustavo-husak-assume-novo-cargo-na-john-deere |
| John Deere | revistacultivar.com.br | Bayer e John Deere conectam FieldView a Operations... | 23 de fev. de 2026 | https://revistacultivar.com.br/noticias/bayer-e-john-deere-conectam-fieldview-a-operations-center-nos-eua |
| John Deere | revistacultivar.com.br | Tecnologia See and Spray foi utilizada em mais de cinco... | 4 de nov. de 2025 | https://revistacultivar.com.br/noticias/tecnologia-see-and-spray-foi-utilizada-em-mais-de-cinco-milhoes-de-acres |
| New Holland Agriculture | revistacultivar.com.br | Defensor 2500 Cana-de-Açúcar - New Holland | 14 de ago. de 2026 | https://revistacultivar.com.br/pulverizador/new-holland/defensor-2500-cana-de-acucar |
| New Holland Agriculture | revistacultivar.com.br | New Holland atualiza enfardadoras Roll-Belt para 2027 na... | 14 de jul. de 2026 | https://revistacultivar.com.br/noticias/new-holland-atualiza-enfardadoras-roll-belt-para-2027-na-america-do-norte |
| New Holland Agriculture | revistacultivar.com.br | Trator T7.270 Methane Power disponível na Europa | 23 de set. de 2025 | https://revistacultivar.com.br/noticias/trator-t7-270-methane-power-disponivel-na-europa |
| New Holland Agriculture | revistacultivar.com.br | New Holland expande rede Smart Dealer em Santa Fe | 2 de dez. de 2025 | https://revistacultivar.com.br/noticias/new-holland-expande-rede-smart-dealer-em-santa-fe |
| Case IH | revistacultivar.com.br | Comparativo analisa tratores da crescente faixa de 250 cv | 8 de jan. de 2026 | https://revistacultivar.com.br/artigos/comparativo-analisa-tratores-da-crescente-faixa-de-250-cv |
| Valtra | revistacultivar.com.br | Valtra destaca tratores eficientes para setor sucroenergético | 15 de abr. de 2026 | https://revistacultivar.com.br/noticias/valtra-destaca-tratores-eficientes-para-setor-sucroenergetico |
| Valtra | revistacultivar.com.br | Talking Tractor, da Valtra, terá versão em português na... | 13 de abr. de 2026 | https://revistacultivar.com.br/noticias/talking-tractor-da-valtra-tera-versao-em-portugues-na-agrishow-2026 |

## auditoria de desempenho de página por marca

| Marca | id | performance_mobile | performance_desktop | accessibility_mobile | accessibility_desktop | best-practices_mobile | best-practices_desktop | gate | celulas | lcp_p75_phone_origem_ms | escopo_origem | lcp_p75_phone_inicial_ms | lcp_p75_phone_modelo_ms | lcp_p75_phone_conteudo_ms |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| John Deere | john_deere | 29.3 | 48 | 91.7 | 93.7 | 66.7 | 68 | apto | 6 | 2596 | domínio Brasil | 3331 | 2116 | 2224 |
| Case IH | case_ih | 44 | 62.7 | 93 | 93 | 77 | 77 | apto | 6 | 4588 | domínio global (diagnóstico) | 3720 | 2884 | |
| New Holland Agriculture | new_holland | 41.3 | 52.7 | 91.7 | 96 | 77 | 77 | apto | 6 | 3993 | domínio global (diagnóstico) | 5852 | 4138 | |
| Massey Ferguson | massey_ferguson | 44 | 46.5 | 83 | 76 | 77 | 77 | apto | 6 | 4210 | domínio global (diagnóstico) | 3838 | 2600 | |
| Valtra | valtra | 52.3 | 62.8 | 89.3 | 89.7 | 66.7 | 66.7 | apto | 6 | 2249 | domínio Brasil | 2042 | | |
| Fendt | fendt | 44.8 | 69 | 95.7 | 91.7 | 65 | 67.7 | apto | 6 | 2510 | domínio global (diagnóstico) | 2311 | | |
| Jacto | jacto | 31.3 | 42.3 | 73 | 75.3 | 78.3 | 78.3 | apto | 6 | 5379 | domínio global (diagnóstico) | 3041 | | |
| Stara | stara | 74.3 | 93.7 | 88.3 | 88.3 | 92 | 92 | apto | 6 | 2092 | domínio Brasil | 2170 | 2143 | |

## seleção páginas

**regra**: inicial oficial; página de modelo de trator (ou máquina principal) de maior tráfego orgânico estimado; página de conteúdo de maior tráfego orgânico estimado; fonte base de dados de busca orgânico por domínio e por subpasta de 14/09/2026; excluídas páginas de teste, galeria, busca e contato (correção antes de medir); Case IH: nenhuma página de conteúdo com tráfego orgânico fora de páginas de teste, usada a seção FarmForum (verificada em 14/09) como página de conteúdo; Jacto: a página de modelo de maior tráfego (uniport-3030) falhou no auditoria de desempenho de página em seis execuções (React), substituída pela segunda do ranking, regra registrada em 14/09

### seleção

| Chave | inicial | modelo | conteudo |
|---|---|---|---|
| john_deere | https://www.deere.com.br/pt/ | https://www.deere.com.br/pt/tratores/s%C3%A9rie-7m-grande-200cv-230cv-/7230m-230cv/ | https://www.deere.com.br/pt/agricultura-de-precis%C3%A3o/gerenciamento-de-informa%C3%A7%C3%B5es/operations-center/ |
| case_ih | https://www.caseih.com/pt-br/brasil | https://www.caseih.com/pt-br/brasil/produtos/tratores/farmall/farmall-80 | https://www.caseih.com/pt-br/brasil/news/farmforum |
| new_holland | https://agriculture.newholland.com/pt-br/brasil | https://agriculture.newholland.com/pt-br/brasil/produtos/tratores/t7-lwb | https://agriculture.newholland.com/pt-br/brasil/mundo-new-holland/new-holland-no-brasil |
| massey_ferguson | https://www.masseyferguson.com/pt_br.html | https://www.masseyferguson.com/pt_br/product/tractors/mf-5m1.html | https://www.masseyferguson.com/pt_br/discover-mf/news/news/mf-launch-new-brand-identity.html |
| valtra | https://www.valtra.com.br/ | https://www.valtra.com.br/produtos/tratores/bh-g4.html | https://www.valtra.com.br/espaco-valtra/sobre-a-valtra.html |
| fendt | https://www.fendt.com/br/ | https://www.fendt.com/br/maquinario-agricola/tratores/fendt-1000-vario | https://www.fendt.com/br/sobre-nos/historia |
| jacto | https://jacto.com/brasil | https://jacto.com/brasil/products/pulverizadores-automotrizes/uniport-2030 | https://blog.jacto.com.br/caqui-propriedades-medicinais/ |
| stara | https://www.stara.com.br/ | https://www.stara.com.br/produtos-servicos/maquinas-agricolas/plantadeiras-e-semeadoras/plantadeira-princesa | https://www.stara.com.br/noticias/dicas-e-conteudos/sistemas-de-plantio-quais-sao-como-funcionam-e-como-escolher-o-ideal |

## autoatendimento

### John Deere

| n | item | status | url |
|---|---|---|---|
| 1 | Localizador de concessionária com busca por cidade, estado ou CEP. | presente | https://dealerlocator.deere.com/servlet/country=BR |
| 2 | Contato direto: telefone, WhatsApp, formulário ou chat com a marca. | presente | https://www.deere.com.br/pt/a-nossa-empresa/contato/ |
| 3 | Portal ou app do cliente: link para área logada ou para app nas lojas (App Store ou Google Play), na própria página. | presente | https://www.deere.com.br/pt/agricultura-de-precisão/gerenciamento-de-informações/operations-center/ |
| 4 | Busca interna no site. | presente | https://www.deere.com.br/pt/busca/?term=trator |
| 5 | Navegação por tipo de máquina e por cultura ou aplicação (menu ou filtro). | presente | https://www.deere.com.br/pt/ |
| 6 | Catálogo com ficha técnica: página de modelo com especificações ou PDF de folheto. | presente | https://www.deere.com.br/pt/tratores/série-8r-270cv-400cv/8320r/ |
| 7 | Configurador ou simulador: de máquina, de consórcio ou de financiamento. | presente | https://www.deere.com.br/pt/ |
| 8 | Peças e manuais: loja ou catálogo de peças, ou manuais do operador. | presente | https://www.deere.com.br/pt/peças-e-serviços/peças/ |
| 9 | Imprensa: sala de imprensa ou seção de notícias da marca. | presente | https://www.deere.com.br/pt/a-nossa-empresa/notícias/ |
| 10 | Redes sociais no rodapé (links para perfis oficiais). | presente | https://www.deere.com.br/pt/ |

### Case IH

| n | item | status | url |
|---|---|---|---|
| 1 | Localizador de concessionaria com busca por cidade, estado ou CEP. | presente | https://www.caseih.com/pt-br/brasil/concessionarios |
| 2 | Contato direto: telefone, WhatsApp, formulário ou chat com a marca. | presente | https://www.caseih.com/pt-br/brasil |
| 3 | Portal ou app do cliente: link para área logada ou para app nas lojas (App Store ou Google Play), na própria página. | presente | https://www.caseih.com/pt-br/brasil/sobre-a-case-ih/fazenda-conectada |
| 4 | Busca interna no site. | presente | https://www.caseih.com/pt-br/brasil |
| 5 | Navegação por tipo de maquina e por cultura ou aplicação (menu ou filtro). | presente | https://www.caseih.com/pt-br/brasil/produtos |
| 6 | Catálogo com ficha técnica: página de modelo com especificações ou PDF de folheto. | presente | https://www.caseih.com/pt-br/brasil/produtos/tratores/magnum |
| 7 | Configurador ou simulador: de maquina, de consorcio ou de financiamento. | ausente | https://www.caseih.com/pt-br/brasil/servicos-financeiros |
| 8 | Pecas e manuais: loja ou catálogo de pecas, ou manuais do operador. | presente | https://www.caseih.com/pt-br/brasil/servicos |
| 9 | Imprensa: sala de imprensa ou seção de notícias da marca. | presente | https://www.caseih.com/pt-br/brasil |
| 10 | Redes sociais no rodapé (links para perfis oficiais). | presente | https://www.caseih.com/pt-br/brasil |

### New Holland Agriculture

| n | item | status | url |
|---|---|---|---|
| 1 | Localizador de concessionária com busca por cidade, estado ou CEP. | presente | https://agriculture.newholland.com/pt-br/brasil/concessionarios |
| 2 | Contato direto: telefone, WhatsApp, formulário ou chat com a marca. | presente | https://agriculture.newholland.com/pt-br/brasil |
| 3 | Portal ou app do cliente: link para área logada ou para app nas lojas (App Store ou Google Play), na própria página. | presente | https://agriculture.newholland.com/pt-br/brasil |
| 4 | Busca interna no site. | presente | https://agriculture.newholland.com/pt-br/brasil/search |
| 5 | Navegação por tipo de máquina e por cultura ou aplicação (menu ou filtro). | presente | https://agriculture.newholland.com/pt-br/brasil/produtos |
| 6 | Catálogo com ficha técnica: página de modelo com especificações ou PDF de folheto. | presente | https://agriculture.newholland.com/pt-br/brasil/produtos/tratores/t7-lwb |
| 7 | Configurador ou simulador: de máquina, de consórcio ou de financiamento. | presente | https://consorcionewholland.com.br/simulador |
| 8 | Peças e manuais: loja ou catálogo de peças, ou manuais do operador. | presente | https://agriculture.newholland.com/pt-br/brasil/pecas-e-servicos/pecas |
| 9 | Imprensa: sala de imprensa ou seção de notícias da marca. | presente | https://agriculture.newholland.com/pt-br/brasil |
| 10 | Redes sociais no rodapé (links para perfis oficiais). | presente | https://agriculture.newholland.com/pt-br/brasil |

### Massey Ferguson

| n | item | status | url |
|---|---|---|---|
| 1 | Localizador de concessionaria com busca por cidade, estado ou CEP. | presente | https://www.masseyferguson.com/pt_br.html |
| 2 | Contato direto: telefone, WhatsApp, formulário ou chat com a marca. | presente | https://www.masseyferguson.com/pt_br/discover-mf/contact-us.html |
| 3 | Portal ou app do cliente: link para área logada ou para app nas lojas (App Store ou Google Play), na própria página. | ausente | https://www.masseyferguson.com/pt_br.html |
| 4 | Busca interna no site. | presente | https://www.masseyferguson.com/pt_br.html |
| 5 | Navegação por tipo de maquina e por cultura ou aplicação (menu ou filtro). | presente | https://www.masseyferguson.com/pt_br/product.html |
| 6 | Catálogo com ficha técnica: página de modelo com especificações ou PDF de folheto. | presente | https://www.masseyferguson.com/pt_br/product/tractors/mf-8s.html |
| 7 | Configurador ou simulador: de maquina, de consorcio ou de financiamento. | presente | https://www.masseyferguson.com/pt_br/finance/consortium.html |
| 8 | Pecas e manuais: loja ou catálogo de pecas, ou manuais do operador. | presente | https://www.masseyferguson.com/pt_br/ownership/manuais-de-equipamentos.html |
| 9 | Imprensa: sala de imprensa ou seção de notícias da marca. | presente | https://www.masseyferguson.com/pt_br/discover-mf/news/news.html |
| 10 | Redes sociais no rodapé (links para perfis oficiais). | ausente | https://www.masseyferguson.com/pt_br.html |

### Valtra

| n | item | status | url |
|---|---|---|---|
| 1 | Localizador de concessionária com busca por cidade, estado ou CEP | presente | https://www.valtra.com.br/compre-um-valtra/encontre-seu-concessionario.html |
| 2 | Contato direto: telefone, WhatsApp, formulário ou chat com a marca | presente | https://www.valtra.com.br/fale-conosco.html |
| 3 | Portal ou app do cliente: link para área logada ou para app nas lojas, na própria página | presente | https://www.valtra.com.br/produtos/tratores/serie-a4.html |
| 4 | Busca interna no site | presente | https://www.valtra.com.br/fale-conosco.html |
| 5 | Navegação por tipo de máquina e por cultura ou aplicação | presente | https://www.valtra.com.br/produtos.html |
| 6 | Catálogo com ficha técnica: página de modelo com especificações ou PDF de folheto | presente | https://www.valtra.com.br/produtos/tratores/serie-a4.html |
| 7 | Configurador ou simulador: de máquina, de consórcio ou de financiamento | presente | https://www.valtra.com.br/compre-um-valtra/consorcio-valtra.html |
| 8 | Peças e manuais: loja ou catálogo de peças, ou manuais do operador | presente | https://www.valtra.com.br/pos-venda/manuais-de-equipamentos.html |
| 9 | Imprensa: sala de imprensa ou seção de notícias da marca | presente | https://www.valtra.com.br/espaco-valtra/imprensa.html |
| 10 | Redes sociais no rodapé (links para perfis oficiais) | presente | https://www.valtra.com.br/ |

### Fendt

| n | item | status | url |
|---|---|---|---|
| 1 | Localizador de concessionária com busca por cidade, estado ou CEP. | presente | https://www.fendt.com/br/maquinario-agricola |
| 2 | Contato direto: telefone, WhatsApp, formulário ou chat com a marca. | presente | https://www.fendt.com/br/empresa/fendt-contatos |
| 3 | Portal ou app do cliente: link para área logada ou para app nas lojas (App Store ou Google Play), na própria página. | presente | https://www.fendt.com/br/consultar-e-comprar/agco-finance |
| 4 | Busca interna no site. | ausente | https://www.fendt.com/br/ |
| 5 | Navegação por tipo de máquina e por cultura ou aplicação (menu ou filtro). | presente | https://www.fendt.com/br/maquinario-agricola |
| 6 | Catálogo com ficha técnica: página de modelo com especificações ou PDF de folheto. | presente | https://www.fendt.com/br/maquinario-agricola/tratores/fendt-1000-vario-gen4 |
| 7 | Configurador ou simulador: de máquina, de consórcio ou de financiamento. | presente | https://www.fendt.com/br/consultar-e-comprar/agco-finance |
| 8 | Peças e manuais: loja ou catálogo de peças, ou manuais do operador. | presente | https://www.fendt.com/br/servico-e-pecas-de-reposicao/pos-venda |
| 9 | Imprensa: sala de imprensa ou seção de notícias da marca. | presente | https://www.fendt.com/br/news-center |
| 10 | Redes sociais no rodapé (links para perfis oficiais). | presente | https://www.fendt.com/br/ |

### Jacto

| n | item | status | url |
|---|---|---|---|
| 1 | Localizador de concessionaria com busca por cidade, estado ou CEP | presente | https://jacto.com/brasil/resellers/locator |
| 2 | Contato direto: telefone, WhatsApp, formulário ou chat com a marca | presente | https://jacto.com/brasil |
| 3 | Portal ou app do cliente: link para área logada ou para app nas lojas, na própria página | presente | https://loja.jacto.com/ |
| 4 | Busca interna no site | presente | https://jacto.com/brasil/resellers/locator |
| 5 | Navegação por tipo de maquina e por cultura ou aplicação (menu ou filtro) | presente | https://jacto.com/brasil/products |
| 6 | Catálogo com ficha técnica: página de modelo com especificações ou PDF de folheto | presente | https://loja.jacto.com/ |
| 7 | Configurador ou simulador: de maquina, de consorcio ou de financiamento | presente | https://conteudo.jacto.com/financiamento-jacto-2025?utm_source=site&utm_medium=banner-home&utm_campaign=financiamento&utm_content=banner |
| 8 | Pecas e manuais: loja ou catálogo de pecas, ou manuais do operador | presente | https://loja.jacto.com/ |
| 9 | Imprensa: sala de imprensa ou seção de notícias da marca | presente | https://jacto.com/brasil/press/news |
| 10 | Redes sociais no rodapé (links para perfis oficiais) | presente | https://jacto.com/brasil |

### Stara

| n | item | status | url |
|---|---|---|---|
| 1 | Localizador de concessionaria com busca por cidade, estado ou CEP. | presente | https://www.stara.com.br/concessionarias |
| 2 | Contato direto: telefone, WhatsApp, formulário ou chat com a marca. | presente | https://www.stara.com.br/fale-conosco |
| 3 | Portal ou app do cliente: link para área logada ou para app nas lojas (App Store ou Google Play), na própria página. | presente | https://portaldooperador.stara.com.br/pt |
| 4 | Busca interna no site. | presente | https://www.stara.com.br/busca?s=pe%C3%A7as |
| 5 | Navegação por tipo de maquina e por cultura ou aplicação (menu ou filtro). | presente | https://www.stara.com.br/produtos-servicos |
| 6 | Catálogo com ficha técnica: página de modelo com especificações ou PDF de folheto. | presente | https://www.stara.com.br/produtos-servicos/maquinas-agricolas/plantadeiras-e-semeadoras/plantadeira-absoluta |
| 7 | Configurador ou simulador: de maquina, de consorcio ou de financiamento. | presente | https://www.stara.com.br/sitemap |
| 8 | Pecas e manuais: loja ou catálogo de pecas, ou manuais do operador. | ausente | https://www.stara.com.br/sitemap |
| 9 | Imprensa: sala de imprensa ou seção de notícias da marca. | presente | https://www.stara.com.br/noticias |
| 10 | Redes sociais no rodapé (links para perfis oficiais). | presente | https://www.stara.com.br/ |

## autoatendimento itens

- Localizador de concessionária com busca
- Contato direto
- Portal ou app do cliente
- Busca interna
- Navegação por tipo de máquina e cultura
- Catálogo com ficha técnica
- Configurador ou simulador
- Peças e manuais
- Imprensa
- Redes sociais no rodapé

## perguntas produtor

| semente | pergunta | volume |
|---|---|---|
| trator agrícola | quanto custa um trator agrícola | 40.0 |
| trator agrícola | quanto ganha um tratorista agrícola | 40.0 |
| trator agrícola | quanto ganha um operador de trator agrícola | 30.0 |
| trator agrícola | como conduzir um trator agrícola | 20.0 |
| trator agrícola | como escolher um trator agrícola | 20.0 |
| trator agrícola | como operar trator agrícola | 20.0 |
| trator agrícola | como operar um trator agrícola | 20.0 |
| trator agrícola | o lastro de tratores agrícolas | 20.0 |
| trator agrícola | o que faz um tratorista agrícola | 20.0 |
| trator agrícola | o que é um trator agrícola | 20.0 |
| trator agrícola | para que serve um trator agrícola | 20.0 |
| trator agrícola | qual a importância dos tratores agrícolas | 20.0 |
| trator agrícola | qual a melhor marca de tratores agrícolas | 20.0 |
| trator agrícola | qual a velocidade máxima de um trator agrícola | 20.0 |
| trator agrícola | qual o salário de um operador de trator agrícola | 20.0 |
| trator agrícola | qual o valor de um trator agrícola | 20.0 |
| trator agrícola | qual o valor do salário de um tratorista agrícola | 20.0 |
| trator agrícola | qual é a melhor marca de trator agrícola | 20.0 |
| trator agrícola | quanto custa um mini trator agrícola | 20.0 |
| trator agrícola | quanto ganha um motorista de trator agrícola | 20.0 |
| colheitadeira | quanto ganha um operador de colheitadeira | 260.0 |
| colheitadeira | quanto custa uma colheitadeira | 170.0 |
| colheitadeira | qual a maior colheitadeira do mundo | 90.0 |
| colheitadeira | a minha colheitadeira vale o dobro da sua porsche | 70.0 |
| colheitadeira | qual é a maior colheitadeira do mundo | 50.0 |
| colheitadeira | quanto ganha um operador de colheitadeira por safra | 50.0 |
| colheitadeira | quanto um operador de colheitadeira ganha | 50.0 |
| colheitadeira | a maior colheitadeira do mundo | 40.0 |
| colheitadeira | como funciona uma colheitadeira | 40.0 |
| colheitadeira | qual a colheitadeira mais cara do mundo | 40.0 |
| colheitadeira | qual a maior colheitadeira da john deere | 40.0 |
| colheitadeira | quanto custa uma colheitadeira de café | 40.0 |
| colheitadeira | quanto custa uma colheitadeira john deere | 40.0 |
| colheitadeira | a minha colheitadeira | 30.0 |
| colheitadeira | o que é colheitadeira | 30.0 |
| colheitadeira | qual o salário de um operador de colheitadeira | 30.0 |
| colheitadeira | quanto custa uma colheitadeira da john deere | 30.0 |
| colheitadeira | quanto custa uma colheitadeira de algodão | 30.0 |
| colheitadeira | quanto custa uma colheitadeira new holland | 30.0 |
| colheitadeira | quanto ganha operador de colheitadeira | 30.0 |
| pulverizador | o que é pulverizar | 390.0 |
| pulverizador | o que é pulverização | 260.0 |
| pulverizador | qual o melhor pulverizador elétrico | 260.0 |
| pulverizador | o que é pulverizador | 210.0 |
| pulverizador | quanto custa um drone de pulverização | 210.0 |
| pulverizador | como fazer puxador agua pulverizador | 170.0 |
| pulverizador | o que significa pulverizada | 170.0 |
| pulverizador | como usar colosso pulverização | 140.0 |
| pulverizador | como usar pulverizador manual | 140.0 |
| pulverizador | o que significa pulverizar | 140.0 |
| pulverizador | para que serve colosso pulverização | 140.0 |
| pulverizador | quanto custa um drone pulverizador | 110.0 |
| pulverizador | como consertar pulverizador de veneno | 90.0 |
| pulverizador | como consertar pulverizador manual | 90.0 |
| pulverizador | como fazer snow foam com pulverizador | 90.0 |
| pulverizador | como fazer um pulverizador caseiro | 90.0 |
| pulverizador | como fazer um pulverizador caseiro com garrafa pet | 90.0 |
| pulverizador | como montar pulverizador manual | 90.0 |
| pulverizador | como tirar pulverização de tinta do carro | 90.0 |
| pulverizador | como usar o colosso pulverização | 90.0 |
| plantadeira | como calcular adubo por hectare na plantadeira | 50.0 |
| plantadeira | como regular adubo na plantadeira | 50.0 |
| plantadeira | como regular plantadeira de milho | 50.0 |
| plantadeira | como fazer regulagem de adubo em plantadeira | 40.0 |
| plantadeira | como regular plantadeira | 40.0 |
| plantadeira | como regular plantadeira de milho manual | 40.0 |
| plantadeira | qual a maior plantadeira do mundo | 40.0 |
| plantadeira | qual a melhor plantadeira manual | 40.0 |
| plantadeira | quanto custa uma plantadeira | 40.0 |
| plantadeira | como regular o adubo da plantadeira | 30.0 |
| plantadeira | a maior plantadeira de soja do mundo | 20.0 |
| plantadeira | a maior plantadeira do brasil | 20.0 |
| plantadeira | a maior plantadeira do mundo | 20.0 |
| plantadeira | como abastecer plantadeira no farming simulator 2019 | 20.0 |
| plantadeira | como abastecer plantadeira no farming simulator 2022 | 20.0 |
| plantadeira | como calcular a quantidade de adubo por hectare em plantadeira | 20.0 |
| plantadeira | como calcular adubo na plantadeira | 20.0 |
| plantadeira | como calcular marcador de linha plantadeira | 20.0 |
| plantadeira | como calcular o adubo na plantadeira | 20.0 |
| plantadeira | como encher a plantadeira no farming simulator 19 | 20.0 |
| agricultura de precisão | o que agricultura de precisão | 390.0 |
| agricultura de precisão | o que é agricultura de precisão | 390.0 |
| agricultura de precisão | a agricultura de precisão | 170.0 |
| agricultura de precisão | o'que é agricultura de precisão | 90.0 |
| agricultura de precisão | a agricultura de precisão enem | 50.0 |
| agricultura de precisão | a agricultura de precisão reúne técnicas agrícolas | 40.0 |
| agricultura de precisão | a agricultura de precisão reune | 20.0 |
| agricultura de precisão | a agricultura de precisão reune tecnicas | 20.0 |
| agricultura de precisão | a agricultura de precisão reúne técnicas agrícolas que consideram | 20.0 |
| agricultura de precisão | como funciona a agricultura de precisão | 20.0 |
| agricultura de precisão | como surgiu a agricultura de precisão | 20.0 |
| agricultura de precisão | o que significa agricultura de precisão | 20.0 |
| agricultura de precisão | o que é a agricultura de precisão | 20.0 |
| agricultura de precisão | o que é grid agricultura de precisão | 20.0 |
| agricultura de precisão | o uso de drones na agricultura de precisão | 20.0 |
| agricultura de precisão | qual a importância da agricultura de precisão | 20.0 |
| agricultura de precisão | qual é o ciclo da agricultura de precisão | 20.0 |
| agricultura de precisão | quando surgiu a agricultura de precisão | 20.0 |
| agricultura de precisão | quanto ganha um projetista de agricultura de precisão | 20.0 |
| agricultura de precisão | a agricultura de precisão reune tecnicas agrícolas | 10.0 |
| financiamento de trator | a partir de que ano bancos financiam trator | 0.0 |
| financiamento de trator | com fazer financiamento de trator usado | 0.0 |
| financiamento de trator | como calcular a viabilidade de adquirir um trator financiado | 0.0 |
| financiamento de trator | como conseguir um financiamento de 220 mil para tratores | 0.0 |
| financiamento de trator | como conseguir um financiamento de 220mil para tratores | 0.0 |
| financiamento de trator | como declarar financiamento trator no imposto de renda | 0.0 |
| financiamento de trator | como declarar pagamento de financiamento de trator | 0.0 |
| financiamento de trator | como fazer financiamento de trator | 0.0 |
| financiamento de trator | como financiar compra de tratores usados | 0.0 |
| financiamento de trator | como financiar compra de tratores usados 2019 | 0.0 |
| financiamento de trator | como obter financiamento para compra de trator | 0.0 |
| financiamento de trator | como quitar financiamento de trator solidário | 0.0 |
| financiamento de trator | o pronaf finância trator usado de 75 cv | 0.0 |
| financiamento de trator | o que é preciso para faxer financiamento de trator | 0.0 |
| financiamento de trator | onde obter financiamento para compra de tratores | 0.0 |
| financiamento de trator | onde obter financiamento parta compra de tratores | 0.0 |
| financiamento de trator | para financiar trator no sicredi precisa de avalista | 0.0 |
| financiamento de trator | qual a forma mais bararata de financiar um trator | 0.0 |
| financiamento de trator | qual e prazo maximo p financiamento de tratores | 0.0 |
| financiamento de trator | qual o banco que faz financimento de trator | 0.0 |
| peças para trator | a.camargo - peças para tratores e motores diesel | 320.0 |
| peças para trator | a camargo peças para tratores e motores diesel goiânia | 40.0 |
| peças para trator | a camargo peças para tratores | 20.0 |
| peças para trator | a.camargo - peças para tratores e ferramentas | 20.0 |
| peças para trator | a empresa peças horizonte industrializa peças para tratores | 10.0 |
| peças para trator | a.camargo - peças para tratores e motores diesel fotos | 10.0 |
| peças para trator | a.camargo - peças para tratores e motores diesel goiânia | 10.0 |
| peças para trator | a camargo pecas para tratores | 0.0 |
| peças para trator | a camargo pecas para tratores goiania | 0.0 |
| peças para trator | a camargo peças para tratores e ferramentas | 0.0 |
| peças para trator | a camargo peças para tratores e ferramentas goiânia go | 0.0 |
| peças para trator | a camargo peças para tratores e motores diesel | 0.0 |
| peças para trator | a camargo peças para tratores e motores diesel fotos | 0.0 |
| peças para trator | a maqui peças para tratores | 0.0 |
| peças para trator | a.camargo - peças para tratores e ferramentas goiânia - go | 0.0 |
| peças para trator | a.camargo peças para tratores | 0.0 |
| peças para trator | a.camargo peças para tratores e ferr | 0.0 |
| peças para trator | a.camargo peças para tratores goiânia go | 0.0 |
| peças para trator | a.camargo peças para tratores goiânia go 74430-130 | 0.0 |
| peças para trator | a.camargo peças para tratores máquinas e ferramentas https www.acamargo.com | 0.0 |
| trator usado | como tirar nota fiscal de trator usado | 30.0 |
| trator usado | quanto custa um trator usado | 30.0 |
| trator usado | como avaliar um trator usado | 20.0 |
| trator usado | como comprar trator usado | 20.0 |
| trator usado | como comprar um trator usado | 20.0 |
| trator usado | como comprar um trator usado financiado | 20.0 |
| trator usado | como financiar trator usado | 20.0 |
| trator usado | como financiar um trator usado | 20.0 |
| trator usado | onde comprar trator usado | 20.0 |
| trator usado | onde comprar tratores usados | 20.0 |
| trator usado | qual o valor de um trator usado | 20.0 |
| trator usado | qual óleo é usado no hidráulico do trator | 10.0 |
| trator usado | a alves new holland tratores usados | 0.0 |
| trator usado | a alves orlandia tratores usados | 0.0 |
| trator usado | a alves tratores usado orlandia | 0.0 |
| trator usado | a concessionária troca trator usado como entrada no novo | 0.0 |
| trator usado | a maior concessionária de trator valtra usado a | 0.0 |
| trator usado | a marcha trator nos caminhões são usadas para que serve | 0.0 |
| trator usado | a marcha trator é usada para que serve | 0.0 |
| trator usado | a morfina ja foi usada para trator o que | 0.0 |
| piloto automático agrícola | como funciona piloto automático agrícola | 40.0 |

## busca categoria top10 por consulta

| Chave | John Deere | Stara | Case IH | Jacto | New Holland Agriculture | Fendt | Massey Ferguson | Valtra |
|---|---|---|---|---|---|---|---|---|
| semeadora de grãos finos | 3 | 3 | | | | | | |
| máquinas agrícolas | 3 | 3 | 1 | 1 | | | | |
| implementos para trator | 3 | | | | | | | |
| implementos agrícolas | 3 | 3 | | | | | | |
| plantio direto máquinas | 3 | 1 | | | | | | |
| marcas de tratores | 2 | | | | 2 | | | |
| marcas de colheitadeiras | 2 | | | | 3 | 1 | | |
| agricultura de precisão | | 2 | | 1 | | | | |
| fabricantes de máquinas agrícolas | 2 | 3 | | | | | | |
| máquina agrícola conectada | 2 | 1 | 2 | | | 1 | | |
| concessionária de tratores | 2 | 3 | | | 1 | | 3 | 1 |
| máquinas agrícolas novas | 2 | 1 | | | | | | |
| concessionária de máquinas agrícolas | 3 | 3 | | | 2 | | 1 | |
| revenda de tratores | 2 | | | | | | 3 | |
| telemetria agrícola | | 2 | | | | | | |
| peças para colheitadeira | 1 | | | | | | | |
| financiamento de máquinas agrícolas | | 3 | | | | | | |
| financiamento de trator | 2 | | | | | | | 3 |
| revisão de colheitadeira | 1 | | | | | 2 | | |
| consórcio de trator | 3 | | | | | | 3 | 3 |
| consórcio de máquinas agrícolas | 2 | | | 2 | | | | |
| forrageira | 3 | | | | | | | |
| máquina para colheita de café | | | | 2 | | | | |
| manual do operador trator | 3 | | | | | | | |
| plantadeira de algodão | 3 | 3 | | | | | | |
| colheitadeira axial | | | 3 | | | | 3 | 1 |
| trator para algodão | 3 | | | | | | | |
| plataforma de corte soja | 3 | | 3 | | 3 | | | |
| plataforma de milho | 3 | 2 | | | 3 | | 3 | 2 |
| pulverizador autopropelido | 3 | 3 | | | | | | |
| melhor colheitadeira | 1 | | 2 | 2 | | | | |
| colhedora de algodão | 3 | | | | | | | |
| colhedora de café | | | | 3 | | | | |
| colhedora de cana | 3 | | 3 | 3 | | | | |
| plantadeira de soja | 3 | 2 | | | | | | |
| pulverizador para soja | 3 | 3 | | | | | | |
| pulverizador para cana | | | 2 | | | | | |
| melhor pulverizador autopropelido | 3 | 3 | 2 | 3 | | | | |
| pulverizador de arrasto | 3 | 3 | | 1 | | | | |
| trator para soja | 3 | | | | | | 1 | 2 |
| barra de pulverização | | | | 1 | | | | |
| plantadeira de precisão | 1 | 2 | | | | | | |
| semeadora de plantio direto | 2 | 3 | | | | | | |
| trator agrícola | 2 | | | | 2 | | | |
| trator para pastagem | 3 | | | | | | | 2 |
| semeadora de trigo | | 3 | | | | | | |
| trator para pequena propriedade | 3 | | | | | | 1 | 1 |
| trator para cana | 3 | | | | | | | 2 |
| trator 75 cv | 1 | | | | 2 | | | |
| trator para café | 1 | | | | | | | 3 |
| trator 200 cv | 2 | | 1 | | | | | |
| melhor trator para pequeno produtor | | | 1 | | | | | 2 |
| trator compacto | 2 | | | | 1 | | | |
| melhor trator agrícola | 2 | | | | | | | |
| ficha técnica trator | 2 | | 1 | | 3 | | | |
| colheitadeira de soja | 3 | | | | | | | |
| plano safra máquinas | | | | 2 | | | | |
| colheitadeira preço | 1 | | | | | | | |
| mapa de produtividade | | | | 2 | | | | |
| trator para milho | | | | | | | 1 | 1 |
| trator 100 cv | 2 | | | | | | | |
| trator agrícola preço | 1 | | | | | | | |
| trator novo preço | 2 | | | | 1 | | | |
| pulverizador agrícola preço | | | | 1 | | | | |
| distribuidor de fertilizante | | | 1 | | | | | |
| colheitadeira de trigo | 1 | | | | | | | |
| moderfrota | | | | 1 | | | | |
| trator para arroz | | | | | | | 1 | |

## portais conteudo

nenhuma das oito marcas mantém portal de conteúdo sem marca; conteúdo em seções do site oficial, blogs em subdomínio (Case IH, Jacto), podcasts (New Holland, Massey Ferguson, Valtra) e plataformas de capacitação com cadastro (John Deere, Stara)
