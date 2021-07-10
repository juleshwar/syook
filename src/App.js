import React from "react";
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
  render() {
    return (
      <>
        <h1 className="text-4xl text-white bg-black">
          Hello world!
        </h1>
      </>
    );
  }
}

export default hot(App);
