import React from 'react'
import { useSelector } from 'react-redux'
import { MapContainer, Marker, Polyline, TileLayer, Tooltip } from 'react-leaflet'

import { selectRoute } from '../../selectors/routeSelector'
import { LatLngExpression } from 'leaflet'

const Map: React.FC = () => {

  const route = useSelector(selectRoute)
  const center: LatLngExpression = [59.983762, 30.311365]
  const startPoint = route && route[0]
  const finishPoint = route && route[route.length - 1]

  return (
    <MapContainer center={center} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      {/* @ts-ignore */}
      {route && <Polyline pathOptions={{ color: 'red' }} positions={route} />}
      {/* @ts-ignore */}
      {route && <Marker position={startPoint}><Tooltip sticky>Start</Tooltip></Marker>}
      {/* @ts-ignore */}
      {route && <Marker position={finishPoint}><Tooltip sticky>Finish</Tooltip></Marker>}
    </MapContainer>
  )
}

export default Map