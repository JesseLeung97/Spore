import Errors from "Utility/Errors.json";

const InfectedLogger = {
    LoopAndAnimationTimeConflict() {
        console.warn()
    }
}

// These errors log failure to load JSON.
// Best not to set their strings using the same loader
const ConverterLogger = {
    CantFindJson(name: string) {
        console.error(`A Json file named "${name}.json" could not be found.`);
    }
}

export { InfectedLogger, ConverterLogger };