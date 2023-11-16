import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export { ChatInput }

function ChatInput({userMessage, onUserMessage, onSend}) {
  return (
      <Box sx={{ display: 'flex' }} padding={1}>
        <Box sx={{ flexGrow: 1 }}>
          <TextField value={userMessage}
            size="small"
            sx={{ width: '100%' }}
            onChange={(e) => {
              onUserMessage(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                onSend();
              }
            }}
          />

        </Box>
        <Button variant="contained" onClick={onSend}>
          Send
        </Button>
      </Box>
  );
}
