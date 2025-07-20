let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let btnText = e.target.innerText;

        if (btnText === '=') {
            try {
                string = String(eval(string));
                inputBox.value = string;
            } catch {
                inputBox.value = "Error";
                string = '';
            }
        }

        else if (btnText === 'AC') {
            string = "";
            inputBox.value = string;
        }

        else if (btnText === 'DEL') {
            string = string.slice(0, -1);
            inputBox.value = string;
        }

        else if (e.target.id === 'plusminus') {
            try {
                string = String(-eval(string));
                inputBox.value = string;
            } catch {
                inputBox.value = "Error";
                string = '';
            }
        }

        else {
            string += btnText;
            inputBox.value = string;
        }
    });
});
