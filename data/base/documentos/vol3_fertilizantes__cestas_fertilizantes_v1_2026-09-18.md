---
titulo: "Cestas congeladas do Estudo 3 (marca, categoria, produtos, perguntas, veículos, autoatendimento)"
origem: "config/CESTAS_FERTILIZANTES_v1_2026-09-18.md"
data: "2026-09-18"
versao: "v1"
sha256_original: "024870c869ff53b86d7787d40a5f3e2edbd571c39c56318027ee9c1ec47288d6"
tipo: "protocolo"
---
# Cestas v1, Estudo 3, fertilizantes

Data: 18/09/2026. CONGELADO em 18/09/2026: aprovado pela coordenação do estudo ("sim", com a dúvida sobre a cesta de produtos resolvida na seção 3). Só muda por emenda versionada. Pendência registrada: teste do qualificador de imprensa contra Ubyfol e Stoller, previsto na seção 6, executado logo após o congelamento; se falhar, vira emenda 1. Base de busca: br. Consultas em minúsculas; a grafia consultada fica no bruto. Nenhuma consulta de categoria e nenhuma pergunta contém nome de marca ou de produto comercial. Até aqui só houve uma consulta de volume, a do teste pré-registrado do qualificador de produtos (seção 3); nenhuma consulta foi feita sobre a cesta de categoria nem sobre as perguntas.

## 1. Cesta de marca (P1): universo de busca com o nome da marca

Regra 5.1 das regras unificadas: união das listas de busca ampla de oito sementes simétricas por marca, filtro de palavra inteira, classificação pelo dicionário `DICIONARIO_CLASSIFICACAO_BUSCA_MARCA_FERTILIZANTES_v1_2026-09-18.json` em intenção agrícola explícita, neutra e outro ramo (química industrial, mineração, nutrição animal, farmácia e saúde, nome próprio e cultura). Leitura principal: soma dos volumes de intenção agrícola explícita. Sensibilidades: explícita mais neutra; com nomes de produto; com o nome do portal sem marca (Mosaic) e das marcas absorvidas (Fertilizantes Tocantins, Fertigran, Biosoja).

Sementes: nome; nome + fertilizantes; nome + adubo; nome + agro; nome + produtos; nome + ficha técnica; nome + onde comprar; nome + brasil.

| Marca | Nome usado nas sementes | Semente curta | Cuidado |
|---|---|---|---|
| Yara Brasil | yara brasil | yara, só em termos com palavra agrícola explícita | nome próprio feminino e personagem do folclore; bloco "nome próprio e cultura" no dicionário |
| Mosaic Fertilizantes | mosaic | não precisa | "mosaico" e a palavra inglesa; mineração e nutrição animal em outro ramo |
| EuroChem Brasil | eurochem | não precisa | |
| Cibra | cibra | não precisa | |
| Fertipar | fertipar | não precisa | |
| Stoller do Brasil | stoller | não precisa | sobrenome estrangeiro: exige palavra inteira e classificação |
| Timac Agro Brasil | timac agro | timac, só em termos com palavra agrícola explícita | nutrição animal em outro ramo |
| Vittia | vittia | não precisa | |
| Ubyfol | ubyfol | não precisa | |

## 2. Cesta de categoria (P4), 100 consultas

Tipo de fertilizante x cultura x operação e intenção, mais consultas de decisão. Unidade de análise: a consulta. SERP ao vivo no Google, Brasil, três passes, taxa de consultas com página de domínio próprio da marca no top 10; AI Overview registrado. Sensibilidades: ponderada por volume e por família. Arquivo de máquina: (registro interno do estudo).

**NPK e formulados (10):** adubo npk; fertilizante npk; adubo 04 14 08; adubo 20 05 20; adubo 10 10 10; adubo formulado para soja; adubo npk para milho; adubo npk para café; npk preço; mistura de grânulos ou npk no grânulo.

**Nitrogenados (9):** ureia agrícola; ureia preço; ureia protegida; ureia para milho; nitrato de amônio fertilizante; sulfato de amônio; sulfato de amônio para pastagem; adubação nitrogenada de cobertura; fertilizante nitrogenado para trigo.

**Fosfatados (7):** map fertilizante; dap fertilizante; superfosfato simples; superfosfato triplo; fosfato natural reativo; adubo fosfatado para soja; fertilizante fosfatado preço.

**Potássicos (6):** cloreto de potássio; cloreto de potássio preço; adubação potássica soja; sulfato de potássio; adubo potássico para café; potássio para cana.

**Calcário e gesso (6):** calcário agrícola; calcário dolomítico; calcário preço tonelada; gesso agrícola; gesso agrícola dose por hectare; calagem como calcular.

