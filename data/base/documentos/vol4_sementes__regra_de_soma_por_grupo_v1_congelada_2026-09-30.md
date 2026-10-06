---
titulo: "Regra de soma por grupo, v1 congelada (grupo com submarcas)"
origem: "config/REGRA_DE_SOMA_POR_GRUPO_v1_CONGELADA_2026-09-30.md"
data: "2026-09-30"
versao: "v1"
sha256_original: "180032de85043210474f2ca4d4aa68adca868532d5ae3a55bc2a0a376f56bdd6"
tipo: "regra"
---
# Regra de soma por grupo, Volume 4 (sementes), v1

Estado: CONGELADA em 30/09/2026 (aprovada pela coordenação do estudo em 30/09 às 09h06 e ratificada com o protocolo). Escrita em 29/09/2026, 20h50 BRT, antes de qualquer coleta deste volume. É a emenda de segmento número 1 do protocolo de sementes. A versão proposta fica preservada no arquivo irmão com sufixo PROPOSTA. Aplica a regra 3.3 das regras unificadas v1.1 (emenda 2).

O que já se sabia ao escrever: os números da prévia de 28/09/2026 (um passe, 13 marcas e 2 marcas-mãe), inclusive a ordem por marca e por grupo. A regra abaixo repete a que a coordenação do estudo confirmou em 29/09 e detalha os casos de borda; nenhum detalhe foi escolhido olhando a posição de um grupo. Onde um detalhe pode mexer na ordem, a alternativa fica registrada como sensibilidade obrigatória.

## 1. Definições

- Grupo: a unidade que recebe nota. Lista fechada no painel aprovado.
- Submarca: marca de semente de grande cultura controlada pelo grupo no Brasil, com vínculo provado por fonte pública. Lista fechada por grupo no diretório aprovado. Marca descoberta depois da aprovação entra por emenda datada e só como sensibilidade.
- Marca-mãe: o nome do grupo usado com intenção de sementes. É uma linha de medida dentro do grupo.
- Marca própria: submarca com site próprio (domínio ou subpasta isolável com catálogo) e ao menos um perfil oficial próprio confirmado por duas evidências. Perfil genérico do grupo (agro do grupo no Brasil) não é perfil de marca.

## 2. Regra por medida

