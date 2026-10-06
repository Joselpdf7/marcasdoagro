---
titulo: "Validação de domínios das marcas de fertilizantes"
origem: "config/VALIDACAO_DOMINIOS_FERTILIZANTES_2026-09-18.md"
data: "2026-09-18"
versao: "v1"
sha256_original: "f288c69858660620535d75799ad27d2de215556923d2a67dc441026a7ac1da5f"
tipo: "protocolo"
---
# Validação de domínios das nove marcas de fertilizantes

Fase 0 do Estudo 3, 18/09/2026. Regra 3.2 das regras unificadas e armadilhas 4 e 36 do guia de método: variações, subpasta e redirecionamento final antes de fixar o alvo; domínio de propriedade de conteúdo aberto antes de registrar. Fontes: redirecionamentos por acesso direto com user agent de navegador (rotina reprodutível do estudo, bruto em (registro interno do estudo)); escopo orgânico pela base de dados de busca, base BR, relatório por domínio e por subpasta (rotina reprodutível do estudo, bruto e manifesto com SHA-256 na mesma pasta, tabela em (registro interno do estudo)).

## 1. Redirecionamentos e variantes

| Marca | Variante testada | HTTP | URL final | Saltos | Título |
|---|---|---|---|---|---|
| Yara | https://www.yarabrasil.com.br/ | 200 | https://www.yarabrasil.com.br/ | 0 | Yara Brasil - Fertilizantes e nutrição para plantas |
| Yara | https://yarabrasil.com.br | 200 | https://www.yarabrasil.com.br/ | 1 | Yara Brasil - Fertilizantes e nutrição para plantas |
| Yara | https://www.yara.com.br | 000 | https://www.yara.com.br/ | 0 | |
| Yara | https://www.yara.com/br | 404 | https://www.yara.com/br/ | 1 | 404 |
| Yara | https://www.yarabrasil.com.br/nutricao-de-plantas/ | 200 | https://www.yarabrasil.com.br/nutricao-de-plantas/ | 0 | Fertilizantes: Guia completo de nutrição de plantas |
| Yara | https://www.yarabrasil.com.br/conteudo-agronomico/ | 200 | https://www.yarabrasil.com.br/conteudo-agronomico/ | 0 | Conteúdo Agronômico |
| Mosaic | https://mosaicco.com.br/ | 200 | https://mosaicco.com.br/ | 0 | Mosaic Brasil |
| Mosaic | https://www.mosaicco.com.br | 200 | https://mosaicco.com.br/ | 1 | Mosaic Brasil |
| Mosaic | https://www.mosaicco.com/ | 200 | https://mosaicco.com/ | 1 | The Mosaic Company |
| Mosaic | https://mosaicfertilizantes.com.br | 000 | https://mosaicfertilizantes.com.br/ | 0 | |
| Mosaic | http://nutricaodesafras.com.br/ | 403 | https://nutricaodesafras.com.br/ | 1 | Attention Required! |
| Mosaic | https://www.nutricaodesafras.com.br/ | 403 | https://www.nutricaodesafras.com.br/ | 0 | Attention Required! |
| Mosaic | https://mosaicbiosciences.com.br | 000 | https://mosaicbiosciences.com.br/ | 0 | |
| EuroChem | https://www.eurochemsam.com/ | 200 | https://www.eurochemsam.com/ | 0 | EuroChem - Inovação e soluções em fertilizantes para o agro |
| EuroChem | https://eurochem.com.br | 000 | https://eurochem.com.br/ | 0 | |
| EuroChem | https://www.eurochemgroup.com/ | 200 | https://www.eurochemgroup.com/ | 0 | |
| EuroChem | https://www.eurochemfto.com.br | 000 | https://www.eurochemfto.com.br/ | 0 | |
| EuroChem | https://www.fertilizantestocantins.com.br | 000 | https://www.fertilizantestocantins.com.br/ | 0 | |
| EuroChem | https://www.eurochemsam.com/produtos/ | 200 | https://www.eurochemsam.com/produtos/ | 0 | Arquivo Produtos - EuroChem - SAM |
| Cibra | https://www.cibra.com/ | 200 | https://www.cibra.com/ | 0 | Cibra Fertilizantes - Nossa Gente Faz por Você |
| Cibra | https://cibra.com.br | 200 | https://www.cibra.com/ | 2 | Cibra Fertilizantes - Nossa Gente Faz por Você |
| Cibra | https://www.cibrafertil.com.br | 200 | https://www.cibra.com/ | 2 | Cibra Fertilizantes - Nossa Gente Faz por Você |
| Cibra | https://www.cibra.com/produtos-agricolas/ | 200 | https://www.cibra.com/produtos-agricolas/ | 0 | Produtos Agrícolas - Cibra Fertilizantes |
| Fertipar | https://fertipar.com.br/ | 200 | https://fertipar.com.br/ | 0 | Home - Grupo Fertipar |
| Fertipar | https://www.fertipar.com.br | 200 | https://fertipar.com.br/#Preserve | 1 | Home - Grupo Fertipar |
| Fertipar | http://www.fertigran.com.br/ | 200 | https://fertipar.com.br/empresas/fertigran/ | 4 | Fertigran - Grupo Fertipar |
| Stoller | https://www.stoller.com.br/ | 200 | https://www.stoller.com.br/ | 0 | Stoller Plant Performance |
| Stoller | https://stoller.com.br | 200 | https://www.stoller.com.br/ | 1 | Stoller Plant Performance |
| Stoller | https://www.stollerbrasil.com.br | 000 | https://www.stollerbrasil.com.br/ | 0 | |
| Stoller | https://www.stoller.com/ | 200 | https://www.stoller.com/ | 0 | |
| Stoller | https://www.stoller.com.br/produtos.html | 200 | https://www.stoller.com.br/produtos.html | 0 | Produtos - Stoller |
| Timac | https://www.timacagro.com.br/ | 200 | https://www.timacagro.com.br/ | 0 | Home - Timac |
| Timac | https://timacagro.com.br | 200 | https://www.timacagro.com.br/ | 1 | Home - Timac |
| Timac | https://br.timacagro.com/ | 000 | https://br.timacagro.com/ | 0 | |
| Timac | https://www.timacagro.com/ | 200 | https://www.timacagro.com/ | 0 | TIMAC AGRO INTERNATIONAL |
| Vittia | https://vittia.com.br/ | 200 | https://vittia.com.br/ | 0 | Home - Vittia |
| Vittia | https://www.vittia.com.br | 200 | https://vittia.com.br/ | 1 | Home - Vittia |
| Vittia | https://www.vittia.com.br/solucoes/ | 200 | https://vittia.com.br/solucoes/ | 1 | Soluções - Vittia |
| Vittia | https://www.biosoja.com.br | 403 | https://www.biosoja.com.br/ | 0 | Acesso negado |
| Ubyfol | https://ubyfol.com/ | 200 | https://ubyfol.com/ | 0 | Home - Ubyfol |
| Ubyfol | https://www.ubyfol.com.br | 200 | https://ubyfol.com/ | 2 | Home - Ubyfol |
| Ubyfol | https://ubyfol.com/produtos/ | 200 | https://ubyfol.com/produtos/ | 0 | Arquivo Produtos - Ubyfol |

