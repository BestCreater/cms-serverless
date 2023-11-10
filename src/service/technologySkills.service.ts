import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, Like, getConnection } from 'typeorm'

import { TechnologySkills } from '../entities/technologySkills.entity'
import { UnspscReference } from '../entities/unspscReference.entity'
import { TechVO } from 'src/entities/techVO.entity';

@Injectable()
export class TechnologySkillsService {
  constructor(
    @InjectRepository(TechnologySkills)
    private readonly technologySkillsRepository: Repository<TechnologySkills>,
  ) { }


  async findAll() {
    const list = await this.technologySkillsRepository.find();


    return {
      list
    }
  }

  async listSummaryByCode(onetsocCode: string) {
    const list = await this.technologySkillsRepository
      .createQueryBuilder("t")
      .leftJoinAndSelect('unspsc_reference', 'u', 't.commodity_code = u.commodity_code')
      .where("t.onetsoc_code = :onetsocCode", { onetsocCode })
      .orderBy("commodity_title", "ASC")
      .addOrderBy("example", "ASC")
      .select([
        "t.onetsoc_code as onetsocCode",
        "u.commodity_title as commodityTitle",
        "u.commodity_code as commodityCode",
        "example",
        "u.class_title as classTitle",
        "u.family_title as familyTitle",
        "u.segment_title as segmentTitle",
      ])
      .getRawMany();



    return {
      list
    }
  }
  async listDetailByCode(onetsocCode: string) {
    const list = await this.technologySkillsRepository
      .createQueryBuilder("technology_skills")
      .leftJoinAndSelect('unspsc_reference', 'unspsc_reference', 'technology_skills.commodity_code = unspsc_reference.commodity_code')
      .where("technology_skills.onetsoc_code = :onetsocCode", { onetsocCode })
      .orderBy("commodity_title", "ASC")
      .addOrderBy("example", "ASC")
      .select([
        "technology_skills.onetsoc_code as onetsocCode",
        "unspsc_reference.commodity_title as commodityTitle",
        "example",
        "unspsc_reference.class_title as classTitle",
        "unspsc_reference.family_title as familyTitle",
        "unspsc_reference.segment_title as segmentTitle",
      ])
      .getRawMany();

    return {
      list
    }
  }
}
