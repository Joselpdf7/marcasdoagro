---
titulo: "Emenda v1.1 às cestas congeladas"
origem: "protocolo/CESTAS_v1.1_EMENDA_2026-09-13.md"
data: "2026-09-13"
versao: "v1.1"
sha256_original: "a31eecf1dc8e1c5e358d9adb79319c08ebbc589fb25337c3eb5b271d87d6e79a"
tipo: "protocolo"
---
# Emenda v1.1 às cestas congeladas

Data: 13/09/2026, 17h. Estado no momento da emenda: volumes da cesta de marca (24 termos) e da cesta de categoria (97 termos) já observados; nenhuma presença em SERP por marca observada ainda; nenhum ranking calculado.

## 1. Busca pela marca (P1): a regra dos qualificadores não funciona e é substituída

Observado: "syngenta agro" 30 e "syngenta defensivos" 20 buscas mensais; "bayer agro" 590; "basf agro" 260; "corteva defensivos" 0. Os qualificadores não medem a mesma coisa entre marcas: quem já é agro (Syngenta, Corteva, IHARA) não recebe o qualificador, e "bayer agro" é o próprio nome da divisão. Somar só os termos qualificados puniria as marcas puramente agro. A regra é substituída antes de qualquer comparação:

Nova regra P1: para cada marca, puxar o universo de palavras-chave que contêm o nome da marca (relatório de busca ampla, base BR, ordenado por volume, até 2.000 termos). Classificar cada termo por dicionário congelado em três classes: agro explícito (contém cultura, praga, doença, tipo de produto, nome comercial do catálogo validado, "agro", "agrícola", "defensivo", "semente", "produtor", "lavoura"), não agro explícito (farma, medicamento, remédio, aspirina, vitamina, química industrial, tintas, plástico, vagas, trabalhe conosco, ações, bolsa, história da empresa, herbicida urbano e pragas urbanas) e neutro (só o nome ou termos institucionais como site, telefone, endereço, login). Publicar três números por marca: volume agro explícito, volume neutro (com a ambiguidade declarada) e volume não agro (excluído). O indicador principal é o volume agro explícito; a sensibilidade soma agro explícito e neutro. Regra idêntica para as oito marcas; o dicionário é congelado em arquivo antes da classificação.

## 2. Cesta de categoria: grafias e denominadores

Dos 97 termos, 19 não existem na base de dados de busca BR e 22 têm volume zero. A cesta congelada não muda. Acréscimos técnicos permitidos: variantes sem acento e sem preposição dos 19 termos ausentes (por exemplo "ferrugem asiatica", "manejo de doenças no cafe", "período de carência"), registradas como variantes do mesmo termo. Regra de denominador: a presença em SERP por marca é medida sobre os termos que retornaram resultados orgânicos na base, e esse número é publicado como denominador. Termos sem SERP não são zero para ninguém.

## 3. Nada mais muda

Sementes de perguntas, regra da cesta de produtos e cesta de veículos seguem como na v1.

## Emenda v1.2 (18h BRT, 13/09): universo de marca por união simétrica de sementes

Observado depois da coleta com palavra inteira: a busca ampla da base de dados de busca ordenada por volume devolve, para marcas cujo nome é fragmento de palavras comuns (ADAMA em "adam", Bayer em "bay"), poucos termos com a marca inteira entre os primeiros milhares. O universo da ADAMA ficou com 69 termos, incomparável. Regra nova, idêntica para as oito marcas, definida antes de comparar: universo = união, sem duplicatas, das buscas amplas por (1) nome da marca, 1.500 termos por volume; (2) sete sementes "marca + termo": agro, defensivos, bula, fungicida, herbicida, inseticida, brasil, 200 termos cada. Só entram termos com o nome da marca como palavra inteira. Classificação pelo dicionário v1.1. O indicador principal continua sendo o volume agro explícito; neutro e não agro são publicados ao lado.
