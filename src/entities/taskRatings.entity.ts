import {
    Column,
    Entity,
    PrimaryColumn,
    BaseEntity,
} from 'typeorm'

// 这里可以修改表名
@Entity({ name: 'task_ratings' })
export class TaskRatings extends BaseEntity {
    // @Column('char', { name: 'onetsoc_code', comment: 'onetsoc_code' }) // 文章ID
    @PrimaryColumn('decimal')
    task_id: number

    @Column('char', { name: 'onetsoc_code', comment: 'onetsoc_code' }) //  文章内容
    onetsoc_code: string

    @Column('varchar', { name: 'scale_id', comment: 'scale_id' }) //  文章内容
    scale_id: string

    @Column('decimal', { name: 'category', comment: 'category' }) //  文章内容
    category: number

    @Column('decimal', { name: 'data_value', comment: 'data_value' }) // 分类ID
    data_value: number

    @Column('decimal', { name: 'n', comment: 'n' }) //  文章内容
    n: number

    @Column('decimal', { name: 'standard_error', comment: 'standard_error' }) // 分类ID
    standard_error: number

    @Column('decimal', { name: 'lower_ci_bound', comment: 'lower_ci_bound' }) //  文章内容
    lower_ci_bound: number

    @Column('decimal', { name: 'upper_ci_bound', comment: 'upper_ci_bound' }) // 分类ID
    upper_ci_bound: number

    @Column('varchar', { name: 'recommend_suppress', comment: 'recommend_suppress' }) // 点击量
    recommend_suppress: string

    @Column('date', { name: 'date_updated', comment: 'date_updated' }) // 文章标题
    date_updated: Date

    @Column('varchar', { name: 'domain_source', comment: 'domain_source' }) // 点击量
    domain_source: string

}