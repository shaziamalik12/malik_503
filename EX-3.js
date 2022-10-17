// Upper lower and title case of a person's name 
var person_name="Shazia Malik"
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
//TITLECASE
    str=person_name.toLowerCase().split("")
    console.log(str)
    for(i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1)

    }
console.log(str.join(''))


