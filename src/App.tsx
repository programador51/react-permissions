import React from "react";
import Permissions from "./Permissions/index";
import permissions from "./permissions";
import "./App.css";

function App() {
  const permissionsActive:string[] = [
    "0bab85b8-2b1f-4cbb-bd51-9a699a0f1994",
    "f00840e3-0a71-4a79-9bbf-f2df752b2c95",
    "cd89a7a9-066d-4961-afc6-0d6d190ff97b"
  ];

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          width: "50vw",
          margin: "0",
        }}
      >
        <Permissions
          permissions={permissions}
          permissionsActive={permissionsActive}
          // onChange={(value) => console.log(value)}
          parentsExpanded
          showExpands
        />
      </div>
      <div
        style={{
          width: "50vw",
          background: "gray",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        Powered by Grupo Saiko
      </div>
    </div>
  );
}

export default App;
