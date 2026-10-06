---
titulo: "Cestas congeladas v1 (marca, categoria, perguntas, produtos, veículos)"
origem: "protocolo/CESTAS_CONGELADAS_v1_2026-09-13.md"
data: "2026-09-13"
versao: "v1"
sha256_original: "5bba036a01181064d5cf0c5886ee135a2ef8830ee770ff6ff7fcef716b20766f"
tipo: "protocolo"
---
# Cestas congeladas v1, P1 defensivos

Data: 13/09/2026, antes de qualquer consulta de volume. Alteração só por emenda versionada. Base de dados de busca: br. Todas as consultas em minúsculas, sem acento quando a grafia sem acento for a dominante na base de dados de busca; a grafia consultada é registrada no bruto.

## Cesta de marca (A1), regra idêntica para todas

Para cada marca, três termos: (1) nome puro; (2) nome mais "agro"; (3) nome mais "defensivos". O volume da cesta é a soma dos três. O nome puro de Bayer e BASF captura farma e química; por isso a leitura principal de A1 usa a soma dos termos 2 e 3 para TODAS as marcas (regra simétrica), e a soma dos três fica como sensibilidade com a ambiguidade declarada.

| Marca | Termo 1 | Termo 2 | Termo 3 |
|---|---|---|---|
| Syngenta | syngenta | syngenta agro | syngenta defensivos |
| Bayer | bayer | bayer agro | bayer defensivos |
| BASF | basf | basf agro | basf defensivos |
| Corteva | corteva | corteva agro | corteva defensivos |
| IHARA | ihara | ihara agro | ihara defensivos |
| FMC | fmc | fmc agro | fmc defensivos |
| UPL | upl | upl agro | upl defensivos |
| ADAMA | adama | adama agro | adama defensivos |

## Cesta de categoria (A4, B2), 96 consultas

Construída por produto cartesiano de tipo de produto e alvo ou cultura, mais consultas genéricas. Unidade de análise é a consulta. Nenhuma consulta contém nome de marca.

Tipos: fungicida, herbicida, inseticida, nematicida, tratamento de sementes, biológico (bioinseticida, biofungicida).
Culturas: soja, milho, algodão, cana, café, trigo, feijão, hortifruti (tomate, batata).
Alvos: ferrugem asiática, percevejo, lagarta, cigarrinha, mosca branca, buva, capim amargoso, nematoide, mancha alvo, oídio, bicudo, broca da cana.

Lista:
fungicida soja; fungicida milho; fungicida algodão; fungicida cana; fungicida café; fungicida trigo; fungicida feijão; fungicida tomate; fungicida batata; fungicida ferrugem asiática; fungicida mancha alvo; fungicida oídio; melhor fungicida para soja; melhor fungicida para ferrugem; herbicida soja; herbicida milho; herbicida algodão; herbicida cana; herbicida café; herbicida trigo; herbicida feijão; herbicida buva; herbicida capim amargoso; herbicida pré emergente soja; herbicida pós emergente milho; herbicida dessecação; inseticida soja; inseticida milho; inseticida algodão; inseticida cana; inseticida café; inseticida percevejo; inseticida lagarta; inseticida cigarrinha; inseticida mosca branca; inseticida bicudo; inseticida broca da cana; inseticida lagarta do cartucho; nematicida soja; nematicida milho; nematicida cana; nematicida algodão; nematicida café; tratamento de sementes soja; tratamento de sementes milho; tratamento de sementes trigo; tratamento de sementes algodão; bioinseticida; biofungicida; bionematicida; defensivo biológico; controle biológico soja; controle biológico milho; controle biológico cana; controle de percevejo na soja; controle de lagarta na soja; controle de ferrugem na soja; controle de cigarrinha no milho; controle de buva; controle de capim amargoso; controle de nematoides; controle de mosca branca; controle de bicudo do algodoeiro; manejo integrado de pragas; manejo de resistência; manejo de plantas daninhas; manejo de doenças na soja; manejo de doenças no milho; manejo de pragas no algodão; manejo de pragas na cana; manejo de doenças no café; defensivos agrícolas; agroquímicos; agrotóxicos; bula de defensivo; bula fungicida; bula herbicida; bula inseticida; como aplicar fungicida; como aplicar herbicida; como aplicar inseticida; quando aplicar fungicida na soja; quando aplicar herbicida no milho; dose de fungicida; dose de herbicida; período de carência defensivo; intervalo de segurança; tecnologia de aplicação; pulverização de defensivos; defensivo para soja; defensivo para milho; defensivo para algodão; defensivo para cana; defensivo para café; defensivo para trigo; defensivo para feijão; defensivo para tomate.

## Cesta de perguntas do produtor (B2)

Sementes para phrase questions: fungicida soja; herbicida milho; inseticida percevejo; ferrugem asiática; buva; nematoide; cigarrinha do milho; tratamento de sementes; defensivo biológico; bula de defensivo. Limite de 20 perguntas por semente, ordenadas por volume. As perguntas resultantes viram a lista congelada B2 antes de consultar quem ranqueia.

## Cesta de produtos (B1)

Derivada do catálogo oficial de cada marca já crawleado, com regra de inclusão: nome comercial de defensivo ou biológico com página própria no site agro Brasil da marca, um nome por produto (aliases agrupados), sem sementes, sem fertilizantes, sem produtos de outra divisão. Lista fechada e versionada antes de consultar volume. Se a cesta de uma marca ficar abaixo de 10 nomes, o indicador dessa marca é N/A.

## Veículos para imprensa earned (A6)

Cesta fechada: Canal Rural, Agrolink, Notícias Agrícolas, Globo Rural, Agência Brasil, Valor Econômico (agro), Estadão (agro), Folha (agro), Portal do Agronegócio, AgroRevenda, Revista Cultivar, Agência Safras, Money Times (agro), Exame (agro), Forbes Brasil (agro). Janela: 13/09/2025 a 12/09/2026. Regra de classificação: earned (texto próprio do veículo com fonte independente ou entrevista), release republicado (similaridade alta com página de imprensa da marca), paid (marcação de conteúdo patrocinado, branded content ou publieditorial), ruído (farma, corporativo, fora do Brasil).
