//Magicians: Make an array of magician’s names. 
//Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
//Great Magicians: Start with a copy of your program from 
//Exercise 41. 
//Write a function called make_great() that modifies the array of
// magicians by adding the phrase the Great to each magician’s 
//name. 
//Call show_magicians() to see that the list has actually been 
//modified.

let magician_name = ["magician_1", "magician_2", "magician_3", "magician_4"];

function show_magicians(magician_name){
    console.log(magician_name);
}



function make_great(array){
    for(let i = 0; i < array.length; i++){
        array[i] = "The Great " + array[i];
    }
    return array;
}

make_great(magician_name);
show_magicians(magician_name);
