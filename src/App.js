import { Route, Routes, Link} from 'react-router-dom'
import './App.css';
import Heading from './components/Heading';
import Content from './components/Content';
import './components/GlobalStyles/GlobalStyles.css'
import Button from './components/Button'

import Home from './pages/Home'
import News from './pages/News'
import Contact from './pages/Contact'

function App() {
  return (
    // <div style={{padding: '20px'}}>
    //   {/* <Heading/>
    //   <Content/>
    //   <div className='d-flex'>
    //     <div>Item 1</div>
    //     <div>Item 2</div>
    //   </div> */}
    //   <Button />
    //   <Button primary/>
    //   <Button primary disabled/>
    // </div>
    <div className='app'>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App;
