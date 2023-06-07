import axios from "axios";
import { useState } from 'react';
import PingConfirm from "./PingConfirm";
import payload from './payload.json'
import { Button, Segment, Icon } from 'semantic-ui-react'

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
    <Segment>
      <h2>This is to ping the server</h2>
      <div>
        <Button animated color="green" onClick={pingUmbauServer}>
          <Button.Content hidden>Ping</Button.Content>
          <Button.Content visible>
            <Icon name="desktop" />
          </Button.Content>
        </Button>
      </div>
      {serverStatus && <PingConfirm text="Ping successful" onCancel={closeServerPopUp} />}
    </Segment>
  );
}

export default PingComponent;
