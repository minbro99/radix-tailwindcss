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
          <em>산단</em>
        </MenuItem>
        <MenuItem value={10}>전체</MenuItem>
        <MenuItem value={20}>산단1</MenuItem>
    </Select>
    </FormControl>
  );
}
