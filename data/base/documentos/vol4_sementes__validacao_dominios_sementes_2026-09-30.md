---
titulo: "Validação de domínios dos grupos e submarcas de sementes"
origem: "config/VALIDACAO_DOMINIOS_SEMENTES_2026-09-30.md"
data: "2026-09-30"
versao: "v1"
sha256_original: "e342b7acc5f303daa6b45898bcb4c55101ba0f88a1b8778793b9592fc5f153b3"
tipo: "protocolo"
---
# Validação de domínios, subpastas e alvos de escopo, Volume 4 (sementes)

Data: 30/09/2026, depois da aprovação do painel pela coordenação do estudo (09h06). Fontes: (rotina reprodutível do estudo) (87 variantes abertas por abertura direta com user agent de navegador; saída em (registro interno do estudo)) e (rotina reprodutível do estudo) (41 alvos na base de busca, país BR; bruto e manifesto em (registro interno do estudo), tabela em (registro interno do estudo)).

## 1. Regra de alvo, escrita antes de olhar os números por grupo

1. O domínio corporativo inteiro de um grupo nunca entra em P3. Entram: domínio próprio de submarca, subpasta de submarca dentro do site do grupo e a seção de sementes do site do grupo (marca-mãe).
2. Subpastas do mesmo domínio são disjuntas e somam sem desconto. Entre domínios diferentes do mesmo grupo, a soma desconta a sobreposição estimada na interseção das listas de palavras-chave (regra 3.2, igual para todos).
3. Autoridade (P2) só existe para domínio raiz; subpasta e subdomínio ficam sem autoridade e o grupo recebe diagnóstico. Dados de campo (V6c) por origem são diagnóstico onde a origem é o site do grupo.
4. Subdomínio consultado como domínio na base de busca devolve o número do domínio raiz (confirmado hoje em portal.syngenta.com.br: 26.852, igual a syngenta.com.br). Subdomínios só entram quando isoláveis por subpasta ou ficam fora, com registro.
5. Páginas de cultivar hospedadas fora da subpasta da marca (caso da Bayer, em /d/) entram na cesta de cultivares pelo nome da marca no slug, nunca em P3.

## 2. Alvos de P3 por grupo (palavras-chave orgânicas em 30/09/2026)

| Grupo | Linha | Alvo | Tipo | Palavras-chave | Entra em P3 |
|---|---|---|---|---|---|
| GDM | GDM | gdmseeds.com/pt/ | subpasta em português de domínio global | 163 | sim (marca-mãe) |
| GDM | Brasmax | brasmaxgenetica.com.br | domínio próprio | 1.319 | sim |
| GDM | Neogen | neogensementes.com.br | domínio próprio (bloqueia abertura direta) | 554 | sim |
| GDM | Biotrigo | biotrigo.com.br | domínio próprio; inclui nutrição animal | 1.082 | sim, com P3 reportado sem a divisão de nutrição animal se ela for isolável por subpasta |
| GDM | DonMario | donmario.com.br | domínio próprio (bloqueia abertura direta) | 345 | sim |
| GDM | Supra | suprasementes.com.br | domínio próprio | 104 | sim |
| GDM | diagnóstico | kws.com/br/ | site antigo da KWS, hoje hortaliças | 47 | não (fora do recorte) |
| Corteva | Corteva | corteva.com/br/produtos-e-serviços/sementes/ | seção de sementes | 77 | sim (marca-mãe) |
| Corteva | Pioneer | pioneer.com/br/ | subpasta Brasil de domínio global | 1.022 | sim |
| Corteva | Brevant | brevant.com/br/ | subpasta Brasil de domínio global | 870 | sim |
| Corteva | Cordius | página única em corteva.com/br | página | 8 | sim (dentro da seção de sementes; não soma duas vezes) |
| Corteva | diagnóstico | corteva.com/br/ | site do grupo inteiro | 5.567 | não |
| Bayer | Bayer | agro.bayer.com.br/sementes | seção de sementes | 112 | sim (marca-mãe) |
| Bayer | Dekalb | agro.bayer.com.br/marcas/dekalb/ | subpasta da marca | 52 | sim |
| Bayer | Agroeste | agro.bayer.com.br/marcas/agroeste/ | subpasta da marca | 85 | sim |
| Bayer | Monsoy | agro.bayer.com.br/marcas/monsoy/ | subpasta da marca | 44 | sim |
| Bayer | Agroceres | agro.bayer.com.br/marcas/agroceres/ | subpasta da marca | 87 | sim |
| Bayer | Deltapine | agro.bayer.com.br/marcas/deltapine/ | subpasta da marca | 2 | sim |
| Bayer | diagnóstico | agro.bayer.com.br | site agro do grupo | 18.953 | não |
| Bayer | diagnóstico | agro.bayer.com.br/d/ | páginas de produto, sementes e defensivos misturados | 3.254 | não em P3; cultivares entram na cesta pelo slug |
| Syngenta | Syngenta Seeds | syngenta.com.br/sementes | seção de sementes | 161 | sim (marca-mãe) |
| Syngenta | série Syn | portal.syngenta.com.br/sementes-licenciadas-syngenta-soja/ | página do portal | não isolável (subdomínio devolve o raiz) | não; descritiva |
| Syngenta | NK | sementesnk.com.br | domínio próprio | 377 | sim |
| Syngenta | Nidera | niderasementes.com.br | domínio próprio | 149 | sim |
| Syngenta | Golden Harvest | goldenharvest.com.br | domínio próprio | 157 | sim |
| Syngenta | diagnóstico | syngenta.com.br | domínio corporativo (bloqueia acesso automatizado) | 26.852 | não |
| BASF | BASF | agriculture.basf.com/br/pt/proteção-de-cultivos-e-sementes/Sementes | seção de sementes | 6 | sim (marca-mãe) |
| BASF | Credenz |.../produtos/credenz | subpasta da marca | 139 | sim |
| BASF | Soytech |.../produtos/soytech | subpasta da marca | 16 | sim |
| BASF | FiberMax |.../produtos/fibermax | subpasta da marca | 439 | sim |
| BASF | Lidero |.../produtos/clearfield/lidero | subpasta da marca | 19 | sim |
| BASF | diagnóstico | agriculture.basf.com/br/pt/ | site agro do grupo | 15.155 | não |
| TMG | TMG | tmg.agr.br | domínio próprio | 871 | sim |
| Longping | Longping | lpht.com.br | domínio do grupo (só sementes) | 529 | sim (marca-mãe) |
| Longping | Morgan | morgansementes.com.br | domínio próprio (JavaScript) | 172 | sim |
| Longping | Forseed | forseedsementes.com.br | domínio próprio | 109 | sim |
| Longping | observação | tevosementes.com.br | domínio próprio | 5 | não, até decisão sobre a Tevo |
| Limagrain | LG Sementes | lgsementes.com.br | domínio próprio | 401 | sim |
| Embrapa | referência | embrapa.br/cultivar/ | subpasta do portal | 2.946 | descritiva |

