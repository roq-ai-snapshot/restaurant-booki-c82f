import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  role: yup.string().nullable(),
  salary: yup.number().integer().nullable(),
  hire_date: yup.date().nullable(),
  termination_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
