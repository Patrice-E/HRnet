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
import { useAppStore } from '../../store';
import { useNavigate } from 'react-router-dom';

export default function CreateEmployeeForm() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext<Schema>();
  const { addUser } = useAppStore();

  const onSubmit = (data: Schema) => {
    addUser(data);
    navigate('/employees-list');
  };

  return (
    <Container maxWidth='sm' component='form' onSubmit={handleSubmit(onSubmit)}>
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
          type='submit'
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
