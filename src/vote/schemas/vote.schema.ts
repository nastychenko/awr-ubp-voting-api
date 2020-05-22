import * as mongoose from 'mongoose';

export const VoteSchema = new mongoose.Schema({
    type: { type: String },
    timestamp: { type: String },
}, { _id: false, collection: 'Vote'})