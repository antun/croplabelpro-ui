
export default StaticMap;

function StaticMap({staticUrl, segmentedMapUrl, mapMode}) {
  return (
    <div style={{width: '100%', height: '100%', overflow: 'auto'}}>
      {mapMode === 'static' && <img src={staticUrl} />}
      {mapMode === 'segmented' && <img src={segmentedMapUrl} />}
      
      
    </div>
  )
}
