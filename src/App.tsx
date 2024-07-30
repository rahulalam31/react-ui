
import {Button, Alert} from 'react-ui'
import '../lib/output.css'

function App() { 

  return (
    <>
      <div>
        <Button>Test</Button>
        <Button style='outline'>Test</Button>
        <Button style='soft'>Test</Button>

        <Alert type='danger'>LOL</Alert>
      </div>
    </>
  )
}

export default App
