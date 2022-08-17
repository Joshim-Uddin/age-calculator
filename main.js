document.getElementById("cal").onclick= function(){
    var a = document.getElementById("currentDate").value;
    var b = document.getElementById("birthday").value;
    let x= document.getElementById('year');
    let y= document.getElementById('month');
    let z = document.getElementById('day');
    let fbm = document.getElementById('fbm');
    let fbd = document.getElementById('fbd');
    let exYear = document.getElementById("exYears");
    let exMonth = document.getElementById("exMonths")
    let exDay = document.getElementById("exDays")
    let exHour = document.getElementById("exHours")
    let exMinute = document.getElementById("exMinutes")
    let exSecond = document.getElementById("exSeconds")
    if(a==""&& b=="" || a=="" || b==""){
        alert("Invalid Date");
        return false;
    }
    else{
        var cd = a.split("-");
        var bd = b.split("-");
        var days;
        var months;
        var years;
        var fMonths;
        var fDays;
        var fullMonths;
        var fullDays;
        var fullHours;
        var fullMinutes;
        var fullSeconds;

        var curenty = Number(cd[0]);
        var curentm = Number(cd[1]);
        var curentds = Number(cd[2]);

        var birthy = Number(bd[0]);
        var birthm = Number(bd[1]);
        var birthds = Number(bd[2]);
            if(birthds >curentds && birthm>curentm){
                days = (curentds+30)-birthds;
                months = (curentm+12) - (birthm+1);
                years = curenty-(birthy+1);
                fDays = 30-days;
                fMonths = 11-months;
            }
            else if(birthds >curentds && birthm<=curentm){
                days = (curentds+30)-birthds;
                months = (curentm) - (birthm+1);
                years = curenty-(birthy)
                fDays = 30-days;
                fMonths = 11-months;
            }
            else if(birthds <= curentds && birthm>curentm){
                days = (curentds)-birthds;
                months = (curentm+12) - (birthm);
                years = curenty-(birthy+1)
                fDays = 30-days;
                fMonths = 11-months;
            }
            else{
                years= curenty-birthy; 
                months =curentm-birthm;
                days =curentds-birthds;
                fDays = 30-days;
                fMonths = 11-months;
            }
        x.value = years;
        y.value = months;
        z.value = days;
        fbm.value = fMonths;
        fbd.value = fDays;
        
        fullMonths = (years*12) + months;
        fullDays = (years * 365) + days;
        fullHours = fullDays * 24;
        fullMinutes = fullHours * 60;
        fullSeconds = fullMinutes * 60;
        exYear.value = years;
        exMonth.value = fullMonths;
        exDay.value = fullDays;
        exHour.value = fullHours;
        exMinute.value = fullMinutes;
        exSecond.value = fullSeconds;
        // return true;

        
    };
    event.preventDefault();
    
}
document.getElementById('clr').onclick = function(){
    document.getElementById("ageForm").reset();
}


