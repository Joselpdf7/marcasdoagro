---
titulo: "Passada de navegador do autoatendimento, registro de adjudicação por item"
origem: "analise/experiencia_autoatendimento_2026-09-30/PASSADA_NAVEGADOR_2026-09-30.md"
data: "2026-09-30"
versao: "v1"
sha256_original: "a6a257edc6cc05e778d842095cbe8522e96d720d838942efb91681ceb6b4c2bd"
tipo: "regra"
---
# Verificação em navegador (R-V5-11), 30/09/2026, 12h23 a 12h28 BRT

Cada linha decide um item que ficou não verificável ou duvidoso na auditoria estática. Evidência lida na página renderizada.

| Grupo | Item | Decisão | Evidência |
|---|---|---|---|
| Bayer | 1 | presente, com observação | agro.bayer.com.br/onde-comprar/parceiros renderiza busca por CEP com distância ou por estado e cidade; o título diz "Produtos para proteção de cultivos", mas a ficha de cultivar (/d/soja-monsoy-m-5710-i2x-br) diz "consulte nossos parceiros comerciais autorizados" e liga "Encontrar Parceiro Comercial" para essa mesma página. Localizador único do grupo, ligado das fichas de cultivar (R-V5-1). |
| Bayer | 7 | ausente | /ferramentas renderiza só cabeçalho e rodapé; menu "Programas e Soluções" traz FieldView, VAlora Milho, Pro Carbono, Bayer Directo e Seeds Experience; nenhum comparador ou recomendador de cultivar aberto ao produtor. A ficha de cultivar traz "Região Recomendada" como lista estática (conta no item 6). |
| Bayer | 9 | presente | /conteudos renderiza 15 artigos na primeira página, com "Bayer une legado pioneiro em tratamento de sementes", "Com prescrição de sementes do FieldView" e "Sementes de qualidade: saiba como escolher" (R-V5-9). |
| Bayer | hotsites | fora da auditoria | intactabr, bollgard e plataformaintacta2xtend devolvem 403 a abertura direta e leitura de página; nenhum item depende deles. |
| BASF | 1 | não verificável confirmado em navegador: N/A do item para o grupo | /proteção-de-cultivos-e-sementes/serviços/lista-de-distribuidores abre com título "Lista Completa de Distribuidores", mas o componente (dois iframes vazios) não carrega lista nem formulário depois de 15 segundos e do aceite de cookies. Bloqueio técnico confirmado; pela R-V5-11 vira N/A, nunca zero. |
| BASF | 4 | presente | Cabeçalho renderizado com botão de busca (classe wxp-icon--search) que abre campo "Pesquisar". |
| BASF | 7 | presente (confirmação da leitura estática) | Seletor de Variedades em das.basf.com/seed-recommendation, ligado das páginas Credenz e SoyTech; domínio passa a constar como ferramenta própria na entidade v1.1. |
| Corteva | 1 | presente | brevant.com/br/onde-encontrar.html renderiza "Encontre um Representante" com mapa Esri e "Escolha uma área" (R-V5-1). |
| Corteva | 7 | ausente | Página da cultivar Cordius C2795CE: aba "Mapa de Posicionamento" mostra a matriz em imagem estática (IMG-matriz C2795CE); sem entrada do produtor. |
| Corteva | 8 | ausente, mantido | Relatos e resultados encontrados pelo auditor têm data anterior à janela (2022 a 08/2025); a regra do checklist aceita "sem data", não "fora da janela". Sensibilidade: com janela aberta, presente. |
| Longping | 3 e 7 | presente, com observação | lpht.com.br/aplicativo (LongPing Online, posicionamento por microrregião) está no domínio do grupo, mas não é ligado em menu ou rodapé de 25 páginas do site; é citado em texto na página Max Soluções do grupo e no código do site da Morgan ("Por meio do aplicativo LongPing Online..."). Conta pela R-V5-7 (ferramenta em domínio do grupo) com observação "sem ligação no menu". |
| Longping | Morgan (submarca) | itens 2, 5, 6, 9, 10 presentes; 4 ausente; 1 e 3 e 7 e 8 pelo grupo | Site renderizado: ficha do MG580 com características (altura, espiga, tipo de híbrido); páginas /nossas-franquias e /imprensa existem; redes (Facebook, Instagram, YouTube, LinkedIn) no rodapé; sem campo de busca. |
| TMG | 7 | presente | /cultivares/soja/ tem filtro por UF (27 estados) e por maturação relativa; ao escolher MT a lista cai de 55 para 35 cultivares. Ferramenta que responde a entrada do produtor (R-V5-7). |
| Limagrain | 7 | ausente, confirmado | Página GNZ 7740 renderizada não tem "Busque por região" nem seletor; só características agronômicas. |
| Syngenta | 8 | presente, ensaio | niderasementes.com.br/resultados renderiza tabela com 218 resultados, filtros por cultura, estado e safra, safra verão 25/26, inclusive "Ensaio Competição Copercampos" (sem observação de relato). |
| GDM | 7 | presente, confirmado | suprasementes.com.br/hibridos-milho?tipo=&estado=&cidade= devolve híbridos por estado (visto na verificação da manhã), além do comparador da Brasmax. |

Resultado por grupo depois da passada (presentes de 10; N/A reduz o denominador): GDM 10/10; Syngenta 10/10; Longping 10/10; TMG 9/10 (3 ausente); Limagrain 8/10 (3 e 7 ausentes); Bayer 8/10 (7 ausente; hotsites fora); BASF 8/9 (3 ausente; 1 N/A); Corteva 7/10 (3, 7 e 8 ausentes). Consolidação por script na Fase 3, com normalização de rótulos.
