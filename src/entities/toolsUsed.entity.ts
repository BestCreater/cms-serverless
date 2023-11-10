import {
    Column,
    Entity,
    PrimaryColumn,
    BaseEntity,
} from 'typeorm'

// 这里可以修改表名
@Entity({ name: 'tools_used' })
export class ToolsUsed extends BaseEntity {
    // @Column('char', { name: 'onetsoc_code', comment: 'onetsoc_code' }) // 文章ID
    @PrimaryColumn('char')
    onetsoc_code: string
    @Column('varchar', { name: 'example', comment: 'example' }) //  文章内容
    example: string
    @PrimaryColumn('decimal')
    commodity_code: number

}