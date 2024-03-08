import Heading from "./Heading";
import Errormsg from "./Errormsg";
import Colorlist from "./Colorlist";

function App() {
  let Colormenu = [
    "Blue",
    "Red",
    "Yellow",
    "Purple",
    "Green",
    "Black",
    "White",
  ];

  Colormenu = [];

  return (
    <>
      <div className="container">
        <Heading></Heading>
        <Errormsg Colormenu={Colormenu}></Errormsg>
        <Colorlist Colormenu={Colormenu}></Colorlist>
      </div>
    </>
  );
}

export default App;
