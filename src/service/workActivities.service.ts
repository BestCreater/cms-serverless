
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, Like, getConnection } from 'typeorm'

import { WorkActivities } from '../entities/workActivities.entity'

@Injectable()
export class WorkActivitiesService {
    constructor(
        @InjectRepository(WorkActivities)
        private readonly workActivitiesRepository: Repository<WorkActivities>,
    ) { }

    async listSummaryByCode(onetsocCode: string) {
        const list = await this.workActivitiesRepository
            .createQueryBuilder("w")
            .leftJoinAndSelect('content_model_reference', 'c', 'w.element_id = c.element_id')
            .where("onetsoc_code = :onetsocCode", { onetsocCode })
            .andWhere("data_value >= 3.0")
            .andWhere("not_relevant is null")
            .groupBy("w.element_id")
            .orderBy("data_value", "DESC")
            .select([
                "onetsoc_code as onetsocCode",
                "w.element_id as commodityCode",
                "data_value as dataValue",
                "element_name as elementName",
            ])
            .getRawMany();

        return {
            list
        }
    }
    async listDetailByCode(onetsocCode: string) {
        const list = await this.workActivitiesRepository
            .createQueryBuilder("w")
            .leftJoinAndSelect('content_model_reference', 'c', 'w.element_id = c.element_id')
            .where("onetsoc_code = :onetsocCode", { onetsocCode })
            .groupBy("w.element_id")
            .orderBy("data_value", "DESC")
            .select([
                "onetsoc_code as onetsocCode",
                "w.element_id as commodityCode",
                "data_value as dataValue",
                "element_name as elementName",
            ])
            .getRawMany();

        return {
            list
        }
    }
}
