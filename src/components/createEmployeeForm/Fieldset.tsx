import { Stack, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { states } from '../../constants/states';
import RHFAutocomplete from './RHFAutocomplete';
import { Schema } from './schema';

export default function Fieldset() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>();

  return (
    <fieldset>
      <Stack spacing={1}>
        <legend>Address</legend>
        <TextField
          {...register('street')}
          label='Street'
          size='small'
          error={!!errors.street}
          helperText={errors.street?.message}
        />
        <TextField
          {...register('city')}
          label='City'
          size='small'
          error={!!errors.city}
          helperText={errors.city?.message}
        />
        <RHFAutocomplete<Schema>
          name='department'
          options={states}
          label='Department'
        />
        <TextField
          {...register('zipCode')}
          label='ZipCode'
          size='small'
          error={!!errors.zipCode}
          helperText={errors.zipCode?.message}
        />
      </Stack>
    </fieldset>
  );
}
