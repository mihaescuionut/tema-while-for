//Se dă un număr natural nenul n. Calculați suma cifrelor lui n care sunt mai mari sau egale cu 3 și mai mici sau egale cu 7.

function sumaCifre(numar){

    let suma = 0;

    while(numar!=0){

        let cifra=numar%10;

        if(cifra>3&&cifra<7){
            
            
           suma = suma+cifra;
            
        };

        numar = Math.floor(numar/10);
    }

    return suma;
};


//Să se scrie un program care să determine suma cifrelor unui număr natural citit de la tastatură.

function sCifre(numar){

    let suma = 0;

    while(numar!=0){

        let cifra = numar%10;

        suma = suma+cifra;

        numar = Math.floor(numar/10);
    }
    return suma;
};


//Să se scrie un program care să determine produsul cifrelor impare ale unui număr natural citit de la tastatură.


function produs(numar){

    let produs = 1;
    while(numar!=0){

        let cifra = numar%10;

        if(cifra%2!=0){

            produs*=cifra;

        }
        numar=Math.floor(numar/10);
    };

    return produs;

};


//Scrieți un program care citește un număr natural n și o cifră k. Programul va calcula produsul P al cifrelor lui n diferite de cifra k.


function produsul(numar, k){

    let produs = 1;
    while(numar!=0){

        let cifra = numar%10;

        if(cifra!=k){
            produs*=cifra
        }
        numar=Math.floor(numar/10);
    };
    return produs;

};

//Să se scrie un program care să determine numărul de cifre ale unui număr natural citit de la tastatură.

function nrCifre(numar){
    
    let contor = 0;

    while(numar!=0){
            contor++;

      numar=Math.floor(numar/10);
        
    };

    return contor;
};


//Să se scrie un program care să determine cea mai mare cifră a unui număr natural citit de la tastatură.

function cifraMaxima(numar){


    let maxima=-1;
    while(numar!=0){

        let cifra=numar%10;

        if(cifra>maxima){

           maxima=cifra;
        }

        numar=Math.floor(numar/10);
   };

   return maxima;

};


//Se dă un număr natural n. Determinaţi cea mai mare cifră pară a sa. 


function maximPara(numar){


    let para=-1;
    
       while(numar!=0){
    
        
         let cifra=numar%10;
         if(cifra%2==0&&cifra>para){
    
             para=cifra;
         
         }
         numar=Math.floor(numar/10);
    
       }
    
    
       return para;
};



//Să se scrie un program care să determine cea mai mare cifră impară a unui număr natural citit de la tastatură.

function maximImpara(numar){


    let impara=9;
    
       while(numar!=0){
    
        
         let cifra=numar%10;

         if(cifra%2!=0&&cifra<impara){
    
             impara=cifra;
         }

         numar=Math.floor(numar/10);

         }

         return impara;
    
};


//Se dau numerele naturale n și k, unde k este o cifră. Să se verifice dacă toate cifrele lui n sunt mai mici sau egale decât k.

function numere(n, k){

    while(numar!=0){

        let cifra = numar%10;

        if(cifra<=k){
            return true;
        }else {
            return false;
        }

        numar = Math.floor(numar/10);
    }


};


//Se dă un număr natural n cu cel puțin două cifre, care conține atât cifre pare cât și cifre impare. Calculați produsul dintre cea mai mare cifră pară și cea mai mică cifră impară a lui n.


    
function minImpara(numar){
        
        let impara=9;
    
        while(numar!=0){
    
            let cifra=numar%10;
            if(cifra%2!=0&&cifra<impara){
                impara = cifra;
            }
            numar=Math.floor(numar/10);
        }
       return impara;
    }
    
    
function produsCifre(numar){
    
        let produs = maximPara(numar)*minImpara(numar);
        console.log(produs);
};


//Se dau n numere naturale. Determinaţi câte cifre pare şi câte cifre impare se află în total în cele n numere.

function cateCifre(){

    let a = prompt("cate elemente doriti sa introduceti");
    a=+a;

    let pare = 0;
    let impare = 0;

    for(contor = 1; contor<=a; contor++){

        let x=prompt("Introduceti un numar");

         x=+x;

        let cifra = x%10;

        if(cifra%2 == 0){
            pare++;
        } else if (cifra%2 != 0){
            impare++;
        }
    };

    return pare;
};


//Se dă un număr natural n. Să se verifice dacă n conține cel puțin o cifră de 1, cel puțin o cifră 0 și nu conține alte cifre.


