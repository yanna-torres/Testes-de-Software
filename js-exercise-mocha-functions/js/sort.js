module.exports = function sortNumbers(numbers, ascending = true) {
    // Verificar se a ordem é ascendente ou decrescente
    const direction = ascending ? 1 : -1;
  
    // Ordenar os números usando a função sort()
    numbers.sort((a, b) => direction * (a - b));
  
    // Retornar a lista de números ordenada
    return numbers;
  };
  