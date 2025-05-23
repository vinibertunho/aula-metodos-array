let playlist = ["funk", "hiphop", "pop"];
console.log("antes do unshift");
console.table(playlist);

//adicionando um novo primeiro estilo
let estiloAdicionado = playlist.unshift("rock");

console.log("depois do unshift");
console.log("estilo adcionado:", playlist);
console.table(playlist)