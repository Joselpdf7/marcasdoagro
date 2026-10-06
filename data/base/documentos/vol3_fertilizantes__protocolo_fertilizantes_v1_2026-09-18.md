---
titulo: "Protocolo do Estudo 3, presença digital de fertilizantes no Brasil, v1 (emendas 1 a 4)"
origem: "config/PROTOCOLO_FERTILIZANTES_v1_2026-09-18.md"
data: "2026-09-18"
versao: "v1"
sha256_original: "232e8a6558228021d6cdfbe34aa5ac67cfe0942912af3b72f14e645ba622728d"
tipo: "protocolo"
---
# Protocolo do segmento, Volume 3 (fertilizantes), v1

Data: 18/09/2026. CONGELADO em 18/09/2026, aprovado pela coordenação do estudo. Este documento registra só o que muda em relação a (registro interno do estudo) (v1.1). Tudo o que não está aqui vale como está nas regras. Mudança posterior: emenda numerada, datada, com "o que já se sabia" e a regra anterior como sensibilidade.

O que já se sabia ao escrever este protocolo: o diretório de candidatas (sem métricas digitais como critério), o escopo orgânico de 19 alvos medido na validação de domínios, o mapeamento de portais de conteúdo e o teste de qualificador de produtos em quatro marcas. Nenhum dado de busca de marca, de categoria, de redes, de imprensa ou de IA havia sido coletado.

## 1. Universo (regra 3.1): divergência declarada

Painel de nove marcas, 6 + 3, por decisão da coordenação do estudo em 18/09/2026. Piloto: Yara Brasil, Mosaic Fertilizantes, EuroChem Brasil, Cibra, Fertipar, Stoller do Brasil. Candidatas: Timac Agro Brasil, Vittia, Ubyfol. Lista de observação e critérios em (registro interno do estudo) e (registro interno do estudo). Consequências: participação de referência de 11,1% (um nono) em gráficos e textos; a sensibilidade "5 contra 8" passa a "6 contra 9"; sensibilidade adicional obrigatória "sem Stoller", porque a marca pertence a um grupo medido no Volume 1 e atua na fronteira com bioestimulantes registrados.

## 2. Escopo por marca (regra 3.2)

Alvos fixados em (registro interno do estudo). Nenhuma marca depende de subpasta Brasil em domínio global, então autoridade (P2) e dados de campo (V6c) são comparáveis para oito marcas e seguem como diagnóstico fora da nota pela regra da série; para a EuroChem (domínio regional Brasil e Argentina) são diagnóstico com ressalva de escopo. Domínios mistos: Yara (soluções industriais e ambientais), Mosaic corporativo (nutrição animal, institucional de mineração) e Timac Agro (nutrição animal); as divisões não agrícolas ficam fora do crawl, da cesta de produtos e da auditoria, e P3 é reportado com e sem elas.

## 3. Propriedades de conteúdo e portal sem marca (detalhe da regra 3.2)

Regra completa em (registro interno do estudo). Resumo: domínios próprios com conteúdo agrícola (inclusive portal sem o nome da marca, quando o vínculo está confirmado na própria página) contam para P3 (soma com desconto de sobreposição, e também reportado só com o site oficial), P4, V1, V2, V4, V5, V6 e V7. O nome do portal não conta como busca pela marca (P1) nem como menção atribuível em IA (P7) na medida principal; entra como sensibilidade. Perfis sociais do portal: coletados com os mesmos parâmetros; medida principal com os perfis oficiais da marca; sensibilidade "marca mais perfis do portal". Hoje a regra só tem efeito prático para a Mosaic (Nutrição de Safras), mas vale para qualquer marca em que se descubra propriedade equivalente.

## 4. Cestas (regra 5)

(registro interno do estudo), com arquivos de máquina para a cesta de categoria e para as 60 perguntas. Diferenças do segmento: dicionário de busca de marca com cinco blocos de outro ramo (química industrial, mineração, nutrição animal, farmácia e saúde, nome próprio e cultura); sementes curtas só para Yara e Timac; cesta de produtos sem nomes genéricos de commodity e sem produtos de defesa biológica; medida principal de V1 "nome + bula", escolhida por teste pré-registrado; atribuição de produtos compartilhados entre EuroChem e Heringer (Croplex, Fertiva, Nitratop, Sunkiss): o volume de busca do produto conta para a EuroChem, única das duas no painel, e o fato é declarado como limitação.

