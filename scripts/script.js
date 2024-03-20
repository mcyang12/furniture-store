const furnitureItems = [];

const monthlySales = [
    {name: 'Oak Dining Table', amount: 500, quantity: 2 },
    {name: 'Leather Sofa', amount: 800, quantity: 1 },
    {name: 'Modern Armchair', amount: 300, quantity: 3 }
];

// add up all sales but also make sure I'm adding based on (price * quantity sold)
function calculateTotalSales(salesArray){
    return salesArray.reduce((total, sale) => total + (sale.amount * sale.quantity), 0);
}

function displaySalesBreakdown(salesArray){

    const breakdownElement = document.getElementById('sales-breakdown-results');
    breakdownElement.innerHTML = '<h4>Sales Breakdown:</h4>';

    const list = document.createElement('ul');

    salesArray.forEach(sale => {
        const listItem = document.createElement('li');

        listItem.textContent = `${sale.name}: ${sale.amount} x ${sale.quantity}`;

        list.appendChild(listItem);
    })

    breakdownElement.appendChild(list);

}