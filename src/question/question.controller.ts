import { Body, Controller, Post } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  submitQuestion(@Body() createQuestionDto: CreateQuestionDto) {
    console.log(createQuestionDto.question);
  }
}
