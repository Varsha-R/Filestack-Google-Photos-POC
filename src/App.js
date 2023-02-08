import React from "react";
import { PickerOverlay } from "filestack-react";

const API_KEY = "";

function App() {
  return (
    <PickerOverlay
      apikey={API_KEY}
      pickerOptions={{
        fromSources: ["googlephotos", "googledrive"],
      }}
    />
  );
}

export default App;
