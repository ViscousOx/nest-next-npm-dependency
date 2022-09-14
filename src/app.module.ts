import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Next from 'next';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({ dev: true }),
      /* null means that nest-next 
        should look for pages in root dir */
      { viewsDir: null },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
