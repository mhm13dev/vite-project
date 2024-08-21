import { useState } from 'react';
import { Autocomplete, Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  const [selected, setSelected] = useState(defaultOption);

  return (
    <Box width={400}>
      <Autocomplete
        fullWidth
        options={options}
        getOptionLabel={(option) => option.label}
        value={selected}
        onChange={(_, newValue) => {
          setSelected(newValue ?? defaultOption);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Days of the week" fullWidth />
        )}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setSelected(
            options.find((option) => option.label === 'Friday') ??
              defaultOption,
          );
        }}
      >
        Choose Friday
      </Button>
    </Box>
  );
}

export default App;

const options = [
  {
    label: 'Monday',
    value: 1,
  },
  {
    label: 'Tuesday',
    value: 2,
  },
  {
    label: 'Wednesday',
    value: 3,
  },
  {
    label: 'Thursday',
    value: 4,
  },
  {
    label: 'Friday',
    value: 5,
  },
  {
    label: 'Saturday',
    value: 6,
  },
  {
    label: 'Sunday',
    value: 7,
  },
];

const defaultOption = options.find((option) => option.value === 1)!;
