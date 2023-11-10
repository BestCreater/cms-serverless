import {
    Column,
    Entity,
    PrimaryColumn,
    BaseEntity,
} from 'typeorm'

// 这里可以修改表名
@Entity({ name: 'task_statements' })
export class TaskStatements extends BaseEntity {
    // @Column('char', { name: 'onetsoc_code', comment: 'onetsoc_code' }) // 文章ID
    @PrimaryColumn('decimal')
    task_id: number

    @Column('char', { name: 'onetsoc_code', comment: 'onetsoc_code' }) //  文章内容
    onetsoc_code: string

    @Column('varchar', { name: 'task', comment: 'task' }) //  文章内容
    task: string

    @Column('varchar', { name: 'task_type', comment: 'task_type' }) //  文章内容
    task_type: string

    @Column('decimal', { name: 'incumbents_responding', comment: 'incumbents_responding' }) // 分类ID
    incumbents_responding: number

    @Column('date', { name: 'date_updated', comment: 'date_updated' }) // 文章标题
    date_updated: Date

    @Column('varchar', { name: 'domain_source', comment: 'domain_source' }) // 点击量
    domain_source: string

}