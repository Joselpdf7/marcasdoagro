---
titulo: "Concordância entre revisão humana e codificação (kappa de Cohen), Estudo 3"
origem: "analise/revisao_humana_2026-09-21/kappa_revisao_humana.json"
data: "2026-09-21"
versao: "v1"
sha256_original: "d2caecf5c20f682f965bbad79e30b987331900a71e00b773d206b243f5cc079e"
tipo: "regra"
---
# Concordância entre revisão humana e codificação (kappa de Cohen), Estudo 3

Medidas de concordância (kappa de Cohen e percentual de concordância bruta) entre a codificação automática ou adjudicada e a revisão humana cega, nas classes de fonte de IA, imprensa e resposta da marca.

## fontes ia

**n_amostra**: 60

**n_comparaveis**: 53

### nao_verificaveis_ou_vazias

- 4
- 17
- 38
- 39
- 41
- 53
- 60

### kappa_elegibilidade

- 0.666
- 0.83

### kappa_4_classes

- 0.49
- 0.679

### matriz_elegibilidade

| Chave | Valor |
|---|---|
| humano=nao_direta/final=direta | 1 |
| humano=direta/final=nao_direta | 8 |
| humano=nao_direta/final=nao_direta | 23 |
| humano=direta/final=direta | 21 |

### matriz_4_classes

| Chave | Valor |
|---|---|
| humano=parcial/final=direta | 1 |
| humano=direta/final=parcial | 7 |
| humano=parcial/final=parcial | 10 |
| humano=direta/final=direta | 21 |
| humano=nao_pertinente/final=nao_pertinente | 5 |
| humano=parcial/final=nao_pertinente | 4 |
| humano=nao_pertinente/final=parcial | 4 |
| humano=direta/final=nao_pertinente | 1 |

## imprensa

**n_amostra**: 72

**n_comparaveis**: 64

### nao_verificaveis

- 22
- 30
- 34
- 37
- 63
- 64
- 68
- 69

### kappa_earned

- 0.413
- 0.734

### kappa_todas_classes

- 0.38
- 0.562

### matriz_classes

| Chave | Valor |
|---|---|
| humano=earned_protagonista/auto=earned_protagonista | 13 |
| humano=earned_protagonista/auto=mencao_incidental | 3 |
| humano=ruido/auto=mencao_incidental | 2 |
| humano=mencao_incidental/auto=ruido | 9 |
| humano=mencao_incidental/auto=mencao_incidental | 17 |
| humano=earned_protagonista/auto=release_republicado | 9 |
| humano=ruido/auto=ruido | 5 |
| humano=mencao_incidental/auto=earned_protagonista | 2 |
| humano=release_republicado/auto=earned_protagonista | 3 |
| humano=release_republicado/auto=release_republicado | 1 |

**precisao_earned**: 0.722

**recall_earned**: 0.52

### correções

