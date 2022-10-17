//Sandwiches: Write a function that accepts an array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.



function wants_sandwich(...array){
    console.log(`All the sandwich items are ${array}`);

}

wants_sandwich(["Brost","mayo","salad", "egg",]);
wants_sandwich(["mayo", "Boil Egg", "Salad"]);
wants_sandwich(["omlete","shami","catchup",]);

