import { useRef, useState } from 'react'
import Split from 'react-split-it'
import { Map } from './Map'
import { Chat } from './Chat'
import StaticMap from './StaticMap' 
import axios from 'axios';
import { CircularProgress } from '@mui/material';

export { Page }

function Page() {

  const coordinates = useRef;
  const [mapMode, setMapMode] = useState('movable');
  const [staticMapUrl, setStaticMapUrl] = useState('');
  const [segmentedMapUrl, setSegmentedMapUrl] = useState('');
  const [mapLoading, setMapLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  const writeFirstChatMessage = (segments) => {
    const message = {
      position: 'left',
      title: 'CropLabel Pro',
      type: 'text',
      text: `Please tell me what is planted in each of the following fields, and when it was planted: <br />${segments.replaceAll('\n', '<br />')}`,
    };
    setChatMessages([message]);

    /*
    const assistantPayload = {
      "assistant_id": "asst_qVGwKu0Sg7nubSYC74LxfEfK",
      "thread": {
        "messages": [
          {"role": "user", "content": "based on the following segments, ask the user to tell you what crop and when planted each of them: "+ AI_text_response}
        ]
      }
    };
    */

  }

  const handleAnalyzeClick = () => {
    const coordinateString = `${coordinates.current.lat},${coordinates.current.lng}`;
    const url = `https://maps.googleapis.com/maps/api/staticmap?size=640x480&maptype=satellite&center=${coordinateString}&key=AIzaSyBj92vPkR0DBR6emjqohYXorNPVePsUl5o&zoom=17&scale=2`;
    setMapMode('static');
    setStaticMapUrl(url);
    setMapLoading(true);
    axios.post('https://us-central1-genlabhackathon.cloudfunctions.net/analyze', {
      action: 'analyze',
      rawImageUrl: url
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      setMapLoading(false);
      setMapMode('segmented');
      setSegmentedMapUrl(response.data.segmentedImageUrl);
      writeFirstChatMessage(response.data.segments);
    })
    .catch(function (error) {
      setMapLoading(false);
      console.log(error);
    });
  };
  
  const handleBackToMapClick = () => {
    setMapMode('movable');
    setChatMessages([]);
  };
  
  const handleMapMove = (lat, lng) => {
    coordinates.current = {lat, lng};
    console.log('handleMapMove', coordinates.current);
  };

  const handleUserMessage = (m) => {
    setUserMessage(m);
  };

  const handleSend = () => {
    const message = {
      position: 'right',
      title: 'User',
      type: 'text',
      text: userMessage
    };
    setChatMessages([...chatMessages, message]);
    setUserMessage('');
  };



  return (
    <>
       <Split style={{flexGrow: 1}} direction="horizontal">
         <div style={{ height: '100%'}} className="leftContentContainer">
           <Chat onAnalyzeClick={handleAnalyzeClick} onBackToMapClick={handleBackToMapClick} mapMode={mapMode} 
                 chatMessages={chatMessages} userMessage={userMessage} onUserMessage={handleUserMessage} onSend={handleSend} />
         </div>
         <div style={{ height: '100%'}} className="RightContentContainer">
           { mapMode === 'movable' && <Map onMapMove={handleMapMove} /> }
           { (mapMode === 'static' || mapMode === 'segmented') && <StaticMap onMapMove={handleMapMove} staticUrl={staticMapUrl}  segmentedMapUrl={segmentedMapUrl} mapMode={mapMode} /> }

           { mapLoading && <div style={{position: 'absolute', backgroundColor: '#ffffff', opacity: 0.3, top: '0px', left: '0px', display: 'flex', height: '100%', width: '100%', justifyContent: 'center'}}><CircularProgress sx={{margin: 20}} /> </div> }
         </div>
       </Split>
    </>
  )
}
