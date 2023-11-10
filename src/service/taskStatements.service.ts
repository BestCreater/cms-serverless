import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, Like } from 'typeorm'

import { TaskStatements } from '../entities/taskStatements.entity'
// import { TaskRatings } from '../entities/taskRatings.entity'

@Injectable()
export class TaskStatementsService {
  constructor(
    @InjectRepository(TaskStatements)
    private readonly taskStatementsRepository: Repository<TaskStatements>,
  ) { }

  async listSummaryByCode(onetsocCode: string) {
    const list = await this.taskStatementsRepository
      .createQueryBuilder("ts")
      .leftJoinAndSelect('(SELECT * FROM task_ratings GROUP BY task_id)', 'tr', 'ts.task_id = tr.task_id')
      .where("tr.onetsoc_code = :onetsocCode", { onetsocCode })
      .orderBy("data_value")
      .select([
        "tr.onetsoc_code onetsocCode",
        "tr.task_id taskId",
        "data_value dataValue",
        "task",
      ])
      .getRawMany();

    return {
      list
    }
  }
  async listDetailByCode(onetsocCode: string) {
    const list = await this.taskStatementsRepository
      .createQueryBuilder("ts")
      .leftJoinAndSelect('(SELECT * FROM task_ratings GROUP BY task_id)', 'tr', 'ts.task_id = tr.task_id')
      .where("tr.onetsoc_code = :onetsocCode", { onetsocCode })
      .orderBy("data_value")
      .select([
        "tr.onetsoc_code onetsocCode",
        "tr.task_id taskId",
        "data_value dataValue",
        "task",
      ])
      .getRawMany();

    return {
      list
    }
  }
}
