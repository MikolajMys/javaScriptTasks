const text = {
    check(txt, word){
        return txt.includes(word);

    },
    getCount(txt){return txt.length},
    getWordsCount(txt){
        //let arr = txt.split(' ');
        let arr = txt.trim().split(/\s+/);
        return arr.length;

    },
    setCapitalize(txt) {
        return txt.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); 

    },
    setMix(txt) {
        let result = '';
        for (let i = 0; i < txt.length; i++) {
            if (i % 2 === 0) {
                result += txt[i].toLowerCase();
            } else {
                result += txt[i].toUpperCase();
            }
        }
        return result;
    },
    generateRandom(lng) {
        let result = '';
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < lng; i++) {
            let randomIndex = Math.floor(Math.random() * alphabet.length);
            result += alphabet.charAt(randomIndex);
        }
        return result;
    }
}
console.log(text.check("xyz", "ab"));
console.log(text.getCount("ala ma kota"));
console.log(text.getWordsCount("ala ma kota"));
console.log(text.setCapitalize("ala ma kota"));
console.log(text.setMix("ala ma kota"));
console.log(text.generateRandom(10));