| Chave | marca | url | auto | humano | obs |
|---|---|---|---|---|---|
| 2 | Vittia | https://revistacultivar.com.br/pesticida/guardium-wp | mencao_incidental | earned_protagonista | |
| 3 | Ubyfol | https://www.agrolink.com.br/regional/mg/uberaba/empresa/lista | mencao_incidental | ruido | |
| 4 | Mosaic Fertilizantes | https://www.theagribiz.com/agribuzz/alckmin-anuncia-r-4-bi-a-taxas-subsisiadas-ao-setor-de-fertilizantes/ | ruido | mencao_incidental | |
| 6 | Ubyfol | https://revistacultivar.com.br/noticias/exportacao-de-cafe-do-brasil-cai-em-2025-mas-receita-e-recorde | ruido | mencao_incidental | |
| 8 | Yara Brasil | https://globorural.globo.com/insumos/noticia/2026/07/yara-compra-de-fabrica-de-amonia-nos-estados-unidos-por-us-13-bilhao.ghtml | release_republicado | earned_protagonista | |
| 12 | EuroChem Brasil | https://globorural.globo.com/insumos/noticia/2026/07/minoritarios-da-heringer-abrem-processo-arbitral-contra-a-controladora-eurochem.ghtml | release_republicado | earned_protagonista | |
| 14 | Fertipar | https://globorural.globo.com/especiais/melhores-do-agronegocio/noticia/2025/11/vli-de-transporte-e-logistica-e-campea-do-melhores-do-agro.ghtml | mencao_incidental | ruido | |
| 15 | Vittia | https://agfeed.com.br/negocios/no-trimestre-das-entregas-de-insumos-vittia-ve-receita-bater-r-235-milhoes-alta-de-5/ | release_republicado | earned_protagonista | |
| 19 | Ubyfol | https://revistacultivar.com.br/noticias/inmet-previsao-do-tempo-entre-os-dias-19-a-26-de-janeiro-de-2026 | ruido | mencao_incidental | |
| 20 | Stoller do Brasil | https://globorural.globo.com/insumos/noticia/2026/07/corteva-lanca-nova-versao-de-regulador-de-crescimento-vegetal-e-aposta-no-crescimento-dos-biologicos.ghtml | mencao_incidental | earned_protagonista | |
| 23 | Stoller do Brasil | https://www.agrolink.com.br/noticias/corteva-apresenta-inovacao-contra-nematoides-na-hortitec_515720.html | earned_protagonista | mencao_incidental | |
| 24 | Mosaic Fertilizantes | https://globalfert.com.br/noticias/mercado/mosaic-registra-prejuizo-no-1o-trimestre-e-reduz-producao-diante-da-alta-dos-custos-de-materias-primas/ | earned_protagonista | release_republicado | |
| 25 | Mosaic Fertilizantes | https://www.theagribiz.com/fertilizantes/mosaic-poe-ativos-de-araxa-a-venda-e-paralisa-minas-de-fosfato-em-minas-gerais/ | release_republicado | earned_protagonista | |
| 29 | Stoller do Brasil | https://agrorevenda.com.br/destaques/plots-agricolas-reunem-tecnologia-pesquisa-e-experiencias-imersivas-na-tecnoshow-comigo/ | earned_protagonista | mencao_incidental | |
| 36 | Vittia | https://www.theagribiz.com/defensivos-agricolas/grupo-belga-tessenderlo-compra-20-da-fmc-por-us-400-milhoes/ | ruido | mencao_incidental | |
| 41 | Yara Brasil | https://globorural.globo.com/biocombustiveis/noticia/2026/04/anp-autoriza-primeira-certificacao-de-origem-de-biometano-no-pais.ghtml | ruido | mencao_incidental | |
| 43 | EuroChem Brasil | https://revistacultivar.com.br/noticias/copacol-completa-62-anos-e-reforca-expansao-no-agronegocio | ruido | mencao_incidental | |
| 48 | Cibra | https://globorural.globo.com/negocios/noticia/2025/12/acoes-da-bayer-sobem-apos-apoio-do-governo-dos-eua-as-acoes-sobre-glifosato.ghtml | ruido | mencao_incidental | |
| 49 | EuroChem Brasil | https://agfeed.com.br/negocios/decisao-arbitral-condena-eurochem-em-disputa-com-a-familia-heringer-que-se-arrasta-desde-2022/ | release_republicado | earned_protagonista | |
| 52 | Mosaic Fertilizantes | https://globalfert.com.br/noticias/mercado/mosaic-reduz-producao-de-superfosfato-simples-no-brasil-apos-alta-nos-custos-de-enxofre/ | earned_protagonista | release_republicado | |
| 53 | Yara Brasil | https://revistacultivar.com.br/noticias/terminal-da-usiminas-em-cubatao-inicia-descarga-de-fertilizantes | release_republicado | earned_protagonista | |
| 55 | Stoller do Brasil | https://www.noticiasagricolas.com.br/noticias/agronegocio/421070-corteva-leva-a-showtec-maracaju-tecnologias-em-sementes-defensivos-quimicos-e-solucoes-biologicas-para-impulsionar-a-produtividade-das-lavouras.html | ruido | mencao_incidental | |
| 58 | Mosaic Fertilizantes | https://globorural.globo.com/insumos/noticia/2026/01/mosaic-estende-reducao-na-producao-de-superfosfato-simples-no-brasil.ghtml | release_republicado | earned_protagonista | |
| 59 | Yara Brasil | https://www.canalrural.com.br/projetos/conteudo-patrocinado/alta-tecnologia-na-nutricao-das-plantas-garante-produtividade-e-rentabilidade-na-producao-de-soja/ | mencao_incidental | earned_protagonista | |
| 60 | EuroChem Brasil | https://agfeed.com.br/negocios/em-meio-a-trocas-no-comando-fertilizantes-heringer-toma-r-100-milhoes-emprestados-da-eurochem/ | release_republicado | earned_protagonista | |
| 61 | Mosaic Fertilizantes | https://www.theagribiz.com/agronegocio/trator-colheitadeira-e-llm-os-planos-da-john-deere-para-a-ia/ | ruido | mencao_incidental | |
| 66 | Mosaic Fertilizantes | https://globalfert.com.br/noticias/mercado/ipcf-mosaic-indica-aumento-no-poder-de-compra/ | earned_protagonista | release_republicado | |
| 70 | Mosaic Fertilizantes | https://globorural.globo.com/insumos/noticia/2026/07/mosaic-reduz-operacoes-no-brasil-por-escassez-de-enxofre.ghtml | release_republicado | earned_protagonista | |

