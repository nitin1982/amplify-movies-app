import React from "react";
import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  const [apiData, setApiData] = React.useState("");

  const handleClick = async () => {
    const data = await API.get("movies", "/movies");
    console.log(data.Items.map(x => x.name));
    setApiData(data.Items.map(x => x.name).join(", "));
  };

  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <p>Welcome! My favorite movie is: {JSON.stringify(apiData)}</p>
        <button onClick={handleClick}>Click me!</button>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);