import { IsIn, IsString } from 'class-validator';

export class CreateVoteDto {
    @IsIn(['like', 'love', 'greening', 'surprise', 'sad', 'angry'])
    type: string;
    
    @IsString()
    timestamp: string; 
    
}