 "use strict"


const textField = document.querySelector('.textField');
const createButton = document.querySelector('button');
const colorsNames = [];

createButton.style.backgroundColor = '#b0c4de'
createButton.style.borderColor = '#778899'

textField.addEventListener('keyup', (event) => {
    colorsNames.push(event.target.value);
    checkColor(colorsNames)
});

createButton.addEventListener('click', () => {
    const potentialColor = colorsNames.at(-1);
    try {
        if(checkColor(potentialColor)){
            const newButton = document.createElement("button");
            newButton.innerText = potentialColor;
            newButton.style.marginRight = '1px';
            changeColor(newButton, potentialColor);
            document.body.appendChild(newButton);
            textField.value = '';
        } else {
            throw new Error('Введіть коректну назву кольору!');
        }
    } catch (error) {
        alert(error.message);
        textField.value = '';   
    } 
}); 

function checkColor (colorName){ 
  
   let div = document.createElement("div");
   div.style.color = "transparent";
   div.style.color = colorName;

   return div.style.color !== "transparent";
}

function changeColor(button, color) {
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = color;
    });
}  