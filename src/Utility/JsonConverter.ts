//----- Configuration -----//
import Errors from "Utility/Errors.json";
//----- Types -----//
import { TErrors } from "Utility/types";
//----- Components -----//
import { ConverterLogger } from "Utility/Logger";
//----- Outside Libraries -----//


const jsonDefine: {[key: string]: any} = {
    "Errors": Errors
}

function Convert<T>(objectName: string): T | null {
    const jsonFile = jsonDefine[objectName];
    if(jsonFile === undefined) {
        ConverterLogger.CantFindJson(objectName);
        return;
    }
    return jsonFile as T;
}