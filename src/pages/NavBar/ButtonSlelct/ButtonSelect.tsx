import * as React from 'react';
import Button from '@mui/joy/Button';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import { Link } from 'react-router-dom';

export default function ExclusiveSelection() {
  const [value, setValue] = React.useState<string | null>('dark'); // Default selection is 'dark'

  return (
    <ToggleButtonGroup
      value={value}
      onChange={(event: any, newValue: React.SetStateAction<string | null>) => {
        setValue(newValue);
      }}
    >
      <Link to="/dark">
        <Button
          value="dark"
          color={value === 'dark' ? 'primary' : 'neutral'}  // 'dark' 선택 시 파란색, 그렇지 않으면 회색
          variant={value === 'dark' ? 'solid' : 'outlined'} // 선택된 버튼은 solid, 그렇지 않으면 outlined
        >
          다크
        </Button>
      </Link>
      
      <Link to="/light">
        <Button
          value="light"
          color={value === 'light' ? 'primary' : 'neutral'}  // 'light' 선택 시 파란색, 그렇지 않으면 회색
          variant={value === 'light' ? 'solid' : 'outlined'} // 선택된 버튼은 solid, 그렇지 않으면 outlined
        >
          라이트
        </Button>
      </Link>
    </ToggleButtonGroup>
  );
}
