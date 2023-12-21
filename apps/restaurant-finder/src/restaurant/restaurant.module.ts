import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RestaurantModuleBase } from "./base/restaurant.module.base";
import { RestaurantService } from "./restaurant.service";
import { RestaurantController } from "./restaurant.controller";
import { RestaurantResolver } from "./restaurant.resolver";

@Module({
  imports: [RestaurantModuleBase, forwardRef(() => AuthModule)],
  controllers: [RestaurantController],
  providers: [RestaurantService, RestaurantResolver],
  exports: [RestaurantService],
})
export class RestaurantModule {}
