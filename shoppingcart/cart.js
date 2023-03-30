const item = document.getElementById("item");
const quantity = document.getElementById("quantity");
const unitPriceInput = document.querySelector('input[readonly]');
const button1 =document.querySelector("button")
const shoppingListTable = document.querySelector('table');
const shoppingListTableBody = shoppingListTable.querySelector('tbody');
const removeButtons = shoppingListTable.querySelectorAll('button');
const TotalPrice = shoppingListTable.querySelector('total')

const products = [
  { name: "Parle-g", price: 10 },
  { name: "jimjam", price: 15 },
  { name: "oreo", price: 20 },
  { name: "marie", price: 50 }
  
];


item.addEventListener("change", () => {
    const selectedItem = products.find((product) => product.name === item.value);
    unitPriceInput.value = selectedItem.price;
  });
  
  
  button1.addEventListener("click", () => {
    const selectedItem = products.find((product) => product.name === item.value);
    const subTotal = selectedItem.price * quantity.value;
    
    const newRow = shoppingListTableBody.insertRow();
    newRow.innerHTML = `
      <td>${selectedItem.name}</td>
      <td>${quantity.value}</td>
      <td>${selectedItem.price}</td>
      <td>${subTotal}</td>
      <td><button>Remove</button></td>`;
    
   
    const newRemoveButton = newRow.querySelector('button');
    newRemoveButton.addEventListener("click", () => {
      newRow.remove();
    });
    
    
    item.value = "Parle Biscuit";
    unitPriceInput.value = "";
    quantity.value = "";

 
  });