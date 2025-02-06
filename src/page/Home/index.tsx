import './Home.css'
import Hero from '../../components/Hero'
import Categories from '../../components/Categories'
import Flower from '../../components/Flower'
import Blog from '../../components/Blog'
import Like from '../../components/Like'
import GreenShop from '../../components/GreenShop'

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Categories />
        <Flower />
        <Blog />
        <Like />
        <GreenShop />
      </main>
    </>
  )
}

export default Home
