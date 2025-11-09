const notes = [12, 18, 9, 15, 20, 7, 13];

function moyenne(n, v)
{
    let somme = v;
    somme += n;
    return somme;
}
let somme = notes.reduce(moyenne, 0);

console.log(somme / notes.length);

