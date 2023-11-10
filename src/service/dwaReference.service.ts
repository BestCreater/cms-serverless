
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, Like, getConnection } from 'typeorm'

import { DwaReference } from '../entities/dwaReference.entity'

@Injectable()
export class DwaReferenceService {
    constructor(
        @InjectRepository(DwaReference)
        private readonly dwaReferenceRepository: Repository<DwaReference>,
    ) { }

    async listSummaryByCode(onetsocCode: string) {
        const list = await this.dwaReferenceRepository
            .createQueryBuilder("d")
            .where("dwa_id in (SELECT dwa_id FROM tasks_to_dwas WHERE onetsoc_code = :onetsocCode)", { onetsocCode })
            .select([
                "dwa_id as dwaId",
                "iwa_id as iwaId",
                "element_id as elementId",
                "dwa_title as dwaTitle",
            ])
            .getRawMany();

        return {
            list
        }
    }
    async listDetailByCode(onetsocCode: string) {
        const list = await this.dwaReferenceRepository
            .createQueryBuilder("d")
            .where("dwa_id in (SELECT dwa_id FROM tasks_to_dwas WHERE onetsoc_code = :onetsocCode)", { onetsocCode })
            .select([
                "dwa_id as dwaId",
                "iwa_id as iwaId",
                "element_id as elementId",
                "dwa_title as dwaTitle",
            ])
            .getRawMany();

        return {
            list
        }
    }
}
