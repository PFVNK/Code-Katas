//Dollars and Cents



function formatMoney(amount) {
  return (amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}



console.log(formatMoney(39.99), '$39.99');
console.log(formatMoney(3), '$3.00');
console.log(formatMoney(3.1), '$3.10');