**Foliares e micronutrientes (12):** fertilizante foliar; adubo foliar para soja; adubo foliar para milho; adubo foliar para café; fertilizante foliar para feijão; adubo foliar para hortaliças; micronutrientes para soja; boro para soja; zinco para milho; manganês foliar soja; cobalto e molibdênio soja; enxofre para soja.

**Organominerais, liberação controlada, líquidos e fertirrigação (10):** fertilizante organomineral; adubo organomineral para café; organomineral para cana; fertilizante de liberação controlada; fertilizante de liberação lenta; fertilizante líquido; fertilizante para fertirrigação; adubo para hidroponia; fertilizante especial; fertilizantes de eficiência aumentada.

**Bioestimulantes e inoculantes (10):** bioestimulante para soja; bioestimulante para milho; bioestimulante para café; inoculante para soja; inoculante para milho azospirillum; coinoculação soja; extrato de algas agricultura; aminoácidos foliar; enraizador para soja; tratamento de sementes com micronutrientes.

**Culturas e operações (15):** adubação de base soja; adubação de cobertura milho; adubação milho safrinha; adubação de cana soca; adubação de pastagem; adubação do cafeeiro; adubação de algodão; adubação de trigo; adubação de feijão; adubação de citros; adubação de batata; adubação de tomate; adubação a lanço; adubação no sulco de plantio; recuperação de pastagem degradada adubo.

**Decisão e intenção (15):** análise de solo como interpretar; recomendação de adubação; cálculo de adubação; calculadora de adubação; dose de adubo por hectare; tabela de garantias fertilizante; onde comprar fertilizante; comprar adubo direto da fábrica; preço de fertilizantes hoje; melhor fertilizante para soja; melhor adubo para milho; melhores marcas de fertilizantes; fabricantes de fertilizantes no brasil; registro de fertilizante no mapa; fertilizante baixo carbono.

## 3. Cesta de produtos (V1 e V2)

Regra de inclusão: nome comercial com página própria em domínio próprio da marca (site oficial ou propriedade de conteúdo validada, o que inclui as páginas de produto da Mosaic no portal). Um nome por produto; formulações do mesmo produto (por exemplo 09-40-00 e 12-40-00) agrupadas no nome da linha; variantes de idioma deduplicadas. Nome extraído do slug da URL quando o título é genérico (armadilha da série). Ficam FORA da cesta os nomes genéricos de commodity com página própria (ureia, MAP, KCl, superfosfato, sulfato de amônio, NPK): pertencem à cesta de categoria e agrupariam o mercado inteiro em uma marca. Produtos de defesa biológica (bioinseticidas, biofungicidas, bionematicidas) também ficam fora, por serem de outro segmento. Levantamento inicial: 269 URLs em (registro interno do estudo); faltam o portal da Mosaic (navegador) e as linhas de fertilizantes da Vittia (o sitemap de produtos traz só biológicos). Cesta com menos de 10 nomes: N/A.

Medida principal, decidida por teste pré-registrado em 18/09/2026 (regra escrita às 17h45, antes da consulta; bruto em (registro interno do estudo)): quatro marcas, cinco produtos cada, quatro variantes.

| Variante | Produtos com volume (de 20) | Marcas com sinal (de 4) | Volume mensal somado |
|---|---:|---:|---:|
| nome + garantia | 0 | 0 | 0 |
| nome + ficha técnica | 3 | 2 | 40 |
| nome + bula | 12 | 4 | 2.980 |
| nome exato | 20 | 4 | 11.900 |

Decisão pela regra pré-registrada: medida principal "nome do produto + bula". O produtor busca "bula" também para fertilizantes e bioestimulantes; "garantia" não tem sinal e "ficha técnica" quase nenhum. Sensibilidades publicadas: "nome + ficha técnica" e nome exato só para nomes distintivos. O teste confirmou por que o nome exato não pode ser principal: "aspire" (2.900), "performa" (1.000) e "stimulate" (4.400) são palavras comuns ou homônimos de outros produtos. Nomes ambíguos (palavra comum em português ou inglês, ou homônimo de produto de outro ramo) são marcados na cesta e só contam na variante com "bula". Validação por especialista do segmento: refinamento opcional, entra como sensibilidade se chegar depois do painel.

### Decisão de 18/09/2026, antes de congelar: V1 fica como diagnóstico, fora da nota

