# Consumo de API do Via CEP utilizando fetch do JavaScript

Uma exemplo simples, utilizando HTML, CSS e JavaScript, no intuito de consultar uma cep por meio da API de integrações do Via CEP.

## Passo a passa para consulta

Basta digitar um cep válido (8 números) e clicar no botão de consulta, serão exibidas informções de retorno como logradouro, bairro, cidade e estado.

## Validações consideradas

Antes de efetuar uma consulta na API do cep é validada o tamanho do campo, validando apenas os caracteres numéricos por meio de expressão regular. 
Caso o mesmo não seja equivalente a 8 caracteres numéricos uma mensagem de erro é disparada.
Em caso de consulta com erro a api do Via CEP retorna uma chave de erro, na qual também há a validação de mensagem de erro.
Passadas essas validações a div com o resultado é populada com os parágrafos contendo as segintes informações retornadas: CEP, Logradouro, Bairro, Cidade e Estado (em sigla). 
