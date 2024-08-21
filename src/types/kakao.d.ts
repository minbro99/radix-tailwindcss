// src/types/kakao.d.ts
declare namespace kakao.maps {
    class Map {
      constructor(container: HTMLElement, options: MapOptions);
      setCenter(latlng: LatLng): void;
      setLevel(level: number): void;
      setBounds(bounds: LatLngBounds): void;
    }
  
    class LatLng {
      constructor(lat: number, lng: number);
    }
  
    class Marker {
      constructor(options: MarkerOptions);
      setMap(map: Map | null): void;
    }
  
    class MarkerImage {
      constructor(src: string, size: Size, options?: MarkerImageOptions);
    }
  
    class Size {
      constructor(width: number, height: number);
    }
  
    class Point {
      constructor(x: number, y: number);
    }
  
    class LatLngBounds {
      extend(latlng: LatLng): void;
    }
  
    class InfoWindow {
      constructor(options: InfoWindowOptions);
      setContent(content: string): void;
      open(map: Map, marker: Marker): void;
      close(): void;
    }
  
    interface MapOptions {
      center: LatLng;
      level: number;
    }
  
    interface MarkerOptions {
      position: LatLng;
      image?: MarkerImage;
    }
  
    interface MarkerImageOptions {
      spriteSize: Size;
      spriteOrigin: Point;
      offset: Point;
    }
  
    interface InfoWindowOptions {
      zIndex?: number;
    }
  
    class event {
      static addListener(target: any, eventName: string, callback: Function): void;
    }
  }
  // src/types/kakao.d.ts
interface Kakao {
  init(key: string): void;
  Auth: {
    login(options: {
      success: (authObj: any) => void;
      fail: (err: any) => void;
    }): void;
  };
}

interface Window {
  Kakao: Kakao;
}
