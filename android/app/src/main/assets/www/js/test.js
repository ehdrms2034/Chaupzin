function alertDismissed() {
    // do something
}
function hi1(){
navigator.notification.alert(
    'You are the winner!',  // message
    alertDismissed,         // callback
    'Game Over',            // title
    'Done'                  // buttonName
);
}


        var SetTime = 10;		// 최초 설정 시간(기본 : 초)

		function msg_time() {	// 1초씩 카운트
			m = Math.floor(SetTime / 60) + "분 " + (SetTime % 60) + "초";	// 남은 시간 계산

			var msg = "현재 남은 시간은 <font color='red'>" + m + "</font> 입니다.";

    			document.all.ViewTimer.innerHTML = msg;		// div 영역에 보여줌

			SetTime--;					// 1초씩 감소

			if (SetTime < 0) {			// 시간이 종료 되었으면..
				clearInterval(tid);		// 타이머 해제
				//alert("종료");
				//hi2();
			}
		}

			window.onload = function TimerStart(){ tid=setInterval('msg_time()',1000) };




function timer_reset(){
    SetTime=1800;
     function TimerStart(){ tid = setInterval('msg_time()',1000) };
      TimerStart();

}

function test(){
       var x;
       cordova.plugins.getAddResult('185','20',function(success){ localStorage.setItem('add',success)},null);
        setTimeout(function(){
        x=localStorage.getItem('add');
        alert(x);
        },20);

}

function odsaytest(){
        cordova.odsayplugin.searchBusLane("10","7000",function(success){
                alert(success);
        },null);

}


function searchpathtest(){
        cordova.odsayplugin.requestSearchPubTransPath("126.926493082645","37.6134436427887","127.126936754911","37.5004198786564","0","0", "0",function(success){
                alert(success);
        },null);

}

function searchsubwaytimetable(){
        cordova.odsayplugin.requestSubwayTimeTable("101",1,function(success){
        localStorage.setItem('odsay_temp',success);

        },null);

        ;}

function requestSearchStation(){
        cordova.odsayplugin.requestSearchStation("범내골","부산","2",function(success){
        localStorage.setItem('odsay_temp',success);

        },null);

        ;}


function testnotifi(){
plugin.notification.local.core.schedule({
    title: '환승 시간 알림',
    text: '환승이 종료 되었습니다.'
    });

}

function testgps(){

    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(  function(success){
    localStorage.setItem('gps_lat',""+success.coords.latitude);
    localStorage.setItem('gps_long',""+success.coords.longitude);
    console.log("위치정보 입력완료");
    }, onError);

}


        /*
        cordova.odsayplugin.searchBusLane(버스 번호, 도시ID, 성공하면 보내는 함수,실패하면 보내는함수);
        cordova.odsayplugin.requestSubwayStationInfo(args0,args1, 성공하면 보내는 함수,실패하면 보내는함수);
        ~~
        뭐 많은데 함수 목록임
        사용하고싶을때 cordova.odsayplugin.(밑에 export뒤에있는부분 치면됨)
        각 함수가 뭐하는지는 그 odsay에 레퍼런스 부분이랑 함수이름 똑같이 만들었으니 참고하면
        좋을 듯
        그리고 데이터 값을 자바스크립트로 받고싶을때는
        위에 function test(){}처럼 로컬 스토리지에 넣어서 index에서 로컬스토리지 꺼내면 될듯
        몇개는 테스트해봣는데 몇개는 안했음 하다가 안되면 물어봐리
        무튼 끝

        위에 odsaytest에 함수에 테스트 해볼 수 잇도록 만들어 놨으니, 사용해보고 싶은거 해보면 될듯
        진짜 끝


        exports.searchBusLane = function (arg0,arg1, success, error) {
            exec(success, error, 'odsayplugin', 'searchBusLane', [arg0,arg1]);
        };

        exports.requestSubwayStationInfo = function (arg0, success, error) {
            exec(success, error, 'odsayplugin', 'requestSubwayStationInfo', [arg0]);
        };

        exports.requestIntercityServiceTime = function (arg0,arg1, success, error) {
            exec(success, error, 'odsayplugin', 'requestIntercityServiceTime', [arg0,arg1]);
        };

        exports.requestExpressServiceTime = function (arg0,arg1, success, error) {
            exec(success, error, 'odsayplugin', 'requestExpressServiceTime', [arg0,arg1]);
        };

        exports.requestSubwayPath = function (arg0,arg1,arg2,arg3 success, error) {
            exec(success, error, 'odsayplugin', 'requestSubwayPath', [arg0,arg1,arg2,arg3]);
        };

        exports.requestExpressBusTerminals = function (arg0,arg1, success, error) {
            exec(success, error, 'odsayplugin', 'requestExpressBusTerminals', [arg0,arg1]);
        };

        exports.requestIntercityBusTerminals = function (arg0,arg1, success, error) {
            exec(success, error, 'odsayplugin', 'requestIntercityBusTerminals', [arg0,arg1]);
        };

        exports.requestSearchCID = function (arg0, success, error) {
            exec(success, error, 'odsayplugin', 'requestSearchCID', [arg0]);
        };


        exports.requestIntercityBusTerminals = function (arg0,arg1, success, error) {
            exec(success, error, 'odsayplugin', 'requestIntercityBusTerminals', [arg0,arg1]);
        };

        exports.requestTrainServiceTime = function (arg0,arg1, success, error) {
            exec(success, error, 'odsayplugin', 'requestTrainServiceTime', [arg0,arg1]);
        };

        exports.requestSearchPubTransPath = function (arg0,arg1,arg2,arg3,arg4,arg5,arg6, success, error) {
        exec(success, error, 'odsayplugin', 'requestSearchPubTransPath', [arg0,arg1,arg2,arg3,arg4,arg5,arg6]);
        };

        exports.requestSubwayPath = function (arg0,arg1,arg2,arg3 ,success, error) {
        exec(success, error, 'odsayplugin', 'requestSubwayPath', [arg0,arg1,arg2,arg3]);
        };



        */




