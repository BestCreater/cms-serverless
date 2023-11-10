

import { Module } from '@nestjs/common';
import { DwaReferenceService } from '../service/dwaReference.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { DwaReference } from '../entities/dwaReference.entity'



@Module({
    imports: [TypeOrmModule.forFeature([DwaReference])],
    controllers: [],
    providers: [DwaReferenceService],
    exports: [DwaReferenceService],
})
export class DwaReferenceModule { }
