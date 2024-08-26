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
          <em>발전소 및 수용가</em>
        </MenuItem>
        <MenuItem value={10}>전체</MenuItem>
        <MenuItem value={20}>경은 산업</MenuItem>
        <MenuItem value={10}>동진 산업</MenuItem>
        <MenuItem value={20}>동진 다이닝</MenuItem>
        <MenuItem value={10}>산단1 수용가</MenuItem>
        <MenuItem value={20}>산단2 수용가</MenuItem>
        <MenuItem value={10}>산단1 발전소</MenuItem>
        <MenuItem value={20}>산단2 발전소</MenuItem>
    </Select>
    </FormControl>
  );
}
