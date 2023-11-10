import {
    Column,
    Entity,
    PrimaryColumn,
    BaseEntity,
} from 'typeorm'

// 这里可以修改表名
@Entity({ name: 'dwa_reference' })
export class DwaReference extends BaseEntity {
    @PrimaryColumn('varchar')
    dwa_id: string
    @Column('varchar', { name: 'iwa_id', comment: 'iwa_id' })
    iwa_id: string

    @Column('varchar', { name: 'element_id', comment: 'element_id' })
    element_id: string

    @Column('varchar', { name: 'dwa_title', comment: 'dwa_title' })
    dwa_title: string


}