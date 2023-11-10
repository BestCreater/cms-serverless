import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
  Logger,
} from '@nestjs/common'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { Request } from 'express'
import * as dayjs from 'dayjs'
interface data<T> {
  data: T
}

@Injectable()
export class Response<T = any> implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<data<T>> {
    const ctx = context.switchToHttp()
    const request = ctx.getRequest<Request>()
    return next.handle().pipe(
      map(data => {
        const res = {
          status: 0,
          success: true,
          msg: '操作成功',
          data,
          time: dayjs().format('YYYY-MM-DD HH:mm:ss SSS'),
        }

        Logger.log(
          JSON.stringify({
            status: 0,
            success: true,
            msg: '操作成功',
            time: dayjs().format('YYYY-MM-DD HH:mm:ss SSS'),
          }),
          'Response',
        )
        return res
      }),
    )
  }
}
