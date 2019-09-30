// @flow
import React, { Component, Fragment } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import '../styles/leaflet.css'
import CountryData from './CountryData.js'

type Position = [number, number]

type Props = {|
  content: string,
  position: Position,
|}

type MarkerData = {| ...Props, key: string |}

const MyPopupMarker = ({ content, position }: Props) => (
  <Marker position={position}>
    <Popup>{content}</Popup>
  </Marker>
)

const MyMarkersList = ({ markers }: { markers: Array<MarkerData> }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <Fragment>{items}</Fragment>
}

type State = {
  markers: Array<MarkerData>,
}

class LeafletMap extends Component<{}, State> {
  state = {
    markers: CountryData.map(m => ({
      key: m.key,
      position: [m.lat, m.long],
      content: m.content,
    })),
  }

  render() {
    return (
      <Map center={[51.505, -0.09]} zoom={1}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyMarkersList markers={this.state.markers} />
      </Map>
    )
  }
}

export default LeafletMap
