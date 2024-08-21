
import { useEffect, useRef, useState } from "react";
import axios from "axios";

// 카카오 API가 로드되었는지 확인하는 타입
declare global {
  interface Window {
    kakao: any; // 실제로는 타입 정의를 해야 하지만, 여기서는 any로 처리
  }
}

const ChineseFood = () => {
  const mapRef = useRef<kakao.maps.Map | null>(null);
  const [markers, setMarkers] = useState<kakao.maps.Marker[]>([]);

  useEffect(() => {
    // 카카오 API가 로드되었는지 확인
    if (!window.kakao || !window.kakao.maps) {
      console.error("Kakao Maps API is not loaded");
      return;
    }

    const container = document.getElementById("map");
    if (container) {
      // 지도 옵션 설정
      const options = {
        center: new window.kakao.maps.LatLng(37.2636, 127.0286), // 서울의 중심 좌표
        level: 7, // 확대 수준을 조절합니다.
      };

      // 지도 생성
      mapRef.current = new window.kakao.maps.Map(container, options);
      console.log("Map created");

      // 중국음식점 검색 함수 호출
      searchChineseFood();
    }
  }, []);

  const searchChineseFood = async () => {
    const apiKey = "0f92e414162c4b05bee49c26af205a22"; // 환경 변수로 API 키를 관리하는 것이 좋습니다.
    const url = `https://openapi.gg.go.kr/Genrestrtchifood?KEY=${apiKey}&Type=json`;

    try {
      const response = await axios.get(url);
      const places = response.data.Genrestrtchifood[1].row; // 데이터 접근 방식 조정 필요

      // 검색 결과를 마커로 표시
      if (mapRef.current && places) {
        // 기존 마커를 제거합니다.
        markers.forEach(marker => marker.setMap(null));
        setMarkers([]);

        const newMarkers: kakao.maps.Marker[] = [];

        places.forEach((place: any) => {
          // API 응답 형식에 따라 위도, 경도 값을 가져오는 부분을 조정해야 합니다
          const latitude = parseFloat(place.REFINE_WGS84_LAT); // 실제 좌표 키 값에 맞게 수정
          const longitude = parseFloat(place.REFINE_WGS84_LOGT); // 실제 좌표 키 값에 맞게 수정
          const position = new window.kakao.maps.LatLng(latitude, longitude);

          const marker = new window.kakao.maps.Marker({
            position,
            map: mapRef.current,
            title: place.RESTRT_NM || "No name", // 마커의 타이틀을 설정합니다. 데이터가 없을 경우 기본값 설정
          });

          // 마커 클릭 시 인포윈도우를 열어 위치 정보를 표시합니다.
          const infowindow = new window.kakao.maps.InfoWindow({
            content: `<div style="padding:5px;">${place.BIZPLC_NM || "No name"}<br>${place.REFINE_ROADNM_ADDR || "No address"}</div>`, // 데이터가 없을 경우 기본값 설정
          });

          window.kakao.maps.event.addListener(marker, 'mouseover', () => {
            infowindow.open(mapRef.current, marker);
          });

          window.kakao.maps.event.addListener(marker, 'mouseout', () => {
            infowindow.close();
          });

          newMarkers.push(marker);
        });

        setMarkers(newMarkers);
      }
    } catch (error) {
      console.error("Failed to fetch data from public API", error);
    }
  };

  return (
    <div
      id="map"
      style={{
        width: "80vw", // 지도의 너비를 설정
        height: "80vh", // 지도의 높이를 설정
        margin: "0 auto", // 화면의 중앙에 배치
        position: "relative", // 부모 컨테이너 내에서 중앙 정렬을 위한 설정
      }}
    />
  );
};

export default ChineseFood;
