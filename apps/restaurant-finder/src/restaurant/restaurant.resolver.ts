import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RestaurantResolverBase } from "./base/restaurant.resolver.base";
import { Restaurant } from "./base/Restaurant";
import { RestaurantService } from "./restaurant.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Restaurant)
export class RestaurantResolver extends RestaurantResolverBase {
  constructor(
    protected readonly service: RestaurantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
