
const btndell = document.getElementById('btndell');
const btnrest = document.getElementById('btnrest');
const btnequal = document.getElementById('btnequal');
const display = document.getElementById('result');
const btn = document.querySelectorAll('.btn');

btn.forEach(btn =>{
    btn.addEventListener('click', function(e)
    {
        let value = e.target.textContent;
        if(value === "RESET") {
            display.innerText = "";
        } 
        else if(value === "DEL") {
            display.innerText = display.innerText.slice(0, -1);
        } 
        else if(value === "=") {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "Error";
            }
        } 
        else {
            display.innerText += value;
        }
    });
});
