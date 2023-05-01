import { Center, Flex } from '@chakra-ui/react'

export default function Widget() {
  return (
    <Center flexDir={'column'} minW={'5em'} w={'14em'} h={{base: '7em',lg:'12em'}} bgColor={'gray.50'} rounded={'md'} padding={2}>
    <Flex fontSize={'xs'}>s</Flex>
    {/* <Flex><Image h={'3em'} src={data.condition.icon} alt={data.condition.text} /></Flex> */}
    <Flex flexDir={'row'} gap='1'>
    <Flex fontSize={'sm'} fontWeight={'500'}>a°</Flex>
    <Flex fontSize={'sm'} fontWeight={'300'} color={'gray.400'}> a°</Flex>
    </Flex>
    </Center>
  )
}
