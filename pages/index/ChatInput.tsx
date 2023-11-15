import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export { ChatInput }

function ChatInput() {
  return (
      <Box sx={{ display: 'flex' }} padding={1}>
        <Box sx={{ flexGrow: 1 }}>
          <TextField value={'userMessage'}
            size="small"
            sx={{ width: '100%' }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                // handleSend();
                console.log('blah');
              }
            }}
          />

        </Box>
        <Button variant="contained" >
          Send
        </Button>
      </Box>
  );
}
