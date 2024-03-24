function getShippingCost(country) {
    switch (country) {
        case `China`:   
            price = 100;
            break;
        case `Chili`:   
            price = 250;
            break;
        case `Australia`:   
            price = 170;
            break;
        case `Jamaica`:   
            price = 120;
            break;
        default:
            return "Sorry, there is no delivery to your country"  
    }
    return `Shipping to ${country} will cost ${price} credits`;
}

console.log(getShippingCost("Australia")); // "Доставка до Австралії коштуватиме 170 кредитів"
console.log(getShippingCost("Germany")); // "На жаль, доставка у вашу країну не здійснюється"
console.log(getShippingCost("China")); // "Доставка до Китаю коштуватиме 100 кредитів"
console.log(getShippingCost("Chili")); // "Доставка до Чилі коштуватиме 250 кредитів"
console.log(getShippingCost("Jamaica")); // "Доставка на Ямайку коштуватиме 120 кредитів"
console.log(getShippingCost("Sweden")); // "На жаль, доставка у вашу країну не здійснюється"
