import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import AlimGrid from '../AlimGrid';
import AlimDropdown1 from '../AlimDropdown1';
import AlimDropdown2 from '../AlimDropdown2';
import AlimDropdown3 from '../AlimDropdown3';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
        <p className="text-black text-sm">알림</p>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiDialog-paper': {
            width: '100%', // 원하는 너비 비율로 변경 가능
            maxWidth: '900px', // 최대 너비를 설정 (px, %, vw 등)
            height: '90%', // 원하는 높이 비율로 변경 가능
            maxHeight: '800px', // 최대 높이를 설정 (px, %, vh 등)
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {"이벤트 리스트"}
        </DialogTitle>
        <p>현 시간 종료되지 않은 이벤트 3 건</p>
        <AlimDropdown1 />
        <AlimDropdown2 />
        <AlimDropdown3 />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <AlimGrid />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className='bg-blue-600'>확 인</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
