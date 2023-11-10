import { Controller, Get, Param, Query, BadRequestException } from '@nestjs/common';
import { TaskStatementsService } from '../service/taskStatements.service';

@Controller("/api/tasks")
export class TaskStatementsController {
  constructor(private readonly taskStatementsService: TaskStatementsService) { }


  @Get("/listSummaryByCode")
  async listSummaryByCode(@Query('onetsocCode') onetsocCode: string) {
    if (onetsocCode) {
      return this.taskStatementsService.listSummaryByCode(onetsocCode);
    } else {
      throw new BadRequestException('onetsocCode 不能为空')
    }
  }
}
