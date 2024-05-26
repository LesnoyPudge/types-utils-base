import * as Lib from 'src/libs';



export type Override<
    Source extends Lib.AnyRecord, 
    Key extends keyof Source,
    NewValue,
> = {
    [K in keyof Source]: K extends Key ? NewValue : Source[K];
};

export type SimplifyDeep<T> = { 
    [KeyType in keyof T]: (
        T[KeyType] extends object 
            ? SimplifyDeep<T[KeyType]> 
            : T[KeyType]
    );
} & {};