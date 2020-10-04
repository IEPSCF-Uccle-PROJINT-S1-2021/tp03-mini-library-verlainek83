const list = function(callback) {
    //for (let i = 0; i < this.length; i++) {
    //console.log(this[i]);
    //}

    var mesBooks = [
        ["Guillaume Debré ", "L 'affaire Lafayette", "roman historique"],
        ["Michael Ende ", "L'Histoire sans fin ", "fantasy "],
        ["érald Messadié", "La conspiration Jeanne d'Arc ", "roman historique "],
        ["J.R.R.Tolkien ", "Le Seigneur des anneaux ", "fantasy "],
        ["Andrzej Sapkowski ", "Le Sorceleur ", " fantasy "],
        ["George R.R.Martin ", "Le Trône de fer ", " fantasy "],
        ["Hervé Bazin ", "Vipère au poing ", " autobiographie "],
        ["Marie Cardinal ", "Les mots pour le dire ", "autobiographie"],
        ["Giacomo Casanova", "Histoire de ma vie ", "autobiographie "]
    ];

    var nbl = mesBooks.length;
    var nbc = mesBooks[0].length;

    for (var il = 0; il < nbl; il++) {

        alert('Parcours des colonnes de la ligne => ' + il);
        console.log('Parcours des colonnes de la ligne => ' + il);

        for (var ic = 0; ic < nbc; ic++) {

            // pacours colonnes
            alert(mesBooks[il][ic]);
            console.log(mesBooks[il][ic]);
            return mesBooks[il][ic];

        }
    }
}