function natural(numar){


    while(numar!=0){

            let cifra = numar%10;

                if(cifra>1){
                     return false;
                }


        numar=Math.floor(numar/10);
     }


     return true;
};


//se introduc n numere sa se afiseze numarul de elemente pare introduse

function elementePare(){

    let n = prompt("Introduceti cate elemente doriti");
    n=+n;
    
    let pare=0;

    for(contor=1; contor<=n; contor++){

        let x = prompt("introduceti numarul");
        x = +x;

        if(x%2==0){
            pare++;
        }
    };

    alert(`Ati introdus ${pare} numere pare`);
};



//Să se scrie un program care să determine suma dintre cea mai mică şi cea mai mare cifră ale unui număr natural citit de la tastatură.


function suma(){

    let a = prompt("Introduceti numarul de elemnte");
    a=+a;

    
    let maxim=-1;
    let minim=100;

    for(contor=1; contor<=a; contor++){

        let b = prompt("Introduceti numarul");
        b=+b;
       

        if(b>maxim){

            maxim=b;

        }
         if(b<minim){
            minim=b;
        }

       
    }

    return minim+maxim;
};



//Se dau n numere întregi. Calculaţi cel mai mare dintre cele n numere date.


function celmaimareNr(){

    let n=prompt("Introduceti numarul de elemente");
    n=+n;

    let max=-1;

    for(let contor=1;contor<=n;contor++){

         let x=prompt("Introduceti un numar");

         x=+x;

         if(x>max){

            max=x;
         }
        

    }


    alert(`Cel mai mare numar introdus este ${max}`);

};


//Se dau n numere întregi. Calculaţi cel mai mic dintre cele n numere date.


function celmaimicNr(){

    let n = prompt("Introduceti numarul de elemente");
    n = +n;

    let min = 10000;

    for(contor=1; contor<=n; contor++){

        let x = prompt("Introduceti numarul");
        x=+x;

        if(x<min){
            min = x;
        }

        
    };

    alert(`Numarul minim este ${min}`);
};





//Se dau n numere naturale. Calculaţi suma dintre cel mai mare și cel mai mic număr dat.



function sumaNr(){

    let n = prompt("Introduceti numarul de elemente");
    n = +n;
    let min = 10000;
    let max = -1;

    for(contor=1; contor<=n; contor++){

        let x = prompt("Introduceti numarul");
        x=+x;

        if(x<min){
            min = x;
        };

        if(x>max){
            max = x;
        };

        let suma = min+max;

    }

   

    alert(`Suma este ${suma}`);

};



//Se dă un număr natural n. Să se verifice dacă n conține cel puțin o cifră de 1, cel puțin o cifră 0 și nu conține alte cifre.

function celputinCifra(numar){

    let cifra = numar%10;

    if(cifra==1 || cifra==0){
        return true;
    }else{
        return false;
    };

};



//Să se scrie un program care să determine ultima cifră pară a unui număr natural citit de la tastatură.

function ultimaPara(numar){

    let cifra = numar%10;

    if(cifra%2 == 0){

        return cifra;

    };
};


//Să se scrie un program care să determine numărul de apariţii a ultimei cifre în scrierea unui număr natural citit de la tastatură.

function ultimaCifra(numar){

    let contor = 0;
    let prev = 0;

    while(numar!=0){
        
        let cifra = numar%10;

        if(prev == cifra){
            contor++
        }
    };

    return contor;
}


//Se citește un număr natural n. Să se determine suma divizorilor săi.



function natural(){

    let n = prompt("Introduceti un numar");
    n = +n;
    let suma = 0;

    for(contor=1; contor<=n; contor++){
        

        if(n%contor==0){

           suma = suma+contor;


        }

      
        
    };

    return suma;
}


//Se citește un număr natural n. Să se determine câți divizori pari are acest număr.


function divizori(){

    let n = prompt("introduceti un numar");
    n = +n;
    let pari=0;

    for(contor=1; contor<=n; contor++){

        if(n%contor==0 && contor%2==0){

            pari++;
        }
    };

    return pari;
}




//Se dă un număr natural n. Calculați pătratul celui mai mic divizor propriu al său.

function patrat(){

    let n = prompt("introduceti un numar");
    n = +n;

    for(contor=1; contor<=n; contor++){

        if(n%contor == 0){

            
        }
    }
}









    
    
       

