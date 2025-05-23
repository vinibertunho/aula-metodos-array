// Método sort completo para ordenar o array playlist em ordem alfabética

let playlist = ['Funk', 'Hip-Hop', 'Pop', 'Rock', 'Jazz'];

// Ordena em ordem alfabética (A-Z)
playlist.sort();

console.log("Playlist ordenada (A-Z):", playlist);

// Ordena em ordem reversa (Z-A)
playlist.sort((a, b) => b.localeCompare(a));

console.log("Playlist ordenada (Z-A):", playlist);