
const name_item = document.querySelector("#name_item");
const quantity_item = document.querySelector("#quantity_item");
const add_btn = document.querySelector("#add_item");
const itemsContainer = document.querySelector("#container")

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