Pergunta de método: a cesta de produtos é conclusiva o bastante? Resposta, com o que se sabia (só o teste de qualificador; nenhum dado do painel): não para entrar na nota. No teste, 94% do volume de "nome + bula" é de uma marca só (Stoller, 2.810 de 2.980 buscas mensais; Timac Agro 110, Mosaic 40, Yara 20), porque parte dos produtos dela é bioestimulante registrado com bula, e o produtor busca a bula. Na variante de nome exato, 83% do volume vem de três nomes que são palavras comuns (stimulate, aspire, performa). E há um problema de conceito: quem vende commodity (ureia, cloreto de potássio, MAP, NPK formulado) não tem nome comercial para ser buscado, então a medida separaria modelos de negócio, e não a valorização da marca pelo produtor. Com normalização por participação, V1 entregaria quase toda a submétrica a uma marca.

Regra congelada: a cesta de produtos é montada e medida do mesmo jeito (as três variantes, regra igual para as nove), mas V1 é DIAGNÓSTICO fora da nota, publicado no relatório técnico, no apêndice e na leitura por canal. V2 (produtos com página própria) segue descritiva, como no Volume 1. A cesta continua necessária para V4 (parcela das páginas de produto com bula, ficha técnica ou garantias localizáveis, que é taxa e não depende do tamanho do catálogo), para o dicionário de entidades da IA e para a escolha das páginas de V6. Sensibilidade obrigatória acrescentada: "V1 na nota" com "nome + bula". Divergência declarada na conformidade (regra 2.2).

## 4. Cesta de perguntas do produtor (V2, descritiva)

Sementes para perguntas com volume, limite de 20 por semente: fertilizante; adubo; adubação; análise de solo; calcário; ureia; fertilizante foliar; npk; inoculante; bioestimulante.

## 5. As 60 perguntas para as superfícies de IA

Arquivo de máquina: (registro interno do estudo). Três passes por superfície; as mesmas perguntas vão à SERP do Google para o AI Overview.

**Decisão e categoria (12)**

1. Quais fabricantes de fertilizantes são referência no Brasil?
2. Quais são as marcas de fertilizantes mais recomendadas no Brasil?
3. Qual marca de fertilizante é mais confiável?
4. Quais são as maiores empresas de fertilizantes do Brasil?
5. Quais marcas de fertilizante foliar são as melhores no Brasil?
6. Quais fabricantes produzem fertilizantes no Brasil em vez de só importar?
7. Qual marca de adubo NPK tem a melhor qualidade de grânulo e de mistura?
8. Quais empresas de fertilizantes têm a melhor assistência técnica ao produtor?
9. Quais marcas de fertilizantes especiais valem o investimento?
10. Quais empresas vendem fertilizantes de liberação controlada no Brasil?
11. Quais são as melhores marcas de fertilizante organomineral?
12. Quais marcas de bioestimulantes e inoculantes são mais usadas no Brasil?

**Soja (12)**

1. Qual a melhor adubação de base para soja?
2. Qual fertilizante foliar usar na soja?
3. Quanto de potássio aplicar na soja por hectare?
4. Qual o melhor fertilizante fosfatado para soja?
5. Vale a pena aplicar enxofre na soja e com qual fertilizante?
6. Qual inoculante usar na soja e como fazer a coinoculação?
7. Quais micronutrientes aplicar na soja e em que fase?
8. Como aplicar cobalto e molibdênio na soja?
9. Como adubar soja em solo arenoso?
10. Adubação a lanço ou no sulco de plantio para soja: qual é melhor?
11. Qual bioestimulante usar na soja para aumentar a produtividade?
12. Como corrigir deficiência de manganês na soja?

**Milho (10)**

1. Qual a melhor adubação de cobertura para milho?
2. Ureia, nitrato de amônio ou sulfato de amônio no milho: qual escolher?
3. Como reduzir a perda de nitrogênio por volatilização da ureia no milho?
4. Quanto de nitrogênio aplicar no milho por hectare?
5. Qual a melhor adubação para milho safrinha depois da soja?
6. Quando aplicar zinco no milho e com qual produto?
7. Vale a pena usar fertilizante de liberação controlada no milho?
8. Qual fertilizante foliar usar no milho?
9. Qual adubo de plantio usar no milho para alta produtividade?
10. Como fazer adubação de milho para silagem?

**Outras culturas e pastagem (10)**

1. Qual o melhor adubo para café em produção?
2. Como fazer a adubação de cana soca?
3. Qual fertilizante usar na adubação de pastagem?
4. Como adubar algodão para alta produtividade?
5. Qual adubação de cobertura usar no trigo?
6. Qual o melhor fertilizante para fertirrigação de hortaliças?
7. Como adubar feijão irrigado?
8. Qual adubo usar em citros em produção?
9. Como recuperar pastagem degradada com calcário e adubo?
10. Qual fertilizante usar para batata e tomate?

