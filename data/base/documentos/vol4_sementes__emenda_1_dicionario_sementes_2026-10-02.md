---
titulo: "Emenda 1 do dicionário de busca pela marca, sementes"
origem: "config/EMENDA_1_DICIONARIO_SEMENTES_2026-10-02.md"
data: "2026-10-02"
versao: "v1"
sha256_original: "4cddf0c74d95b995ba6c83f9d55ba397dba458b0452f33273687f18fe3e331ad"
tipo: "regra"
---
# Emenda 1 do dicionário de classificação de busca de marca (Volume 4, sementes)

Data e hora: 02/10/2026, 15h12. Escrita durante a coleta de busca, depois de ver o universo classificado de 15 das 33 linhas (GDM, Corteva e Bayer) e antes de qualquer painel com P1. Regra idêntica para todas as linhas. A regra v1 fica gravada como sensibilidade (`sens_regra_dicionario_v1`) em (registro interno do estudo) e (registro interno do estudo).

## O que já se sabia

Com a regra v1 do dicionário, entravam na leitura principal de P1: "supra mk4 preco" e "toyota supra mk4 preco" (carro; "preco" é palavra de agro explícito na lista v1), "pioneer bt" e "xdj rr pioneer" (áudio; "bt" e "rr" são siglas de tecnologia na lista de intenção), "fungicidas bayer soja" e "inseticida para cigarrinha do milho bayer" (defensivos; "soja" e "milho" são intenção), "leite de soja supra soy" (bebida). O dicionário v1 previa 18 homônimos com contexto obrigatório, mas aceitava qualquer palavra de intenção ou de agro explícito como contexto.

## Regra emendada

1. Para semente curta (nome ambíguo) e para marca-mãe (nome do grupo), o contexto exigido é palavra PLENA de intenção de sementes: semente, cultivar, híbrido, variedade, genética, melhoramento, nome de cultura, nome de tecnologia licenciada por extenso (intacta, enlist, conkesta, vt pro, viptera, powercore, leptra, xtend), maturação, nematoide, ferrugem, refúgio, época de plantio. Não bastam as siglas e palavras genéricas da lista v1: rr, rr2, bt, e3, gm, i2x, vip3, ciclo, densidade, espaçamento, catálogo, portfólio, lançamento, safra, posicionamento, ficha técnica, população de plantas.
2. Termo com palavra de defensivo ou fertilizante (defensivo, herbicida, fungicida, inseticida, fertilizante, adubo, glifosato, roundup) não é intenção de sementes para curta nem para marca-mãe.
3. Homônimos descobertos no bruto entram em outro ramo: "supra soy", "leite de soja", "bebida", "toyota", "mk4", "xdj".
4. Para o casamento com a cesta de cultivares, o número sem a letra inicial também conta ("p3322" casa "pioneer 3322"), porque o produtor busca o número.
5. Linhas de nome composto não ambíguo (brasmax, biotrigo, donmario, brevant, cordius, agroeste, monsoy, deltapine, nidera, credenz, soytech, fibermax, forseed) seguem a regra v1 sem mudança: intenção de sementes ou agro explícito.

## Consequência

P1 cai em todas as linhas com semente curta ou marca-mãe (GDM de 27.430 para 5.810, Corteva de 13.410 para 5.760 nas 15 linhas vistas); a ordem entre os grupos será lida só no painel v1, com a regra v1 ao lado como sensibilidade.
