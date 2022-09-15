import { Module } from "@nestjs/common";
import { RenderModule } from "nest-next";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import Next from "next";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
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
