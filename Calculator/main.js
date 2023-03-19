const keys = document.querySelectorAll('.key');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');
let input = "";
var saved = "";
// Save, Reload
for (let key of keys){
    const value = key.dataset.key;

    key.addEventListener('click', () => {
        if (value =="clear"){
            input = "";
            display_input.innerHTML = "";
            display_output.innerHTML = "";
        }
        else if(value == "="){
            if(zeroDivisionCheck(value)){
                let result = eval(input);
                display_output.innerHTML = result;
            }
            else{
                display_output.innerHTML = "ERROR";
                input = "";
                display_input.innerHTML = "";
            }
        }
        else if (value == "Save"){
            saved = eval(display_output.innerHTML);
        }
        else if(value == "Reload"){
            input += saved;
            display_input.innerHTML = input;
        }
        else if (ValidateInput(value)) {
            input += value;
            display_input.innerHTML = input;
        }
            
        
    })
}
function zeroDivisionCheck(value){
    let last_input = input.slice(-1);
    let second_to_last_input = input.slice(-2,-1);
    if (value == "=" && last_input == ["0"] && second_to_last_input == ["/"]){
        return false;
    }
    return true;
}
function ValidateInput (value) {
	let last_input = input.slice(-1);
	let operators = ["+", "-", "*", "/"];

	if (value == "." && last_input == ".") {
		return false;
	}
	if (operators.includes(value)) {
		if (operators.includes(last_input)) {
			return false;
		} else {
			return true;
		}
	}

	return true;
}