| Medida | Como o grupo é medido | Dupla contagem | Coluna à parte |
|---|---|---|---|
| P1, busca pela marca com intenção de sementes | Soma do volume dos termos do universo de busca de todas as submarcas e da marca-mãe | Cada termo de busca conta uma vez no grupo. Termo que contém duas marcas do mesmo grupo ("syngenta nk") conta uma vez. Termo que contém marcas de dois grupos fica fora dos dois | Volume só da marca-mãe |
| P1, termos da marca-mãe | Só entram termos do nome do grupo com intenção explícita de sementes (semente, sementes, seeds, cultivar, híbrido, soja, milho, trigo, sorgo, algodão junto do nome). O nome do grupo sozinho ou com defensivos, remédio, emprego, ação não entra | Igual à linha acima | |
| Nomes de cultivares | Ficam fora do dicionário de P1 (regra 5.1). Termo com marca e cultivar ("soja tmg 7362") pertence à medida de produto (V1) e não a P1. P1 com esses termos é sensibilidade | Evita contar o mesmo termo em P1 e em V1 | |
| P2, autoridade | Diagnóstico, fora da nota. Reportada por alvo | | |
| P3, escopo orgânico | Soma das palavras-chave dos alvos do grupo: domínio próprio de cada submarca, subpasta de cada submarca no site do grupo e seção de sementes do site do grupo | Alvos do mesmo domínio não se sobrepõem quando são subpastas disjuntas. Entre domínios diferentes do mesmo grupo, desconta-se a sobreposição estimada na interseção das listas (regra 3.2, igual para todos). O domínio corporativo inteiro do grupo nunca entra | P3 por alvo |
| P4, busca de categoria | Taxa de consultas da cesta em que qualquer alvo do grupo aparece no top 10 | Uma consulta conta uma vez por grupo, mesmo com duas submarcas no top 10 | P4 por submarca |
| P5, audiência | Seguidores da maior marca própria do grupo, rede a rede (Instagram, Facebook, YouTube). A maior é definida por rede, no snapshot do dia | Nunca soma de perfis | Perfil genérico do grupo, descritivo |
| P5 sem marca própria | Grupo sem nenhuma marca própria na rede: N/A na rede. N/A reduz cobertura e nunca vira zero | | Perfil genérico do grupo, descritivo |
| P6, imprensa | Matérias em que qualquer submarca ou o grupo em contexto de sementes é o assunto | Uma matéria conta uma vez por grupo | Matérias só com o nome do grupo |
| P7a e P7b, lembrança em IA | Resposta em que qualquer submarca, cultivar distintiva ou o nome do grupo aparece. Primeira citada: o grupo cuja marca ou nome aparece primeiro no texto | Uma resposta conta uma vez por grupo | "Menção só ao nome do grupo": respostas em que o grupo aparece sem nenhuma submarca |
| V1, busca por produto | Soma de "cultivar + qualificador" das cultivares com página própria de todas as submarcas | Cada cultivar conta uma vez | V1 por submarca |
| V2, cultivares com página própria | Soma entre submarcas | Cada página conta uma vez | |
| V3, consumo de vídeo | Mediana de views por peça nos perfis da maior marca própria da rede (a mesma de P5) | Nunca junta peças de perfis diferentes | |
| V4 e V5, conteúdo e autoatendimento | Auditoria sobre o conjunto de propriedades do grupo para sementes: item presente em qualquer alvo do grupo conta presente | Item conta uma vez | V5 por submarca |
| V6a e V6b, desempenho e acessibilidade | Três páginas comparáveis do alvo de maior escopo orgânico do grupo (o maior P3 entre os alvos do grupo) | | V6 por alvo |
| V6c, dados de campo | Diagnóstico, fora da nota | | |
| V7, fonte própria citada pela IA | Resposta com ao menos uma URL elegível de qualquer domínio ou subpasta de sementes do grupo. Só entra na nota com o arquivo de kappa humano de 50 ocorrências e 0,6 ou mais; sem o arquivo, o script trata V7 como diagnóstico | Uma resposta conta uma vez por grupo | |
| F1, F2, F3, engajamento | Perfis da maior marca própria do grupo na rede (a mesma de P5). Base mínima de 5 mil seguidores em F3; mínimo de doze peças para medianas; curtidas ocultas acima de 20% tornam F2 e F3 N/A na rede | Nunca soma de perfis | |
| F5, resposta aos comentários | Perfil de Instagram da maior marca própria do grupo | | |

## 3. Casos de borda, com regra fixa

1. Grupo de marca única (marca e grupo coincidem): a regra se aplica igual; a coluna "só o nome do grupo" é a própria marca.
2. Marca que só existe em subpasta do site do grupo e em perfil genérico: entra em P1, P3 (subpasta), P4, P6, P7, V1, V2, V4 e V5; audiência e engajamento da marca são N/A; perfil do grupo é descritivo.
3. Grupo sem nenhuma marca própria em nenhuma rede: Fidelidade fica abaixo da cobertura de 60% e o grupo não recebe total (regra 7.1). É publicado com os pilares que pontuam e com a explicação. A alternativa "perfil genérico do grupo como audiência" é sensibilidade obrigatória, nunca regra principal.
4. Maior marca própria diferente entre redes: vale a maior de cada rede.
5. Site do grupo que bloqueia acesso automatizado: crawl, V5 e V6 em navegador; N/A só com bloqueio também no navegador, com evidência.
6. Homônimos (pioneer, nk, tmg, neogen, golden harvest, kws, gdm): o termo ou a menção só conta com contexto agro na mesma busca ou na mesma resposta (palavra inteira).
7. Marca vendida ou licenciada durante a janela de doze meses: pertence ao grupo que a controla na data da coleta; o fato e a data entram na ficha do grupo e o painel sem a marca é sensibilidade.

## 4. Sensibilidades obrigatórias deste volume, além das da regra 7.2

- Painel por submarca (cada submarca e cada marca-mãe como unidade).
- Painel por grupo sem a marca-mãe em P1 e P3.
- Audiência e engajamento com o perfil genérico do grupo para quem não tem marca própria.
- P1 com termos de marca mais cultivar.
- P4 por família de consulta e ponderado por volume.
- Painel sem cada submarca, uma por vez, nos grupos com três ou mais.

## 5. Tabela por grupo

Preenchida depois do diretório verificado: submarcas que somam em busca e escopo, alvos de P3, maior marca própria por rede e forma de contar o nome do grupo. Ver (registro interno do estudo), seção "Regra de soma aplicada".
