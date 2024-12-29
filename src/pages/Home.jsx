import About from "../components/About"
import Blogs from "../components/Blogs"
import Hero from "../components/Hero"
import Propperties from "../components/Propperties"
import bannerImg from "../assets/banner.png"


const Home = () => {
  return (
    <main>
      <Hero/>
      <About/>
      <Propperties/>
      <Blogs/>
      <div className="max-padd-container py-16 overflow-x-hidden">
        <img src={bannerImg} alt="" />
      </div>
    </main>
  )
}

export default Home