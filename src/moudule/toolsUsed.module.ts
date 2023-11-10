

import { Module } from '@nestjs/common';
import { ToolsUsedController } from '../controller/toolsUsed.controller';
import { ToolsUsedService } from '../service/toolsUsed.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ToolsUsed } from '../entities/toolsUsed.entity'
import { UnspscReference } from '../entities/unspscReference.entity'



@Module({
    imports: [TypeOrmModule.forFeature([ToolsUsed, UnspscReference])],
    controllers: [ToolsUsedController],
    providers: [ToolsUsedService],
    exports: [ToolsUsedService],
})
export class ToolsUsedModule { }
