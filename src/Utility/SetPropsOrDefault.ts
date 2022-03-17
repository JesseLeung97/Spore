//----- Configuration -----//
//----- Types -----//
//----- Components -----//
//----- Outside Libraries -----//

function SetPropsOrDefault<T>(prop: T, defaultVal: T): T {
    if(prop === undefined) {
        return defaultVal;
    } else {
        return prop;
    }
}

export { SetPropsOrDefault }