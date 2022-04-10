export declare type Fun = (p?: number) => number;
export declare const Compose: (fns: Fun[]) => (arg: number) => number;
export declare const double: (num: number) => number;
export declare const triple: (num: number) => number;
