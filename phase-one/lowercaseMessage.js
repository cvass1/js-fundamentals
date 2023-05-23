const lowercaseMessage = (message) => {
    return message.toLowerCase();
}

const transform = (message, transformFunction) => {
    return transformFunction(message);
}

result = transform('WHY ARE YOU SHOUTING?', lowercaseMessage)

console.log(result)