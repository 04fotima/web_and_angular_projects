
function checkEvenOdd() {
    const numberInput = document.getElementById("number").value;
    const result = document.getElementById("evenOdd");
  
    if (numberInput % 2 === 0) {
      result.textContent = "num is juft";
    } else {
      result.textContent = "num is odd";
    }
  }
  

  function getMonthName() {
    const monthInput = parseInt(document.getElementById("month").value);
    const result = document.getElementById("monthre");
  
    switch (monthInput) {
      case 1:
        result.textContent = "Yanvar";
        break;
      case 2:
        result.textContent = "Fevral";
        break;
      case 3:
        result.textContent = "Mart";
        break;
      case 4:
        result.textContent = "Aprel";
        break;
      case 5:
        result.textContent = "May";
        break;
      case 6:
        result.textContent = "Iyun";
        break;
      case 7:
        result.textContent = "Iyul";
        break;
      case 8:
        result.textContent = "Avgust";
        break;
      case 9:
        result.textContent = "Sentabr";
        break;
      case 10:
        result.textContent = "Oktabr";
        break;
      case 11:
        result.textContent = "Noyabr";
        break;
      case 12:
        result.textContent = "Dekabr";
        break;
      default:
        result.textContent = "it not correct";
    }
  }
  
  function findMinMax() {
    const numbers = [100, 5, 20, 1, 3];
    let min = numbers[0];
    let max = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
      }
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    const result = document.getElementById("minmax");
    result.textContent = `min: ${min}, max: ${max}`;
  }
  

  function sortArray() {
    const numbers = [10, 5, 20, 1, 3];
  
    
    for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
          let temp = numbers[i];
          numbers[i] = numbers[j];
          numbers[j] = temp;
        }
      }
    }
    const result1 = document.getElementById("sorted"); 
    result1.textContent = `asc: ${numbers.join(", ")}`; 
  
    
    for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] < numbers[j]) {
          let temp = numbers[i];
          numbers[i] = numbers[j];
          numbers[j] = temp;
        }
      }
    }
    result1.textContent += `des: ${numbers.join(", ")}`; 
  }
  
  findMinMax();
  sortArray();


  