function sys_alert(title,message){
navigator.notification.beep(1);
navigator.notification.alert(
            message,  // message
            null,         // callback
            title,            // title
            '확인'                  // buttonName
        );

}


function sys_notification(title,message){
plugin.notification.local.core.schedule({
    title: title,
    text: message
    });

}