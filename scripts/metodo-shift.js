let playlist = ["funk", "hiphop", "pop"];
console.log("antes do shift")
console.table(playlist);

// removendo o primeiro estilo
let estiloRemovido = playlist.shift()


console.log("depois do shift")
console.log("Estoli removido:", playlist)
console.table(playlist)
