import {
    Column,
    Entity,
    PrimaryColumn,
    BaseEntity,
} from 'typeorm'

// 这里可以修改表名
@Entity({ name: 'content_model_reference' })
export class ContentModelReference extends BaseEntity {
    @PrimaryColumn('varchar')
    element_id: string
    @Column('varchar', { name: 'element_name', comment: 'element_name' })
    element_name: string

    @Column('varchar', { name: 'description', comment: 'description' })
    description: string

}