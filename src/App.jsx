import {
  Header,
  Footer,
  BrandSection,
  InfoSection,
  TrendingNfts,
  TopFold,
} from "./sections";

function App() {
  return (
    <div className="bg-black text-white">
      <Header /> 
      <TopFold /> 
      <BrandSection />
      <TrendingNfts />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default App;
