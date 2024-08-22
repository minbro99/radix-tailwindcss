import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="지역" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: '전국' },
  { label: '부산' },
  { label: '경기도' },
  { label: '경상남도' },
  { label: '경상북도' },
  { label: '광주' },
  { label: '대구' },
  { label: '대전' },
  { label: '서울' },
  { label: '강원도' },
  { label: '울산' },
  { label: '전라남도' },
  { label: '전라북도' },
  { label: '제주도' },
  { label: '충청남도' },
  { label: '충청북도' },
];
