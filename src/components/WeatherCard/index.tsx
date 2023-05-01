import { Center, Divider, Flex } from "@chakra-ui/react";
import { weatherData } from "../../services/weather";
import { Image } from '@chakra-ui/react'
import moment from "moment";
interface WeatherCardProps {
  data: weatherData;
}
export default function WeatherCard(data: WeatherCardProps) {
  return (
    <Center h={"full"} flexDir={'column'} w={'full'} justifyContent={'start'} padding={2} gap={3}>
      <Image w={'15em'} src={data.data.current.condition.icon} alt={data.data.current.condition.text} />
    <Flex fontSize={'6xl'} fontFamily={'Quicksand'} fontWeight={'normal'} justifyItems={'start'} w={'full'}>{data.data.current.temp_c}°C</Flex>
      <Flex fontSize={'2xl'} fontFamily={'Quicksand'} justifyItems={'start'} w={'full'}>{moment(data.data.forecast.forecastday[0].date).format('dddd')}, <Flex fontSize={'xl'}>{moment(data.data.forecast.forecastday[0].date).format('hh:mm')}</Flex></Flex>
      <Flex flexDir={'column'} justifyItems={'start'} w={'full'} fontFamily={'Quicksand'}>
      <Flex justifyItems={'start'} w={'full'} fontSize={'md'} flexDir={'row'}><Image w={'2em'} src={data.data.current.condition.icon} alt={data.data.current.condition.text} /> <Divider orientation={'vertical'}/> {data.data.current.condition.text}</Flex>
      <Flex justifyItems={'start'} w={'full'} fontSize={'md'} flexDir={'row'}><Image w={'2em'} src={'http://cdn.weatherapi.com/weather/64x64/day/308.png'} alt={'Rain possibility'} /> <Divider orientation={'vertical'}/> Rain - {data.data.forecast.forecastday[0].day.daily_chance_of_rain}%</Flex>
      </Flex>
      <Center justifyItems={'start'} w={'full'} fontFamily={'Quicksand'} fontWeight={'600'} h={'125px'} fontSize={'lg'} flexDir={'row'} color={'ghostWhite'} padding={4} shadow={'lg'} rounded={'2xl'} bgImage={'https://picsum.photos/500/150/?blur'} >{data.data.location.name}, {data.data.location.region}, {data.data.location.country}</Center>
      
    </Center>
  );
}
