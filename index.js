 
 let numel = document.getElementById("num-el")
 let lenel = document.getElementById("len-el")
 let volel = document.getElementById("vol-el")
 let massel = document.getElementById("mass-el")
 let list = []


 
 function conversion(){
    list.push(numel.value)

    
    for( let i=0 ; i<list.length; i++){
        let feet = (list[i] *3.281 ).toFixed(3)
        let gallon = (list[i] *0.264).toFixed(3)
        let pound = (list[i] *2.204).toFixed(3)
        let meter = (list[i] /3.281 ).toFixed(3)
        let liter = (list[i] /0.264).toFixed(3)
        let killon = (list[i] /2.204).toFixed(3)

        lenel.innerHTML = `${list[i]} meter = ${feet} feet |  ${list[i]} meter =  ${meter}  feet `
        volel.innerHTML= `${list[i]}  liters = ${gallon } gallons | ${list[i]} gallons = ${liter} liters `
        massel.innerHTML = `${list[i]} killons = ${pound} pounds | ${list[i]} pounds = ${killon} killons `
    

    }
    // lenel.innerHTML = listitem
    // volel.innerHTML = listitem1
    // massel.innerHTML = listitem2
 }
 