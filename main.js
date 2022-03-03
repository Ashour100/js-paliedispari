// let word;
// word=prompt("inserisci una parola");
// function pali(parola){
//     let rev=parola.split('').reverse().join('');
//     console.log(rev);
//     if(parola==rev)
//         return true;
//     else
//         return false;
// }
// if(pali(word))
//     alert("la parola è palindroma");
// else
//     alert("la parola non è palindroma");




let userNum=parseInt(prompt("inserisci un numero tra 1 e 5"));
if(userNum<1||userNum>5){
    alert("Il numero inserito non è valido");
    // location.reload();
}
function random(){
    let compNum=Math.floor(Math.random() * 5)+1;
    return compNum;
}

function sommaPari(num1,num2){
    let somma=num1+num2;
    if(somma%2==0)
        return true;

    return false;
}

if(sommaPari(userNum,random()))
    alert("La somma è pari");
else
    alert("La somma è dispari");


if(userNum>random()){
    alert("Ha vinto il user");
}
else
    alert("Ha vinto il Computer");
