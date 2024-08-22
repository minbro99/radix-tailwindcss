import React, { useState, useEffect } from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';


const Homepage = () => (
  <div className="flex min-h-screen">
    {/* Left section: Photo */}
    <div className="w-1/2 flex justify-center items-center">
      <div className="shadow-blackA4 w-full overflow-hidden shadow-[0_5px_10px]">
        <AspectRatio.Root ratio={16 / 16}>
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
            alt="Landscape photograph by Tobias Tullius"
          />
        </AspectRatio.Root>
      </div>
    </div>

    {/* Right section: Login form */}
    <Login />
  </div>
);

const Login = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedUserName = localStorage.getItem('rememberedUserName');
    if (savedUserName) {
      setUserName(savedUserName);
      setRememberMe(true);
    }
  }, []);

  const handleLoginClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const validUserName = 'admin';
    const validPassword = 'nuri1004!';
    const englishRegex = /^[A-Za-z]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!englishRegex.test(userName)) {
      setErrorMessage('아이디 형식이 잘못되었습니다.');
      return;
    } else if (!passwordRegex.test(userPassword)) {
      setErrorMessage('비밀번호 형식이 잘못되었습니다. 최소 8자, 영어, 숫자 및 특수문자가 포함되어야 합니다.');
      return;
    } else {
      setErrorMessage('');
    }

    if (userName === validUserName && userPassword === validPassword) {
      if (rememberMe) {
        localStorage.setItem('rememberedUserName', userName);
      } else {
        localStorage.removeItem('rememberedUserName');
      }
      window.location.href = '/home';
    } else {
      alert('잘못된 사용자 이름 또는 비밀번호입니다.');
    }
  };

  return (
    <div className="w-1/2 flex items-center justify-center bg-black">
      <div className="w-full max-w-sm px-6 py-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
        <svg width="300" height="40" viewBox="0 0 114 23" fill="none" xmlns="http://www.w3.org/2000/svg" 
              className="fill-white">
                <path d="M101.32 15.3094C100.684 16.1943 99.7581 17.0919 97.7191 17.0919C97.4909 17.0919 97.1164 17.0816 96.8753 17.0662C95.2852 16.9582 94.5158 15.5409 94.3132 14.7204L94.2747 14.5712H98.4168C99.5324 14.5712 102.492 14.5712 102.492 11.2558C102.492 8.85854 100.248 7.76538 98.1628 7.76538H97.0497C94.1747 7.76538 92.4563 9.51186 92.4563 12.4364V14.08C92.4563 16.2225 93.7617 18.6172 96.624 18.8101C96.9112 18.8281 97.1857 18.8384 97.4421 18.8384C99.8658 18.8384 101.456 18.0616 102.754 16.2431L101.323 15.3069L101.32 15.3094ZM94.2414 12.4364C94.2414 10.5793 95.3544 9.51443 97.296 9.51443H98.2629C98.5142 9.51443 100.71 9.5633 100.71 11.2558C100.71 12.2975 99.9402 12.8248 98.4193 12.8248H94.2414V12.4364Z" fill="current"></path><path d="M56.4807 14.0003C56.4807 15.469 55.0136 17.0534 52.6413 17.0534C50.6587 17.0534 50.1355 15.2889 50.1355 14.3553V7.92236H48.353V14.7359C48.353 16.5159 49.3584 18.6559 52.1924 18.8282C52.3155 18.8359 52.4438 18.8385 52.572 18.8385C53.2029 18.8385 55.2393 18.5581 56.2678 17.3055L56.4807 17.0457V18.5736H58.2657V7.92236H56.4807V14.0003Z" fill="current"></path><path d="M65.4648 7.72669C63.867 7.72669 62.6975 8.30028 61.7998 9.29569L61.5895 9.52718V7.9196H59.8044V18.5708H61.5895V13.0356C61.5895 10.4763 63.5387 9.46031 65.2058 9.46031C66.4497 9.46031 67.1755 10.1522 67.4115 10.376L68.7938 9.22625C68.5271 8.90987 67.4781 7.72412 65.4648 7.72412V7.72669Z" fill="current"></path>
              <path d="M76.7908 7.54937V18.5838H78.7143V12.7657H86.5624V10.834H78.7143V7.5468C78.7143 6.67742 79.2452 6.19643 80.2121 6.19643H87.6088V4.26733H80.2121C78.1655 4.26733 76.7908 5.58427 76.7908 7.5468V7.54937Z" fill="current"></path>
              <path d="M91.0583 4.26978H89.2732V18.5734H91.0583V4.26978Z" fill="current"></path>
              <path d="M109.371 14.3193C109.006 13.9566 108.983 13.4319 109.319 13.046L113.797 7.92236H111.433L108.263 11.5645L108.229 11.3021C108.229 11.3021 108.209 11.1581 108.05 11.0089C107.421 10.425 104.7 7.92236 104.7 7.92236H102.064C102.064 7.92236 106.537 12.0275 106.798 12.277C107.111 12.5702 107.119 13.0306 106.811 13.3959L102.289 18.571H104.654L107.798 14.9674L107.855 15.1912C107.868 15.2452 107.927 15.4047 108.022 15.4921C108.17 15.6259 111.361 18.571 111.361 18.571H114C114 18.571 109.517 14.4581 109.376 14.3193H109.371Z" fill="current"></path><path d="M44.665 16.0451V16.166H44.6522C44.5957 16.4335 44.3572 16.6367 44.0725 16.6367C43.8545 16.6367 43.6545 16.5158 43.5416 16.2997L39.8202 10.3812L39.8022 10.3478L38.8841 8.88425C38.8841 8.88425 36.5476 5.17781 36.5194 5.13408L36.4912 5.09293C36.0372 4.4499 35.2986 4.06665 34.5163 4.06665C33.1827 4.06665 32.0978 5.15466 32.1003 6.52818V6.60277V18.576H34.0265V6.75196C34.0265 6.42529 34.2932 6.16037 34.6164 6.16037C34.8344 6.16037 35.0344 6.28126 35.1473 6.49731L38.8687 12.4184L38.8866 12.4518L39.8048 13.9153C39.8048 13.9153 42.1439 17.6244 42.1618 17.6501L42.2003 17.7041C42.6542 18.3471 43.3903 18.7304 44.1726 18.7304C45.5062 18.7304 46.5911 17.6424 46.5885 16.2663V16.1454V4.2647H44.665V16.0451Z" fill="current"></path>
              <path d="M71.5485 7.92236H69.7634V18.5736H71.5485V7.92236Z" fill="current"></path>
              <path d="M70.6558 3.63452C69.9607 3.63452 69.3965 4.20039 69.3965 4.89744C69.3965 5.59449 69.9607 6.16035 70.6558 6.16035C71.3508 6.16035 71.9151 5.59449 71.9151 4.89744C71.9151 4.20039 71.3508 3.63452 70.6558 3.63452Z" fill="current"></path>
              <path d="M4.34466 4.44196H4.33953C3.87788 4.00727 3.25978 3.73462 2.575 3.73462C1.15413 3.73462 0 4.89208 0 6.31961V22.9999L15.2474 13.411L4.34466 4.44196Z" fill="#00489D"></path><path d="M21.5001 18.5579H21.5052C21.9669 18.9926 22.585 19.2627 23.2698 19.2627C24.6932 19.2627 25.8448 18.1052 25.8448 16.6803V0L10.5974 9.5889L21.5001 18.5579Z" fill="#00ADEC"></path>
              </svg>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLoginClick} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                아이디
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  autoComplete="username"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  비밀번호
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2 size-5"
              />
              <label htmlFor="rememberMe" className="text-sm text-white">
                ID 저장
              </label>

              {errorMessage && (
                <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
              )}

              
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
              >
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
