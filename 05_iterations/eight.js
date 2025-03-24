const shoppingCart=[
    {
        itemname:"Java course",
        price:500
    },
    {
        itemname:"Python course",
        price:500
    },
    {
        itemname:"Flutter course",
        price:500
    },
    {
        itemname:"NextJS course",
        price:500
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=> acc+item.price, 0);
console.log(priceToPay);