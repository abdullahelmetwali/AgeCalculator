let daysInput = document.querySelector(".daysInput")
let monthsInput = document.querySelector(".monthsInput")
let yearsInput = document.querySelector(".yearsInput")
let daysOP = document.querySelector(".days")
let monthsOP = document.querySelector(".months")
let yearsOP = document.querySelector(".years")
let imgSubmit = document.querySelector(".img")
let input = document.querySelector("input");
let imgP = document.querySelector("img")
imgP.src = "Images/icon-arrow.svg"

imgSubmit.onclick = function(){
if(daysInput.value === "" ||
   monthsInput.value === "" ||
   yearsInput.value === ""){
    document.querySelector(".errorD").style.display = "block";
    document.querySelector(".errorM").style.display = "block";
    document.querySelector(".errorY").style.display = "block";
}else{
   all(); 
}
}
function all(){
    let date = new Date();
    let days = date.getDate();
    let months = 1 + date.getMonth();
    let years = date.getFullYear();
    let monthsDay = [31,28,31,30,31,30,31,31,30,31,30,31]
    if(daysInput.value > 31){
         document.querySelector(".errorD").style.display = "block";
    }else{
        document.querySelector(".errorD").style.display = "none";
        if(daysInput.value > days){
        days = days + monthsDay[months-1];
        months = months - 1;
        daysOP.innerHTML = days - daysInput.value;
    } else{
         daysOP.innerHTML = days - daysInput.value;
    }
    }

    if(monthsInput.value > 12){
        document.querySelector(".errorM").style.display = "block";
    }else{
         document.querySelector(".errorM").style.display = "none";
         if(monthsInput.value > months){
            months = months + 12 
            years = years -1
            monthsOP.innerHTML = months - monthsInput.value;
         }else{
             monthsOP.innerHTML = months - monthsInput.value;
         }
    }

    if(yearsInput.value > 2023){
        document.querySelector(".errorY").style.display = "block";
    }else{
         document.querySelector(".errorY").style.display = "none"; 
          yearsOP.innerHTML = years - yearsInput.value
    }
}
