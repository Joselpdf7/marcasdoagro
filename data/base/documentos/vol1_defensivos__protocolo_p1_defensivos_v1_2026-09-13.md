---
titulo: "Protocolo P1, presença digital de defensivos agrícolas no Brasil, v1"
origem: "protocolo/PROTOCOLO_P1_DEFENSIVOS_v1_2026-09-13.md"
data: "2026-09-13"
versao: "v1"
sha256_original: "b5a925af2f54e98ab531d4f4c667c99a960203e6641e61dcc1c04726f0d722be"
tipo: "protocolo"
---
# Protocolo P1, presença digital de defensivos agrícolas no Brasil, v1

Data de congelamento: 13/09/2026. Estado: congelado antes de qualquer cálculo novo. Alterações só por emenda versionada (v1.1, v2) com data, motivo e registro do que já havia sido observado no momento da emenda. O índice interno v4 e as versões anteriores ficam como histórico e não são recalculados sob estas regras.

## 1. Pergunta

Como as fabricantes de defensivos agrícolas ocupam o ambiente digital brasileiro, medido por evidência pública e verificável, nos 12 meses de 13/09/2025 a 12/09/2026?

O estudo mede presença digital observável. Não mede qualidade agronômica, participação de mercado, faturamento, preferência do produtor nem causalidade comercial. Toda frase pública precisa caber nessa fronteira.

## 2. Universo de marcas

Entra no painel núcleo a marca que cumprir os quatro critérios, documentados com fonte pública e data:

1. Associada ao Sindiveg ou à CropLife Brasil, ou presença equivalente em fonte setorial primária.
2. Portfólio de proteção de cultivos com registro no Brasil (Agrofit, MAPA), incluindo biológicos quando comercializados pela marca.
3. Presença nacional comprovada por operação ou distribuição em mais de uma macrorregião.
4. Presença digital agro Brasil verificável: domínio ou subpasta agro e ao menos um perfil oficial confirmado por duas evidências.

Piloto já medido: Syngenta, Bayer Crop Science, BASF Agro, Corteva, IHARA. Candidatas: FMC Agrícola, UPL, ADAMA. Lista de observação, avaliada pelos mesmos critérios e não incluída por decreto: Ourofino Agro, Nortox, Nufarm, Albaugh, Sumitomo Chemical. Nenhuma marca entra ou sai por resultado. Nenhuma frase de "maiores por faturamento".

## 3. Escopo de cada marca

- Domínio ou subpasta agro Brasil, com regra escrita de inclusão de subdomínios, redirecionamentos e propriedades oficiais (Syngenta: syngenta.com.br, portal.syngenta.com.br, maisagro.syngenta.com.br, sem dupla contagem de URL). Bayer: agro.bayer.com.br, nunca bayer.com.br corporativo ou farma. BASF: agriculture.basf.com/br/pt/. Corteva: corteva.com/br/ e corteva.com.br. IHARA: ihara.com.br.
- Perfis oficiais: só entram com registro no diretório oficial com URL canônica, identificador, duas evidências de vínculo, escopo agro Brasil e data. Perfil sem registro é N/A.
- Métrica que só existe em nível de domínio raiz (pontuação de autoridade, domínios de referência, audiência estimada) recebe flag de escopo e não entra no score quando o escopo não é equivalente entre as marcas.

## 4. Janelas

| Lente | Janela | Uso |
|---|---|---|
| Presença atual | 13/09/2025 a 12/09/2026 | Score principal em todas as fontes com data |
| Estoque | até 24 meses | Contexto, cauda longa; nunca no score |
| Momentum | 90 dias finais contra os 90 anteriores | Indicador publicado à parte |
| Snapshot | data única registrada | Busca, autoridade, seguidores, IA, experiência |

Fonte sem data confiável não entra em recorte temporal e é relatada como snapshot.

## 5. Pilares técnicos do painel de mensuração

Os pilares seguem as etapas da matriz de métricas (Relevância, Consideração, Fidelidade, Advocacia) mais duas dimensões próprias do digital atual (Experiência e IA). Cada submétrica tem definição, fonte, unidade, denominador e regra de ausência. Submétricas com correlação de postos acima de 0,8 dentro do mesmo pilar são fundidas ou uma delas sai, antes do cálculo.

### Pilar A. Relevância e Descoberta

