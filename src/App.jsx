import Header from './components/header/header'
import Cards from './components/cards/cards'
import Slogan from './components/slogan/slogan'
import NossaHistoriaTxt from './components/historia/historiaTxt/nossaHistoria'
import HistoriaImg from './components/historia/historiaImg/historiaImg'
import NossoTrabalhos from './components/nossoTrabalho/nossoTrabalho'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'


function App() {


  return (
    <ChakraProvider>
    <>
    <main className='main'>

    <div className='primeiro-conteiner'>

     <Header/>

    <div className='slogan'>
    <Slogan/>
    </div>

      <div  className='cards'>
      <Cards/>
      </div>

    <div className='bg-img'/>
    </div>

    <div className='segundo-container'>

      <div className='historia'>
        <div className="historia-imagem"><HistoriaImg/></div>
        <div className="historia-txt"><NossaHistoriaTxt/></div>
      </div>
    </div>

    <div className='nossoTrab'><NossoTrabalhos/></div>
    </main>
    </>
    </ChakraProvider>
  )
}

export default App
