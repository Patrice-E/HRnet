import SaveIcon from '@mui/icons-material/Save';
import { LoadingButton } from '@mui/lab';
import { Container, Stack } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { departments } from '../../constants/departments';
import Fieldset from './Fieldset';
import RHFAutocomplete from './RHFAutocomplete';
import RHFDatePicker from './RHFDatePicker';
import RHFTextField from './RHFTextField';
import { Schema, defaultValues } from './schema';
import { useAppStore } from '../../store';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useState } from 'react';
import { Modal } from '@epatrice/hrnetmodalcomponent';
import '@epatrice/hrnetmodalcomponent/styles';

export default function CreateEmployeeForm() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext<Schema>();
  const { addUser } = useAppStore();

  const [openModal, setOpenModal] = useState(false);
  const [content, setContent] = useState('');
  const [newUser, setNewUser] = useState<Schema>(defaultValues);

  const onConfirm = () => {
    addUser(newUser);
    setOpenModal(false);
    navigate('/employees-list');
  };
  const onCancel = () => {
    setOpenModal(false);
  };

  const formatDataForModal = (datas: Schema) => {
    const formatedDatas = `First name : ${datas.firstName}
Last name : ${datas.lastName}
Date of Birth : ${format(datas.dateOfBirth, 'PPPP')}
Start Date : ${format(datas.startDate, 'PPPP')}
Street : ${datas.street}
City : ${datas.city}
State : ${datas.state}
ZipCode : ${datas.zipCode}
Department : ${datas.department}
    `;
    return formatedDatas;
  };

  const onSubmit = (data: Schema) => {
    setNewUser(data);
    setContent(formatDataForModal(data));
    setOpenModal(true);
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
      <Modal isOpen={openModal} onConfirm={onConfirm} onCancel={onCancel}>
        <pre>{content}</pre>
      </Modal>
    </Container>
  );
}
