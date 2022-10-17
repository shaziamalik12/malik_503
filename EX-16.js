//Guest List: If you could invite anyone, 
//living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people
// you’d like to invite to dinner. 
//Then use your list to print a message to each person, 
//inviting them to dinner.

var Guest_list = ["Sajela", "Mahrosh","Kiran","Kinza", "Rimsha", "Usman"];
console.log('I would like to Invite you on dinner ' ,Guest_list[0], );
console.log('I would like to Invite you on dinner ' ,Guest_list[1], );
console.log('I would like to Invite you on dinner ' ,Guest_list[2], );
console.log('I would like to Invite you on dinner ' ,Guest_list[3], );
console.log('I would like to Invite you on dinner ' ,Guest_list[4], );
console.log('I would like to Invite you on dinner ' ,Guest_list[5], );
console.log('I would like to Invite you on dinner ' ,Guest_list[6], );
console.log(Guest_list[2],'couldnot make it to join us at dinner')
Guest_list.splice(1,1,"zarwa")
console.log('I would like to Invite you on dinner ' ,Guest_list[0], );
console.log('I would like to Invite you on dinner ' ,Guest_list[1], );
console.log('I would like to Invite you on dinner ' ,Guest_list[2], );
console.log('I would like to Invite you on dinner ' ,Guest_list[3], );
console.log('I would like to Invite you on dinner ' ,Guest_list[4], );
console.log('I would like to Invite you on dinner ' ,Guest_list[5], );
console.log('I would like to Invite you on dinner ' ,Guest_list[6], );
console.log('As I found a bigger dinner table I may invite some more guests in dinner');

Guest_list.unshift("Rushma"); //adding new guest at the start of the array.
console.log(Guest_list);

Guest_list.splice(4, 0, "Seemi"); //adding new guest in the middle of the array.
console.log(Guest_list);

Guest_list.push("Amina"); //adding new guests at the end of array
console.log("After Append new guest list is: ", Guest_list);

console.log('I cordially invite' ,Guest_list[0],' to the dinner  at 8pm');
console.log('I cordially invite' ,Guest_list[1],' to the dinner  at 8pm');
console.log('I cordially invite' ,Guest_list[2],' to the dinner  at 8pm');
console.log('I cordially invite' ,Guest_list[3],' to the dinner  at 8pm');
console.log('I cordially invite' ,Guest_list[4],' to the dinner  at 8pm');
console.log('I cordially invite' ,Guest_list[5],' to the dinner  at 8pm');
console.log('I cordially invite' ,Guest_list[6],' to the dinner  at 8pm');
console.log('I cordially invite' ,Guest_list[7],' to the dinner  at 8pm');
console.log('I cordially invite' ,Guest_list[8],' to the dinner  at 8pm');
console.log('I cordially invite' ,Guest_list[9],' to the dinner  at 8pm');
console.log('I cordially invite' ,Guest_list[10],' to the dinner  at 8pm');
