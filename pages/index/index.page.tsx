import Split from 'react-split-it'
import { Map } from './Map'

export { Page }

function Page() {
  return (
    <>
       <Split style={{flexGrow: 1}} direction="horizontal">
         <div style={{ height: '100%'}} className="leftContentContainer">
           Chat goes here
         </div>
         <div style={{ height: '100%'}} className="RightContentContainer">
           <Map />
         </div>
       </Split>
    </>
  )
}
