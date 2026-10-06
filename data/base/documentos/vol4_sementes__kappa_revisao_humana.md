---
titulo: "Concordância entre revisão humana e codificação (kappa de Cohen), Estudo 4"
origem: "analise/revisao_humana_2026-09-30/kappa_revisao_humana.json"
data: "2026-10-02"
versao: "v1"
sha256_original: "81959151c01530a67b279d7d3a1f43923343c54e5707b4ccc50b327e70336fe7"
tipo: "regra"
---
# Concordância entre revisão humana e codificação (kappa de Cohen), Estudo 4

Medidas de concordância (kappa de Cohen e percentual de concordância bruta) entre a codificação automática ou adjudicada e a revisão humana cega, nas classes de fonte de IA (kappa de elegibilidade 0,395), imprensa (kappa 0,777 na classe em que a marca é o assunto) e resposta da marca aos comentários. Intervalos e matrizes de confusão incluídos.

## fontes ia

**n_amostra**: 60

**n_comparaveis**: 49

### humano não verificavel

- 3
- 14
- 15
- 20
- 25
- 29
- 38
- 40
- 43
- 52
- 56

### final não verificavel

- 3
- 4
- 12
- 18
- 25
- 29
- 33
- 38
- 39
- 40
- 43
- 44
- 49
- 51
- 56

### abre para humano mas final nv

- 4
- 12
- 18
- 33
- 39
- 44
- 49
- 51

### nv para humano mas final julgou

- 14
- 15
- 20
- 52

### kappa elegibilidade

- 0.395
- 0.714

### kappa 4 classes

- 0.202
- 0.429

### matriz elegibilidade

| Chave | Valor |
|---|---|
| humano=direta/final=direta | 11 |
| humano=nao_direta/final=nao_direta | 24 |
| humano=direta/final=nao_direta | 10 |
| humano=nao_direta/final=direta | 4 |

### matriz 4 classes

| Chave | Valor |
|---|---|
| humano=direta/final=direta | 11 |
| humano=nao_pertinente/final=nao_verificavel | 3 |
| humano=parcial/final=nao_pertinente | 3 |
| humano=nao_pertinente/final=parcial | 5 |
| humano=direta/final=nao_pertinente | 6 |
| humano=nao_pertinente/final=direta | 2 |
| humano=parcial/final=nao_verificavel | 3 |
| humano=direta/final=parcial | 2 |
| humano=parcial/final=parcial | 7 |
| humano=nao_pertinente/final=nao_pertinente | 3 |
| humano=direta/final=nao_verificavel | 2 |
| humano=parcial/final=direta | 2 |

## imprensa

**n_amostra**: 72

**n_comparaveis**: 69

### não verificaveis

- 62
- 65
- 69

### kappa earned

- 0.777
- 0.899

### kappa todas classes

- 0.769
- 0.841

### matriz classes

| Chave | Valor |
|---|---|
| humano=ruido/auto=ruido | 13 |
| humano=earned_protagonista/auto=earned_protagonista | 20 |
| humano=mencao_incidental/auto=mencao_incidental | 24 |
| humano=mencao_incidental/auto=ruido | 3 |
| humano=release_republicado/auto=release_republicado | 1 |
| humano=earned_protagonista/auto=release_republicado | 4 |
| humano=earned_protagonista/auto=ruido | 2 |
| humano=earned_protagonista/auto=mencao_incidental | 1 |
| humano=ruido/auto=release_republicado | 1 |

**precisao_earned**: 1

**recall_earned**: 0.741

### por tipo linha

**marca mae**

- 0.678
- 0.842

**submarca**

- 0.919
- 0.968

### correções

