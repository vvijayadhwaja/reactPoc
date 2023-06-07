import axios from "axios";
import { useState } from 'react';
import PingConfirm from "./PingConfirm";
import payload from './payload.json'

function PingComponent() {
    
  const [serverStatus, setServerStatus] = useState(false);
  let request = "https://umbau.digital-result.cloud/api/usr/ping"

  function pingUmbauServer() {
    console.log("server ping successful"); //ping server using axios and on 200 response -- call model for pop up which can be customized to say that the ping was successful with only close
    axios
      .post(
        request,
        payload
      )
      .then(function (response) {
        console.log(response);
        setServerStatus(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function closeServerPopUp() {
    setServerStatus(false);
  }

  return (
    <div className="card">
      <h2>This is to ping the server</h2>
      <div className="actions">
        <button className="btnPing" onClick={pingUmbauServer}>
          Ping
        </button>
      </div>
      {serverStatus && <PingConfirm text="Ping successful" onCancel={closeServerPopUp} />}
    </div>
  );
}

export default PingComponent;
