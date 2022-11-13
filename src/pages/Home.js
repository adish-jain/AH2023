import header from "../header.svg";
import footer from "../footer.svg";
import mobileHeader from "../mobileHeader.svg";
import mobileFooter from "../mobileFooter.svg";
import "../App.css";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
window.addEventListener(
    "resize",
    () => {
    setIsMobile(window.innerWidth < 500);
    },
    []
);

  return (
    <body>
      <div class="line-container">
        {!isMobile ? (
          <div>
            <img src={header} />
          </div>
        ) : (
          <div>
            <img src={mobileHeader} />
          </div>
        )}
      </div>
    </body>
  );
}

export default Home;