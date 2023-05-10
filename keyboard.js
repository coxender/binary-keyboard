let counter = 0
let text = ''

const ZERO = ['1', '2', '3', '4', '5', '6', 'q', 'w', 'e', 'r', 't', 'y', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b']
const ONE =['7', '8', '9', '0', '-', '=', 'u', 'i', 'o', 'p', ']', ']', '\\', 'h', 'j', 'k', 'l', ';', '\'', 'n', 'm', ',', '.', '/']

let timeWindow = 50; // time in ms
let lastExecution = new Date((new Date()).getTime() - timeWindow);


document.addEventListener("keypress",(event)=>{
    event.preventDefault()
    if (event.repeat) return;
    if ((lastExecution.getTime() + timeWindow) <= (new Date()).getTime()) {
        lastExecution = new Date();
    }else{
        return
    }

    let textbox= document.querySelector('#textbox')
    text=textbox.innerHTML
    if (text === 'Type Here!'){
        text = ''
    }

    key = event.key.toLowerCase()
    if (ZERO.includes(key)){
        text += '0';
        counter++;
    }else if (ONE.includes(key)){
        text += '1';
        counter++;
    }
    else if (key === "Backspace" || key ==="Delete"){
        counter--
        text = text.slice(0,-1)
    }


    if (counter===8){
        counter = 0
        // get last byte
        let int = parseInt(text.slice(-8),2)
        let byte = String.fromCharCode(int)
        text = text.slice(0,-8)
        console.log(byte);
        text += byte
    }
    
    textbox.innerHTML = text;
})