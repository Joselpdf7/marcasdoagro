---
titulo: "Cestas congeladas do Estudo 4 (grupo, submarcas, categoria, cultivares, perguntas, veículos, autoatendimento)"
origem: "config/CESTAS_SEMENTES_v1_2026-09-30.md"
data: "2026-09-30"
versao: "v1"
sha256_original: "9165cbd467e886af0ccf8493b576947d06f7dfe11b8f5c562183fd674153da08"
tipo: "protocolo"
---
# Cestas v1, Estudo 4, sementes

Data: 30/09/2026. CONGELADO em 30/09/2026 com a aprovação da coordenação do estudo; só muda por emenda versionada. Pendência registrada: teste do qualificador de imprensa (seção 6), executado logo após o congelamento; se falhar, vira emenda. Base de busca: br. Consultas em minúsculas e sem acento na chamada; a grafia consultada fica no bruto. Nenhuma consulta de categoria e nenhuma pergunta contém nome de marca, de grupo ou de cultivar comercial. Até aqui as únicas consultas de volume foram a do escopo orgânico dos alvos (validação de domínios) e a do teste pré-registrado do qualificador de cultivares (seção 3); nada foi consultado sobre a cesta de categoria nem sobre as perguntas.

## 1. Cesta de marca (P1): universo de busca com o nome de cada linha do painel

Regra 5.1 das regras unificadas, aplicada a cada submarca e a cada marca-mãe: união das listas de busca ampla de oito sementes por linha, filtro de palavra inteira, classificação pelo dicionário (registro interno do estudo) em intenção de sementes, agro explícito, neutro e outro ramo. Leitura principal por linha: soma dos volumes com intenção de sementes ou agro explícito; para a marca-mãe (nome do grupo), só intenção de sementes. Termos que contêm um número ou nome de cultivar da cesta (seção 3) saem de P1 e vão para V1. Soma por grupo pela regra de soma, cada termo contado uma vez.

Sementes: nome; nome + sementes; nome + soja; nome + milho; nome + cultivar; nome + ficha técnica; nome + preco; nome + brasil.

| Linha | Nome usado nas sementes | Semente curta | Cuidado |
|---|---|---|---|
| GDM (marca-mãe) | gdm seeds; gdm genetica | gdm, só com intenção de sementes | sigla ambígua |
| Brasmax | brasmax | não precisa | brasmax.com.br é loja de terceiros |
| Neogen | neogen sementes | neogen, só com contexto agro | diagnóstico veterinário (Neogen Corporation) |
| Biotrigo | biotrigo | não precisa | nutrição animal do mesmo grupo |
| DonMario | donmario; don mario | não precisa | |
| Supra | supra sementes | supra, só com contexto agro | palavra comum; termos "kws" com milho ou sorgo como sensibilidade |
| Corteva (marca-mãe) | corteva | não precisa (só intenção de sementes conta) | defensivos dominam o nome |
| Pioneer | pioneer sementes | pioneer, só com contexto agro | eletrônicos e áudio (22 mil buscas soltas) |
| Brevant | brevant | não precisa | |
| Cordius | cordius | não precisa | |
| Bayer (marca-mãe) | bayer sementes; sementes bayer | bayer, só com intenção de sementes | defensivos, farmácia, esporte |
| Dekalb | dekalb | dkb, só com contexto agro | |
| Agroeste | agroeste | não precisa | |
| Monsoy | monsoy | não precisa | |
| Agroceres | sementes agroceres | agroceres, só com milho, semente, híbrido | Grupo Agroceres (genética animal) |
| Deltapine | deltapine | não precisa | |
| Syngenta Seeds (marca-mãe) | syngenta seeds; syngenta sementes | syngenta, só com intenção de sementes | defensivos dominam o nome |
| NK | nk sementes | nk, só com contexto agro | sigla ambígua |
| Nidera | nidera | não precisa | |
| Golden Harvest | golden harvest sementes | golden harvest, só com contexto agro | filme e empresa dos Estados Unidos |
| BASF (marca-mãe) | basf sementes; sementes basf | basf, só com intenção de sementes | química e defensivos |
| Credenz | credenz | não precisa | |
| Soytech | soytech | não precisa | |
| FiberMax | fibermax | não precisa | |
| Lidero | lidero arroz | lidero, só com arroz ou semente | escola de empreendedorismo |
| TMG | tmg sementes; tropical melhoramento e genetica | tmg, só com contexto agro | sigla ambígua |
| Longping (marca-mãe) | longping | lpht | |
| Morgan | morgan sementes | morgan, só com contexto agro | iluminação, pessoas |
| Forseed | forseed | não precisa | |
| Limagrain (marca-mãe) | limagrain | não precisa | |
| LG Sementes | lg sementes | lg, só com semente, milho, soja ou híbrido | eletrônicos |
| Geneze | geneze sementes | geneze; gnz, só com contexto agro | |