| Chave | linha | grupo | tipo_linha | url | auto | humano | obs |
|---|---|---|---|---|---|---|---|
| 11 | GDM Seeds | GDM | marca_mae | https://matogrosso.canalrural.com.br/feiras-e-eventos/febrasem-2026-projeta-futuro-da-produtividade-com-foco-em-genetica-e-mercado/ | ruido | mencao_incidental | |
| 22 | Syngenta Seeds | Syngenta | marca_mae | https://revistacultivar.com.br/noticias/syngenta-seeds-anuncia-novo-modelo-comercial-no-brasil | release_republicado | earned_protagonista | |
| 23 | GDM Seeds | GDM | marca_mae | https://www.seednews.com.br/linha-verde/3529-feira-brasileira-de-sementes-contara-com-palestrantes-renomados-e-temas-atuais-do-agronegocio-nacional-e-mundial | ruido | mencao_incidental | |
| 33 | Monsoy | Bayer | submarca | https://www.portaldoagronegocio.com.br/agricultura/soja/videos/monsoy-novas-tecnologias-para-soja-impulso-negocios-agro-bayer-brasil | release_republicado | earned_protagonista | |
| 41 | Corteva sementes | Corteva | marca_mae | https://agfeed.com.br/videos/agfeed-cnn-money/na-corteva-visao-otimista-e-lucro-menor/ | release_republicado | earned_protagonista | |
| 42 | Bayer sementes | Bayer | marca_mae | https://www.noticiasagricolas.com.br/videos/agronegocio/421559-bayer-apresenta-novas-tecnologias-para-o-manejo-do-cafe-na-expocafe-2026.html | ruido | earned_protagonista | |
| 43 | Syngenta Seeds | Syngenta | marca_mae | https://seednews.com.br/linha-verde/3319-golden-harvest-anuncia-nova-estrategia-de-negocios-para-acelerar-seu-crescimento-no-mercado-de-soja | release_republicado | earned_protagonista | |
| 56 | Bayer sementes | Bayer | marca_mae | https://www.noticiasagricolas.com.br/noticias/informe-publicitario/411969-convintro-duo-chega-ao-mercado-como-nova-ferramenta-contra-plantas-daninhas-resistentes.html | mencao_incidental | earned_protagonista | |
| 64 | Pioneer | Corteva | submarca | https://revistacultivar.com.br/noticias/usda-abre-consulta-publica-sobre-milho-transgenico-dp51291 | ruido | mencao_incidental | |
| 68 | Corteva sementes | Corteva | marca_mae | https://globorural.globo.com/negocios/noticia/2026/09/corteva-anuncia-estratgias-de-subsidiria-vylor-para-mercado-de-trigo-e-soja.ghtml | release_republicado | ruido | |
| 72 | BASF sementes | BASF | marca_mae | https://www.noticiasagricolas.com.br/videos/agronegocio/421755-em-momento-desafiador-para-o-citricultor-basf-traz-o-esquadrao-psilideo-com-dois-novos-modos-de-acao-no-combate-ao-vetor-do-greening.html | ruido | earned_protagonista | |

## f5

**n_amostra**: 60

**n_comparaveis**: 59

### kappa respondeu

- 0.964
- 0.983

### matriz

| Chave | Valor |
|---|---|
| humano=sim/coleta=sim | 22 |
| humano=não/coleta=não | 36 |
| humano=não/coleta=sim | 1 |

**respostas_iguais**: 58

**respostas_diferenca_mediana**: 0

**publico_iguais**: 53

**publico_diferenca_mediana**: 0

### diferencas

| n | linha | coleta_publico | humano_publico | coleta_respostas | humano_respostas | obs |
|---|---|---|---|---|---|---|
| 4 | Pioneer | 4 | 3.0 | 0 | 0.0 | Na postagem, marcam 4 comentários, mas só aparecem 3 |
| 16 | TMG | 10 | 15.0 | 0 | 0.0 | |
| 23 | TMG | 3 | 4.0 | 1 | 0.0 | |
| 26 | DONMARIO Sementes | 4 | 8.0 | 0 | 0.0 | Instagram marcou 4 comentários, mas tinham mais. |
| 55 | Neogen | 9 | 15.0 | 0 | 0.0 | 15 comentários, mas o Instagram apontou 9 comentários. |
| 57 | Biotrigo Genética | 6 | 7.0 | 0 | 0.0 | |
