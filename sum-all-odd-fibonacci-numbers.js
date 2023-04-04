module.exports = function(num) {
  
  let result = [1, 1];

  for(let i = 2; i < num;  i++){
    result[i] = result[i-1] + result[i-2];
  }

  return result.reduce((acc, curr) => {
    if(curr % 2 !== 0 && curr <= num){
      return acc += curr
    }

    return acc;
  }, 0)
}

