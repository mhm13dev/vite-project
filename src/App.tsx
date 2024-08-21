import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Autocomplete, Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  const { handleSubmit, control, setValue, watch } = useForm<FormState>();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * options.length);
    setValue('plan', options[randomIndex]);
  }, [setValue]);

  const selected = watch('plan', defaultOption);

  const onSubmit = (data: FormState) => {
    console.log(data);
  };

  return (
    <Box width={400}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="plan"
          control={control}
          render={({ field: { onChange } }) => {
            return (
              <Autocomplete
                fullWidth
                options={options}
                getOptionLabel={(option) => option.label}
                isOptionEqualToValue={(option, value) => {
                  return option.value === value.value;
                }}
                value={selected}
                onChange={(_, newValue) => {
                  onChange(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Select Plan" fullWidth />
                )}
              />
            );
          }}
        />

        <Box marginTop={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setValue('plan', {
                label: 'Performance',
                value: 'chexpass-performance',
              });
            }}
          >
            Choose Performance
          </Button>
        </Box>

        <Box marginTop={2}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default App;

interface PlanOption {
  label: string;
  value: string | null;
}

interface FormState {
  plan: PlanOption;
}

const options: PlanOption[] = [
  {
    label: 'None',
    value: null,
  },
  {
    label: 'Starter',
    value: 'chexpass-starter',
  },
  {
    label: 'Performance',
    value: 'chexpass-performance',
  },
  {
    label: 'Elite',
    value: 'chexpass-elite',
  },
];

const defaultOption = options.find((option) => option.label === 'None')!;
