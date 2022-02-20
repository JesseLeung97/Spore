//----- Configuration -----//
import Errors from "src/Utility/Errors.json";
//----- Types -----//
import { TErrors } from "src/Utility/types";
//----- Components -----//
import { ConverterLogger } from "src/Utility/Logger";
//----- Outside Libraries -----//

const jsonDefine = {
    "Errors": Errors
}

type TTextMasterName = keyof typeof jsonDefine;

function GetTexts<T>(objectName: TTextMasterName): T | null {
    const jsonFile = jsonDefine[objectName];
    console.log(jsonFile);
    if(jsonFile === undefined) {
        const logger = new ConverterLogger();
        logger.CantFindJson(objectName.toString());
        return;
    }
    return jsonFile as T;
}

export { GetTexts };