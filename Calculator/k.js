let disvalue='0';

function appendToDisplay(value){
    if(disvalue==="0" && value!==".")
        {
            disvalue=value;
        }
    else{
        disvalue +=value;
    }
    document.getElementById('display').innerText=disvalue;
}

function ClearScreen(){
    disvalue='0';
    document.getElementById('display').innerText=disvalue;
}

function Calculate(){
    try{
        disvalue=eval(disvalue).toString();
        document.getElementById('display').innerText=disvalue;
    }
    catch(error){
        disvalue='Error';
        document.getElementById('display').innerText=disvalue;
    }
} 