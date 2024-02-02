import Image from "./Image";
import StqryViewport from "stqry-viewport";

function App() {
  return (
    <StqryViewport
      renderProp={(imageProps) => {
        return <Image {...imageProps} />;
      }}
    />
  )
}

export default App

/* Test Tip: don't edit this file */