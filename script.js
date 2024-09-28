
const inputField = document.getElementById('userText');
const addButton = document.getElementById('addButton');
const paragraphContainer = document.getElementById('paragraphContainer');

addButton.addEventListener('click', ()=> {
    let inputText =inputField.value;

    if (input !== ''){

    let newParagraph  = document.createElement('p');

    newParagraph.textContent = inputText;

    paragraphContainer.appendChild(newParagraph);

    inputField.value = '';
   

    newParagraph.addEventListener('click', () => {
        paragraphContainer.removeChild(newParagraph);
    });
    
    };
});
 // add border 


