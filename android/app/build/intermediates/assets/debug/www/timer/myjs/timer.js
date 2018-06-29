
//<script src="system.js"> </script> 해야 사용가능

function ontimers(time){
    starttimer(time);
    backgroundtimes(time);
    sys_alert("알람","알람이 설정됬습니다.");

}


function starttimer(time) {
    
    $('#progressBar2').anim_progressbar({
        totaltime: time
    });
 $('#downloadBar').anim_progressbar({
    totaltime: time
});

}


function backgroundtimes(settimes){
 // subscribe on timer event
 window.wakeuptimer.snooze( successCallback,
    null,
        {
                alarms : [{
                    type : 'snooze',
                    time : { seconds :settimes }, // snooze for 60 seconds
                    extra : {
                     message : "배고파유"} // json containing app-specific information to be posted when alarm triggers

                }]
            }
         );

    
}

var successCallback = function(result) {
    if (result.type==='wakeup') {
        console.log('wakeup alarm detected--' + result.extra);
        navigator.notification.beep(1);
        sys_alert("환승알림","환승시간이 다됐습니다.");
        sys_notification("환승알림","환승시간이 다됐습니다.");


    } else if(result.type==='set'){
        console.log('wakeup alarm set--' + result);
        alert("성공");
    } else {
        console.log('wakeup unhandled type (' + result.type + ')');
    }
};

function back_button(){history.back();}

