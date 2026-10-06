---
titulo: "Protocolo do Estudo 2, presença digital de maquinário agrícola no Brasil, v1 (emendas 1 a 9)"
origem: "config/PROTOCOLO_MAQUINARIOS_v1_2026-09-14.md"
data: "2026-09-14"
versao: "v1"
sha256_original: "4fb69c1d2df99a84c62fdcc9a6e953492fe4a647c1c264120fb088410b8508c6"
tipo: "protocolo"
---
# Protocolo do Estudo 2, maquinário agrícola, v1 (só as diferenças em relação a defensivos)

Data: 14/09/2026, CONGELADO em 14/09/2026 pela coordenação do estudo, aprovado como está. Base: (registro interno do estudo) e a emenda v1.1 de arquitetura (Proeminência, Valorização, Fidelidade, Advocacia). Tudo o que não está aqui vale igual a defensivos: normalização por participação, cobertura mínima de 60% por pilar, N/A nunca vira zero, sensibilidades obrigatórias, critérios de frase de liderança, revisão humana das classes críticas.

## 1. Pergunta
Qual a presença digital, no Brasil e para o produtor, das marcas de máquinas agrícolas motorizadas, medida com regra idêntica para todas, em busca, site, redes, imprensa e assistentes de IA, entre 14/09/2025 e 13/09/2026?

## 2. Universo
Critérios públicos: associação à Abimaq (CSMIA) ou ao grupo associado; máquinas motorizadas (tratores, colheitadeiras ou autopropelidos) com catálogo no site Brasil; presença comercial em mais de uma macrorregião; domínio ou subpasta Brasil e ao menos um perfil oficial confirmado por duas evidências. Painel congelado pela coordenação do estudo em 14/09/2026: piloto John Deere, Case IH, New Holland Agriculture, Massey Ferguson, Valtra; candidatas Fendt, Jacto, Stara. CLAAS retirada. Lista de observação não medida: Kubota, LS Tractor, Agrale, Yanmar, Mahindra, Baldan, Kuhn, Semeato, Tatu Marchesan; irrigação (Zimmatic, Valley) fora do recorte. Unidade é a marca que fala com o produtor; marcas do mesmo grupo entram separadas.

## 3. Escopo por marca
Alvos e domínios próprios em `VALIDACAO_DOMINIOS_MAQUINARIOS_2026-09-14.md` e `entidades_marcas_maquinarios_v1.json`. Duas regras novas: (a) John Deere é domínio misto; as subpastas de construção e florestal ficam fora do crawl, da cesta de produtos e da auditoria, e P3 é reportado com e sem elas; (b) New Holland e Jacto têm dois alvos (subpasta global mais domínio próprio), somados por lista de palavras-chave sem dupla contagem. Propriedades de conteúdo mapeadas em `PORTAIS_DE_CONTEUDO_MAQUINARIOS_2026-09-14.md` entram como domínio próprio para V4, V5 e V7. LinkedIn fora da nota e descritivo; TikTok complementar para todas, N/A sem conta.

## 4. Submétricas que mudam
| Código | Defensivos | Maquinário |
|---|---|---|
| P1 | universo de busca de marca com dicionário de defensivos | mesmo método com o dicionário de maquinário (construção, florestal e caminhões como não agro) |
| P4 | cesta de categoria de 96 consultas (tipo x cultura x alvo) | 100 consultas (tipo de máquina x cultura x operação e intenção), `CESTAS_MAQUINARIOS_v1_2026-09-14.md` |
| V1 | "nome do produto + bula" | "nome do modelo + ficha técnica"; sensibilidade "+ preço" |
| V2 | 10 sementes de defensivos | 10 sementes de maquinário |
| V5 | checklist de 10 itens (onde comprar, contato, portal ou app, busca, navegação por cultura e praga, catálogo com bula, imprensa, redes, idioma, disponibilidade técnica) | 10 itens: localizador de concessionária com busca por cidade; contato direto; portal ou app do cliente e área logada; busca interna; navegação por tipo de máquina e cultura; catálogo com ficha técnica em PDF ou página; configurador ou simulador (de máquina, consórcio ou financiamento); peças e manuais (loja ou catálogo de peças); imprensa; redes no rodapé |
| V6 | 3 páginas comparáveis: inicial, produto, conteúdo | inicial, página de modelo (trator de maior tráfego orgânico), conteúdo de maior tráfego orgânico (inclui blog em subdomínio quando for o caso) |
| P6 | 15 veículos generalistas | 10 generalistas mais 5 de máquinas |
| P7, V7 | 60 perguntas de defensivos | 60 perguntas de maquinário, `perguntas_ia_maquinarios_v1.json`, mesmas 4 superfícies, 3 passes; AI Overview e Perplexity como sensibilidade |
| Podcasts, cursos, programas | não havia | descritivos no capítulo de conteúdo, sem nota |

