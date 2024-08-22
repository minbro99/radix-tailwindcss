
import { Disclosure, DisclosureButton } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Map from '../pages/Map';
import Footer from './Footer';
import Sidebar from './Sidebar'
import Allim from '../pages/Allim';
import Manager from '../pages/Manager';
import NuriflexLogo from './Nuriflexlogo';

export default function Home() {
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
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
           
            <NuriflexLogo />
            
            {/* 우측 아이콘 및 버튼들 */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  role="switch"
                  aria-checked="false"
                  data-state="unchecked"
                  value="on"
                  className="bg-gray-600 rounded-full p-2 flex items-center"
                >
                  <span className="relative z-10 inline-block text-center px-4 text-sm text-white">다크</span>
                  <span className="relative z-10 inline-block text-center px-4 text-sm text-white">라이트</span>
                  <span
                    data-state="unchecked"
                    className="absolute top-1/2 block h-[27px] px-7 translate-x translate-y-[-50%] rounded-full bg-primary transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[calc(100%)] pr-8"
                  ></span>
                </button>
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
      <Sidebar />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">산단 현황</h1>
          <h3 className='text-xl font-semibold tracking-tight text-gray-900'>총 7개소</h3>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Map />
        </div>
      </main>
      <Footer />
    </>
  );
}
