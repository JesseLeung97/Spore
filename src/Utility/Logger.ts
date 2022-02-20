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

// These errors log failure to load JSON.
// Best not to set their strings using the same loader
class ConverterLogger {
    CantFindJson(name: string) {
        console.error(`A Json file named "${name}.json" could not be found.`);
    }
}

export { InfectedLogger, ConverterLogger };