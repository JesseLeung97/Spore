//----- Configuration -----//
import { ForceDefine1D, ForceDefine2D } from "src/Forces/ForceDefine";
//----- Types -----//
//----- Components -----//
//----- Outside Libraries -----//

type TErrors = {
    Infected: {
        LoopAndAnimationTimeConflict: string
    }
}

type TPair<T,K> = [T,K];
type TPairs<T,K> = TPair<T,K>[];

type TForce1D = keyof typeof ForceDefine1D;
type TForce2D = keyof typeof ForceDefine2D;

export { TErrors, TPair, TPairs, TForce1D, TForce2D };