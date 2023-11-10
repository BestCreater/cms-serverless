import { Module } from '@nestjs/common';
import { TaskStatementsController } from '../controller/taskStatements.controller';
import { TaskStatementsService } from '../service/taskStatements.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TaskStatements } from '../entities/taskStatements.entity'
import { TaskRatings } from '../entities/taskRatings.entity'



@Module({
    imports: [TypeOrmModule.forFeature([TaskStatements, TaskRatings])],
    controllers: [TaskStatementsController],
    providers: [TaskStatementsService],
    exports: [TaskStatementsService],
})
export class TaskStatementsModule { }
