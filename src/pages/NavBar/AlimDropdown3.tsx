import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SimpleSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="">
          <em>에너지원</em>
        </MenuItem>
        <MenuItem value={10}>태양광</MenuItem>
        <MenuItem value={20}>태양광 + ESS</MenuItem>
        <MenuItem value={30}>태양광 + FEMS</MenuItem>
        <MenuItem value={40}>태양광 + ESS + FEMS</MenuItem>
        <MenuItem value={50}>FEMS</MenuItem>
    </Select>
    </FormControl>
  );
}
