
import {Button, Alert} from 'react-ui'
import '../lib/output.css'

function App() {
  return (
    <>
      <div>
        <Button>Test</Button>
        <Button buttonStyle='outline'>Test</Button>
        <Button buttonStyle='soft'>Test</Button>

        <Alert>LOL</Alert>
        <Alert alertStyle='warning'>LOL</Alert>
        <Alert alertStyle='error'>LOL</Alert>
        <Alert alertStyle='success' iconImage='info'>LOL</Alert>
        <Alert alertStyle='error' iconImage='error'>LOL</Alert>
        <Alert alertStyle='warning' iconImage='warning'>LOL</Alert>
        <Alert alertStyle='success' iconImage='success'>LOL</Alert>
      </div>
    </>
  );
}

export default App;
