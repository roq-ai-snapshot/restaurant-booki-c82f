import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  reservation_time: yup.date().nullable(),
  number_of_people: yup.number().integer().nullable(),
  table_number: yup.number().integer().nullable(),
  special_request: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
