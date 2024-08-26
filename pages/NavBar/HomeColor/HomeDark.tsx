import { Disclosure, DisclosureButton } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

import FooterDark from '../Dark/FooterDark';
import Sidebar from '../../../components/Sidebar';
import Allim from '../../../pages/NavBar/Allim';
import Manager from '../../../pages/NavBar/Manager';
import NuriflexLogoDark from '../Dark/NuriflexlogoDark';
import HomeChart1 from '../../../pages/Home/HomeChart1';
import HomeChart2 from '../../../pages/Home/HomeChart2';
import HomeChart3 from '../../../pages/Home/HomeChar3';
import HomeChart4 from '../../../pages/Home/HomeChart4';
import ButtonSelct from '../../../pages/NavBar/ButtonSlelct/ButtonSelect';
import MainCrud from '../CrudDark/CrudMainDark';


export default function Home() {
  return (
    <div className="bg-slate-800 min-h-screen">  {/* 전체 배경 색상 변경 */}
      <Disclosure as="nav" className="bg-slate-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* 모바일 메뉴 버튼 */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">메인 메뉴 열기</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
           
            <NuriflexLogoDark />
            
            {/* 우측 아이콘 및 버튼들 */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="flex items-center space-x-4">
                
                <ButtonSelct />
               
                <Allim />
                <Manager />
                <div className="flex items-center space-x-2">
                  <a href='/' className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </svg>
                    <p className="text-white text-sm">로그아웃</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>

      {/* Flex container to hold Sidebar and Main content */}
      <div className="flex">
        <Sidebar />

        <div className="flex-1 bg-black"> {/* Main content area */}
          <header className="bg-black">
            <MainCrud />
            <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">산단 현황</h1>
              <h3 className='text-xl font-semibold tracking-tight text-white'>총 7개소</h3>
              
            </div>
          </header>
          <main className="mx-auto max-w-10xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex space-x-4"> {/* Flex container for Chart 1 and Chart 2 */}
              <div className="flex-1 bg-white p-4 rounded-md shadow-md"> {/* Flex item for Chart 1 */}
                <p >차트1</p>
                <HomeChart1 />
              </div>
              <div className="flex-1 bg-white p-4 rounded-md shadow-md"> {/* Flex item for Chart 2 */}
                <p>차트2</p>
                <HomeChart2 />
              </div>
            </div>
            <div className="flex space-x-4 mt-4"> {/* Flex container for Chart 3 and Chart 4 */}
              <div className="flex-1 bg-white p-4 rounded-md shadow-md"> {/* Flex item for Chart 3 */}
                <p >차트3</p>
                <HomeChart3 />
              </div>
              <div className="flex-1 bg-white p-4 rounded-md shadow-md"> {/* Flex item for Chart 4 */}
                <p>차트4</p>
                <HomeChart4 />
              </div>
              
            </div>
          </main>
        </div>
      </div>
      
      <FooterDark />
    </div>
  );
}
