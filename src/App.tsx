import Header from './components/header'
import Intro from './components/intro'
import TechnicalProficiency from './components/technical-proficiency'
import Expertise from './components/expertise'
import DevelopmentFocus from './components/development-focus'
import CareerTimeline from './components/career-timeline'
import Footer from './components/footer'
import DevelopmentDetails from './components/development-details'

function App() {

  return (
    <div className="text-[#E6F7FF] bg-[#0D1117]">
      <Header/>
      <Intro/>
      <TechnicalProficiency/>
      <Expertise/>
      <DevelopmentFocus/>
      <CareerTimeline/>
      <DevelopmentDetails/>
      <Footer/>
    </div>
  )
}

export default App
