

function setonAlarm(){

        //setAlarms(08,30);
        //setAlarms(10,30);
        //setAlarms(08,30);
       // setAlarms(13,00);

        let min_hour=24; let min_min=60;
        let d = new Date(); 
        let c_hour=d.getHours();
        let c_min=d.getMinutes();
        for(let i=0;i<5; i++){
            let x;
            x=localStorage.getItem("odsay_checked_alarm"+i);          
            if(!x){continue};

            let jsons=JSON.parse(x);
            console.log((jsons.hour*1-c_hour));
            if(jsons.hour*1-c_hour>=0){
                console.log("숫자:"+(jsons.hour*1-c_hour));
                if(min_hour*1>jsons.hour*1){
                    min_hour=jsons.hour*1;
                    min_min=jsons.min*1;
                }else if(min_hour*1==jsons.hour*1){
                    if(min_min*1>jsons.min_min*1){
                        min_min=jsons.min*1;
                    }
                }
            }
            //alert(jsons.hour+":"+jsons.min);
                   
        
        }
        setAlarms(min_hour,min_min);
        console.log("즐겨찾기 알람 설정 완료");

    }

function setAlarms(hour,minute){

    setAlarmItem(hour,minute);
    

}

function setAlarmItem(sethour,setminute){

    // subscribe on timer event
   window.wakeuptimer.wakeup( successCallback,
      null,
      // a list of alarms to set
      {
           alarms : [{
               type : 'onetime',
               time : { hour : sethour, minute : setminute },
               extra : { message : 'json containing app-specific information to be posted when alarm triggers' },
               message : 'Alarm has expired!'
          }]
      }
   );

}

var successCallback = function(result) {
    if (result.type==='wakeup') {
        console.log('wakeup alarm detected--' + result.extra);
        navigator.notification.beep(1);
        sys_alert("알람","지정하신 즐겨찾기 알람이 실행됬습니다.\n 버스나 지하철이 오고 있습니다.");
        sys_notification("알람","어서 버스나 지하철을 타세요!");




    } else if(result.type==='set'){
        console.log('wakeup alarm set--' + result);
        //alert("성공");
    } else {
        console.log('wakeup unhandled type (' + result.type + ')');
    }
}