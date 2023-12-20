import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const RestaurantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
        <TextInput label="zipCode" source="zipCode" />
      </SimpleForm>
    </Edit>
  );
};