## 5. Pré-registro de sensibilidades específicas
P3 com e sem subpastas de construção e florestal (John Deere); P1 com agro explícito contra agro mais neutro; New Holland e Jacto com um alvo só contra dois alvos; 5 contra 8 marcas; percentil; sem cada pilar; sem IA; sem cada submétrica; pesos aleatórios; pesos de IA por uso.

## 6. Fases e saída
Igual a defensivos. Bloco A (base de dados de busca e SERP ao vivo), B (social, F5, experiência), C (imprensa), IA, produtos; painel v0 e v1; sensibilidades; relatório técnico e leitura interna com branding; whitepaper depois do feedback.

## Emenda 3 (14/09/2026, 22h40 BRT, antes do painel v0): medida de F5

O que já se sabia: o processador v3 de defensivos vincula a resposta da marca ao comentário do público pela menção @usuário. Na amostra de maquinário, Case IH (206 respostas, 206 sem vínculo) e New Holland (367 respostas, 361 sem vínculo) respondem em thread sem citar o usuário; a coleta automatizada devolve as respostas como itens planos e sem o campo de pai. A taxa v3 dessas duas marcas cai a zero por artefato de vínculo, não por comportamento (armadilha 23 do guia de método: estranhar queda concentrada). Decisão, regra igual para as oito marcas: F5 passa a ser "respostas da marca por comentário do público" no mesmo post (número de itens da marca dividido pelo número de comentários do público, teto 1, intervalo por bootstrap de posts). A taxa v3 por vínculo de @ e a mediana de horas até a resposta (só nos pares vinculáveis) ficam como leitura descritiva e sensibilidade. A medida nova mede presença de resposta, não qualidade, como antes.

## Decisão da coordenação do estudo (15/09/2026): Facebook
Facebook permanece na nota (P5, F1 a F3) com a ressalva de estrutura de página global registrada como limitação; a sensibilidade sem Facebook segue publicada.

## Emendas 4 a 9 (16/09/2026, após a revisão externa sobre a v2; todas com regra igual para as oito marcas)

O que já se sabia ao emendar: painel v2 e sensibilidades completos. As emendas nascem de uma revisão externa e cada uma vem com a versão anterior publicada como sensibilidade.

