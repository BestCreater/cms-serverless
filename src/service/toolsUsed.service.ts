
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, Like, getConnection } from 'typeorm'

import { ToolsUsed } from '../entities/toolsUsed.entity'
import { UnspscReference } from '../entities/unspscReference.entity'

@Injectable()
export class ToolsUsedService {
    constructor(
        @InjectRepository(ToolsUsed)
        private readonly toolsUsedRepository: Repository<ToolsUsed>,
    ) { }


    async findAll() {
        const list = await this.toolsUsedRepository.find();


        return {
            list
        }
    }

    async listSummaryByCode(onetsocCode: string) {
        const list = await this.toolsUsedRepository
            .createQueryBuilder("t")
            .leftJoinAndSelect('unspsc_reference', 'u', 't.commodity_code = u.commodity_code')
            .where("t.onetsoc_code = :onetsocCode", { onetsocCode })
            .orderBy("commodity_title", "ASC")
            .addOrderBy("example", "ASC")
            .select([
                "t.onetsoc_code as onetsocCode",
                "u.commodity_code as commodityCode",
                "u.commodity_title as commodityTitle",
                "example",
            ])
            .getRawMany();

        return {
            list
        }
    }
    async listDetailByCode(onetsocCode: string) {
        const list = await this.toolsUsedRepository
            .createQueryBuilder("t")
            .leftJoinAndSelect('unspsc_reference', 'u', 't.commodity_code = u.commodity_code')
            .where("t.onetsoc_code = :onetsocCode", { onetsocCode })
            .orderBy("commodity_title", "ASC")
            .addOrderBy("example", "ASC")
            .select([
                "t.onetsoc_code as onetsocCode",
                "u.commodity_code as commodityCode",
                "u.commodity_title as commodityTitle",
                "example",
            ])
            .getRawMany();

        return {
            list
        }
    }
}
