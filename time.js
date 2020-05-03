var sec, min, hr;
var strsec, strmin, strhr;
sec = min  = hr = 0;
var ctr = 0;
var started;
function upTime(){
    sec++;

    if(sec === 60){
        min++;
        sec=0;
    }

    if(min === 60){
        hr++;
        min=0;
    }


    if(sec<10)
        strsec = "0" + sec;
    else    strsec = sec;

    if(min<10)
        strmin = "0" + min;
    else    strmin = min;
    
    if(hr<10)
        strhr = "0" + hr;
    else    strhr = hr;


    $("#time").text(strhr + ":" + strmin + ":" + strsec);
}

$("#Start").click(function(){
    started = setInterval(upTime ,1000);
});

$("#Stop").click(function(){
    clearInterval(started);
});

$("#Reset").click(function(){
    sec = min = hr = 0;
    $("#time").text("00:00:00");
})

$("#container").on("click", function(){
    CSS("display", "inline-block");
});