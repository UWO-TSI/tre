"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function MyMap() {
  return (
    <APIProvider apiKey={"AIzaSyC4laW2mbAUtDCYtCVEwLqjeKEiBbWiM8Y"}>
      <Map
        style={{ width: "100%", height: "408px" }}
        defaultCenter={{ lat: 42.952068, lng: -81.3079728 }}
        defaultZoom={12}
        gestureHandling="greedy"
        disableDefaultUI
      >
        <Marker position={{ lat: 42.952068, lng: -81.3079728 }} />
      </Map>
    </APIProvider>
  );
}
