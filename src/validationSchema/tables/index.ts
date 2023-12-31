import * as yup from 'yup';

export const tableValidationSchema = yup.object().shape({
  table_number: yup.number().integer().nullable(),
  capacity: yup.number().integer().nullable(),
  availability: yup.boolean().nullable(),
  location_description: yup.string().nullable(),
  restaurant_id: yup.string().nullable().required(),
});
