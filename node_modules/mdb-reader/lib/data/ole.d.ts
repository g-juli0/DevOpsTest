/// <reference types="node" />
import { Column } from "../column";
import Database from "../Database";
/**
 * @see https://github.com/brianb/mdbtools/blob/d6f5745d949f37db969d5f424e69b54f0da60b9b/src/libmdb/data.c#L626-L688
 */
export declare function readOLE(buffer: Buffer, _col: Column, db: Database): Buffer;
