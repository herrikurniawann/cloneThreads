import Navbar from "../components/navbar";
import SideNav from "../components/sidebar";
import MainContentOne from "./mainContentOne";

function Home() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <SideNav />
        <MainContentOne/>
      </div>
    </>
  );
}

export default Home;
