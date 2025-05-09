// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {

  if (num1 == "a") {
    let erroP = "Erro: parâmetros inválidos"
    return erroP
  } 
  else if (operador == "/" && num2 == 0) {
    let erroD = "Erro: divisão por zero"
    return erroD 
  }
    else if (operador != `+` && operador !=  `*` && operador !=`-` && operador != `/`) {
      let erroO = "Erro: operação inválida"
      return erroO
  }
  else {
      if (operador == "+"){
        let soma = num1+num2
        return soma

      }
      else if (operador == "-"){
        let menos = num1-num2
        return menos
      }
      else if (operador == "*") {
        let multiplicacao = num1*num2
        return multiplicacao
      }
      else if (operador == "/"){
        let divisao = num1/num2
        return divisao
      }
  }

  

}




//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };