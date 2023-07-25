import Header from './components/header/header'
import Cards from './components/cards/cards'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Slogan from './components/slogan/slogan'

function App() {


  return (
    <ChakraProvider>
    <>
    <div className='main'>
    <div className='bg-img'>

    <div className='primeiro-conteiner'>

     <Header/>

    <div className='slogan'>
    <Slogan/>
    </div>

      <div  className='cards'>
      <Cards/>
      </div>

    </div>
    </div>
    </div>
    </>
    </ChakraProvider>
  )
}

export default App
