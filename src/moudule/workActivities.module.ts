

import { Module } from '@nestjs/common';
import { WorkActivitiesService } from '../service/workActivities.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { WorkActivities } from '../entities/workActivities.entity'
import { ContentModelReference } from 'src/entities/contentModelReference.entity';



@Module({
    imports: [TypeOrmModule.forFeature([WorkActivities, ContentModelReference])],
    controllers: [],
    providers: [WorkActivitiesService],
    exports: [WorkActivitiesService],
})
export class WorkActivitiesModule { }
