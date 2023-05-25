import { memo, useEffect } from "react";
// import "./mock/index";
import axios from "axios";

// eslint-disable-next-line react/display-name
const App = memo(() => {
  useEffect(() => {
    axios.get("http://localhost:3000/api/test/mock").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      <h2>app page</h2>
    </div>
  );
});

export default App;
