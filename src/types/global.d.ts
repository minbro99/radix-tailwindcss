// src/types/global.d.ts
interface KakaoAuth {
    login: (options: {
      success: (authObj: any) => void;
      fail: (err: any) => void;
    }) => void;
  }
  
  interface Kakao {
    Auth: KakaoAuth;
  }
  
  interface Window {
    Kakao?: Kakao; // 카카오 SDK가 로드된 경우에만 존재
  }
  