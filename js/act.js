var x = document.getElementById("btn");
var jogo = false;
var j1 = 'a', j2 = 'a', pt1 = 0, pt2 = 0;
document.getElementById("pt1").innerHTML = pt1;
document.getElementById("pt2").innerHTML = pt2;
x.onclick = function (){
    x.disabled = true;
    var z = document.createTextNode = "Boa Sorte !";
    x.innerHTML = z;
    if (j1 == 'a' && j2 == 'a') {
        do{
            j1 = prompt("Informe o nome do primeiro jogador: ");
            document.getElementById("p1").innerHTML = j1 + " = X";
        }while(j1 == null || j1 == "");
        do{
            j2 = prompt("Informe o nome do segundo jogador: ");
            document.getElementById("p2").innerHTML = j2 + " = O";
        }while(j1 == null || j1 == "");
    }
    jogo = true
}

var simbolo = true;

function marcar(casa) {
    if (jogo == true) {

        var marcador;

        if (simbolo == true && (casa.value != 1 && casa.value !=2)) {
            marcador = "X";  
            casa.style.color = 'green';
            casa.style.fontSize = '50px';
            casa.innerHTML = marcador;
            simbolo = false;
            casa.value = 1;
        } else if(simbolo == false && (casa.value != 1 && casa.value !=2)) {
            marcador = "O";
            casa.style.color = 'red';
            casa.style.fontSize = '50px';
            casa.innerHTML = marcador;
            simbolo = true;
            casa.value = 2;
        } else{
            alert("Esta casa ja foi utilizada!");
        }

    } else {
        alert("Para iniciar uma partida, clique no botão abaixo")
    }   
    verifica();    
}

function verifica() {
    if (casa1.value != 0 && casa2.value != 0 && casa3.value != 0 && casa4.value !=0 && casa5.value !=0 && casa6.value !=0 && casa7.value !=0 && casa8.value !=0 && casa9.value != 0) {
        if ((casa1.value == casa2.value && casa2.value == casa3.value && casa1.value == casa3.value) ||
            (casa4.value == casa5.value && casa5.value == casa6.value && casa4.value == casa6.value) ||
            (casa7.value == casa8.value && casa8.value == casa9.value && casa7.value == casa9.value) ||
            (casa1.value == casa4.value && casa4.value == casa7.value && casa7.value == casa1.value) ||
            (casa2.value == casa5.value && casa5.value == casa8.value && casa8.value == casa2.value) ||
            (casa3.value == casa6.value && casa6.value == casa9.value && casa9.value == casa3.value) ||
            (casa1.value == casa5.value && casa5.value == casa9.value && casa1.value == casa9.value) ||
            (casa3.value == casa5.value && casa3.value == casa7.value && casa7.value == casa5.value)){
            //alert(casa1.value + casa2.value + casa3.value)
            if ((casa1.value == 1 && casa2.value == 1 && casa3.value == 1) || 
                (casa4.value == 1 && casa5.value == 1 && casa6.value == 1) ||
                (casa7.value == 1 && casa8.value == 1 && casa9.value == 1) || 
                (casa1.value == 1 && casa4.value == 1 && casa7.value == 1) ||
                (casa2.value == 1 && casa5.value == 1 && casa8.value == 1) || 
                (casa3.value == 1 && casa6.value == 1 && casa9.value == 1) ||
                (casa1.value == 1 && casa5.value == 1 && casa9.value == 1) ||
                (casa3.value == 1 && casa5.value == 1 && casa7.value == 1)){
                    alert("Fim de jogo !!!! O vencedor foi " + j1);
                    pt1++;
                    document.getElementById("pt1").innerHTML = pt1;
                    reseta();
            }else if ((casa1.value == 2 && casa2.value == 2 && casa3.value == 2) || 
                (casa4.value == 2 && casa5.value == 2 && casa6.value == 2) ||
                (casa7.value == 2 && casa8.value == 2 && casa9.value == 2) || 
                (casa1.value == 2 && casa4.value == 2 && casa7.value == 2) ||
                (casa2.value == 2 && casa5.value == 2 && casa8.value == 2) || 
                (casa3.value == 2 && casa6.value == 2 && casa9.value == 2) ||
                (casa1.value == 2 && casa5.value == 2 && casa9.value == 2) ||
                (casa3.value == 2 && casa5.value == 2 && casa7.value == 2)){
                    alert("Fim de jogo !!!! O vencedor foi " + j2);
                    pt2++;
                    document.getElementById("pt2").innerHTML = pt2;
                    reseta();
            }
        }else{
            alert("Partida terminou empatada");
            reseta()
        }

    }
}

function reseta() {
    for (let i = 1; i <=9 ; i++) {
        let z =document.getElementById("casa"+i);
        z.innerHTML = " "; 
        z.value = 0;
    }
}