---
titulo: "Experiência digital: desempenho e acessibilidade, campo e laboratório (V6)"
origem: "estudo_1_panorama_digital/analise/bloco_b_2026-09-13/EXPERIENCIA_DESEMPENHO_V6_v1.md"
data: "2026-09-13"
versao: "v1"
sha256_original: "4cc08bc5cd9c004c3ae9a773c444b530d5c83264f54af5897a942914a585a4bd"
tipo: "resultado"
---
# Experiência digital, dimensão de desempenho e acessibilidade (V6), campo e laboratório

Data: 13/09/2026. Laboratório: auditoria de desempenho de página via coleta automatizada, três páginas comparáveis por marca (inicial, produto e conteúdo de maior tráfego orgânico), celular e desktop, três repetições; mediana por página, média das páginas com ao menos duas execuções válidas. Campo: dados de campo de experiência de página (dados de campo de experiência de página), dados reais de usuários Chrome nos últimos 28 dias, por origem e por página, p75. Limiar de Core Web Vitals: LCP até 2,5 s, INP até 200 ms, CLS até 0,10. FMC, UPL e Corteva estão em rodada complementar de laboratório; ADAMA aguarda seleção de páginas.

## Laboratório, média das três páginas (celular / desktop)

| Marca | Páginas válidas | Desempenho | Acessibilidade | Boas práticas | SEO técnico | Gate |
|---|---:|---:|---:|---:|---:|---|
| Syngenta | 3 / 3 | 53 / 65.7 | 86.3 / 85.3 | 66.7 / 68 | 77.3 / 77.3 | apto |
| Bayer | 3 / 2 | 22.0 / 32.8 | 100.0 / 100.0 | 45.0 / 52.0 | 92.0 / 92.0 | apto |
| BASF | 3 / 3 | 51.8 / 44.3 | 94.7 / 94.7 | 92.0 / 92.0 | 89.7 / 89.7 | apto |
| Corteva | 2 / 1 | 57.5 / 80 | 92.0 / 90 | 92.0 / 96 | 83.0 / 83 | amostra_insuficiente |
| IHARA | 3 / 3 | 38.7 / 57.3 | 84.7 / 84.3 | 75.7 / 77.0 | 100 / 100.0 | apto |
| FMC | 0 / 0 | N/A / N/A | N/A / N/A | N/A / N/A | N/A / N/A | amostra_insuficiente |
| UPL | 0 / 0 | N/A / N/A | N/A / N/A | N/A / N/A | N/A / N/A | amostra_insuficiente |
| ADAMA | 0 / 0 | N/A / N/A | N/A / N/A | N/A / N/A | N/A / N/A | amostra_insuficiente |

## Campo (dados de campo de experiência de página), origem, celular, p75

| Marca | Escopo da origem | LCP (ms) | INP (ms) | CLS | Passa os três CWV | Páginas com dado de campo | Páginas que passam |
|---|---|---:|---:|---:|---|---:|---:|
| Syngenta | origem agro Brasil | 2216.0 | 149.0 | 0.01 | True | 2 | 1 |
| Bayer | origem agro Brasil | 3444.0 | 188.0 | 0.1 | False | 3 | 0 |
| BASF | domínio global (não isola agro Brasil) | 3683.0 | 184.0 | 0.01 | False | 2 | 0 |
| Corteva | domínio global (não isola agro Brasil) | 2843.0 | 118.0 | 0.17 | False | 4 | 0 |
| IHARA | origem agro Brasil | 3911.0 | 178.0 | 0.13 | False | 4 | 0 |
| FMC | origem agro Brasil | 1833.0 | 155.0 | 0.04 | True | 0 | 0 |
| UPL | domínio global (não isola agro Brasil) | 4284.0 | 93.0 | 0.79 | False | 0 | 0 |
| ADAMA | domínio global (não isola agro Brasil) | 2075.0 | 150.0 | 0.0 | True | 0 | 0 |

## Leituras responsáveis

- O índice herdado dava à Syngenta 96 no celular e 99 no desktop medindo só a página inicial. Em três páginas comparáveis, a média de laboratório da Syngenta cai para a casa dos 50 no celular; a página inicial não representava o site.
- No campo, com dado real de usuários, a origem da Syngenta passa os três Core Web Vitals no celular; Bayer, BASF, Corteva e IHARA não passam (LCP acima de 2,5 s); FMC e ADAMA passam.
- Para BASF, Corteva, UPL e ADAMA o campo por origem mede o domínio global inteiro, não a subpasta agro Brasil; por isso essa medida é diagnóstica e não entra na nota. O laboratório por página é o que se compara.
- Acessibilidade: Bayer atinge 100 no auditoria de desempenho de página, as demais ficam entre 85 e 94; boas práticas variam muito (Bayer 45 a 52, BASF 92).
- Desempenho técnico é uma dimensão da Experiência entre cinco; não é o pilar.
