// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:

// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.

function classificarNota(nota) {

  if (nota >= 6 && nota <= 10){
    let aprovado = "Aprovado"
    return aprovado
  }
  else if (nota >= 0 && nota < 6) {
    let reprovado ="Reprovado"
    return reprovado
  }
  else {
  let invalida = "Nota inválida"
  return invalida
  }
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { classificarNota };