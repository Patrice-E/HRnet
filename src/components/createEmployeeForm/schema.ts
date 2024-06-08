import { z } from 'zod';

const schema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  dateOfBirth: z.date(),
  startDate: z.date(),
  street: z.string().min(1, { message: 'Street is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  state: z.string().min(1, { message: 'State is required' }),
  zipCode: z.number({ message: 'ZipCode is required' }),
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
  state: '',
  zipCode: 0,
  department: 'Sales',
};

export { defaultValues, schema };
export type { Schema };