| Submétrica | Definição | Fonte | Normalização |
|---|---|---|---|
| A1 Busca pela marca | Volume mensal da cesta simétrica de marca (termo puro e termo com qualificador agro, mesma regra para todas) | base de dados de busca BR | Participação no total das marcas do painel |
| A2 Autoridade e referência | pontuação de autoridade e domínios de referência únicos, no nível de escopo possível | base de dados de busca (referências) | AS na escala nativa 0 a 100; domínios por participação; flag de escopo obrigatória |
| A3 Escala orgânica | Uma métrica apenas: palavras-chave orgânicas no escopo agro, base BR | base de dados de busca | Participação no total do painel; tráfego estimado e top 10 saem por redundância |
| A4 Presença em busca de categoria | Presenças no top 10 orgânico em cesta pré-registrada de 80 a 120 consultas de categoria (praga, doença, cultura, tipo de produto) | base de dados de busca (resultados orgânicos) por consulta | Participação nas presenças do painel; unidade é a consulta |
| A5 Audiência oficial | Seguidores nas redes oficiais confirmadas, normalizados por rede antes de agregar | Snapshot por coleta automatizada de perfil | Participação por rede, média das redes com cobertura |
| A6 Imprensa earned | Matérias editoriais (não release republicado, não paid) em cesta fechada de veículos, 12 meses | SERP e crawl, classificação com revisão | Participação; só entra após QA de classificação |

### Pilar B. Consideração e interesse

| Submétrica | Definição | Fonte |
|---|---|---|
| B1 Busca marca com categoria e produto | Volume da cesta "marca + categoria" e dos nomes comerciais validados | base de dados de busca BR |
| B2 Cobertura de perguntas do produtor | Parcela de perguntas pré-registradas (phrase questions e People Also Ask da cesta de categoria) em que a marca aparece no top 10 | base de dados de busca e SERP |
| B3 Interesse relativo | Google Trends da cesta de marca, média 12 meses, como sensibilidade de A1, não como submétrica adicional | coleta automatizada Trends |
| B4 Consumo de vídeo | Mediana de visualizações por vídeo em 12 meses no YouTube e TikTok oficiais | coleta automatizada já validados |

### Pilar C. Experiência digital

Cinco dimensões, peso igual entre elas dentro do pilar. Desempenho técnico é uma dimensão, não o pilar.

| Dimensão | Definição | Fonte |
|---|---|---|
| C1 Desempenho técnico | Core Web Vitals de campo (LCP, INP, CLS, parcela de boas experiências) por origem; laboratório em três páginas comparáveis (inicial, produto, conteúdo), três ensaios por dispositivo | dados de campo de experiência de página API; auditoria de desempenho de página |
| C2 Acessibilidade e boas práticas | Notas auditoria de desempenho de página de acessibilidade, boas práticas e SEO técnico nas mesmas páginas | auditoria de desempenho de página |
| C3 Profundidade e utilidade do conteúdo | Páginas de produto com bula e culturas; conteúdo de manejo; vídeos instrucionais; classificação por tipo de página com regra por site | Crawls e YouTube |
| C4 Autoatendimento e jornada | Checklist auditado: onde comprar ou localizador de revenda, contato direto, portal ou app do produtor, área logada, busca interna, navegação por cultura e praga | Auditoria manual com URL e print |
| C5 Responsividade nos canais | Parcela de comentários com resposta da marca e mediana de tempo até a resposta, em amostra estratificada de 30 posts por marca com respostas aninhadas | Nova captura de comentários |

### Pilar D. Engajamento e relacionamento

| Submétrica | Definição |
|---|---|
| D1 Cadência | Semanas ativas de 52 e peças por semana, por rede confirmada |
| D2 Interação por peça | Mediana de interações por peça (curtidas mais comentários), por rede |
| D3 Taxa de engajamento | Mediana de interações por peça dividida por seguidores da rede |
| D4 Comentários por peça | Mediana de comentários por peça |

Métricas de fidelidade que exigem dado proprietário (recompra, retenção, NPS, LTV) e as que dependem de analytics de primeira parte (tráfego recorrente, duração no site, rejeição, páginas por visita) são declaradas inviáveis e não recebem proxy.

### Pilar E. Autoridade em IA

| Submétrica | Definição |
|---|---|
| E1 Menção | Parcela de células pergunta por superfície em que a marca é mencionada; passes são réplicas |
| E2 Primeira menção | Parcela de células em que a marca é a primeira citada |
| E3 Fonte própria pertinente | Parcela de respostas com ao menos uma fonte própria agro com pertinência direta, após codificação e adjudicação; uma unidade por marca e resposta; sensibilidade com parcial como válida |

Google AI Overview fica como painel separado. Peso igual entre superfícies.

### Pilar F. Advocacia e conversa

Não pontuado nesta fase. Compartilhamentos (só TikTok expõe), sentimento e menções positivas dependem de codebook, autoria e QA que pertencem à fase final do programa (love brands). Reclame Aqui e Glassdoor entram como painéis descritivos com pertinência declarada baixa para fabricante B2B. Google Reviews de revenda não é transferido ao fabricante.

