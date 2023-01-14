import AboutUs from './AboutUs'
import Header from './Header'
import Addhome from './Addhome'
import HomesToSell from './HomesToSell'



const Home = () => {
  return (
    <div className='Home'>
  {/* header */}
        <Header/>
        <AboutUs/>
        <HomesToSell/>
        
      
    </div>
  )
}

export default Home