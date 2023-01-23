import {
  Navbar,
  CarouselContainer,
  About,
  ClassInfo,
  InstaFeed,
  Review,
  Footer,
} from "./Components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselContainer />
      <About />
      <ClassInfo />
      <InstaFeed />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