## 3. Redirecionamentos e homônimos (87 variantes)

| Achado | Variantes | Consequência |
|---|---|---|
| Domínios de marca que redirecionam para a subpasta do grupo | dekalb.com.br, agroeste.com.br, monsoy.com.br, sementesagroceres.com.br, deltapine.com.br (Bayer); pioneersementes.com.br, brevant.com.br (Corteva); credenz.com.br, soytech.com.br (BASF) | o alvo é a subpasta final; o domínio antigo não é medido |
| Domínio de marca que cai na home do grupo | fibermax.com.br leva a basf.com/br/pt (institucional) | alvo é a subpasta de produto no site agro |
| gdmseeds.com/br | leva à página da Brasmax dentro do site global | alvo da marca-mãe é gdmseeds.com/pt/ |
| Homônimos ativos, de outras empresas | gdm.com.br (Guia dos Melhores), brasmax.com.br (loja), neogen.com.br (software), kws.com.br (sem título, outra empresa), morgan.com.br (iluminação), lidero.com.br (escola), agroceres.com.br (Grupo Agroceres) | nunca entram como alvo; no dicionário, o nome só conta com contexto agro |
| Domínios que não resolvem | gdmgenetica.com.br, biotrigo.com.br com www, coodetec.com.br, syngentaseeds.com.br, nksementes.com.br, nidera.com.br, tmg.com.br, longping.com.br, forseed.com.br | registrados como inexistentes; cordius.com.br devolve 404 na própria Corteva |
| Sites que bloqueiam acesso automatizado | syngenta.com.br ("Just a moment", desafio Cloudflare), gdmseeds.com, neogensementes.com.br, biotrigo.com.br, donmario.com.br (403 a abertura direta, abrem em leitura de página) | crawl, autoatendimento e desempenho em navegador |
| Sites com conteúdo por JavaScript | morgansementes.com.br, br.advantaseeds.com | catálogo em navegador |

## 4. Divisões fora do recorte a isolar

- Biotrigo: nutrição animal no mesmo domínio; P3 reportado com e sem a subpasta quando ela for identificável.
- KWS Brasil (kws.com/br/pt): só hortaliças; fora do universo.
- BASF Nunhems: hortaliças; fora.
- Advanta: canola e girassol no mesmo site; em observação.

## 5. Consequências para a regra de soma

- Bayer e BASF: nenhuma marca tem domínio próprio. P3 do grupo é a soma das subpastas mais a seção de sementes (Bayer 382; BASF 619, dos quais FiberMax 439). Autoridade e dados de campo por origem são diagnóstico.
- Corteva: Pioneer e Brevant são subpastas de domínios globais; autoridade e campo por origem também diagnóstico. A seção de sementes da Corteva (77) inclui a página da Cordius (8): a soma usa a seção, sem somar a página de novo.
- Syngenta: três domínios próprios pequenos e uma seção de 161 palavras-chave num domínio de 26.852 que bloqueia acesso automatizado; a série Syn fica descritiva porque o portal não é isolável.
- GDM: seis alvos em domínios diferentes; a soma desconta sobreposição entre eles quando as listas de palavras-chave forem coletadas na coleta de busca.
