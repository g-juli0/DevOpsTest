/**
 * Safe deep merge two objects by handling circular references and conflicts
 *
 * in case of conflicting property, it will be merged with a modified property by adding a prefix
 * @param target
 * @param mergeStringProperties
 * @param sources
 */
export declare function safeObjectAssign(target: any, mergeStringProperties: string[], ...sources: any): any;
