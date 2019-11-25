import * as React from 'react'

// ES6
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiaHVhbmdrYTk3IiwiYSI6ImNrMmw4c2V2YzA0bWUzZG83M2EzN2NjZ2wifQ.ICymOqR-bnQFjDcFtS3xCA',
  })

  // in render()
;<Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: '100vh',
    width: '100vw',
  }}
>
  <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
  </Layer>
</Map>

export default Map
