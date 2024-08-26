import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css'

function App() {
  return (
    <MapContainer center={[21.140724811389596, -98.41992220176049]} zoom={14} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[21.140724811389596, -98.41992220176049]}>
        <Popup>
          Ciudad de Huejutla <br />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Huejutla_de_Reyes%2C_Hidalgo_2.jpg/405px-Huejutla_de_Reyes%2C_Hidalgo_2.jpg" width="100%" alt="imagen" /> <br/>
          ver en <a href="https://www.google.com/maps/@21.1408222,-98.4206183,18.47z" target="blank">google maps</a> <br/>
          ;)
        </Popup>
      </Marker>

      <Marker position={[21.1447602510394, -98.41007996920021]}>
        <Popup>
          Este es mi hogar <br />
        </Popup>
      </Marker>


      <Marker position={[21.155667024251116, -98.38106242118623]}>
        <Popup>
        Universidad Tecnologica de la Huastecca Hidalguense <br />
          <img src="https://hidalgo.quadratin.com.mx/www/wp-content/uploads/2021/06/uni-1.png" width="100%" alt="imagen" /> <br/>
          ver en <a href="https://www.google.com/maps/@21.1408222,-98.4206183,18.47z" target="blank">google maps</a> <br/>
        </Popup>
      </Marker>

    </MapContainer>
  );
}

export default App;
