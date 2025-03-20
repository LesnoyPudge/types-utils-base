import * as Lib from './libs';



export type Override<
    _Source extends Lib.UnknownRecord, 
    _Key extends keyof _Source,
    _NewValue,
> = {
    [K in keyof _Source]: K extends _Key ? _NewValue : _Source[K];
};

// export type SimplifyDeep<_Source> = { 
//     [KeyType in keyof _Source]: (
//         _Source[KeyType] extends object 
//             ? SimplifyDeep<_Source[KeyType]> 
//             : _Source[KeyType]
//     );
// } & {};

export type StrictOmit<
    _ObjectType, 
    _KeysType extends keyof _ObjectType
> = Lib.Except<_ObjectType, _KeysType, {requireExactProps: true}>;

export type NonEmptyArray<_Type> = [_Type, ..._Type[]];

export type AnyFunction<
    _Args extends Lib.UnknownArray = any[], 
    _Return = any
> = (...args: _Args) => _Return;

export type AnyRecord<
    _Keys extends PropertyKey = PropertyKey,
    _Values = any
> = Record<_Keys, _Values>;

export type VoidFunction = () => void;