import SaveIcon from '@mui/icons-material/Save';
import { LoadingButton } from '@mui/lab';
import { Container, Stack } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { departments } from '../../constants/departments';
import Fieldset from './Fieldset';
import RHFAutocomplete from './RHFAutocomplete';
import RHFDatePicker from './RHFDatePicker';
import RHFTextField from './RHFTextField';
import { Schema } from './schema';

export default function CreateEmployeeForm() {
  const {
    formState: { isSubmitting },
  } = useFormContext<Schema>();

  return (
    <Container maxWidth='sm' component='form'>
      <Stack spacing={1}>
        <RHFTextField name='firstName' label='First Name' />
        <RHFTextField name='lastName' label='Last name' />
        <RHFDatePicker<Schema> name='dateOfBirth' label='Date of birth' />
        <RHFDatePicker<Schema> name='startDate' label='Start date' />
        <Fieldset />
        <RHFAutocomplete<Schema>
          name='department'
          options={departments}
          label='Department'
        />
        <LoadingButton
          variant='contained'
          loading={isSubmitting}
          startIcon={<SaveIcon />}
        >
          {isSubmitting ? 'Saving...' : 'Save'}
        </LoadingButton>
      </Stack>
    </Container>
  );
}
