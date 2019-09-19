// @flow
import React, { Component, Fragment } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import '../styles/leaflet.css'

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
    markers: [
      { key: 'marker1', position: [45.5051, -122.6750], content: 'Portland, OR' },
      { key: 'marker2', position: [44.4280, -110.5885], content: 'Yellowstone National Park' },
      { key: 'marker3', position: [42.9634, -85.6681], content: 'Grand Rapids, MI' },
      { key: 'marker4', position: [41.8781, -87.6298], content: 'Chicago, IL' },
      { key: 'marker5', position: [53.3498, -6.2603], content: 'Dublin, Ireland' },
      { key: 'marker6', position: [53.7179, -6.3561], content: 'Drogheda, Ireland' },
      { key: 'marker7', position: [54.5973, -5.9301], content: 'Belfast, UK' },
      { key: 'marker8', position: [53.6947, -6.4464], content: 'Brú na Bóinne, Ireland' },
      { key: 'marker9', position: [53.0120, -6.3298], content: 'Glendalough, Ireland' },
      { key: 'marker10', position: [53.5524, -6.7866], content: 'Trim, Ireland' },
      { key: 'marker10', position: [51.4545, -2.5879], content: 'Bristol, UK' },
      { key: 'marker11', position: [51.3811, -2.3590], content: 'Bath, UK' },
      { key: 'marker12', position: [51.0688, -1.7945], content: 'Salisbury, UK' },
      { key: 'marker13', position: [51.0688, -1.8262], content: 'Stonehenge, UK' },
      { key: 'marker14', position: [51.5074, -0.1278], content: 'London, UK' },
      { key: 'marker15', position: [51.6903, -0.4181], content: 'Warner Bros Studios, UK' },
      { key: 'marker16', position: [59.3293, 18.0686], content: 'Stockholm, Sweden' },
    ],
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
