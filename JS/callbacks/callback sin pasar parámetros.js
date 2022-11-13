function pedirN(name, callback){
console.log ("Hello" + " " + name );
callback();
}

// Función Callback 
function callMe(){
console.log('Thank you for join!');
}

// passing function as an argument
pedirN('Clara', callMe);
