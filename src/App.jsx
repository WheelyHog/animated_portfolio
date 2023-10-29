import './app.scss'
import Test from './components/Test'
import Navbar from './components/navbar/Navbar'


const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      {/* <section>Parallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section> */}
      <Test />
    </div>
  )
}

export default App