// When using a String and need to concatenate use ONLY backticks

function getMessage() {
    const year = new Date().getFullYear();

    //If there is a concatation always use backticks and ${variable}
    return `The year is ${year}`;
}

console.log(getMessage());
