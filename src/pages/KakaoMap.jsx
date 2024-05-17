/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
// KakaoMap.jsx
import React, { useEffect, useState } from "react";

// 회원가입시 지도 주소선택 페이지
const KakaoMap = (props) => {
  const [keyword, setKeyword] = useState("");
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=394fdd1c4d39da98ea43cb3b4696a82a&libraries=services&autoload=false`;

    script.onload = () => {
      window.kakao.maps.load(() => {
        initializeMap();
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initializeMap = () => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
      level: 3,
    };

    const mapInstance = new window.kakao.maps.Map(container, options);
    setMap(mapInstance);

    window.kakao.maps.event.addListener(mapInstance, "click", () => {
      setPlaces([]);
    });
  };

  const searchPlaces = () => {
    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(keyword, (places) => {
      setPlaces(places);
    });
  };

  const addMarker = (position) => {
    // 기존 마커가 있으면 제거
    if (marker) {
      marker.setMap(null);
    }

    // 새로운 마커 추가
    const newMarker = new window.kakao.maps.Marker({ position });
    newMarker.setMap(map);
    setMarker(newMarker);
  };

  const handlePlaceClick = (place) => {
    const position = new window.kakao.maps.LatLng(place.y, place.x);
    addMarker(position);

    setSelectedPlace({
      address: place.address_name,
      x: place.x,
      y: place.y,
    });
    map.panTo(position);
    setPlaces([]);
  };

  const { handleMapToggle } = props;
  const nextSelectAddress = () => {
    handleMapToggle();

    props.setUserInfo({
      ...props.userInfo,
      address: selectedPlace.address,
      latitude: parseFloat(selectedPlace.y),
      longitude: parseFloat(selectedPlace.x),
      locationEnabled: true,
    });
  };

  return (
    <div style={{ width: "360px", height: "100vh", margin: "auto" }}>
      <div style={{ margin: "20px 0px", display: "flex", alignItems: "center" }}>
        <input
          type="text"
          placeholder="검색할 주소를 입력하세요."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          style={{ flex: 1, padding: "8px" }}
        />
        <button
          onClick={searchPlaces}
          style={{
            marginLeft: "10px",
            padding: "8px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          검색
        </button>
      </div>
      <div
        id="map"
        style={{
          width: "100%",
          height: "400px",
          marginBottom: "20px",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      ></div>
      <div style={{ marginBottom: "20px" }}>
        <h2>검색 결과</h2>
        <ul style={{ marginTop: "10px", listStyle: "none", padding: 0 }}>
          {places.map((place) => (
            <li
              key={place.id}
              role="button" // 클릭 가능한 엘리먼트로 설정
              tabIndex={0} // 클릭 가능한 엘리먼트로 설정
              onClick={() => handlePlaceClick(place)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handlePlaceClick(place);
                }
              }}
            >
              {place.place_name} ({place.address_name})
            </li>
          ))}
        </ul>
      </div>

      {selectedPlace && (
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ marginBottom: "10px" }}>선택한 주소</h2>
          <p>{selectedPlace.address}</p>
          <p>위도: {selectedPlace.y}</p>
          <p>경도: {selectedPlace.x}</p>

          <button
            onClick={nextSelectAddress}
            style={{
              margin: "10px 0px",
              padding: "8px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            결정
          </button>
        </div>
      )}
    </div>
  );
};

export default KakaoMap;
