---
titulo: "Nota do bloco: busca pela marca com intenção de sementes (P1)"
origem: "analise/notas_v1_2026-10-02/BUSCA_PELA_MARCA_P1.md"
data: "2026-10-02"
versao: "v1"
sha256_original: "e9e3e0df1fa63a6e0e81a2eb5a6a4ee5fa5ab8a9e662d1853e0b7e2c55185d93"
tipo: "resultado"
---
# Busca pela marca com intenção de sementes (P1)

Base de busca, país Brasil, 02/10/2026: união das listas de busca ampla de oito sementes por linha de medida (nome; nome + sementes, soja, milho, cultivar, ficha técnica, preco, brasil), 1.500 linhas para o nome solto e 200 por composto, mais sementes curtas para os nomes ambíguos. Filtro de palavra inteira; classificação pelo dicionário v1 com a emenda 1 de 02/10 (para semente curta e marca-mãe o contexto exige palavra plena de intenção de sementes; termo com defensivo não conta; homônimos descobertos vão para outro ramo). Medida principal por grupo: soma dos volumes dos termos com intenção de sementes ou agro explícito, sem termos de cultivar (que vão para V1), cada termo contado uma vez no grupo; marca-mãe só com intenção de sementes. Sensibilidades: regra v1 do dicionário; com termos de cultivar; mais neutro; sem a marca-mãe.

| Grupo | Linhas | Termos | P1 (principal) | Regra v1 | Com cultivar | Mais neutro | Sem marca-mãe | Outro ramo | Cinco maiores termos |
|---|---|---|---|---|---|---|---|---|---|
| GDM | 6 | 7.207 | 5.810 | 14.110 | 10.450 | 11.820 | 3.360 | 201.250 | gdm seeds (590) | supra sementes (390) | gdm genetica do brasil - matriz (320) | gdm genetica do brasil (170) | gdm genetica (140) |
| Corteva | 4 | 5.067 | 5.760 | 10.960 | 7.900 | 5.760 | 5.150 | 196.210 | pioneer sementes (720) | milho pioneer (260) | pioneer milho (260) | brevant sementes (260) | milho brevant (170) |
| Bayer | 6 | 7.406 | 7.230 | 7.570 | 12.340 | 30.480 | 6.370 | 38.460 | agroceres milho 1051 (480) | milho 1051 agroceres (390) | agroceres sementes (320) | agroceres milho (260) | milho agroceres (260) |
| Syngenta | 4 | 6.129 | 5.620 | 8.260 | 7.350 | 6.540 | 1.770 | 22.650 | syngenta seeds (720) | syngenta seeds ltda uberlandia (590) | nidera sementes (320) | sementes nidera (260) | seeds syngenta (210) |
| BASF | 5 | 2.572 | 1.410 | 1.940 | 1.510 | 3.280 | 660 | 3.050 | basf soja (70) | soja soytech 616 (70) | manejo basf soja (50) | portfolio basf soja (50) | soja basf (50) |
| TMG | 1 | 1.737 | 730 | 820 | 1.840 | 730 | 730 | 330 | tmg tropical melhoramento e genetica (210) | sementes tmg (70) | tmg sementes (70) | soja tmg (50) | tmg soja (40) |
| Longping High-Tech | 3 | 2.636 | 1.840 | 2.080 | 3.030 | 2.680 | 1.700 | 213.380 | morgan sementes (210) | sementes morgan (170) | milho morgan (140) | milho morgan catálogo (110) | morgan sementes de milho (110) |
| Limagrain | 3 | 3.581 | 1.260 | 1.260 | 1.930 | 1.260 | 900 | 734.460 | lg sementes (320) | limagrain sementes (140) | lg semente (110) | milho lg (90) | milho lg para silagem (50) |

## Por linha de medida

| Grupo | Linha | Tipo | Termos | P1 principal | Com cultivar (V1) | Neutro via nome | Outro ramo |
|---|---|---|---|---|---|---|---|
| BASF | BASF sementes | marca_mae | 2.132 | 750 | 30 | 0 | 3.030 |
| BASF | SoyTech | submarca | 90 | 420 | 0 | 1.100 | 0 |
| BASF | Credenz | submarca | 129 | 190 | 70 | 550 | 0 |
| BASF | FiberMax | submarca | 215 | 40 | 0 | 790 | 20 |
| BASF | Lidero | submarca | 11 | 20 | 0 | 0 | 0 |
| Bayer | Sementes Agroceres | submarca | 1.537 | 3.250 | 1.180 | 0 | 2.070 |
| Bayer | Dekalb | submarca | 3.416 | 1.170 | 990 | 20.280 | 360 |
| Bayer | Agroeste | submarca | 189 | 1.150 | 2.080 | 1.300 | 310 |
| Bayer | Bayer sementes | marca_mae | 1.238 | 860 | 0 | 0 | 35.720 |
| Bayer | Monsoy | submarca | 982 | 790 | 860 | 1.470 | 0 |
| Bayer | Deltapine | submarca | 47 | 10 | 0 | 200 | 0 |
| Corteva | Pioneer | submarca | 2.851 | 3.490 | 1.250 | 0 | 193.130 |
| Corteva | Brevant Sementes | submarca | 531 | 1.440 | 560 | 2.880 | 30 |
| Corteva | Corteva sementes | marca_mae | 1.600 | 610 | 0 | 37.460 | 3.050 |
| Corteva | Cordius | submarca | 92 | 220 | 330 | 610 | 0 |
| GDM | GDM Seeds | marca_mae | 1.689 | 2.450 | 0 | 0 | 310 |
| GDM | Brasmax | submarca | 1.443 | 1.490 | 3.990 | 2.740 | 30 |
| GDM | DONMARIO Sementes | submarca | 703 | 830 | 410 | 2.580 | 0 |
| GDM | Supra Sementes | submarca | 1.891 | 520 | 40 | 0 | 200.530 |
| GDM | Neogen | submarca | 1.170 | 330 | 180 | 0 | 340 |
| GDM | Biotrigo Genética | submarca | 344 | 190 | 20 | 790 | 40 |
| Limagrain | LG Sementes | submarca | 2.434 | 780 | 620 | 0 | 734.460 |
| Limagrain | Limagrain | marca_mae | 715 | 360 | 0 | 3.390 | 0 |
| Limagrain | Geneze Sementes | submarca | 434 | 120 | 50 | 0 | 0 |
| Longping High-Tech | Morgan Sementes | submarca | 1.830 | 1.310 | 570 | 0 | 213.380 |
| Longping High-Tech | Forseed Sementes | submarca | 322 | 390 | 620 | 840 | 0 |
| Longping High-Tech | Longping High-Tech | marca_mae | 491 | 140 | 0 | 6.740 | 0 |
| Syngenta | Syngenta Seeds | marca_mae | 2.861 | 3.850 | 490 | 0 | 6.070 |
| Syngenta | Nidera Sementes | submarca | 571 | 1.170 | 720 | 920 | 0 |
| Syngenta | NK Sementes | submarca | 1.937 | 520 | 520 | 0 | 16.540 |
| Syngenta | Golden Harvest | submarca | 769 | 80 | 0 | 0 | 40 |
| TMG | TMG | submarca | 1.737 | 730 | 1.110 | 0 | 330 |
