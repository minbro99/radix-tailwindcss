import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


export default function RowRadioButtonsGroup() {
  return (
    <FormControl>
      
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="send" control={<Radio />} label="수신" />
        <FormControlLabel value="miss" control={<Radio />} label="미수신" />
       
      </RadioGroup>
    </FormControl>
  );
}
