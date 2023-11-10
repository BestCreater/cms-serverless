import { Controller, Get, Param, Query, BadRequestException } from '@nestjs/common';
import { ToolsUsedService } from '../service/toolsUsed.service';

@Controller("/api/toolsUsed")
export class ToolsUsedController {
  constructor(private readonly toolsUsedService: ToolsUsedService) { }


  @Get("/listAll")
  async listAll() {
    return this.toolsUsedService.findAll();
  }

  @Get("/listSummaryByCode")
  async listSummaryByCode(@Query('onetsocCode') onetsocCode: string) {
    if (onetsocCode) {
      return this.toolsUsedService.listSummaryByCode(onetsocCode);
    } else {
      throw new BadRequestException('onetsocCode 不能为空')
    }
  }
}
