import { Document } from 'mongoose';

export interface ITotal extends Document {
    readonly like: number,
    readonly love: number,
    readonly greening: number,
    readonly surprise: number,
    readonly sad: number,
    readonly angry: number,
}
export interface IVote extends Document {
    readonly type: string,
    readonly timestamp: string,
}
