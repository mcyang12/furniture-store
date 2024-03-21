// information typically found in JSON file 
const furnitureItems = [];

const monthlySales = [
    { name: 'Oak Dining Table', amount: 500, quantity: 2 },
    { name: 'Leather Sofa', amount: 800, quantity: 1 },
    { name: 'Modern Armchair', amount: 300, quantity: 3 }
];

function calculateTotalSales(salesArray){
    return salesArray.reduce((total, sale) => total + (sale.amount * sale.quantity), 0);
}

function displaySalesBreakdown(salesArray){
    const breakdownElement = document.getElementById('sales-breakdown-results');
    breakdownElement.innerHTML = '<h4>Sales Breakdown:</h4>';
    const list = document.createElement('ul');
    salesArray.forEach(sale => {
        const listItem = document.createElement('li');
        listItem.textContent = `${sale.name}: $${sale.amount} x ${sale.quantity}`;
        list.appendChild(listItem);
    });
    breakdownElement.appendChild(list);
}

class FurnitureItems {
    constructor(name, category, price){
        this.name = name;
        this.category = category;
        this.price = price;
    }
    displayInfo(){
        return `${this.name}, Category: ${this.category}, Price: $${this.price}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const displayArrayAsList = (array, elementID) =>{
        const listElement = document.getElementById(elementID);
        listElement.innerHTML = '';
        array.forEach(item =>{
            const listItem = document.createElement('div');
            listItem.textContent = item.displayInfo ? item.displayInfo() : item;
            listElement.appendChild(listItem);
        })
    }

    document.getElementById('sales-report-result').innerHTML = `<h4>Total Sales: $${calculateTotalSales(monthlySales)}</h4>`
    displaySalesBreakdown(monthlySales);
    document.getElementById('add-furniture-btn').onclick = () => {
        const name = document.getElementById('furniture-name-input').value;
        const category = document.getElementById('furniture-category-select').value;
        const price = parseFloat(document.getElementById('furniture-price-input').value)
        const furniture = new FurnitureItems(name, category, price);
        furnitureItems.push(furniture);

        displayArrayAsList(furnitureItems, 'furniture-catalogue-results');
    }

    document.getElementById('add-furniture-btn').onclick = () => { // the event when the button is clicked
        const name = document.getElementById('furniture-name-input').value;
        const category = document.getElementById("furniture-category-select").value;
        const price = parseFloat(document.getElementById("furniture-price-input").value);
        const furniture = new FurnitureItems(name, category, price);
        furnitureItems.push(furniture);
        displayArrayAsList(furnitureItems, 'furniture-catalogue-results');
    }
})