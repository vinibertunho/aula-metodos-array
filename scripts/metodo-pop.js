let playlist = ["funk", "hiphop", "pop"];
console.log("antes do pop");
console.table(playlist);

// removendo o ultimo estilo
let estiloRemovido = playlist.pop()
console.log("depois do pop");
console.table(playlist)
console.log("estilo removido:", estiloRemovido);
