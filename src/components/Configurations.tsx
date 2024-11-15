import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


interface Props {
    setTemp: (temp: string) => void
}

export default function TemperatureConfigurations({setTemp}: Props) {
  return (
    <FormControl>
      <FormLabel>Question Randomness</FormLabel>
      <RadioGroup
        row
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="0" onClick={() => setTemp("0")} control={<Radio />} label="Less Random" />
        <FormControlLabel value="1" onClick={() => setTemp("1")} control={<Radio />} label="Normal" />
        <FormControlLabel value="2" onClick={() => setTemp("2")} control={<Radio />} label="More Random" />
      </RadioGroup>
    </FormControl>
  );
}