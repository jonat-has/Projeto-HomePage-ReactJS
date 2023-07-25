import { Card,CardBody,Stack,Text,Heading } from "@chakra-ui/react"
import { PhoneIcon } from "@chakra-ui/icons"
import '../slogan/sloganStyle.css'

export default function Slogan() {
    return (
    <>
      
      <div className='txt-container'>
      <p>20 anos ao seu lado</p>
      <h1>Construindo <br /> O Seu lar</h1>
      </div>


    <a href="" className="card-phone">
    <div className="phone-icon">
      <PhoneIcon className="icon"/>
    </div>

    <div className="card-txt">
      <p>Sempre a sua disposição</p>
      <h1>(81) 9542-7512</h1>
    </div>     
    </a>

    </>

    )
}