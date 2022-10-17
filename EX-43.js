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



function make_great(magician_name){
    for(let i = 0; i < magician_name.length; i++){
     magician_name[i]="the great "+ magician_name[i]



    }
    console.log(magician_name)

}

make_great(["A", "B", "C", "D"]);

