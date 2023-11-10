import { Module } from '@nestjs/common';
import { TechnologySkillsController } from '../controller/technologySkills.controller';
import { TechnologySkillsService } from '../service/technologySkills.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TechnologySkills } from '../entities/technologySkills.entity'
import { UnspscReference } from '../entities/unspscReference.entity'



@Module({
  imports: [TypeOrmModule.forFeature([TechnologySkills, UnspscReference])],
  controllers: [TechnologySkillsController],
  providers: [TechnologySkillsService],
  exports: [TechnologySkillsService],
})
export class TechnologySkillsModule { }
