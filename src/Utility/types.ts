type TErrors = {
    Infected: {
        LoopAndAnimationTimeConflict: string
    }
}

type TPair<T,K> = [T,K];
type TPairs<T,K> = TPair<T,K>[];

export { TErrors, TPair, TPairs };