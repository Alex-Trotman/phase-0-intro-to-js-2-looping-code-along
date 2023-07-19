const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);

function writeCards(array, event) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push( `Thank you, ${array[i]}, for the wonderful ${event} gift!` )
    }
    return newArray;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}




// console.log(writeCards(["Dave", "John", "Bob"], "Birthday"))

