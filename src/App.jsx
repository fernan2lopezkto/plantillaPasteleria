
import { Collapse } from '@mui/material';
import Alert from '@mui/material/Alert';
//import Stack from '@mui/material/Stack';
import { useState } from 'react';

function App() {

  const [open, setOpen] = useState(true)

  return <>
  <Collapse in={open}>

      
      <Alert severity="info"
              onClose={()=> {setOpen(false)}}
              >
                This is an info Alert.</Alert>
      

  </Collapse>
  </>;
}

export default App;
