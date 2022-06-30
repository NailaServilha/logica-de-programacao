let numero = prompt("Digite um número para saber se é par ou impar:")

  // let resultado = numero % 2

   /* if((numero % 2) ==0){
        alert(`O número ${numero} é par`)
    }else{
        alert(`O numero ${numero} é impar`)
    }
*/

//IF TERNÁRIO
//                              |  condiçao      | ?  ação true: ação false
alert(`O numero ${numero} é ${  ((numero % 2) ==0) ?    'par'  : 'impar' }`)