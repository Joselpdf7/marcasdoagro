---
titulo: "Validação de domínios das marcas candidatas"
origem: "protocolo/VALIDACAO_DOMINIOS_CANDIDATAS_2026-09-13.md"
data: "2026-09-13"
versao: "v1"
sha256_original: "bc6ac649b5ba2c6c90a9835901959dfd493d6918cc268c65fc6cd6d16d944c92"
tipo: "protocolo"
---
# Validação de domínios, candidatas e conferência Corteva

Base de dados de busca, relatório por domínio, base br, 13/09/2026 às 16h BRT. Regra de método: consultar variações antes de fixar o alvo (armadilha do domínio morto).

| Alvo consultado | Rank BR | Palavras-chave orgânicas | Tráfego orgânico estimado | Leitura |
|---|---:|---:|---:|---|
| fmcagricola.com.br | 23.008 | 3.128 | 16.760 | Domínio agro Brasil próprio da FMC; alvo candidato confirmado |
| fmc.com | 117.062 | 485 | 2.027 | Corporativo global; não usar |
| adama.com | 25.016 | 2.415 | 15.118 | Domínio global com subpasta Brasil; alvo deve ser a subpasta adama.com/brasil, a validar como subfolder no próximo passo |
| upl-ltd.com | 175.596 | 208 | 1.115 | Domínio global com subpasta br; volume baixo na base BR; confirmar se há domínio brasileiro alternativo antes de fixar |
| corteva.com.br | 550.459 | 140 | 164 | Domínio brasileiro quase sem visibilidade; o alvo correto continua corteva.com/br/ (4.845 palavras-chave no snapshot herdado). Conferência da regra de escopo herdada: correta |

Pendências: validar subpastas adama.com/brasil e upl-ltd.com/br com subpasta; localizar perfis oficiais agro Brasil de FMC, UPL e ADAMA para o diretório oficial; conferir critérios 1 a 3 do protocolo (Sindiveg ou CropLife, Agrofit, presença nacional) com fonte e data antes de qualquer coleta paga.

## Complemento das 16h40, subpastas e variantes

| Alvo | Rank | Palavras-chave | Tráfego estimado | Leitura |
|---|---:|---:|---:|---|
| adama.com/brasil/ (subpasta) | sem rank | 1.816 | 14.919 | Alvo agro Brasil da ADAMA confirmado como subpasta |
| upl-ltd.com/br/ (subpasta) | sem rank | 9 | 64 | Presença orgânica quase nula |
| upl.com.br, uplcorp.com.br, uplbrasil.com.br | sem registro na base de dados de busca | | | Nenhuma variante brasileira encontrada |

Consequência para a UPL: o critério 4 do protocolo (presença digital agro Brasil verificável) depende dos perfis oficiais; na frente web, a marca terá escala orgânica próxima de zero e isso é dado, não motivo de exclusão. Se a UPL entrar no painel, a leitura precisa dizer que a visibilidade orgânica dela no Brasil é residual no snapshot, e conferir se existe outro domínio oficial (por exemplo de marca de produto) antes de fechar o escopo.

## Correção das 17h (BRT): domínio real da UPL Brasil

A auditoria de sites verificou que (registro interno do estudo) redireciona (301) para (registro interno do estudo). No base de dados de busca, base BR, (registro interno do estudo) tem 6.246 palavras-chave e 20.347 visitas orgânicas estimadas por mês; `uplcorp.com` (raiz) tem rank BR 17.883. O alvo agro Brasil da UPL passa a ser **uplcorp.com/br/**, e a leitura anterior de "visibilidade orgânica residual" fica anulada: era erro de alvo, não ausência de presença. O universo de busca de marca, a autoridade (uplcorp.com raiz) e o escopo orgânico da UPL devem ser recoletados com o alvo corrigido antes de qualquer comparação. Lição registrada: o redirecionamento final é parte da validação de domínio, junto com a checagem de variações.
