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
        <About />
        <ClassInfo />
        <InstaFeed />
        <Review />
        <Contact />
        <Footer />
      </div>
      <div className="top-blob"></div>
    </div>
  );
}

export default App;
