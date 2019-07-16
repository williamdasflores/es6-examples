var expense = {
    type: 'Business',
    amount: '$45 USD'
};

//old way
//var type = expense.type;
//var amount = expense.amount;

//ES6
/*const { type } = expense;
const { amount } = expense;*/

//OR use this approach
const { type, amount } = expense;

console.log(`Type: ${type} | Amount: ${amount}`);

