async function fetchCharacterInfo(charName) {
  // Recebe nome do personagem como parâmetro
  // Retorna objeto contendo as informações desse personagem
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${charName}`
    );
    const data = await response.json();
    return data.results[0];
  } catch (error) {
    console.log("Personagem não encontrado!");
    return false;
  }
}
async function fetchEpisodes(id) {
  // Recebe o ID do personagem como parâmetro
  // Retorna um objeto contendo os episódios em que o personagem
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();
    return data.episode.map((e) => e.split("/").pop());
  } catch (error) {
    console.log("Erro de Id.");
  }
}

async function main() {
  // Função principal de funcionamento do código
  // Permite utilizar await nas funções async e garantir
  // bom funcionamento da função e código
  charName = "Rick Sanchez";
  charInfo = await fetchCharacterInfo(charName);
  if (charInfo == false) {
    console.log("Digite um personagem válido.");
  } else {
    console.log(`Nome: ${charInfo.name}`);
    console.log(`Status: ${charInfo.status}`);
    console.log(`Espécie: ${charInfo.species}`);
    console.log(`Gênero: ${charInfo.gender}`);

    charEpisodes = await fetchEpisodes(charInfo.id);
    console.log("Episódios em que aparece:", charEpisodes);
  }
}

main();
