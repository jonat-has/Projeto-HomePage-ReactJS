import { Card, CardHeader, CardBody, CardFooter, SimpleGrid,Heading,Button,Text } from '@chakra-ui/react'

export default function NossoTrabalhos() {

    return (
        <>

        <h1>Nosso Trabalhos</h1>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        <Card>
            <CardHeader>
            <Heading size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
            <Button>View here</Button>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader>
            <Heading size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
            <Button>View here</Button>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader>
            <Heading size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
            <Button>View here</Button>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader>
            <Heading size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
            <Button>View here</Button>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader>
            <Heading size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
            <Button>View here</Button>
            </CardFooter>
        </Card>
        </SimpleGrid>
        </>
    )
}