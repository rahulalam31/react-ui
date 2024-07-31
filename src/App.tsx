import { AEGovButton, Alert } from "react-ui";

function App() {
  return (
    <>
      <div>
        <AEGovButton buttonStyle="solid" onClick={() => console.log("clicked")}>
          Click Me
        </AEGovButton>
        <AEGovButton
          buttonStyle="outline"
          onClick={() => console.log("clicked")}
        >
          Click Me
        </AEGovButton>
        <AEGovButton buttonStyle="soft" onClick={() => console.log("clicked")}>
          Click Me
        </AEGovButton>
        <AEGovButton buttonStyle="link" onClick={() => console.log("clicked")}>
          Click Me
        </AEGovButton>
        <br />
        <Alert alertStyle="warning">This is warning</Alert>
      </div>
    </>
  );
}

export default App;