## 2. Cesta de categoria (P4), 100 consultas

Tipo x cultura x tecnologia x região, mais manejo, decisão e regras. Unidade: a consulta. SERP ao vivo no Google, Brasil, três passes; taxa de consultas com página de alvo do grupo no top 10 (uma vez por grupo, mesmo com duas submarcas); AI Overview registrado. Sensibilidades: ponderada por volume, por família e por submarca. Arquivo de máquina: (registro interno do estudo). A família "cultivar e tecnologia" usa nomes de tecnologia licenciada (intacta, enlist, vt pro, viptera, powercore, leptra, bollgard) porque é assim que o produtor busca a categoria; como parte dessas tecnologias pertence a um dos grupos medidos, o painel sem essa família é sensibilidade obrigatória.

**Genéricas por cultura (12), cultivar e tecnologia de soja (14), cultivar e tecnologia de milho (14), trigo, algodão, sorgo e outras (10), região (12), manejo e tratamento (10), decisão e compra (14), informação e regras (14).** Lista completa no arquivo de máquina.

## 3. Cesta de cultivares (V1 e V2)

Regra de inclusão: cultivar ou híbrido com página própria em domínio ou subpasta de sementes do grupo (site da submarca, subpasta da marca no site do grupo, páginas de produto do site do grupo identificadas pelo nome da marca no endereço). Nome pelo slug do endereço; região, época e ambiente removidos (as páginas da Bayer repetem o mesmo híbrido por região); tecnologia separada do código. Campos: código como a marca escreve (dkb 177, m 5710, ns 5252, p3707, fera), número ou nome (177, 5710, fera), tecnologia. Cultivares listadas em página de catálogo sem página própria (DonMario, série Syn) entram na cesta com a marcação "sem página própria": contam em V1 e ficam fora de V2, e o painel com elas em V2 é sensibilidade. Cesta com menos de 5 cultivares: N/A para a submarca.

Levantamento: (registro interno do estudo), 603 cultivares em 25 submarcas (fontes: sitemaps oficiais, páginas de catálogo por abertura direta, navegador para Supra milho, DonMario, Biotrigo, Morgan, LG soja e série Syn). Pendente: Soytech (nenhuma página no sitemap; conferir em navegador antes da coleta de busca). Cultura inferida pela tecnologia quando o endereço não a traz (100 casos) e "não identificada" em 27, a resolver na leitura da página no crawl.

Medida principal, decidida por teste pré-registrado em 30/09/2026 (regra escrita no registro do estudo antes da consulta; bruto em (registro interno do estudo)): quatro marcas (TMG, Dekalb, Pioneer, Brasmax), cinco cultivares cada, cinco variantes.

| Variante | Cultivares com volume (de 20) | Marcas com sinal (de 4) | Volume mensal somado |
|---|---:|---:|---:|
| A: marca número ficha técnica | 0 | 0 | 0 |
| B: cultura marca número ficha técnica | 0 | 0 | 0 |
| C: marca número preco | 0 | 0 | 0 |
| D: cultura marca número | 7 | 3 | 180 |
| E: marca código (nome exato) | 10 | 3 | 430 |

Decisão pela regra pré-registrada: medida principal de V1 é a variante D, "cultura marca número" ("milho dekalb 177", "soja tmg 2360"). E é sensibilidade obrigatória, nunca principal (risco de homônimo). "Ficha técnica" e "preço" não têm sinal nas cinco primeiras cultivares de nenhuma das quatro marcas; a prévia viu volume nesses qualificadores só em cultivares de vitrine (tmg 7362), e a cesta completa vai medir isso como sensibilidade ("cultura marca número ficha técnica"). Assimetria registrada: marcas com nome de palavra (Brasmax) têm volume na forma sem cultura e não na forma D.

Critério pré-registrado para V1 na nota (escrito antes de medir a cesta inteira): V1 entra na nota se ao menos seis dos oito grupos tiverem volume acima de zero em pelo menos uma cultivar e nenhum grupo concentrar mais de 60% do volume total da variante D. Caso contrário, V1 é diagnóstico e "V1 na nota" é sensibilidade.

## 4. Cesta de perguntas do produtor (V2 descritiva)

Sementes para perguntas com volume, limite de 20 por semente: semente de soja; semente de milho; cultivar de soja; híbrido de milho; semente de trigo; tratamento de sementes; refúgio; grupo de maturação; população de plantas; semente certificada.

## 5. As 60 perguntas para as superfícies de IA

