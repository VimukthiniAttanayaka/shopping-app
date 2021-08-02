import Before_footer from "./Before_footer";
import Item from "./Item";
import Welcome from "./Welcome";


function Home() {
  return (
    <div className="home">
      <Welcome/>
      <Item/>
      <Before_footer/>
    </div>
  );
}

export default Home;