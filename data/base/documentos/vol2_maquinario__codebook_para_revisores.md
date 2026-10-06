---
titulo: "Codebook para revisores, codificação de fontes de IA, Estudo 2"
origem: "analise/ia_2026-09-14/CODEBOOK_PARA_REVISORES.md"
data: "2026-09-14"
versao: "v1"
sha256_original: "b8a22fe44ef85cca1ef944aef2ccca8329cec9763d8d502dc2b7929eb424a78c"
tipo: "regra"
---
# Instruções de codificação cega das fontes de IA

Estudo 2 (maquinário), 14/09/2026. Arquivo de trabalho: `fila_codificacao_cega.csv` nesta pasta. Mesmo codebook de defensivos; a única adaptação é a definição de vertical. Não abrir o índice, os subtotais ou a fila-mestra antes de concluir os rótulos. A ordem foi embaralhada; a URL pode revelar a marca, mas isso não deve orientar o julgamento.

Unidade: uma página exibida junto de uma resposta a uma pergunta. A mesma URL pode voltar em respostas diferentes e deve ser julgada **de novo em relação à pergunta específica**. Não deduplicar linhas. A resposta integral está na planilha para contexto; não presumir que toda fonte exibida sustenta toda frase. O título e o trecho do crawl são apoio, não prova exaustiva; abrir a URL ou a cópia primária arquivada quando necessário. `crawl_utilizavel=não` não significa que a página seja irrelevante. Se a página estiver bloqueada, registrar isso, não inferir o conteúdo.

## Preencher todas as colunas de decisão

| Coluna | Valores permitidos | Regra |
|---|---|---|
| `vertical_agro` | `agro`, `outra`, `ambigua`, `nao_verificavel` | A página se dirige de fato a agricultura, máquinas e implementos agrícolas ou produtor rural? Construção civil, florestal, mineração, caminhões, financeira genérica do grupo e holding corporativa são `outra`. |
| `pertinencia_pergunta` | `direta`, `parcial`, `nao_pertinente`, `nao_verificavel` | Responde à pergunta agrícola concreta, e não apenas menciona o tema? `direta` exige conteúdo específico. |
| `suporte_alegação` | `sim`, `não`, `nao_verificavel` | Há frase específica da resposta sustentada pelo conteúdo da página? Use `nao_verificavel` quando a ligação entre link e frase não for demonstrável. Isto é diagnóstico, não o critério principal do indicador. |
| `estado_fonte` | `acessível`, `bloqueada`, `inexistente`, `erro_tecnico`, `arquivo_preservado` | `arquivo_preservado` vale se a página viva falhar, mas o crawl primário permitir leitura. |
| `trecho_evidência` | Texto curto ou referência localizada | Anotar a passagem ou o motivo da exclusão, sem copiar longos trechos. |
| `observacao_revisor` | Texto livre | Registrar ambiguidade, redirecionamento, mistura de verticais ou outra ressalva. |

O indicador principal contará uma resposta para uma marca apenas se **pelo menos uma** linha daquela resposta tiver `vertical_agro=agro` e `pertinencia_pergunta=direta`. Uma página acessível, mas de outra vertical, é inválida; uma inacessível sem arquivo não é automaticamente inválida, fica pendente. `parcial` não entra na estimativa conservadora, mas vai para sensibilidade. O relatório final deve informar quantas ficaram não verificáveis e como mudaria a ordem se fossem todas válidas ou inválidas. Nenhum revisor ajusta essas regras após conhecer a posição das marcas.

Dois revisores codificam independentemente uma sobreposição de pelo menos 10% por marca e motor. A coordenação do estudo mede concordância por dimensão e resolve divergências com um terceiro julgamento documentado. Só a tabela adjudicada entra no cálculo. A planilha não deve ser enviada para imprensa, porque contém respostas integrais e bastidores técnicos.
