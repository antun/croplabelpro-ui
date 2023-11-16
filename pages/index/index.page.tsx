import { useRef } from 'react'
import Split from 'react-split-it'
import { Map } from './Map'
import { Chat } from './Chat'

export { Page }

function Page() {

  const coordinates = useRef;

  const handleAnalyzeClick = () => {
    console.log('@@@ handleAnalyzeClick');
    const coordinateString = `${coordinates.current.lat},${coordinates.current.lng}`;
    const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?size=640x480&maptype=satellite&center=${coordinateString}&key=AIzaSyBj92vPkR0DBR6emjqohYXorNPVePsUl5o&zoom=17&scale=2`;
    console.log('@@@ staticMapUrl', staticMapUrl);
  };
  
  const handleMapMove = (lat, lng) => {
    coordinates.current = {lat, lng};
    console.log('handleMapMove', coordinates.current);
  }

  return (
    <>
       <Split style={{flexGrow: 1}} direction="horizontal">
         <div style={{ height: '100%'}} className="leftContentContainer">
           <Chat onAnalyzeClick={handleAnalyzeClick} />
         </div>
         <div style={{ height: '100%'}} className="RightContentContainer">
           <Map onMapMove={handleMapMove} />
         </div>
       </Split>
    </>
  )
}
