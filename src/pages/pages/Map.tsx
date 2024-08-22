import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const loadKakaoMapsScript = () => {
  return new Promise((resolve, reject) => {
    if (window.kakao && window.kakao.maps) {
      resolve(window.kakao.maps);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false";
    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        resolve(window.kakao.maps);
      } else {
        reject(new Error("카카오 지도 API 로드 실패"));
      }
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

const Map = () => {
  useEffect(() => {
    loadKakaoMapsScript()
      .then(() => {
        const container = document.getElementById("map");
        if (container && window.kakao) {
          const options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
          };
          new window.kakao.maps.Map(container, options);
        } else {
          console.error("카카오 지도 API가 제대로 로드되지 않았습니다.");
        }
      })
      .catch((error) => {
        console.error("카카오 지도 API 로드 중 오류 발생:", error);
      });
  }, []);

  return <div id="map" style={{ width: "100vw", height: "100vh" }} />;
};

export default Map;
