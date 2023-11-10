import { Controller, Get, Param, Query, BadRequestException } from '@nestjs/common';
import { TaskStatementsService } from '../service/taskStatements.service';
import { TechnologySkillsService } from '../service/technologySkills.service';
import { ToolsUsedService } from '../service/toolsUsed.service';
import { DetailVO } from 'src/entities/detailVO.entity';

@Controller("/api/detail")
export class DetailController {
    constructor(
        private readonly taskStatementsService: TaskStatementsService,
        private readonly technologySkillsService: TechnologySkillsService,
        private readonly toolsUsedService: ToolsUsedService
    ) { }



    @Get("/findByOnetsocCode")
    async findByOnetsocCode(@Query('onetsocCode') onetsocCode: string) {
        if (onetsocCode) {
            const detail: DetailVO = new DetailVO();
            detail.taskList = (await this.taskStatementsService.listDetailByCode(onetsocCode)).list as any
            detail.technologySkillsList = (await this.technologySkillsService.listDetailByCode(onetsocCode)).list as any
            detail.toolsUsedList = (await this.toolsUsedService.listDetailByCode(onetsocCode)).list as any
            return detail;
        } else {
            throw new BadRequestException('onetsocCode 不能为空')
        }
    }
}
