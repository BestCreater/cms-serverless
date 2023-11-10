import { Controller, Get, Param, Query, BadRequestException } from '@nestjs/common';
import { TaskStatementsService } from '../service/taskStatements.service';
import { TechnologySkillsService } from '../service/technologySkills.service';
// import { ToolsUsedService } from '../service/toolsUsed.service';
import { SummaryVO } from 'src/entities/summaryVO.entity';
import { WorkActivitiesService } from 'src/service/workActivities.service';
import { DwaReferenceService } from 'src/service/dwaReference.service';

@Controller("/api/summary")
export class SummaryController {
    constructor(
        private readonly taskStatementsService: TaskStatementsService,
        private readonly technologySkillsService: TechnologySkillsService,
        private readonly workActivitiesService: WorkActivitiesService,
        private readonly dwaService: DwaReferenceService,
        // private readonly toolsUsedService: ToolsUsedService
    ) { }



    @Get("/findByOnetsocCode")
    async summaryByOnetsocCode(@Query('onetsocCode') onetsocCode: string) {
        if (onetsocCode) {
            const summary: SummaryVO = new SummaryVO();
            summary.taskList = (await this.taskStatementsService.listSummaryByCode(onetsocCode)).list as any
            summary.technologySkillsList = (await this.technologySkillsService.listSummaryByCode(onetsocCode)).list as any
            summary.workActivitiesList = (await this.workActivitiesService.listSummaryByCode(onetsocCode)).list as any
            summary.detailWorkActivitiesList = (await this.dwaService.listSummaryByCode(onetsocCode)).list as any
            return summary;
        } else {
            throw new BadRequestException('onetsocCode 不能为空')
        }
    }
}