Arquivo de máquina: (registro interno do estudo). Blocos: decisão e categoria (12), soja (12), milho (10), trigo, algodão e outras (10), confiança, inovação e digital (16). Três passes por superfície; as mesmas perguntas vão à SERP do Google para o AI Overview. Leitura por grupo (qualquer submarca, cultivar distintiva ou nome do grupo) e por submarca; "menção só ao nome do grupo" em coluna à parte.

## 6. Veículos para imprensa (P6), 15

Dez generalistas e de agro mantidos dos volumes anteriores: Canal Rural, Agrolink, Notícias Agrícolas, Globo Rural, Valor Econômico (agronegócios), Estadão (agro), Folha (mercado), Portal do Agronegócio, Revista Cultivar, Safras & Mercado. Cinco de sementes e genética: Seed News (seednews.com.br), Abrasem (abrasem.com.br, notícias), AgFeed (agfeed.com.br), The AgriBiz (theagribiz.com), Campo & Negócios (campoenegocios.com). Abertos por abertura direta em 30/09/2026 com HTTP 200, exceto Canal Rural (403 ao acesso automatizado; descoberta pelo Google e crawl em navegador) e a seção estadao.com.br/agro (503 no momento; a raiz abre; a descoberta usa o domínio). Reservas com 200: Brasilagro, CompreRural, Forbes Agro, AgroRevenda, Apassul.

Qualificador de descoberta, igual para todas as linhas: `"<nome da submarca ou do grupo>" (semente OR sementes OR cultivar OR cultivares OR híbrido OR soja OR milho OR trigo) site:<veículo> after:<data>`, em dois passes com união das URLs (emenda 1 das cestas, 30/09/2026, 12h15: a versão de 13 termos em um passe foi testada e substituída porque a variação do Google entre rodadas superou a diferença entre qualificadores; registro no registro do estudo). Descoberta por submarca e por nome do grupo; matérias somam por grupo, uma vez cada. Teste obrigatório antes de congelar: rodar o qualificador para a menor submarca em escopo orgânico com perfil próprio (Geneze) e para uma marca em subpasta (Monsoy) em três veículos e conferir que devolve matérias; se não devolver e a busca sem qualificador devolver, o qualificador é ampliado para todas.

## 7. V5, autoatendimento: dez itens do segmento

1. Localizador de revenda, multiplicador, franquia ou representante (onde comprar). 2. Contato direto (telefone, WhatsApp, formulário ou chat com resposta humana prevista). 3. Portal, área logada ou aplicativo do produtor. 4. Busca interna funcional. 5. Navegação por cultura e por região. 6. Catálogo de cultivares com ficha técnica na página. 7. Posicionamento por região ou ferramenta de recomendação de cultivar (comparador, mapa, aplicativo). 8. Resultados de ensaios, campos demonstrativos ou relatos de produtividade. 9. Sala de imprensa ou notícias. 10. Redes sociais oficiais ligadas no rodapé ou no cabeçalho. Diagnóstico fora da nota: disponibilidade técnica (status HTTP, bloqueio a acesso automatizado, tempo de resposta). A auditoria percorre todos os domínios e subpastas de sementes do grupo; item presente em qualquer alvo conta presente (regra de soma); regras R-V5 do Estudo 2 copiadas sem as contagens de lá; item sem verificação estática vai para navegador; N/A só com bloqueio confirmado também no navegador; rótulos sim, não, nao_verificado com normalização antes do cálculo. V5 por submarca como sensibilidade.

## 8. V6, três páginas comparáveis

Página inicial do alvo de maior escopo orgânico do grupo; página de cultivar de maior tráfego orgânico; página de conteúdo de maior tráfego orgânico, escolhidas entre todos os alvos de sementes do grupo, excluídas por regra páginas de teste, galerias, login e PDFs. Três repetições, celular e computador; média das três páginas; página inicial isolada só como diagnóstico. Sites que bloqueiam (Syngenta) em navegador; dados de campo por origem são diagnóstico para os grupos em subpasta.

## 9. Redes sociais e janela

Instagram, Facebook e YouTube na nota, pelo perfil da maior marca própria do grupo em cada rede; todos os perfis de submarca coletados com os mesmos parâmetros para o painel por submarca; perfis genéricos dos grupos (Agro Bayer Brasil, BASF Agro, Syngenta Brasil, Corteva BR, GDM Brasil, Longping) coletados como descrição e como sensibilidade "perfil do grupo para quem não tem marca própria". TikTok complementar (nenhuma submarca tem conta ligada no site; N/A para todas); LinkedIn descritivo. Janela de fluxos: doze meses até a véspera da coleta. Fotos datadas. Sem segundo snapshot (decisão da coordenação do estudo de 21/09/2026).
