# Programação em JavaScript: Pesquisa de Personagem na API do Rick and Morty

Nesta tarefa, você vai desenvolver um programa em JavaScript que realiza uma pesquisa na API do Rick and Morty para obter informações sobre um personagem específico, incluindo os episódios em que ele aparece. Você vai utilizar a técnica de fazer solicitações assíncronas usando async/await e o objeto fetch do JavaScript.

LINK: https://rickandmortyapi.com/documentation

# Instruções:

1. Crie uma função assíncrona chamada `fetchCharacterInfo` que aceita o nome do personagem como argumento e retorna um objeto contendo informações sobre esse personagem.
   Dentro da função `fetchCharacterInfo`, faça uma solicitação para a API do Rick and Morty usando a URL correta.

   <strong>DICA: Certifique-se de incluir o nome do personagem na URL da solicitação (dica no final desse arquivo). Veja na documentação.</strong>

2. Crie uma função assíncrona chamada `fetchEpisodes` que aceita o `ID do personagem` como argumento e retorna uma lista de números dos episódios em que o personagem aparece.
   Na função `fetchEpisodes`, faça uma solicitação para a API do Rick and Morty para obter informações sobre o personagem e extraia os números dos episódios em que ele aparece.

   <strong>DICA: Vai usar `.map()`, `.split()` e `.pop()`. Pesquise sobre esses métodos.</strong>

3. Crie uma função principal chamada `main`, chame a função `fetchCharacterInfo` passando o nome do personagem que você deseja pesquisar.
   Ao receber a resposta da API, imprima o nome, status, espécie e gênero do personagem na tela.

4. Chame a função `fetchEpisodes` passando o ID do personagem para obter os episódios em que ele aparece e imprima essa lista na tela.

5. Caso o personagem não seja encontrado, imprima uma mensagem informando que o personagem não foi encontrado.

### Outras informações importantes

1. Precisa ter try/cathc na`fetchCharacterInfo` e `fetchEpisodes`

2. Precisa ter o tratamento de erro caso o personagem nao seja encontrado.

3. Exemplo de saida esperada:

```
Nome: Rick Sanchez
Status: Alive
Espécie: Human
Gênero: Male
Episódios em que aparece: [
  '1',  '2',  '3',  '4',  '5',  '6',  '7',
  '8',  '9',  '10', '11', '12', '13', '14',
  '15', '16', '17', '18', '19', '20', '21',
  '22', '23', '24', '25', '26', '27', '28',
  '29', '30', '31', '32', '33', '34', '35',
  '36', '37', '38', '39', '40', '41', '42',
  '43', '44', '45', '46', '47', '48', '49',
  '50', '51'
]
```

4. Cuidado com a documentação e as requisições, se o paramatro `nome`, for por exemplo "rick" ele me retorna, mais de uma opção, contendo o nome "rick" e armazena em uma lista. Pode considerar o `indice 0` do array. Veja a parte de `Filter characters`.

5. A interpretação da documentação faz parte da prova.
