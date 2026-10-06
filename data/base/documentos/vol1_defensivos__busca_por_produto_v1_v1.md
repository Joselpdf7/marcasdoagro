---
titulo: "Busca por produto, cesta v1 congelada (V1, Valorização)"
origem: "estudo_1_panorama_digital/analise/bloco_a_2026-09-13/BUSCA_POR_PRODUTO_V1_v1.md"
data: "2026-09-13"
versao: "v1"
sha256_original: "dbe398abe73dad4a3150bcb9a80db63c8da71ee3804cdd4ea59b19a6e052ebfe"
tipo: "resultado"
---
# Busca por produto (V1, Valorização), cesta v1 congelada

Data: 13/09/2026. Cesta v1: 218 nomes comerciais que passaram na regra automática (defensivo ou biológico com página oficial), cinco marcas do piloto; 47 nomes em dúvida ficam como sensibilidade. Medida principal: soma do volume mensal de busca (base de dados de busca BR) da consulta 'nome do produto + bula', que é a intenção inequivocamente agrícola; o nome exato fica como sensibilidade porque muitos nomes são palavras comuns (Opera, Forum, Heat, Front, Linear, Strike, Axial) e carregam busca de outros significados. Candidatas entram quando a cesta delas fechar.

| Marca | Produtos na cesta | Com busca de bula | Volume 'nome + bula' | Participação | Com os 47 duvidosos | Nome exato (sensibilidade) | Maiores produtos por busca de bula |
|---|---:|---:|---:|---:|---:|---:|---|
| BASF | 88 | 77 | 87.180 | 44.6% | 89.630 | 323.630 | belyan (8100). blavity (6600). orkestra (6600). pirate (6600). heat (5400) |
| Syngenta | 44 | 39 | 37.700 | 19.3% | 50.340 | 61.150 | actara (5400). ampligo (4400). polytrin (4400). verdavis (3600). curyom (1900) |
| Bayer | 15 | 13 | 28.580 | 14.6% | 29.970 | 31.140 | nativo (14800). curbix (5400). verango (2400). alion (1900). roundup (1900) |
| Corteva | 38 | 35 | 28.380 | 14.5% | 53.060 | 84.290 | lannate (6600). vessarya (3600). delegate (2900). intrepid (2400). spider (1900) |
| IHARA | 32 | 23 | 13.710 | 7.0% | 18.960 | 23.340 | cercobin (4400). terminus (1900). approve (1300). kyojin (1300). maxsan (880) |

Leituras responsáveis: a BASF concentra a maior busca por produto (Opera, Heat, Comet, Orkestra), seguida de Syngenta e Bayer; a IHARA tem poucos produtos com busca de bula mensurável na base de dados de busca. A extração de nomes da IHARA sofreu com títulos em forma de slogan (registrado na cesta como limitação); a v1.1 com a resposta do time técnico pode corrigir nomes.

## Candidatas (18h50 BRT)

| Marca | Produtos | Com busca de bula | Volume 'nome + bula' | Origem dos nomes | Status |
|---|---:|---:|---:|---|---|
| UPL | 46 | 45 | 40.280 | slug oficial da URL de produto | entra com flag: nomes vindos do slug oficial da URL de produto (confiável); Select é produto UPL |
| ADAMA | 55 | 32 | 21.610 | slug oficial da URL de produto | entra com flag: nomes vindos do slug oficial da URL de produto (proteção-de-cultivos/tipo/slug) |
| FMC | 47 | 35 | N/A | palavra-chave de maior volume por URL (site não rastreável) | N/A pendente: nomes inferidos de palavras-chave trouxeram produtos de outras marcas (ex.: Orkestra, da BASF) q |

UPL e ADAMA entram com flag (nomes do slug oficial, sem título de página). FMC fica N/A até validação humana: a inferência por palavra-chave trouxe produtos de outras marcas que ranqueiam nas páginas da FMC.
