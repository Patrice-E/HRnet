import { Autocomplete, TextField } from '@mui/material';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { Option } from '../../types/options';

type Props<T extends FieldValues> = {
  name: Path<T>;
  options: Option[];
  label: string;
};

export default function RHFAutocomplete<T extends FieldValues>({
  name,
  options,
  label,
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <Autocomplete
          size='small'
          options={options}
          value={value.abbreviation}
          defaultValue={options[0]}
          getOptionLabel={(option) =>
            option.name ? option.name : options[0].name
          }
          isOptionEqualToValue={(option, newValue) =>
            option.name === newValue.name
          }
          onChange={(_, newValue) => {
            onChange(
              newValue === null
                ? options[0].abbreviation
                : newValue.abbreviation
            );
          }}
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                inputRef={ref}
                error={!!error}
                helperText={error?.message}
                label={label}
              />
            );
          }}
        />
      )}
    />
  );
}
