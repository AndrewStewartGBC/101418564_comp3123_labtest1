function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {

        if(!Array.isArray(mixedArray)) {
            reject(new Error("The input you provided is not an array!"));

        } else {
            const filteredArray = mixedArray
                .filter(item => typeof item === 'string')
                .map(item => item.toLowerCase());
            resolve(filteredArray);
        }
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));