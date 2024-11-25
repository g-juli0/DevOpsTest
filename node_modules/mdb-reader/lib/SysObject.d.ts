export default interface SysObject {
    objectName: string;
    /**
     * null = unknown
     */
    objectType: SysObjectType | null;
    tablePage: number;
    flags: number;
}
/**
 * @see https://github.com/brianb/mdbtools/blob/d6f5745d949f37db969d5f424e69b54f0da60b9b/include/mdbtools.h#L73-L87
 */
export declare enum SysObjectType {
    Form = 0,
    Table = 1,
    Macro = 2,
    SystemTable = 3,
    Report = 4,
    Query = 5,
    LinkedTable = 6,
    Module = 7,
    Relationship = 8,
    DatabaseProperty = 11
}
export declare function isSysObjectType(typeValue: number): typeValue is SysObjectType;
/**
 * @see https://github.com/jahlborn/jackcess/blob/3f75e95a21d9a9e3486519511cdd6178e3c2e3e4/src/main/java/com/healthmarketscience/jackcess/impl/DatabaseImpl.java#L194-L202
 */
export declare function isSystemObject(o: Pick<SysObject, "flags">): boolean;
