import { z } from 'zod';

const schema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  dateOfBirth: z.date(),
  startDate: z.date(),
  street: z.string().min(1, { message: 'Street is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  state: z
    .string({
      required_error: 'State is required',
      invalid_type_error: 'State must be a number',
    })
    .min(1, { message: 'State is required' }),
  zipCode: z.coerce
    .number({
      required_error: 'ZipCode is required',
      invalid_type_error: 'ZipCode must be a number',
    })
    .gt(0, { message: 'ZipCode is invalid' }),
  department: z.string().min(1, { message: 'Department is required' }),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  firstName: '',
  lastName: '',
  dateOfBirth: new Date(),
  startDate: new Date(),
  street: '',
  city: '',
  state: 'Alabama',
  zipCode: 0,
  department: 'Sales',
};

export { defaultValues, schema };
export type { Schema };
