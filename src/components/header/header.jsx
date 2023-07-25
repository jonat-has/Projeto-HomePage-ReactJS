import facebook from '../../assets/icons/facebook.svg'
import github from '../../assets/icons/github.svg'
import instagram from '../../assets/icons/instagram.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import logo from '../../assets/img/logo.png'

import { Search2Icon, LockIcon } from "@chakra-ui/icons"
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import '../header/headerStyle.css'

export default function Header() {
    return (
        <>
        <div className='headerONE'>

        <div className='icons-header'>
            <img className='icons' src={ facebook } alt="" />
            <img className='icons' src={ github } alt="" />
            <img className='icons' src={ linkedin } alt="" />
            <img className='icons' src={ instagram } alt="" />
        </div>

        <div className='login-header'>
        
       
        <a href="" className='login'>
        <Search2Icon boxSize={3}/>
        <p>Login</p>
        </a>

        <a href="" className='login'>
        <LockIcon boxSize={3}/>
        <p>Registrar</p>
        </a>
        </div>

        </div>

        <Divider h={3} borderColor="white"/>

        <div className='headerTWO'>

        <div className='logo'>
        <img className='logo-img' src={ logo } alt="" />
        <h1 className='logo-txt'>Grupo<br />Silva</h1>
        </div>

        <div className='breadcrumb'>
            <Breadcrumb separator="">
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Sobre</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Projeto</BreadcrumbLink>
            </BreadcrumbItem>

            </Breadcrumb>

            <Button colorScheme='yellow' height={8}>Faça Seu Pedido</Button>
        </div>
        </div>
        </>

    )
}