import * as Lib from 'src/libs'



export type Override<
    Source extends AnyRecord, 
    Key extends keyof Source,
    NewValue,
> = {
    [K in keyof Source]: K extends Key ? NewValue : Source[K];
};
