const notifyByEmail = (email) => {
    return `Email sent to: ${email}`;
};

const notifyByText = (number) => {
    return `Text sent to: ${number}`;
};

const notify = (string, notificationFunction) => {
    return notificationFunction(string);
}

result = notify('hello@makers.tech.test', notifyByEmail)
console.log(result)
result = notify('+10000000000', notifyByText)
console.log(result)



