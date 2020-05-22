import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IVote, ITotal } from './interface/vote.interface';
import { CreateVoteDto } from './dto/create.vote.dto';

@Injectable()
export class VoteService {
    constructor(@Inject('VOTE_MODEL') 
    private readonly voteModel: Model<IVote>) {};

    async create(createVoteDto: CreateVoteDto): Promise<IVote> {
        const createdVote = new this.voteModel(createVoteDto);
        return createdVote.save();
    }
    

    async getTotal(timezone: string): Promise<ITotal> {
        const like = await this.voteModel.count({ timestamp: timezone, type: 'like' }).exec();
        const love = await this.voteModel.count({ timestamp: timezone, type: 'love'}).exec();
        const greening = await this.voteModel.count({ timestamp: timezone, type: 'greening'}).exec();     
        const surprise = await this.voteModel.count({ timestamp: timezone, type: 'surprise'}).exec();      
        const sad = await this.voteModel.count({ timestamp: timezone, type: 'sad'}).exec();
        const angry = await this.voteModel.count({ timestamp: timezone, type: 'angry'}).exec();
        
        return {like, love, greening, surprise, sad, angry}
    }
}