package cordova.plugin.Calculators;

import android.util.Log;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class echoes a string called from JavaScript.
 */
public class calculator extends CordovaPlugin {
    cals calobject = new cals();

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        int firstNum = args.getInt(0);
        int secondNum = args.getInt(1);
        if (action.equals("add")) {
            int getAddRes = calobject.add(firstNum,secondNum);
            String resInString = Integer.toString(getAddRes);
            this.sendResponseToUI(resInString, callbackContext);
            return true;
        }else if(action.equals("sub")) {
            int getSubRes = calobject.sub(firstNum,secondNum);
            String resInString = Integer.toString(getSubRes);
            this.sendResponseToUI(resInString, callbackContext);
            return true;
        }
        else if(action.equals("mul")) {
            int getMulRes = calobject.mul(firstNum,secondNum);
            String resInString = Integer.toString(getMulRes);
            this.sendResponseToUI(resInString, callbackContext);
            return true;
        }
        else if(action.equals("div")) {
            int getDivRes = calobject.div(firstNum,secondNum);
            String resInString = Integer.toString(getDivRes);
            this.sendResponseToUI(resInString, callbackContext);
            return true;
        }

        return false;
    }

    private void sendResponseToUI(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
            Log.d("되고:",message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}
