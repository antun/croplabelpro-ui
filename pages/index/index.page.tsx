import { useRef, useState } from 'react'
import Split from 'react-split-it'
import { Map } from './Map'
import { Chat } from './Chat'
import StaticMap from './StaticMap' 
import axios from 'axios';

export { Page }

function Page() {

  const coordinates = useRef;
  const [mapMode, setMapMode] = useState('movable');
  const [staticMapUrl, setStaticMapUrl] = useState('');
  const [segmentedMapUrl, setSegmentedMapUrl] = useState('');

  const handleAnalyzeClick = () => {
    const coordinateString = `${coordinates.current.lat},${coordinates.current.lng}`;
    const url = `https://maps.googleapis.com/maps/api/staticmap?size=640x480&maptype=satellite&center=${coordinateString}&key=AIzaSyBj92vPkR0DBR6emjqohYXorNPVePsUl5o&zoom=17&scale=2`;
    setMapMode('static');
    setStaticMapUrl(url);
    axios.post('https://us-central1-genlabhackathon.cloudfunctions.net/analyze', {
      action: 'analyze',
      rawImageUrl: url
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      setMapMode('segmented');
      setSegmentedMapUrl(response.data.segmentedImageUrl);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  
  const handleBackToMapClick = () => {
    setMapMode('movable');
  };
  
  const handleMapMove = (lat, lng) => {
    coordinates.current = {lat, lng};
    console.log('handleMapMove', coordinates.current);
  };

  return (
    <>
       <Split style={{flexGrow: 1}} direction="horizontal">
         <div style={{ height: '100%'}} className="leftContentContainer">
           <Chat onAnalyzeClick={handleAnalyzeClick} onBackToMapClick={handleBackToMapClick} mapMode={mapMode} />
         </div>
         <div style={{ height: '100%'}} className="RightContentContainer">
           { mapMode === 'movable' && <Map onMapMove={handleMapMove} /> }
           { (mapMode === 'static' || mapMode === 'segmented') && <StaticMap onMapMove={handleMapMove} staticUrl={staticMapUrl}  segmentedMapUrl={segmentedMapUrl} mapMode={mapMode} /> }
         </div>
       </Split>
    </>
  )
}
