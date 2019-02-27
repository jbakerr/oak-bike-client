import React, { useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import { DETAILS } from "../../constants/report";
import { getUserLocation } from "../../utils/report";

const mapBottomOffset = 60;

const Location = ({initCenter, initZoom, setLocation, setStatus}) => {
  // <Map> requires an absolute height
  const [height, setHeight] = useState(document.documentElement.clientHeight - mapBottomOffset);
  useEffect(() => {
    const handleResize = () => {
      setHeight(document.documentElement.clientHeight - mapBottomOffset);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  const [center, setCenter] = useState(initCenter);
  const onDrag = (event) => {
    setCenter(event.target.getCenter());
  }
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

  const [zoom, setZoom] = useState(initZoom);
  const onZoom = (event) => {
    setZoom(event.target.getZoom());
  }

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
        style={{ height }}
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
      </Map>
      <button onClick={saveLocation}>Save Location</button>
    </>
  );
};

export default Location;
