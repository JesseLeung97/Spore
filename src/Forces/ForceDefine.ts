//----- Configuration -----//
//----- Types -----//
//----- Components -----//
import { Gravity } from "src/Forces/Gravity";
import { WindResistanceX, WindResistanceY, WindResistance } from "src/Forces/WindResistance";
//----- Outside Libraries -----//

const ForceDefine1D = {
    "Gravity": Gravity,
    "WindResistanceX": WindResistanceX,
    "WindResistanceY": WindResistanceY
}

const ForceDefine2D = {
    "WindResistance": WindResistance
}


export { ForceDefine1D, ForceDefine2D}