import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import CreateEmployeeForm from './createEmployeeForm';
import { Schema, defaultValues, schema } from './createEmployeeForm/schema';

export default function EmployeeProvider() {
  const methods = useForm<Schema>({
    mode: 'all',
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <CreateEmployeeForm />
    </FormProvider>
  );
}
