
let number = 0

const onIncrementClick = () => {
    number = number + 5
    console.log(number)
    number_screen.textContent = number
    if (Math.abs(number) > 35) {
      boom.textContent = "!bOoMm.....!"
    }

  }
  
  const onDecrementClick = () => {
    number = number - 5
    console.log(number)
    number_screen.textContent = number
    if (Math.abs(number) > 35) {
      boom.textContent = "!bOoMm.....!"
    }
  }

  const onIncrementClicka = () => {
    let incrementValue = parseInt(inputa.value, 10);
    if (isNaN(incrementValue)) {
        incrementValue = 0;
    }
    localStorage.setItem('inputa', incrementValue);
    let boomValue = parseInt(inputb.value, 10);
    if (isNaN(boomValue)) {
        boomValue = 35;
    }
    localStorage.setItem('inputb', boomValue);
    number = number + incrementValue;
    console.log(number);
    number_screen.textContent = number;
    if (Math.abs(number) > boomValue) {
      boom.textContent = "!bOoMm.....!";
    }
}

const onDecrementClicka = () => {
    let decrementValue = parseInt(inputa.value, 10);
    if (isNaN(decrementValue)) {
        decrementValue = 0;
    }
    localStorage.setItem('inputa', decrementValue);
    let boomValue = parseInt(inputb.value, 10);
    if (isNaN(boomValue)) {
        boomValue = 35;
    }
    localStorage.setItem('inputb', boomValue);
    number = number - decrementValue;
    console.log(number);
    number_screen.textContent = number;
    if (Math.abs(number) > boomValue) {
      boom.textContent = "!bOoMm.....!";
    }
}

window.onload = function() {
    const storedInputa = localStorage.getItem('inputa');
    const storedInputb = localStorage.getItem('inputb');
    if (storedInputa) {
        document.getElementById('inputa').value = storedInputa;
    }
    if (storedInputb) {
        document.getElementById('inputb').value = storedInputb;
    }
}
  