import {
    Column,
    Entity,
    PrimaryColumn,
    BaseEntity,
} from 'typeorm'

// 这里可以修改表名
@Entity({ name: 'work_activities' })
export class WorkActivities extends BaseEntity {
    @PrimaryColumn('varchar')
    element_id: string
    @PrimaryColumn('char')
    onetsoc_code: string

    @Column('varchar', { name: 'scale_id', comment: 'scale_id' })
    scale_id: string


    @Column('decimal', { name: 'data_value', comment: 'data_value' })
    data_value: number

    @Column('decimal', { name: 'n', comment: 'n' })
    n: number


    @Column('decimal', { name: 'standard_error', comment: 'standard_error' })
    standard_error: number

    @Column('decimal', { name: 'lower_ci_bound', comment: 'lower_ci_bound' })
    lower_ci_bound: number

    @Column('decimal', { name: 'upper_ci_bound', comment: 'upper_ci_bound' })
    upper_ci_bound: number

    @Column('varchar', { name: 'recommend_suppress', comment: 'recommend_suppress' })
    recommend_suppress: string

    @Column('char', { name: 'not_relevant', comment: 'not_relevant' })
    not_relevant: string

    @Column('date', { name: 'date_updated', comment: 'date_updated' })
    date_updated: Date

    @Column('varchar', { name: 'domain_source', comment: 'domain_source' })
    domain_source: string

}