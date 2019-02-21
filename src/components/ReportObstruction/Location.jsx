import React, { useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import { DETAILS } from "../../constants/report";
import { getUserLocation } from "../../utils/report";

const Location = ({initCenter, initZoom, setLocation, setStatus}) => {
  const [height, setHeight] = useState(400);
  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    setTimeout(handleResize, 0);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  const [center, setCenter] = useState(initCenter);
  const [zoom, setZoom] = useState(initZoom);
  const onDrag = (event) => setCenter(event.target.getCenter());
  const onZoom = (event) => setZoom(event.target.getZoom());
  useEffect(() => {
    getUserLocation()
      .then(location => {
        const { latitude: lat, longitude: lng } = location.coords;
        setCenter({ lat, lng });
      })
      .catch(() => {
        console.warn("Could not get user location");
      });
  }, []);

  const saveLocation = () => {
    setLocation(center);
    setStatus(DETAILS);
  };

  return (
    <>
      <Map
        center={center}
        zoom={zoom}
        onDrag={onDrag}
        onZoom={onZoom}
        style={{ height: height }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <button onClick={saveLocation}>Save Location</button>
      </Map>
    </>
  );
};

export default Location;
