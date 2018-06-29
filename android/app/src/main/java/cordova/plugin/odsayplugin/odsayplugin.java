package cordova.plugin.odsayplugin;

import android.util.Log;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class echoes a string called from JavaScript.
 */
public class odsayplugin extends CordovaPlugin {
    odsayService odsay;
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        odsay = new odsayService(this.cordova.getActivity().getApplicationContext());

        if (action.equals("searchBusLane")) {
            //String message = args.getString(0);
            String busNo = args.getString(0);
            String CID = args.getString(1);
            String message = odsay.searchOnLane(busNo,CID);
            this.setMessege(message, callbackContext);
            return true;
        } else if (action.equals("requestSubwayStationInfo")) {
            //String message = args.getString(0);
            String SubNum=args.getString(0);
            String message = odsay.requestSubwayStationInfo(SubNum);
            this.setMessege(message, callbackContext);
            return true;
        }else if (action.equals("requestIntercityServiceTime")) {
            //String message = args.getString(0);
            String StartID=args.getString(0);
            String EndID = args.getString(1);
            String message = odsay.requestIntercityServiceTime(StartID,EndID);
            this.setMessege(message, callbackContext);
            return true;
        }else if (action.equals("requestExpressServiceTime")) {
            //String message = args.getString(0);
            String StartID=args.getString(0);
            String EndID = args.getString(1);
            String message = odsay.requestExpressServiceTime(StartID,EndID);
            this.setMessege(message, callbackContext);
            return true;
        }else if (action.equals("requestSubwayPath")) {
            //String message = args.getString(0);
            String CID = args.getString(0);
            String StartID=args.getString(1);
            String EndID = args.getString(2);
            String Spot = args.getString(3);
            String message = odsay.requestSubwayPath(CID,StartID,EndID,Spot);
            this.setMessege(message, callbackContext);
            return true;
        }else if (action.equals("requestExpressBusTerminals")) {
            //String message = args.getString(0);
            String CID=args.getString(0);
            String City_name = args.getString(1);
            String message = odsay.requestExpressBusTerminals(CID,City_name);
            this.setMessege(message, callbackContext);
            return true;
        }else if (action.equals("requestIntercityBusTerminals")) {
            //String message = args.getString(0);
            String CID=args.getString(0);
            String City_name = args.getString(1);
            String message = odsay.requestIntercityBusTerminals(CID,City_name);
            this.setMessege(message, callbackContext);
            return true;
        }else if (action.equals("requestSearchCID")) {
            //String message = args.getString(0);
            String City_name = args.getString(0);
            String message = odsay.requestSearchCID(City_name);
            this.setMessege(message, callbackContext);
            return true;
        }else if (action.equals("requestIntercityBusTerminals")) {
            //String message = args.getString(0);
            String CID=args.getString(0);
            String City_name = args.getString(1);
            String message = odsay.requestIntercityBusTerminals(CID,City_name);
            this.setMessege(message, callbackContext);
            return true;
        }else if (action.equals("requestTrainServiceTime")) {
            //String message = args.getString(0);
            String startId=args.getString(0);
            String EndId = args.getString(1);
            String message = odsay.requestTrainServiceTime(startId,EndId);
            this.setMessege(message, callbackContext);
            return true;
        }else if (action.equals("requestSearchPubTransPath")) {
            //String message = args.getString(0);
            String startX=args.getString(0);
            String startY=args.getString(1);
            String EndX = args.getString(2);
            String EndY = args.getString(3);
            String OPT = args.getString(4);
            String searchType = args.getString(5);
            String searchPathType = args.getString(6);
            String message = odsay.requestSearchPubTransPath(startX,startY,EndX,EndY,OPT,searchType,searchPathType);
            this.setMessege(message, callbackContext);
            return true;
        }else if(action.equals("requestSubwayTimeTable")){
            String StationID=args.getString(0);
            String wayCode=args.getString(1);
            String message = odsay.requestSubwayTimeTable(StationID,wayCode);
            this.setMessege(message, callbackContext);

        }else if(action.equals("requestSearchStation")){
            String Cname=args.getString(0);
            String CID=odsay.requestSearchCID(args.getString(1));
            String stationClass = args.getString(2);
            JSONObject CCID = new JSONObject(CID);
            String message = odsay.requestSearchStation(Cname,CCID.getJSONObject("result").getJSONArray("CID").getJSONObject(0).getString("cityCode"),stationClass);
            this.setMessege(message, callbackContext);
        }

        return false;
    }

    private void setMessege(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            Log.d("JSON:",message);
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}
