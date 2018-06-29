
function requestSearchStation(Station_name,Cityname,Station_class){
    cordova.odsayplugin.requestSearchStation(Station_name,Cityname,Station_class,function(success){
    localStorage.setItem('odsay_temp',success);
    },null);

    ;}

function searchsubwaytimetable(Station_id){
    cordova.odsayplugin.requestSubwayTimeTable(Station_id,"",function(success){
    localStorage.setItem('odsay_timetable',success);

    },null);

;}