- Emenda 4 (formaliza o que foi registrado em 14/09 antes do painel): dicionário de busca de marca v1.1, com os modelos da cesta como agro explícito. Passa a sensibilidade na v3 (ver emenda 9).
- Emenda 5: qualificador da descoberta de imprensa ampliado de "(máquinas OR trator OR colheitadeira)" para "(máquinas OR trator OR colheitadeira OR pulverizador OR plantadeira OR implemento)", porque o qualificador anterior excluía o negócio de Jacto e Stara. Descoberta refeita para as oito marcas; união das duas rodadas.
- Emenda 6: P3 com dois alvos passa a somar os totais da base de dados de busca com desconto da sobreposição estimada na interseção das listas orgânicas (palavras únicas), no lugar da união de listas truncadas, que produzia números abaixo do maior alvo (866 para a New Holland). A Case IH recebe o segundo alvo caseih.com.br, como as outras duas.
- Emenda 7: sementes curtas do nome (deere, case, holland, massey), com as mesmas oito variações, entram em P1 só quando a palavra-chave é agro explícito pelo dicionário, porque "colheitadeira case" e "trator massey 275" são buscas de marca que a regra anterior descartava. Massey Ferguson fica pendente por esgotamento do limite de consultas da base de dados de busca em 16/09.
- Emenda 8: itens de autoatendimento sem verificação estática passam por navegador (R-V5-11); nenhum item fica "não verificável".
- Emenda 9: P1 usa o dicionário v1 (sem modelos) mais as sementes curtas, para não contar duas vezes em P1 e V1 a busca por "marca + modelo". A versão com modelos fica como sensibilidade.
- Pendência aceita da Massey Ferguson (subpasta pt_br com 32% do tráfego BR do domínio): resolvida por regra, não por ajuste; o alvo Brasil é a subpasta, e as páginas globais (en, en_us) que ranqueiam no Brasil ficam fora, como para Case IH, New Holland e Fendt. Registrado como limite.
- Janela: SERP, IA, autoatendimento e desempenho são fotos de 14/09/2026; volumes da base de dados de busca são médias de 12 meses; social, imprensa e F5 cobrem 13/09/2025 a 13/09/2026. A declaração de janela única vale para o que é fluxo; o que é foto está datado.

## Emenda 10 e decisões da coordenação do estudo (18/09/2026)

O que já se sabia ao emendar: painel v4, sensibilidades v4, relatório técnico v4, leitura interna v4 e whitepaper v1 do Volume 2 prontos; a semente curta "massey" pendente desde 16/09 por esgotamento das unidades da base de busca.

- Emenda 10: a semente curta "massey" entra em P1 coletada dentro do limite de consultas restante, com a mesma classificação das outras três sementes curtas (dicionário v1.1, agro explícito e não agro, palavra inteira) e duas diferenças de coleta, declaradas: filtro que exclui as palavras-chave com "ferguson" (já contadas no universo da marca, portanto sem efeito na contagem) e as oito chamadas com sufixo do protocolo (trator, colheitadeira, pulverizador, plantadeira, concessionária, preço, peças, agrícola) limitadas a 5 a 25 linhas de maior volume cada, no lugar de 200; a chamada genérica de 1.500 linhas não coube no saldo. Resultado: 69 termos agro explícitos, 2.710 buscas mensais; P1 da Massey Ferguson passa de 59.150 para 61.860 (mais 4,6%). Nas listas com sufixo, a última linha coletada tem volume de 30 ou menos, o que limita a perda da cauda a poucas dezenas de buscas por termo. Ordem do painel inalterada; Massey Ferguson passa a Valtra em dois cenários de sensibilidade (sem Valorização e resposta ao público por menção ao usuário) e Fendt e Jacto trocam a 7ª e a 8ª no z-score winsorizado. Painel v5. Bruto e manifesto em (registro interno do estudo)
- Cesta de modelos (V1): confirmada pela coordenação do estudo em 18/09 como está (324 candidatos pelo slug de URL, 314 medidos). Não houve validação por especialista do segmento; o whitepaper e a conformidade declaram isso.
- Segundo snapshot de seguidores (28/09): retirado do plano por decisão da coordenação do estudo; o estudo é uma foto do momento, como o Volume 1, e não mede crescimento.
- V7 (fonte própria pertinente citada pelas IAs): permanece diagnóstico no Volume 2 por kappa 0,38; a recodificação humana ampla não será feita nesta versão (decisão da coordenação do estudo). "V7 na nota" segue como sensibilidade.
- Amostra manual de F5 (registro interno do estudo, 40 posts): planilha nova, criada em 16/09 depois da revisão externa, separada da leva de imprensa e de fontes de IA de 15/09; ainda não enviada ao time. Não trava a versão final; se devolvida, entra como precisão em versão seguinte.
