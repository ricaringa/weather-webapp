import { Center, Flex, Image } from "@chakra-ui/react";
import {   forecastDay,  } from "../../services/weather";
import moment from "moment";
interface DayProps{
  data: forecastDay
}
export default function Day({data}: DayProps) {
  return (
    // <Center flexDir={'column'} w={'full'}>
    //   {/* <Flex fontSize={'xs'}>{ +moment(data.time).format('H') === moment().hour() ? 'Now' : moment(data.time).format('hh:mm A')}</Flex>
    //   <Flex><Image h={'2em'} src={data.condition.icon} alt={data.condition.text} /></Flex> */}
    //   <Center dir={'row'}  h={'wrap'} gap={2} w={'full'} >
    //   <Flex fontStyle={'italic'} >{moment(data.date).format('dddd')} </Flex>
    //   <Divider orientation='vertical'  />
    //    <Image w={{base: '2em', lg:'10'}}  src={data.day.condition.icon} alt={data.day.condition.text}/>
    //   <Divider orientation='vertical'  />
    //   <Flex> {data.day.mintemp_c}°C</Flex>
    //   <Flex> {data.day.maxtemp_c}°C</Flex>
    //   <Progress  value={50} />
    //   </Center>
  
    // </Center>
    <Center flexDir={'column'} minW={'5em'} w={'5em'} h={{base: '7em',lg:'7em'}} bgColor={'gray.50'} rounded={'md'} padding={2}>
      <Flex fontSize={'xs'}>{ +moment(data.date).format('H') === moment().hour() ? 'Now' : moment(data.date).format('ddd')}</Flex>
      <Flex><Image h={'3em'} src={data.day.condition.icon} alt={data.day.condition.text} /></Flex>
      <Flex flexDir={'row'} gap='1'>
      <Flex fontSize={'sm'} fontWeight={'500'}>{data.day.avgtemp_c}°</Flex>
      
      </Flex>
      
    </Center>
  )
}