### kappa_earned_v2_2_mesma_amostra_calibração

- 0.707
- 0.859

**nota**: v2.2 foi calibrada nesta amostra (retirada de 'comunicado' e 'release' dos marcadores de assessoria); o kappa v2.2 é otimista e não substitui o kappa cego de 0,41; regra 6.4 exige segunda revisão ampla antes de publicar

## f5

**n_amostra**: 54

**n_comparaveis**: 54

**nao_verificaveis**: (lista vazia)

### kappa_respondeu

- 1.0
- 1.0

### matriz

| Chave | Valor |
|---|---|
| humano=não/coleta=não | 22 |
| humano=sim/coleta=sim | 32 |

### contagens_humano_vs_coleta

- ["Mosaic Fertilizantes", 0, 0.0]
- ["Yara Brasil", 22, 22.0]
- ["Fertipar", 0, 0.0]
- ["Stoller do Brasil", 0, 0.0]
- ["Mosaic Fertilizantes", 0, 0.0]
- ["Timac Agro Brasil", 0, 0.0]
- ["Cibra", 2, 2.0]
- ["Ubyfol", 1, 1.0]
- ["Mosaic Fertilizantes", 0, 0.0]
- ["Vittia", 1, 1.0]
- ["Timac Agro Brasil", 0, 0.0]
- ["Timac Agro Brasil", 1, 1.0]
- ["Ubyfol", 0, 0.0]
- ["Stoller do Brasil", 1, 1.0]
- ["Cibra", 5, 5.0]
- ["EuroChem Brasil", 0, 0.0]
- ["Cibra", 8, 8.0]
- ["Fertipar", 0, 0.0]
- ["Ubyfol", 1, 1.0]
- ["Vittia", 2, 2.0]
- ["Yara Brasil", 3, 3.0]
- ["Stoller do Brasil", 1, 1.0]
- ["Cibra", 7, 10.0]
- ["Vittia", 0, 0.0]
- ["Stoller do Brasil", 0, 0.0]
- ["Cibra", 4, 4.0]
- ["Fertipar", 0, 0.0]
- ["Vittia", 2, 2.0]
- ["EuroChem Brasil", 1, 1.0]
- ["Timac Agro Brasil", 1, 1.0]
- ["Vittia", 0, 0.0]
- ["EuroChem Brasil", 0, 0.0]
- ["Timac Agro Brasil", 1, 1.0]
- ["Vittia", 0, 0.0]
- ["Stoller do Brasil", 0, 0.0]
- ["Stoller do Brasil", 2, 2.0]
- ["Mosaic Fertilizantes", 1, 1.0]
- ["Fertipar", 1, 1.0]
- ["Cibra", 10, 10.0]
- ["EuroChem Brasil", 0, 0.0]
- ["Yara Brasil", 39, 30.0]
- ["Yara Brasil", 3, 3.0]
- ["EuroChem Brasil", 1, 1.0]
- ["EuroChem Brasil", 1, 1.0]
- ["Ubyfol", 0, 0.0]
- ["Yara Brasil", 8, 8.0]
- ["Yara Brasil", 10, 10.0]
- ["Mosaic Fertilizantes", 2, 3.0]
- ["Mosaic Fertilizantes", 1, 2.0]
- ["Ubyfol", 1, 1.0]
- ["Fertipar", 1, 1.0]
- ["Timac Agro Brasil", 0, 0.0]
- ["Ubyfol", 0, 0.0]
- ["Fertipar", 0, 0.0]
