import { AEGovButton, Alert } from "react-ui";

function App() {
  return (
    <>
      <div>
        <AEGovButton style="outline" onClick={() => console.log("clicked")}>
          Click Me
        </AEGovButton>
        <br />
        <Alert type="danger">This is warning</Alert>
      </div>
    </>
  );
}

export default App;
