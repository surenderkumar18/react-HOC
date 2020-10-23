import React from "react";

const HOCWrapper = OriginalComp => {
  class HOC extends React.Component {
    render() {
      return <OriginalComp />;
    }
  }
  return HOC;
};
export default HOCWrapper;
