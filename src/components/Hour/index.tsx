import { Center, Flex, Image } from "@chakra-ui/react";
import {  hour } from "../../services/weather";
import moment from "moment";
interface HourProps{
  data: hour
}
export default function Hour({data}: HourProps) {
  return (
    <Center flexDir={'column'} minW={'5em'} w={'5em'} h={{base: '7em',lg:'7em'}} bgColor={'gray.50'} rounded={'md'} padding={2}>
      <Flex fontSize={'xs'}>{ +moment(data.time).format('H') === moment().hour() ? 'Now' : moment(data.time).format('h A')}</Flex>
      <Flex><Image h={'3em'} src={data.condition.icon} alt={data.condition.text} /></Flex>
      <Flex flexDir={'row'} gap='1'>
      <Flex fontSize={'sm'} fontWeight={'500'}>{data.temp_c}°</Flex>
      <Flex fontSize={'sm'} fontWeight={'300'} color={'gray.400'}> {data.feelslike_c}°</Flex>
      </Flex>
      
    </Center>
  )
}
