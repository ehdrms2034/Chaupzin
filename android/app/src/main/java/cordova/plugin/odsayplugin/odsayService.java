package cordova.plugin.odsayplugin;

import android.content.Context;
import android.util.Log;

import com.odsay.odsayandroidsdk.API;
import com.odsay.odsayandroidsdk.ODsayData;
import com.odsay.odsayandroidsdk.ODsayService;
import com.odsay.odsayandroidsdk.OnResultCallbackListener;

import org.json.JSONObject;

import io.cordova.hellocordova.R;

public class odsayService{

    ODsayService odsay ;
    Context context;
    JSONObject json;
    public String result="nono";
    Object locks =new Object();
    boolean sync = false;
    int wait_time = 200;

    public odsayService(Context context) {
        this.context = context;
        try{
            odsay=ODsayService.init(context, "L5pOmDpMdARmtz/0GPjju4cmopjzUGRcRBF7IQoWORQ");
            odsay.setReadTimeout(5000);
            odsay.setConnectionTimeout(5000);
        }catch (Exception e){
            Log.e("오류","몰라",e);
        }


    }
    OnResultCallbackListener onResultCallbackListener = new OnResultCallbackListener() {
        @Override
        public void  onSuccess(ODsayData oDsayData, API api) {
            synchronized (locks) {
                json = oDsayData.getJson();
                result = json.toString();
                sync=true;
            }
            }

        @Override
        public void onError(int i, String s, API api) {
        }
    };

    String searchOnLane(String busNo,String CID){ //버스노선

        odsay.requestSearchBusLane(busNo,CID,"no","10","1",onResultCallbackListener);
        synchronized (locks){
            try {while(sync==false)
                locks.wait(wait_time);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        sync = false;
        return result;
    }

    String requestSubwayStationInfo(String subnum){ //지하철역 세부정보
            odsay.requestSubwayStationInfo(subnum, onResultCallbackListener);
        synchronized (locks){
            try {while(sync==false)
                locks.wait(wait_time);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        sync = false;
        return result;

    }

    String requestIntercityServiceTime(String startID,String endID){ //시외버스 운행정보
            odsay.requestIntercityServiceTime(startID, endID, onResultCallbackListener);
        synchronized (locks){
            try {while(sync==false)
                locks.wait(wait_time);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        sync = false;
        return result;
    }

    String requestExpressServiceTime(String StartID,String endID){ //고속버스 운행정보
                odsay.requestExpressServiceTime(StartID,endID,onResultCallbackListener);
        synchronized (locks){
            try {while(sync==false)
                locks.wait(wait_time);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        sync = false;
        return result;

    }

    String requestSubwayPath(String CID, String StartID, String EndID, String Spot){ //지하철 노선도
            odsay.requestSubwayPath(CID,StartID,EndID,Spot,onResultCallbackListener);
        synchronized (locks){
            try {while(sync==false)
                locks.wait(wait_time);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        sync = false;
        return result;


    }

    String requestExpressBusTerminals(String CID, String City_name){ // 고속버스 터미널 조회
            odsay.requestExpressBusTerminals(CID,City_name,onResultCallbackListener);
        synchronized (locks){
            try {while(sync==false)
                locks.wait(wait_time);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        sync = false;
        return result;
    }

    String requestIntercityBusTerminals(String CID, String City_name){ //시외버스 터미널 조회
            odsay.requestIntercityBusTerminals(CID,City_name,onResultCallbackListener);
        synchronized (locks){
            try {while(sync==false)
                locks.wait(wait_time);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        sync = false;
        return result;
    }

    String requestSearchCID(String City_name){ //도시 이름으로 번호 조회
        odsay.requestSearchCID(City_name,onResultCallbackListener);
        synchronized (locks){
            try {while(sync==false)
                locks.wait(wait_time);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        sync = false;
        return result;
    }

    String requestTrainServiceTime(String startId, String EndId){ //열차 ktx 운행정보
        odsay.requestTrainServiceTime(startId,EndId,onResultCallbackListener);
        synchronized (locks){
            try {while(sync==false)
                locks.wait(wait_time);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        sync = false;
        return result;

    }

    String requestSearchPubTransPath(String startX, String startY, String EndX, String EndY, String OPT, String searchType, String SearchPathType){
        odsay.requestSearchPubTransPath(startX,startY,EndX,EndY,OPT,searchType,SearchPathType,onResultCallbackListener); //대중교통 길찾기
        synchronized (locks){
            try {while(sync==false)
                locks.wait(wait_time);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        sync = false;
        return result;
    }

    String requestSubwayTimeTable(String StationID, String wayCode){
        odsay.requestSubwayTimeTable(StationID,wayCode,onResultCallbackListener); //대중교통 길찾기
        synchronized (locks){
            try {while(sync==false)
                locks.wait(wait_time);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        sync = false;
        return result;
    }

    String requestSearchStation(String Cname,String CID,String stationClass){
        odsay.requestSearchStation(Cname,CID,stationClass,null,null,null,onResultCallbackListener); //
        synchronized (locks){
            try {while(sync==false)
                locks.wait(wait_time);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        sync = false;
        return result;
    }

}
