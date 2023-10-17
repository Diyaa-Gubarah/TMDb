import { NativeView } from "../components/index";
import React from "react";

const withContainer = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P) => {
    return (
      <NativeView padding={"lg"}>
        <Component {...props} />
      </NativeView>
    );
  };
};

export default withContainer;
