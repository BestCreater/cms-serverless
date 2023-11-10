import { Module } from '@nestjs/common';
import { SummaryController } from '../controller/summary.controller';
import { TechnologySkillsModule } from '../moudule/technologySkills.module'
import { TaskStatementsModule } from '../moudule/taskStatements.module'
import { ToolsUsedModule } from '../moudule/toolsUsed.module'
import { SummaryVO } from 'src/entities/summaryVO.entity';
import { WorkActivitiesModule } from '../moudule/workActivities.module';
import { DwaReferenceModule } from '../moudule/dwaReference.module';


@Module({

    imports: [TechnologySkillsModule,
        TaskStatementsModule,
        ToolsUsedModule,
        WorkActivitiesModule,
        DwaReferenceModule,],
    controllers: [SummaryController],
    providers: [],
})
export class SummaryModule { }
