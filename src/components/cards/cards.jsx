import { Card, CardHeader, CardBody, CardFooter, SimpleGrid,Heading,Button,Text } from '@chakra-ui/react'
import '../cards/cardsStyle.css'

export default function Cards() {
    return (
        <>
       
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>

        
        <Card  className='card1'>
            <CardHeader>
            <Heading size='md' className='txt-card'>1. Construção </Heading>
            </CardHeader>
            <CardBody>
            <Text className='txt-card'>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
            <Button>View here</Button>
            </CardFooter>
        </Card>
        
        <Card  className='card2'>
            <CardHeader>
            <Heading size='md' className='txt-card'>2. Reforma </Heading>
            </CardHeader>
            <CardBody>
            <Text className='txt-card'>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
            <Button>View here</Button>
            </CardFooter>
        </Card>
        
        <Card className='card3'>
            <CardHeader>
            <Heading size='md' className='txt-card'>3. Restauração</Heading>
            </CardHeader>
            <CardBody>
            <Text className='txt-card'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad alias, rem cumque suscipit odit.</Text>
            </CardBody>
            <CardFooter>
            <Button>View here</Button>
            </CardFooter>
        </Card>

        </SimpleGrid>
        
        </>
    )
}