import './Chat.css';
import {
  MessageList,
  MessageBox
} from 'react-chat-elements';
import { Controls } from './Controls';
import { ChatInput } from './ChatInput';
import 'react-chat-elements/dist/main.css';

export { Chat }

function Chat({onAnalyzeClick, onBackToMapClick, mapMode}) {

  const messageListItems = [
      <MessageBox
        className="blah"
        key={'mbox-'+1}
        title="Title"
        position={'left'}
        type={'text'}
        text={
          <>
            <div dangerouslySetInnerHTML={{__html: 'message text'}} />
          </>
        }>
      </MessageBox>
  ];
  return (
    <div style={{height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Controls onAnalyzeClick={onAnalyzeClick} onBackToMapClick={onBackToMapClick} mapMode={mapMode} />
      <div className="messageListContainer">
        {/* @ts-ignore TS2322 */}
        <div className="message-list">
          <div className="rce-mlist">
            { messageListItems } 
          </div>
        </div>
      </div>

      <ChatInput />
    </div>
  );
}
