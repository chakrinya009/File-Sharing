import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { uploadFile } from "./services/api";

const App = () => {
  const InputRef = useRef();
  const [file, setFile] = useState("");
  const [share,setShare]=useState("")

  function OnUploadClick() {
    InputRef.current.click();
  }

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setShare(response.path)
        console.log(response);
      }
    };
    getImage();
  }, [file]);

  console.log(file);

  return (
    <div className="app">
      <div className="wrapper">
        <h1>File Sharing</h1>
        <p>Upload And Share The Link</p>
        <button
          onClick={() => {
            OnUploadClick();
          }}
        >
          Upload
        </button>
        <input
          style={{ display: "none" }}
          type="file"
          ref={InputRef}
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        {share?<a href={share}>click chey ra</a>:<div></div>}
        
      </div>
    </div>
  );
};

export default App;
