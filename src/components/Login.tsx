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
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
            Nuri Flex
          </h2>
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
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-sm text-white">
                아이디 저장
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
