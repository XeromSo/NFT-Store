import Header from "./header";
import PopularSearch from "./popularSearch";
import Categories from "./categories";
import LiveAuction from "./liveAuction";
import TopSellers from "./topSellers";
import PopularCollection from "./popularCollection";
import Services from "./services";

export default function Index() {
  return (
    <>
      <Header />
      
      <Categories />
      <LiveAuction />
      <TopSellers />
      <PopularCollection />

      <Services />

      {/* <TopCollections />
      <TrendingNfts />
      <RecentBlogs />
      <HowCreateNftItem />
      <PopularCategories /> */}
    </>
  );
}