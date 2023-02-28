import "react-on-scroll-animation/build/index.css";
import Rosa from "react-on-scroll-animation";
import {
  Navbar,
  CarouselContainer,
  About,
  ClassInfo,
  InstaFeed,
  Review,
  Contact,
  Footer,
} from "./Components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body-container">
        <CarouselContainer />
        <Rosa
          animation="fade-up-right"
          once={true}
          offset={300}
          style={{ zIndex: -1 }}
        >
          <About />
        </Rosa>
        <Rosa
          animation="fade-up-left"
          once={true}
          offset={300}
          style={{ zIndex: -1 }}
        >
          <ClassInfo />
        </Rosa>
        <Rosa
          animation="fade-up"
          once={true}
          offset={300}
          style={{ zIndex: -1 }}
        >
          <InstaFeed />
        </Rosa>
        {/* <Rosa
          animation="fade-up"
          once={true}
          offset={300}
          style={{ zIndex: -1 }}
        >
          <Review />
        </Rosa> */}
        <Rosa
          animation="fade-up-right"
          once={true}
          offset={300}
          style={{ zIndex: -1 }}
        >
          <Contact />
        </Rosa>
        <Footer />
      </div>
      <div className="top-blob"></div>
    </div>
  );
}

export default App;