**Confiança, inovação e digital (16)**

1. Como interpretar uma análise de solo?
2. Como calcular a dose de adubo por hectare?
3. Como calcular a necessidade de calagem?
4. Quando usar gesso agrícola e em que dose?
5. Onde encontrar a tabela de garantias de um fertilizante?
6. Como saber se um fertilizante é registrado no Ministério da Agricultura?
7. Onde comprar fertilizante direto da fábrica?
8. Como comparar o preço de fertilizantes por ponto de nutriente?
9. Quais empresas de fertilizantes oferecem aplicativo ou calculadora de adubação?
10. Qual empresa de fertilizantes oferece recomendação de adubação online?
11. Quais fabricantes de fertilizantes têm programa de relacionamento ou de pontos para o produtor?
12. Quais empresas de fertilizantes investem em fertilizante de baixo carbono?
13. Quais são as novas tecnologias em fertilizantes no Brasil?
14. Fertilizante especial compensa em relação ao adubo convencional?
15. Como reduzir o custo com fertilizantes sem perder produtividade?
16. Onde encontrar conteúdo técnico confiável sobre nutrição de plantas?

## 6. Veículos para imprensa (P6), 15

Dez generalistas e de agro mantidos dos Volumes 1 e 2: Canal Rural, Agrolink, Notícias Agrícolas, Globo Rural, Valor Econômico (agronegócios), Estadão (agronegócios), Folha (mercado), Portal do Agronegócio, Revista Cultivar, Safras & Mercado. Cinco do segmento e de negócios do agro, onde a indústria de fertilizantes é coberta: GlobalFert (globalfert.com.br), Campo & Negócios (campoenegocios.com), AgFeed (agfeed.com.br), The AgriBiz (theagribiz.com), AgroRevenda (agrorevenda.com.br). Todos abertos em 18/09/2026 com HTTP 200, exceto o Canal Rural, que devolve 403 ao acesso automatizado (proteção contra robôs; a descoberta é feita pelo Google e o crawl dele usa navegador). Reservas, já abertas com HTTP 200: Brasilagro, CompreRural, Forbes Agro.

Qualificador de descoberta, igual para todas as marcas: `"<marca>" (fertilizante OR fertilizantes OR adubo OR adubação OR "nutrição de plantas" OR nutrição OR bioestimulante OR biológicos OR inoculante OR foliar OR micronutrientes) site:<veículo> after:<data>`. Cobre commodities, especialidades e biológicos, que são os negócios das nove marcas. Teste obrigatório antes de congelar: rodar o qualificador para a menor marca do painel em escopo orgânico (Ubyfol) e para a Stoller (bioestimulantes) em três veículos e conferir que devolve matérias; se não devolver e a busca sem qualificador devolver, o qualificador é ampliado para todas.

## 7. V5, autoatendimento e jornada: dez itens do segmento

1. Localizador de revenda, distribuidor ou unidade (onde comprar). 2. Contato direto com a marca (telefone, WhatsApp, formulário ou chat com resposta humana prevista). 3. Portal, área logada ou aplicativo do produtor. 4. Busca interna funcional. 5. Navegação por cultura. 6. Catálogo com ficha técnica e garantias na página do produto. 7. Calculadora, simulador ou recomendação de adubação. 8. Tabela de garantias, bulas, fichas de segurança ou catálogo para download. 9. Sala de imprensa ou notícias. 10. Redes sociais oficiais ligadas no rodapé ou no cabeçalho. Diagnóstico fora da nota: disponibilidade técnica (status HTTP, bloqueio a acesso automatizado, tempo de resposta). A auditoria percorre todos os domínios próprios da marca; regras de adjudicação R-V5 do Estudo 2 copiadas sem as contagens de lá; item sem verificação estática vai para navegador; N/A só com bloqueio confirmado também no navegador; rótulos sim, não, nao_verificado com normalização antes do cálculo.

## 8. V6, três páginas comparáveis

Página inicial do site oficial; página de produto de maior tráfego orgânico; página de conteúdo de maior tráfego orgânico, escolhidas entre todos os domínios próprios, excluídas por regra páginas de teste, galerias, login e PDFs. Três repetições, celular e computador; média das três páginas; página inicial isolada só como diagnóstico.

## 9. Redes sociais e janela

Instagram, Facebook e YouTube na nota; TikTok complementar, mapeado para todas (N/A para quem não tem conta); LinkedIn descritivo. Perfis do portal da Mosaic coletados com os mesmos parâmetros, como sensibilidade. Janela de fluxos: doze meses até a véspera da coleta. Fotos datadas. Segundo snapshot de seguidores 14 dias depois do primeiro.
