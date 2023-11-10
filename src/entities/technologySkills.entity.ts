import {
  Column,
  Entity,
  PrimaryColumn,
  BaseEntity,
  Unique,
} from 'typeorm'

// 这里可以修改表名
@Entity({ name: 'technology_skills' })
export class TechnologySkills extends BaseEntity {
  // @Column('char', { name: 'onetsoc_code', comment: 'onetsoc_code' }) // 文章ID
  @PrimaryColumn('char')
  onetsoc_code: string
  @Column('varchar', { name: 'example', comment: 'example' }) //  文章内容
  example: string
  @Column('decimal', { name: 'commodity_code', comment: 'commodity_code' }) // 分类ID
  commodity_code: number
  @Column('char', { name: 'hot_technology', comment: 'hot_technology' }) // 文章标题
  hot_technology: string
  @Column('char', { name: 'in_demand', comment: 'in_demand' }) // 点击量
  in_demand: string

}

// @Entity({ name: 'articleCategory' })
// @Unique('index__api', ['id'])
// export class ArticleType extends BaseEntity {
//   @PrimaryGeneratedColumn()
//   id: number
//   @Column('int', { name: 'categoryId' }) // 分类ID
//   categoryId: number
//   @Column('varchar', { name: 'categoryName' }) //  文章内容
//   categoryName: string
//   @Column('int', { name: 'sort' }) //  排序
//   sort: string

//   @Column('int', { name: 'status', default: 0 }) //  排序
//   status: string
//   @Column('datetime', { name: 'create_time' }) // 创建时间
//   create_time: Date

//   @Column('datetime', { name: 'update_time' }) // 更新时间
//   update_time: Date
// }
