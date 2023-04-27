import { Center, Flex, Image } from "@chakra-ui/react";
import {  hour } from "../../services/weather";
import moment from "moment";
interface HourProps{
  data: hour
}
export default function Hour({data}: HourProps) {
  return (
    <Center flexDir={'column'}  w={'full'} >
      <Flex fontSize={'xs'}>{ +moment(data.time).format('H') === moment().hour() ? 'Now' : moment(data.time).format('hh:mm A')}</Flex>
      <Flex><Image h={'2em'} src={data.condition.icon} alt={data.condition.text} /></Flex>
      <Flex fontStyle={'italic'}>{data.temp_c}°C </Flex>
      
    </Center>
  )
}
