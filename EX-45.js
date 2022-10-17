//Cars: Write a function that stores information about a car 
//in a Object. The function should always receive a manufacturer
// and a model name. It should then accept an arbitrary number of
// keyword arguments. Call the function with the required 
//information and two other name-value pairs, 
//such as a color or an optional feature. Print the Object that’s
// returned to make sure all the information was stored correctly.

function car_inf(manufacturer, model_no,color,price,){
    var car ={
    manufacturer:manufacturer,
    model_no:model_no,
    color:color,
    price:price,
    }
    for( i = 0; i < car_inf.length; i++){
        car[i]=car  
}
    console.log(car)}
car_inf("toyota","xr","green","100")
