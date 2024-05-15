function checkPalindrom(txt){
    let test = true;
    //str = str.toLowerCase().replace(/[^a-z]/g, '');
    //let str = txt.split('').reverse().join('');
    for(let i = 0; i < txt.length; i++){
        if(txt[i] !== txt[txt.length - i - 1]){
            test = false;
        }
    }
    return test;
}
console.log(checkPalindrom("kajak"));