## 6. Pesos e agregação

- Base: pesos iguais entre os cinco pilares pontuados (A a E), 20% cada. Justificativa: não há base empírica pública para pesos desiguais entre pilares de presença digital, e os pesos da matriz de métricas foram calibrados para diagnóstico individual, não para comparação setorial.
- Dentro do pilar, submétricas com peso igual, salvo fusão por redundância.
- Normalização principal: participação no total do painel para métricas de volume; escala nativa para métricas 0 a 100; percentil dentro do setor como sensibilidade. Não normalizar pelo máximo de uma só marca.
- Transformação logarítmica só como sensibilidade declarada, nunca como principal.
- Sensibilidades obrigatórias publicadas: pesos iguais; cada pilar retirado uma vez; percentil em vez de participação; log1p; 12 contra 24 meses onde houver; 5 contra 8 marcas; parcial de IA como válida e inválida; C1 com campo e com laboratório; 10 mil combinações aleatórias de pesos entre 10% e 40% por pilar.

## 7. Regras de ausência e cobertura

- Ausência técnica é N/A, nunca zero. Não há imputação.
- Pilar só recebe nota com cobertura mínima de 60% das submétricas e todas as redes ou fontes centrais confirmadas.
- Marca com algum pilar sem nota não recebe score total; recebe painel com cobertura declarada.
- Cobertura obtida contra esperada é publicada por marca, fonte e janela.

## 8. Unidades de análise e inferência

- Social: unidade é a peça; medianas e intervalos por bootstrap de peças; nunca somar plataformas cruas.
- Busca e SERP: unidade é a consulta; presenças por consulta; intervalos por bootstrap de consultas.
- IA: unidade é pergunta por superfície; passes são réplicas; intervalos por bootstrap de perguntas.
- Imprensa: unidade é a matéria única após desduplicação de release.
- Nenhum teste de hipótese entre marcas com observações dependentes. Diferenças são descritas com intervalo e com a sensibilidade da seção 6.

## 9. QA obrigatório antes de calcular

1. Diretório oficial com duas evidências para cada perfil e domínio.
2. Cestas de marca, categoria, produtos e perguntas congeladas e versionadas antes de consultar volumes.
3. Amostra estratificada com revisão humana das classes críticas: produtos, matérias earned, fontes de IA (codificação integral, dupla codificação em 10% por estrato e adjudicação por regras escritas).
4. Integridade: SHA-256 de todo bruto, manifesto por coleta com identificador, entrada e horário, download no mesmo dia.
5. Reexecução cega dos cálculos por um segundo executor.

## 10. Critérios para afirmar liderança ou diferença

Uma frase de liderança só entra no texto se: sobreviver a todas as sensibilidades da seção 6; a distância exceder a faixa de variação das sensibilidades; a cobertura da marca líder e das seguintes for equivalente; e a contraprova (pilares em que a marca não lidera) aparecer no mesmo trecho. Frases rejeitadas são listadas no anexo.

## 11. Camada editorial

O painel técnico é um documento; a leitura editorial é outro. A leitura usa quatro pilares: Proeminência (pilares A e E), Valorização (B e C), Fidelidade (D) e Advocacia (F, quando houver). O inventário de perguntas e métricas que gerou o painel aparece no anexo metodológico; não é uma terceira leitura pública.

## 12. Arquitetura do whitepaper

1. Sumário executivo com achados que passaram na seção 10.
2. Pergunta, universo e critérios de inclusão.
3. Método: fontes, janelas, escopo, pilares, normalização, ausências.
4. Painel por pilar, com cobertura, intervalos e sensibilidades.
5. Leitura editorial nos quatro pilares.
6. Estudos de caso por marca, com contraprovas.
7. Limitações e frases rejeitadas.
8. Anexos: dicionário de dados, cestas, diretório oficial, trilha de fontes, matriz de métricas e classificação de viabilidade das métricas.

## 13. Fases

| Fase | Conteúdo | Estado |
|---|---|---|
| 0 | Auditoria e mapa de métricas | concluída em 13/09/2026 |
| 1 | Este protocolo | congelado em 13/09/2026 |
| 2 | Coleta por blocos A a E do plano | a iniciar |
| 3 | Corpus, QA e RAG | após 2 |
| 4 | Cálculo, sensibilidades e painel | após 3 |
| 5 | Relatório técnico, leitura interna, whitepaper | após 4 |
| 6 | Love brands do agro no digital (antiga P2), metodologia própria auditável | última fase, por decisão da coordenação do estudo |
