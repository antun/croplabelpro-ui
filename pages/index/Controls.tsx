import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


export { Controls }

function Controls({onAnalyzeClick}) {
  return (
    <Box padding={2}>
      <Stack spacing={2} direction="column">
        <div>
          Move the map to your desired location, then press analyze.
        </div>
        <Button variant="contained" onClick={onAnalyzeClick}>analyze</Button>
      </Stack>
    </Box>
  );
}
