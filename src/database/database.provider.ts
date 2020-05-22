  
import * as mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config'
export const databaseProviders = [
  {
    inject: [ConfigService],
    provide: 'DATABASE_CONNECTION',
    useFactory: async (configService: ConfigService) => {
      console.log(configService.get<string>('MONGODB_WRITE_CONNECTION_STRING'));
        return await mongoose.connect(configService.get<string>('MONGODB_WRITE_CONNECTION_STRING'), {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          connectTimeoutMS: 5000,
          authSource: 'admin',
      });
    }
  },
];