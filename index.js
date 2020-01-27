// Code your solutions in this file

function writeCards(names, event) {

    const messages = [];

    for (let i = 0; i < names.length; i++) {
      
       messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    console.log(messages);

    return messages;

}

function countDown(num) {

    if (num > 0) {
       let i = num;
       while (i >= 0) {
          console.log(i);
          i--;
       }   
    }



}