## 5. Códigos e submétricas (regra 2.2)

Sem mudança de arquitetura, com uma divergência declarada: V1 (busca por "nome do produto + bula") é DIAGNÓSTICO fora da nota neste volume, porque o teste pré-registrado mostrou sinal baixo e concentrado em uma marca (94% do volume) e porque marcas de commodity não têm nome comercial buscável; justificativa completa na seção 3 das cestas. "V1 na nota" é sensibilidade obrigatória. V2: produtos com página própria em domínio próprio. V4: ficha técnica, bula ou garantias localizáveis na página do produto. V5: dez itens do segmento (seção 7 das cestas). TikTok e LinkedIn descritivos. Podcasts, aplicativos, programas de fidelidade e plataformas de capacitação descritivos.

## 6. Janela (regra 4)

Fluxos: doze meses até a véspera do primeiro dia de coleta social, data registrada no registro do estudo. Fotos datadas. Segundo snapshot de seguidores 14 dias depois do primeiro.

## 7. IA (regras 6.5 e 6.6)

Sem mudança. Quatro superfícies na nota com peso igual; AI Overview, Perplexity e pesos por uso como sensibilidade. Entidades em (registro interno do estudo): "yara" e "timac" são aliases ambíguos e só contam com contexto agrícola na mesma resposta; famílias de produto distintivas valem para menção; produto compartilhado com a Heringer só é atribuído à EuroChem quando a Heringer não aparece na mesma frase. V7 na nota só com revisão humana de 50 ocorrências e kappa de 0,6 ou mais.

## 8. Sensibilidades obrigatórias (regra 7.2): acréscimos do segmento

Além da lista completa da regra: sem Stoller; 6 contra 9; Mosaic só com o site oficial (sem o portal) em P3, P4, V1, V2 e V7; marca mais perfis do portal nas submétricas sociais; P1 com o nome do portal e das marcas absorvidas; V1 na nota com "nome + bula"; V1 com "nome + ficha técnica" e com nome exato distintivo.

## 9. Operação

Sites que bloqueiam acesso automatizado (portal da Mosaic, ICL fora do painel) exigem navegador no crawl, em V5 e em V6. 

## Emendas

Emenda 1 (21/09/2026, 11h30): N/A no social. Perfil com curtidas ocultas em mais de 20% das peças de uma rede tem F2 e F3 N/A naquela rede (caso: Vittia no Instagram); conta verificada sem peça na janela tem F1 = 0 e o resto N/A (caso: YouTube da Mosaic). O que já se sabia: o bruto do social; nenhum painel. Regra anterior (curtida oculta como zero) como sensibilidade.

Emenda 2 (21/09/2026, 14h00): mínimo de 12 peças na janela para F2, F3 e V3 por rede (caso: Cibra com 1 vídeo no YouTube). O que já se sabia: o bruto do social; nenhum painel. Regra anterior como sensibilidade.

Emenda 3 (24/09/2026, 10h30): classificação de imprensa v2.2. As palavras "comunicado" e "release" deixam de ser marcador de texto de assessoria, porque a imprensa financeira escreve "segundo comunicado da companhia" em matéria editorial (9 matérias sobre balanço, venda de mina e arbitragem classificadas como release pela v2.1 e como earned pelo revisor humano). O que já se sabia: o painel v0 e a revisão humana cega de 72 matérias (kappa 0,41 na classe earned com a v2.1). Regra anterior (v2.1) como sensibilidade. A v2.2 dá kappa 0,71 na mesma amostra, mas esse número é de calibração e não substitui o kappa cego; a regra 6.4 pede segunda revisão ampla antes de publicar P6 como definitiva. As 20 correções do revisor humano foram aplicadas linha a linha.

Emenda 4 (24/09/2026, 10h30): V7 entra na nota. Revisão humana cega de 60 pares (53 comparáveis; 7 páginas não abriram para o revisor) contra a codificação final: kappa 0,67 na elegibilidade, acima do mínimo de 0,6 da regra 6.5. O revisor humano foi mais generoso que a codificação (8 pares "direta" contra "parcial" ou "não pertinente"; 1 no sentido oposto): a codificação final é a leitura conservadora. F5 confirmado com kappa 1,0 em 54 posts (as contagens de respostas batem em 50).
