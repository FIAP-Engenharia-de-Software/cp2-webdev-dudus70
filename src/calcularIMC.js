// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  let IMC = peso / (altura * altura)

  if (IMC < 18.5) {
    let abaixo = "Abaixo do peso"
    return abaixo
  }
  else if (IMC > 18.5 && IMC < 24.9){
    let normal = "Peso normal"
    return normal  
  }
  else if (IMC > 25 && IMC < 29.9) {
    let pesoS = "Sobrepeso"
    return pesoS
    
  }
  else if (IMC > 30 && IMC < 50){
    let obesidade = "Obesidade"
    return obesidade
  }
  else {
    let erro = "Erro"
    return erro 
  }
}

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };