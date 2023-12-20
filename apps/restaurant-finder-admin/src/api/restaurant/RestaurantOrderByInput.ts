import { SortOrder } from "../../util/SortOrder";

export type RestaurantOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
  zipCode?: SortOrder;
};
