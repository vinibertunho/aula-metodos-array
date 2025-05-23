let playlist = ['Funk', 'Hip-Hop', 'Pop', 'Rock', 'Jazz'];

console.log("Antes do splice:", playlist);

// Removendo 2 elementos a partir do índice 2

let elementosRemovidos = playlist.splice(2, 2);

console.log("Depois do splice:", playlist);

console.log("Elementos removidos:", elementosRemovidos);