Leitura: HTTP 000 significa que o domínio não resolve ou não responde (yara.com.br, mosaicfertilizantes.com.br, mosaicbiosciences.com.br, eurochem.com.br, eurochemfto.com.br, fertilizantestocantins.com.br, stollerbrasil.com.br, br.timacagro.com). Nenhum domínio antigo foi reocupado por terceiros entre as nove marcas. cibra.com.br, cibrafertil.com.br e ubyfol.com.br redirecionam para o domínio.com da marca; fertigran.com.br redireciona (4 saltos) para a página da Fertigran dentro de fertipar.com.br. nutricaodesafras.com.br e biosoja.com.br devolvem 403 ao acesso automatizado; o primeiro abre em navegador (conferido em 18/09), o que obriga navegador no crawl, em V5 e em V6.

## 2. Escopo orgânico dos alvos (base BR)

| Marca | Alvo | Palavras-chave | Tráfego estimado/mês | Leitura |
|---|---|---:|---:|---|
| Yara | yarabrasil.com.br | 6.750 | 39.023 | alvo; domínio misto (inclui soluções industriais e ambientais) |
| Yara | yarabrasil.com.br/nutrição-de-plantas/ | 1.482 | 4.796 | subpasta agrícola de produtos e culturas |
| Yara | yarabrasil.com.br/conteudo-agronomico/ | 4.174 | 12.709 | blog agronômico: 62% das palavras-chave do domínio |
| Yara | yaracarboncalc.com.br | sem dado | sem dado | sem visibilidade orgânica |
| Mosaic | mosaicco.com.br | 1.752 | 24.399 | alvo 1, corporativo; inclui nutrição animal e institucional |
| Mosaic | nutricaodesafras.com.br | 7.665 | 61.373 | alvo 2, portal sem marca no nome: 4,4 vezes as palavras-chave do corporativo |
| Mosaic | nutrimosaic.com.br | 2.499 | 8.003 | nutrição animal: fora do escopo |
| Mosaic | nutrivantagens.com.br | 4 | 2 | programa com login: descritivo |
| Mosaic | cloud.mkt.mosaicco.com | 393 | 1.534 | alvo 3, materiais por cultura |
| EuroChem | eurochemsam.com | 532 | 6.172 | alvo; domínio regional Brasil e Argentina, medido na base do Brasil |
| EuroChem | tanamao.eurochemsam.com | 532 | 6.172 | a base devolve o número do domínio raiz; subdomínio não isolável |
| Cibra | cibra.com | 2.397 | 8.557 | alvo 1 |
| Cibra | cibrastore.com | 298 | 376 | alvo 2, loja virtual |
| Fertipar | fertipar.com.br | 1.038 | 17.354 | alvo |
| Stoller | stoller.com.br | 1.258 | 7.945 | alvo |
| Timac Agro | timacagro.com.br | 688 | 10.636 | alvo; domínio misto (nutrição animal no mesmo site) |
| Vittia | vittia.com.br | 808 | 4.543 | alvo |
| Vittia | biosoja.com.br | sem dado | sem dado | sem visibilidade orgânica; bloqueia acesso |
| Ubyfol | ubyfol.com | 256 | 2.668 | alvo |

