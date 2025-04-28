import { createSignal } from 'solid-js'
import TopNavBar from './components/TopNavBar';

function App(props) {
  const imgBannerUrl = "https://get.pxhere.com/photo/landscape-tree-water-nature-forest-grass-wilderness-mountain-cloud-sky-meadow-morning-lake-river-valley-mountain-range-reflection-tranquil-autumn-trees-rocks-hills-clouds-meditation-mountains-canada-loch-atmospheric-phenomenon-mountainous-landforms-computer-wallpaper-971434.jpg";

  const [header, setHeader] = createSignal("Demo SolidJS Project");

  function shuffleTitle() {
    const shuffledTitle = header().split('').sort(() => Math.random() - 0.5).join('');
    setHeader(shuffledTitle);
  }

  return (
    <div class='container m-auto'>

      <header>
        <h1 class="text-6xl font-bold mb-5 text-center">{header()}</h1>
      </header>

      <div class="flex justify-center gap-4">
        <button
          onClick={shuffleTitle}
          class="btn">
          Shuffle

        </button>
        <button
          onClick={() => setHeader("Demo SolidJS Project")}
          class="btn">
          Reset
        </button>
      </div>

      <TopNavBar />

      <img class="img-banner rounded-md my-4" src={imgBannerUrl} alt="" />

      {props.children}
    </div>
  )
}

export default App