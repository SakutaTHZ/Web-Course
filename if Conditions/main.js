var toamount = 2500;
var userpay = 0;
var userHaveToPay;
var needToPay = 0;

function cal(){
    userpay = document.querySelector(".data").value;
    if(userpay < toamount){
        if(userpay == 69){
            alert("are u fucking with mee....");
        }
        else if(userpay == 420){
            alert("Stop Trolling");
        }
        document.querySelector(".payMore").style.display = "block";
        document.querySelector(".result").innerHTML = "U have to Pay " + (toamount - userpay);
        needToPay = toamount - userpay;
    }else if(userpay > toamount){
        document.querySelector(".result").innerHTML = "U paid " + (userpay - toamount) + " more";
    }else if(userpay == toamount){
        document.querySelector(".result").innerHTML = "Thank u";
    }else{
        document.querySelector(".result").innerHTML = "Something wrong";
    }
}

function cal2(){
    userHaveToPay = document.querySelector('.data2').value;
    if(userHaveToPay > needToPay){
        document.querySelector(".result2").innerHTML = "U paid More";
    }
    else if(userHaveToPay < needToPay){
        document.querySelector(".result2").innerHTML = "U paid less";
    }
    else if(userHaveToPay == needToPay){
        document.querySelector(".result2").innerHTML = "Thanks";
    }
}