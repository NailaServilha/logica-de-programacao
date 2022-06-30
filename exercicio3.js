let operacao = prompt("Digite uma operação, 1-soma, 2-subtração, 3-multiplicação, 4-divisão")


// operacao esta entre 1,2,3 e 4
// operacao = 1

// == Igualdade
// && E
// || Ou

// > Maior
// < Menor
// >= Maior e Igual
// <= Menor e Igual

// (operacao >= 1) && (operacao <= 4 )
//     VERDADE     &&       VERDADE
//               VERDADE




if ((operacao >= 1) && (operacao <= 4)) {

  /*  let num1 = Number(prompt("Digite o primeiro valor da operação"))
    let num2 = Number(prompt("Digite o segundo valor da operação"))

   // Operação Soma
    if (operacao == 1) {
        alert(`O total é: ${ num1 + num2}`)
    } else {


        // Operação subtração
        if (operacao == 2) {
            alert(`O total é ${ num1 - num2}`)
        } else {


            // Operação multiplicação
            if (operacao == 3) {
                alert(`O total é ${ num1 * num2}`)
            } else {


                // Operação divisão
                if (operacao == 4) {
                    alert(`O total é ${ num1 / num2}`)
                }

            }
        }
    }*/


    switch (operacao) {
    case '1':
        alert(`O total é: ${ num1 + num2}`)
        break;

    case '2':
        alert(`O total é: ${ num1 - num2}`)
        break;

    case '3':
        alert(`O total é: ${num1 * num2}`)
        break;

    case '4':
            alert(`O total é: ${num1 / num2}`)
            break;

    default:
        alert(`Digite um valor entre 1 e 4!`)
        break;
}

} else {
    alert(`Digite um valor entre 1 e 4!`)
}



