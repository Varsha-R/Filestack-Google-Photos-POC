import React from "react";
import { PickerOverlay } from "filestack-react";

const API_KEY = "";

function App() {
  return (
    <PickerOverlay
      apikey={API_KEY}
      // onSuccess={() => {
      //   console.log("On Success");
      // }}
      // onUploadDone={(res) => {
      //   console.log("On upload done");
      //   console.log(res);
      // }}
      pickerOptions={{
        // accept: "image/*",
        // fromSources: ["local_file_system", "googlephotos", "googledrive", "facebook"],
        fromSources: ["googlephotos", "googledrive"],
      }}
    />
  );
}

export default App;
