let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let historyList = document.getElementById('historyList');
let clearHistoryBtn = document.getElementById('clearHistory');

let string = "";

function evaluateExpression() {
  try {
    let result = String(eval(string));
    inputBox.value = result;

    // Add to history
    let li = document.createElement('li');
    li.textContent = `${string} = ${result}`;
    historyList.prepend(li);

    string = result;
  } catch {
    inputBox.value = "Error";
    string = "";
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let btnText = e.target.innerText;

    if (btnText === '=') {
      evaluateExpression();
    }

    else if (btnText === 'AC') {
      string = "";
      inputBox.value = "";
    }

    else if (btnText === 'DEL') {
      string = string.slice(0, -1);
      inputBox.value = string;
    }

    else if (btnText === '%') {
      try {
        string = String(eval(string) / 100);
        inputBox.value = string;
      } catch {
        inputBox.value = "Error";
        string = "";
      }
    }

    else {
      string += btnText;
      inputBox.value = string;
    }
  });
});

// ✅ Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || "+-*/.%".includes(key)) {
    string += key;
    inputBox.value = string;
  }

  else if (key === "Enter") {
    evaluateExpression();
  }

  else if (key === "Backspace") {
    string = string.slice(0, -1);
    inputBox.value = string;
  }

  else if (key === "Escape") {
    string = "";
    inputBox.value = "";
  }
});

// Clear history
clearHistoryBtn.addEventListener('click', () => {
  historyList.innerHTML = "";
});
