function checkForSpam(message) {
    const loweCaseMessage = message.toLowerCase();
    return loweCaseMessage.includes("spam") || loweCaseMessage.includes("sale");
}

console.log(checkForSpam("Latest technology news")); // помилковий
console.log(checkForSpam("JavaScript weekly newsletter")); // помилковий
console.log(checkForSpam("Get best sale offers now!")); // правда
console.log(checkForSpam("Amazing SalE, only tonight!")); // правда
console.log(checkForSpam("Trust me, this is not a spam message")); // правда
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // правда
console.log(checkForSpam("[SPAM] How to earn fast money?")); // правда
