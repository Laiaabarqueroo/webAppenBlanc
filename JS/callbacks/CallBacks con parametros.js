
function ControlT (tiempo){
if(tiempo == 180000){
  alert(`Ya han pasado, ${tiempo}`);
}else {
alert(`Esperate, solo ha pasado, ${tiempo}`);
}
}

function timming (callback){
    let tiempo = setTimeout(ControlT,180000);
    callback(tiempo);

}

 timming(ControlT);
