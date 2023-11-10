import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { MysqlConfig } from './config'
import { TechnologySkillsModule } from './moudule/technologySkills.module'
import { TaskStatementsModule } from './moudule/taskStatements.module'
import { ToolsUsedModule } from './moudule/toolsUsed.module'
import { SummaryModule } from './moudule/summary.module'
import { WorkActivitiesModule } from './moudule/workActivities.module';
import { DwaReferenceModule } from './moudule/dwaReference.module';



@Module({
  imports: [
    TechnologySkillsModule,
    TaskStatementsModule,
    ToolsUsedModule,
    WorkActivitiesModule,
    DwaReferenceModule,
    SummaryModule,
    TypeOrmModule.forRoot(MysqlConfig)],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
