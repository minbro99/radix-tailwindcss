import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import ManagerInput from '../../NavBar/Managerinput';
import ManagerSelect from '../../NavBar/Managerselect';
import ManagerCheckbox from '../../NavBar/Managercheckbox';
import ManagerRadio from '../../NavBar/ManagerRadio';

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
      <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  <p className="text-blakc text-sm">사용자</p>
                </div>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"사용자 정보 수정"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">사용자 ID</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500"><ManagerInput /></p>
      </div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">사용자 명</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500"><ManagerInput /></p>
      </div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">현재 비밀번호</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500"><ManagerInput /></p>
      </div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">신규 비밀번호</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500"><ManagerInput /></p>
      </div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">비밀번호 확인</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500"><ManagerInput /></p>
      </div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">권한</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500"><ManagerSelect /></p>
      </div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">알림 구분</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500"><ManagerCheckbox /></p>
      </div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">전화 번호</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500"><ManagerInput /></p>
      </div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">산단</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500"><ManagerSelect />.</p>
      </div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">이벤트 수신 여부</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500"><ManagerRadio /></p>
      </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleClose} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
