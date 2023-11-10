import { Controller, Get, Param, Query, BadRequestException } from '@nestjs/common';
import { TechnologySkillsService } from '../service/technologySkills.service';

@Controller("/api/technologySkills")
export class TechnologySkillsController {
  constructor(private readonly technologySkillsService: TechnologySkillsService) { }


  @Get("/listAll")
  async listAll() {
    return this.technologySkillsService.findAll();
  }

  @Get("/listSummaryByCode")
  async listSummaryByCode(@Query('onetsocCode') onetsocCode: string) {
    if (onetsocCode) {
      return this.technologySkillsService.listSummaryByCode(onetsocCode);
    } else {
      throw new BadRequestException('onetsocCode 不能为空')
    }
  }
}