Tráfego estimado é proxy da base de busca, não tráfego real; não entra na nota.

## 3. Alvos fixados por marca

| Marca | Alvos para P3, P4, V1, V2, V4 a V7 | Tipo de escopo | Autoridade (P2) e dados de campo (V6c) |
|---|---|---|---|
| Yara Brasil | yarabrasil.com.br | domínio próprio BR, misto | comparáveis (domínio raiz BR); P3 reportado com e sem as subpastas não agrícolas |
| Mosaic Fertilizantes | mosaicco.com.br, nutricaodesafras.com.br, cloud.mkt.mosaicco.com | três alvos, soma com desconto de sobreposição | autoridade por domínio raiz, reportada para os dois domínios BR; cloud.mkt é subdomínio de domínio global (diagnóstico) |
| EuroChem Brasil | eurochemsam.com | domínio regional, base BR | diagnóstico: o domínio serve Brasil e Argentina |
| Cibra | cibra.com, cibrastore.com | dois alvos | comparáveis |
| Fertipar | fertipar.com.br | domínio próprio BR | comparáveis |
| Stoller do Brasil | stoller.com.br | domínio próprio BR | comparáveis |
| Timac Agro Brasil | timacagro.com.br | domínio próprio BR, misto | comparáveis; P3 com e sem nutrição animal |
| Vittia | vittia.com.br | domínio próprio BR | comparáveis |
| Ubyfol | ubyfol.com | domínio próprio | comparáveis |

Diferença em relação aos Volumes 1 e 2: aqui nenhuma marca depende de subpasta Brasil em domínio global, então autoridade e dados de campo são comparáveis para oito das nove marcas. A exceção é a EuroChem (domínio regional).

## 4. Domínios mistos: pendência

A regra 3.2 pede P3 com e sem as divisões não agrícolas. Isso exige a lista de páginas que ranqueiam por domínio (lista orgânica por domínio, até 3.000 linhas) para Yara (soluções industriais), Mosaic corporativo (nutrição animal, institucional) e Timac Agro (nutrição animal), agrupadas por subpasta. Não foi executado: em 18/09/2026 o limite de consultas da base de busca estava esgotado desde 16/09. Fica para a abertura do Bloco A, depois da renovação do limite de consultas.
