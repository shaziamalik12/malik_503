//Large Shirts: Modify the make_shirt() function 
//so that shirts are large by default with a message that reads 
//I love JavaScript. 

//Make a large shirt and a medium shirt with the default message,
// and a shirt of any size with a different message.

function make_shirt(size = "Large", message = "I love JavaScript."){
    console.log(`The size of shirt should be:${size}, 
    and the message displaying on shirt should be: ${message} `);
}

make_shirt(); //Large shirt with default message

make_shirt("Medium"); //Medium shirt with default message.

make_shirt("XXXL", "We love Programming"); //Any size with any message