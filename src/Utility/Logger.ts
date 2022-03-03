//----- Configuration -----//
//----- Types -----//
import { TErrors } from "src/Utility/types";
//----- Components -----//
import { GetTexts } from "src/Utility/JsonConverter";
//----- Outside Libraries -----//


class InfectedLogger {
    errorTexts: TErrors = GetTexts("Errors");
    
    LoopAndAnimationTimeConflict() {
        console.warn(this.errorTexts.Infected.LoopAndAnimationTimeConflict);
    }
}

/**
 *  Handles logging of errors related to a failure to load JSON files
 *  Uses hardcodes strings to prevent failing from the issue it is reporting
 */
class ConverterLogger {
    CantFindJson(name: string) {
        console.error(`A Json file named "${name}.json" could not be found.`);
    }
}

export { InfectedLogger, ConverterLogger };