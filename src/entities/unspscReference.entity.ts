import {
    Column,
    Entity,
    PrimaryColumn,
    BaseEntity,
    Unique,
} from 'typeorm'

// 这里可以修改表名
@Entity({ name: 'unspsc_reference' })
export class UnspscReference extends BaseEntity {
    // @Column('char', { name: 'onetsoc_code', comment: 'onetsoc_code' }) // 文章ID
    @PrimaryColumn('decimal') //  文章内容
    commodity_code: number

    @Column('varchar', { name: 'commodity_title', comment: 'commodity_title' }) //  文章内容
    commodity_title: string
    @Column('decimal', { name: 'class_code', comment: 'class_code' }) // 分类ID
    class_code: number

    @Column('varchar', { name: 'class_title', comment: 'class_title' }) //  文章内容
    class_title: string

    @Column('decimal', { name: 'family_code', comment: 'family_code' }) // 分类ID
    family_code: number


    @Column('varchar', { name: 'family_title', comment: 'family_title' }) //  文章内容
    family_title: string

    @Column('decimal', { name: 'segment_code', comment: 'segment_code' }) // 分类ID
    segment_code: number

    @Column('varchar', { name: 'segment_title', comment: 'segment_title' }) //  文章内容
    segment_title: string

}