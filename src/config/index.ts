import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const MysqlConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '47.108.155.161',
  port: 3306,
  username: 'root',
  password: 'lsyy123456',
  database: 'o_net_online',
  entities: [__dirname + '/./**/*.entity.{js,ts}'],
  // 数据库同步更新
  synchronize: false,
  autoLoadEntities: true,
}

