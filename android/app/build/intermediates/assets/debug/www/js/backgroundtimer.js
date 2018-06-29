
function startTimer(settimes){
 // subscribe on timer event
window.wakeuptimer.snooze( successCallback,
    function(){
    alert(hi);},
    {
        alarms : [{
            type : 'snooze',
            time : { seconds :settimes }, // snooze for 60 seconds
            extra : {
             message : "배고파유",
             action : function(){alert("하ㅏ이");}
             } // json containing app-specific information to be posted when alarm triggers

        }]
    }
 );
}

var successCallback = function(result) {
    if (result.type==='wakeup') {
        console.log('wakeup alarm detected--' + result.extra);
        navigator.notification.beep(1);
        navigator.notification.alert(
            '환승시간이 종료 됬습니다.',  // message
            null,         // callback
            '환승 알림',            // title
            '확인'                  // buttonName
        );




    } else if(result.type==='set'){
        console.log('wakeup alarm set--' + result);
        //alert("성공");
    } else {
        console.log('wakeup unhandled type (' + result.type + ')');
    }
};

/*

,
            sound : this.get('sound'),
            action : this.get('action')

    smallIcon: 'res://calendar',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfXKe6Yfjr6rCtR6cMPJB8CqMAYWECDtDqH-eMnerHHuXv9egrw'

            */