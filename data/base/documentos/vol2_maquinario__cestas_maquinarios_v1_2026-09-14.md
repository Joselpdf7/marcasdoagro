---
titulo: "Cestas congeladas do Estudo 2 (marca, categoria, perguntas, modelos, veículos)"
origem: "config/CESTAS_MAQUINARIOS_v1_2026-09-14.md"
data: "2026-09-14"
versao: "v1"
sha256_original: "c5d33f7027bc021fa5e55999d372dbe62ab4069e5c3a8d0a8936b69067b246a6"
tipo: "protocolo"
---
# Cestas v1, Estudo 2, maquinário agrícola

Data: 14/09/2026, CONGELADO em 14/09/2026 pela coordenação do estudo, aprovado como está, antes de qualquer consulta de volume. Alteração posterior só por emenda versionada. Base de dados de busca: br. Consultas em minúsculas; a grafia consultada fica no bruto. Nenhuma consulta de categoria contém nome de marca.

## Cesta de marca (P1): universo de busca com o nome da marca, oito sementes simétricas

Regra herdada da emenda v1.2 de defensivos: para cada marca, união das listas `phrase_fullsearch` de oito sementes, filtro de palavra inteira, classificação pelo dicionário `DICIONARIO_CLASSIFICACAO_BUSCA_MARCA_MAQUINARIOS_v1_2026-09-14.json` em agro explícito, neutro e não agro. Leitura principal: soma dos volumes agro explícito. Sensibilidade: agro explícito mais neutro.

Sementes por marca (o "nome" é o alias principal; para Massey Ferguson e New Holland o nome composto; para John Deere também "deere" como semente extra de controle): nome; nome + trator; nome + colheitadeira; nome + pulverizador; nome + plantadeira; nome + concessionária; nome + preço; nome + peças.

| Marca | Nome usado nas sementes | Cuidado |
|---|---|---|
| John Deere | john deere | filtro de construção, florestal e Gator no dicionário |
| Case IH | case ih | "case" sozinho não entra (ambíguo); Case Construction no dicionário não agro |
| New Holland | new holland | New Holland Construction no dicionário não agro |
| Massey Ferguson | massey ferguson | "massey" sozinho entra só como alias de menção em IA, não como semente |
| Valtra | valtra | |
| Fendt | fendt | |
| Jacto | jacto | |
| Stara | stara | palavra comum em outras línguas; filtro de palavra inteira e contexto agro obrigatório |

## Cesta de categoria (P4), 100 consultas

Produto cartesiano de tipo de máquina x cultura ou operação, mais consultas genéricas e de intenção (preço, financiamento, usado, ficha técnica). Unidade de análise é a consulta; SERP ao vivo no Google, três passes, taxa de consultas com página da marca no top 10; AI Overview como painel separado.

Tipos: trator, colheitadeira, pulverizador, plantadeira, semeadora, colhedora (cana e café), plataforma de corte, distribuidor, implementos.
Culturas: soja, milho, cana de açúcar, café, algodão, trigo, arroz, pastagem.
Operações e intenções: plantio, colheita, pulverização, agricultura de precisão, piloto automático, telemetria, manutenção, peças, concessionária, financiamento, consórcio, preço, usado, ficha técnica.

Lista:
trator agrícola; trator para soja; trator para milho; trator para cana; trator para café; trator para pastagem; trator para pequena propriedade; trator 75 cv; trator 100 cv; trator 200 cv; trator 4x4; trator compacto; melhor trator agrícola; melhor trator para pequeno produtor; trator agrícola preço; trator agrícola usado; trator seminovo; trator novo preço; tabela de preço de trator; ficha técnica trator; consumo de diesel trator; cabine de trator; colheitadeira de soja; colheitadeira de milho; colheitadeira de trigo; colheitadeira de arroz; colheitadeira axial; colheitadeira preço; colheitadeira usada; melhor colheitadeira; plataforma de corte soja; plataforma de milho; perdas na colheita; colhedora de cana; colhedora de café; colhedora de algodão; pulverizador autopropelido; pulverizador de arrasto; pulverizador agrícola preço; melhor pulverizador autopropelido; tecnologia de aplicação; barra de pulverização; pulverizador para soja; pulverizador para cana; plantadeira de soja; plantadeira de milho; plantadeira de precisão; plantadeira preço; semeadora de plantio direto; semeadora de trigo; semeadora de grãos finos; plantio direto máquinas; distribuidor de fertilizante; distribuidor de calcário; grade aradora; subsolador; implementos agrícolas; implementos para trator; máquinas agrícolas; máquinas agrícolas preço; máquinas agrícolas usadas; máquinas agrícolas novas; fabricantes de máquinas agrícolas; marcas de tratores; marcas de colheitadeiras; agricultura de precisão; piloto automático agrícola; telemetria agrícola; monitor de plantio; taxa variável; mapa de produtividade; máquina agrícola conectada; concessionária de tratores; concessionária de máquinas agrícolas; revenda de tratores; peças para trator; peças para colheitadeira; filtro de trator; pneu de trator; manutenção de trator; revisão de colheitadeira; manual do operador trator; financiamento de trator; financiamento de máquinas agrícolas; plano safra máquinas; moderfrota; consórcio de trator; consórcio de máquinas agrícolas; leilão de máquinas agrícolas; avaliação de trator usado; trator para arroz; trator para algodão; máquina para plantio de cana; máquina para colheita de café; forrageira; ensiladeira; roçadeira agrícola; pulverizador para café; plantadeira de algodão; agrishow.

