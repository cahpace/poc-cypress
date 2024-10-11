
const name_item = document.querySelector("#name_item");
const quantity_item = document.querySelector("#quantity_item");
const add_btn = document.querySelector("#add_item");
const itemsContainer = document.querySelector("#container");
const allInputs = document.querySelectorAll('input');

document.addEventListener('DOMContentLoaded', () => {
    add_btn.disabled = true;
});

// Exemplo: iterando sobre todos os inputs e desabilitando-os
allInputs.forEach(input => {
    input.addEventListener("change", () => {
        fieldsValidation();
    })
});

add_btn.addEventListener('click', () => {
    event.preventDefault();
            const itemName = name_item.value;
            const itemQuantity = quantity_item.value;

            //if (itemName && itemQuantity) {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item');
                const p1 = document.createElement('p');
                const p2 = document.createElement('p');
    
                p1.textContent = itemName;
                p2.textContent = itemQuantity;

                

                itemDiv.appendChild(p1);
                itemDiv.appendChild(p2);
                
                const removeBtn = document.createElement('button');
                removeBtn.textContent = "X";
                removeBtn.classList.add('remove_btn')
                itemDiv.appendChild(removeBtn);
                removeBtn.addEventListener('click', () => {
                    itemsContainer.removeChild(itemDiv);
                });
                
                itemsContainer.appendChild(itemDiv);
                console.log("foi")

                //document.getElementById('itemName').value = '';
                //document.getElementById('itemQuantity').value = '';

            //}
        })

 function fieldsValidation(){
     if(name_item.value!="" && quantity_item.value!=""){
        add_btn.disabled = false;
     } else {
            const warning = document.createElement("p");
            warning.textContent = "name item and quuantity should be field";
            warning.classList.add('warning');
            document.body.appendChild(warning)
    }
 }