import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { CreateVoteDto } from './dto/create.vote.dto';
import { VoteService } from './vote.service';
import { from } from 'rxjs';
@Controller('votes')
export class VoteController {
    constructor(private voteService: VoteService) {}

    @Post()
    async create(@Body() CreateVoteDto: CreateVoteDto) {
      return this.voteService.create(CreateVoteDto);
    }
  
  @Get('total')
  getVotes(@Query('timezone') timezone) {
          return this.voteService.getTotal(timezone);
      }
  }
}