## Cesta de perguntas do produtor (V2)

Sementes para `phrase_questions`, limite de 20 por semente, ordenadas por volume: trator agrícola; colheitadeira; pulverizador; plantadeira; agricultura de precisão; financiamento de trator; peças para trator; consórcio de máquinas agrícolas; trator usado; piloto automático agrícola.

## Cesta de produtos (V1): modelos com página própria

Regra de inclusão: modelo ou família de máquina com página própria no site agro Brasil da marca (inclui subdomínios próprios validados), um nome por modelo, sem peças, sem serviços, sem produtos de construção ou florestal. Lista fechada e versionada antes de consultar volume, extraída do catálogo por crawl e das páginas que ranqueiam na base de dados de busca. Medida principal: volume de "nome do modelo + ficha técnica"; sensibilidade: "nome do modelo + preço". Nome exato só quando o nome for distintivo (série alfanumérica como "8r", "t7", "mf 7700", "bh 200", "uniport", "imperador"); nomes genéricos ficam fora da medida exata. Se a cesta de uma marca ficar abaixo de 10 nomes, o indicador dessa marca é N/A.

## Veículos para imprensa earned (P6), 15

Mantidos de defensivos por serem generalistas do agro: Canal Rural, Agrolink, Notícias Agrícolas, Globo Rural, Valor Econômico (agro), Estadão (agro), Folha (agro), Portal do Agronegócio, Revista Cultivar, Agência Safras. Entram no lugar de AgroRevenda, Agência Brasil, Money Times, Exame e Forbes, por cobrirem máquinas: Cultivar Máquinas (revistacultivar.com.br, seção máquinas, contada como veículo separado só se tiver URL própria; senão, fica em Revista Cultivar e o quinto veículo novo é Agrolink Máquinas), Mecanização Agrícola, Agriworld, Compre Rural, Portal Agrishow (notícias). Janela: 14/09/2025 a 13/09/2026. Classificação v2.1 de defensivos, com a regra de tag. Qualificador simétrico para todas as marcas: "marca" máquinas OU trator OU colheitadeira.

## Redes sociais e janela

Instagram, Facebook, YouTube na nota; TikTok complementar mapeado para todas (N/A para quem não tem conta); LinkedIn descritivo. Janela de 12 meses: 14/09/2025 a 13/09/2026. Snapshot de seguidores no dia da coleta e novo snapshot 14 dias depois.

## Emenda 1 (14/09/2026, antes da coleta de imprensa): veículos de máquinas verificados por abertura

Mecanização Agrícola e Agriworld não responderam por DNS nem por http em três tentativas; Cultivar Máquinas não tem URL própria e fica dentro de Revista Cultivar; a seção de notícias do site institucional da Agrishow retorna 404, o canal de conteúdo é digital.agrishow.com.br. Cesta final de 15, todos abertos com HTTP 200 em 14/09/2026: Canal Rural, Agrolink, Notícias Agrícolas, Globo Rural, Valor Econômico, Estadão, Folha, Portal do Agronegócio, Revista Cultivar, Agência Safras, Compre Rural (comprerural.com), Agrishow Digital (digital.agrishow.com.br), Portal Máquinas Agrícolas (portalmaquinasagricolas.com.br), A Granja (agranja.com) e AgroRevenda (agrorevenda.com.br, de volta como generalista de revenda e concessionária). Qualificador simétrico para todas as marcas: nome entre aspas mais (máquinas OR trator OR colheitadeira).

## Emenda 2 (14/09/2026, 21h00 BRT, após a consulta de volume da cesta de modelos): medida principal de V1

O que já se sabia ao emendar: a cesta congelada de modelos (registro interno do estudo; 302 na primeira extração, 324 após o crawl por navegador de New Holland, Fendt e Case IH, 314 medidos depois de excluir 9 nomes genéricos e 1 duplicado; a Fendt tem 14 candidatos e 12 medidos) foi consultada nas três variantes pré-registradas. A variante principal "modelo + ficha técnica" devolveu volume zero para seis das oito marcas e 20 a 40 buscas mensais nas outras duas (1 a 3 modelos com volume por marca): a medida não tem sinal em maquinário, ao contrário de "nome + bula" em defensivos. A variante "marca + modelo" devolveu volume para 7 a 44 modelos por marca (230 a 3.500 buscas mensais somadas), e "modelo + preço" ficou entre 20 e 1.370.
Decisão: V1 passa a ser medida por "marca + modelo" (soma dos volumes dos modelos da cesta, base BR), com "modelo + preço" e "modelo + ficha técnica" como sensibilidades publicadas. A regra é idêntica para as oito marcas e foi tomada pela ausência de sinal na medida original, não pela posição de nenhuma marca. Cesta com menos de 10 modelos: N/A (nenhuma marca ficou abaixo; Fendt tem 11).
