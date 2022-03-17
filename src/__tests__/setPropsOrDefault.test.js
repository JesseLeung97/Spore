//----- Configuration -----//
//----- Types -----//
//----- Components -----//
//----- Outside Libraries -----//

test("SetDefaultOrProps method test", () => {
    const { SetPropsOrDefault } = require("../Utility/SetPropsOrDefault");

    const numberProps = 13;
    const numberPropsDefault = 2;
    const numberSetTestResult = SetPropsOrDefault(numberProps, numberPropsDefault);
    expect(typeof numberSetTestResult).toBe(typeof numberProps);
    expect(numberSetTestResult).toEqual(13);

    const undefinedNumberProps = undefined;
    const undefinedNumberPropsDefault = 2;
    const undefinedNumberSetTestResult = SetPropsOrDefault(undefinedNumberProps, undefinedNumberPropsDefault);
    expect(typeof undefinedNumberSetTestResult).toBe(typeof undefinedNumberPropsDefault);
    expect(undefinedNumberSetTestResult).toEqual(2);

    const stringProps = "test string";
    const stringPropsDefault = "default string";
    const stringSetTestResults = SetPropsOrDefault(stringProps, stringPropsDefault);
    expect(typeof stringSetTestResults).toBe(typeof stringProps);
    expect(stringSetTestResults).toEqual(stringProps);

    const undefinedStringProps = undefined;
    const undefinedStringPropsDefault = "undefined default string";
    const undefinedStringSetTestResults = SetPropsOrDefault(undefinedStringProps, undefinedStringPropsDefault);
    expect(typeof undefinedStringSetTestResults).toBe(typeof undefinedStringPropsDefault);
    expect(undefinedStringSetTestResults).toEqual(undefinedStringPropsDefault);

});