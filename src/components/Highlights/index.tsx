import { Center, Flex, SimpleGrid } from "@chakra-ui/react";
import { BiCompass, BiWind } from 'react-icons/bi'
import { TbUvIndex } from 'react-icons/tb'

import { weatherData } from "../../services/weather";
import { BsSunrise, BsSunset } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { MdCo2, MdVisibility } from "react-icons/md";
interface HighlightsProps{
  data: weatherData
}
export default function Highlights( {data} : HighlightsProps) {
  console.log(data)
  return (
    <Center
    flexDir={"column"}
    w={"full"}
    h={"full"}
    gap={"2"}
    padding={"0.5em"}
    rounded={"md"}
    fontStyle={"unset"}
    fontFamily={'Quicksand'}
  >
   <Center dir={'row'} w={'full'} justifyContent={'start'} fontWeight={'bold'} color='gray.700'>Today's Highlights</Center>
  
    <SimpleGrid w={'full'} h={'full'} gap={5} columns={{base: 2, lg: 3}} fontFamily={'Quicksand'} marginTop={5}>
     {/* Widget */}
    <Center padding={5} flexDir={'column'} justifyContent={'start'} alignItems={'start'} color={'gray.400'} w={{base: 'wrap', xs:'wrap',  lg: '14em'}}  h={{base: '9em', lg: '12em'}} shadow={'md'} bgColor={'gray.50'} rounded={'md'}>
    <Flex fontSize={'xl'}>UV Index</Flex>
    {/* <Flex><Image h={'3em'} src={data.condition.icon} alt={data.condition.text} /></Flex> */}
    <Center flexDir={'column'} gap='1' h={'full'}>
    <Center fontSize={{base: '2xl', sm: '2xl', md:'3xl', lg: '5xl'}} fontWeight={'semibold'} gap={2}> <TbUvIndex />{data.current.uv}</Center>
    </Center>
    </Center>
    {/* Widget */}
    <Center padding={5} flexDir={'column'} justifyContent={'start'} alignItems={'start'} color={'gray.400'} w={{base: '1em', xs:'5em',  lg: '14em'}}  h={{base: '9em', lg: '12em'}} shadow={'md'} bgColor={'gray.50'} rounded={'md'}>
    <Center flexDir={'column'} h={'full'} alignItems={'center'}>
    <Flex fontSize={'xl'} flex={1}>Wind Status</Flex>
    {/* <Flex><Image h={'3em'} src={data.condition.icon} alt={data.condition.text} /></Flex> */}
    <Center flexDir={'column'} gap='1' flex={5} h={'full'}>
    <Center fontSize={{base: '2xl', sm: '2xl', md:'3xl', lg: '5xl'}} fontWeight={'semibold'} gap={2}> <BiWind />{data.current.wind_kph} <Center fontSize={'xl'}>KMh</Center></Center>
    <Center fontSize={{base: '2xl', sm:'2xl', md: '2xl', lg: '3xl'}} fontWeight={'semibold'} justifyContent={'start'}><BiCompass /> {data.current.wind_dir}</Center>
    </Center>
      </Center>
    </Center>
    {/* Widget */}
    <Center padding={5} flexDir={'column'} justifyContent={'start'} alignItems={'start'} color={'gray.400'} w={{base: '1em', xs:'5em',  lg: '14em'}}  h={{base: '9em', lg: '12em'}} shadow={'md'} bgColor={'gray.50'} rounded={'md'}>
    <Center flexDir={'column'} h={'full'}>
    <Flex fontSize={'xl'} flex={1}>Sunrise and Sunset</Flex>
    {/* <Flex><Image h={'3em'} src={data.condition.icon} alt={data.condition.text} /></Flex> */}
    <Center flexDir={'column'} gap='1' flex={5} h={'full'}>
    <Center fontSize={{base: 'xl', lg: '3xl'}} fontWeight={'semibold'} justifyContent={'start'} gap={1}><BsSunrise /> {data.forecast.forecastday[0].astro.sunrise}</Center>
    <Center fontSize={{base: 'xl', lg: '3xl'}} fontWeight={'semibold'} justifyContent={'start'} gap={1}><BsSunset /> {data.forecast.forecastday[0].astro.sunset}</Center>
    </Center>
      </Center>
    </Center>
    {/* Widget */}
    <Center padding={5} flexDir={'column'} justifyContent={'start'} alignItems={'start'} color={'gray.400'} w={{base: '1em', xs:'5em',  lg: '14em'}}  h={{base: '9em', lg: '12em'}} shadow={'md'} bgColor={'gray.50'} rounded={'md'}>
    <Center flexDir={'column'} h={'full'}>
    <Flex fontSize={'xl'} flex={1}>Humidity</Flex>
    {/* <Flex><Image h={'3em'} src={data.condition.icon} alt={data.condition.text} /></Flex> */}
    <Center flexDir={'column'} gap='1' flex={5} h={'full'}>
    <Center fontSize={{base: '2xl', sm: '2xl', md:'3xl', lg: '5xl'}} fontWeight={'semibold'} justifyContent={'start'}><WiHumidity /> {data.current.humidity}%</Center>
    </Center>
      </Center>
    </Center>
    {/* Widget */}
    <Center padding={5} flexDir={'column'} justifyContent={'start'} alignItems={'start'} color={'gray.400'} w={{base: '1em', xs:'5em',  lg: '14em'}}  h={{base: '9em', lg: '12em'}} shadow={'md'} bgColor={'gray.50'} rounded={'md'}>
    <Center flexDir={'column'} h={'full'}>
    <Flex fontSize={'xl'} flex={1}>Visibility</Flex>
    {/* <Flex><Image h={'3em'} src={data.condition.icon} alt={data.condition.text} /></Flex> */}
    <Center flexDir={'column'} gap='1' flex={5} h={'full'}>
    <Center fontSize={{base: '2xl', sm: '2xl', md:'3xl', lg: '5xl'}} fontWeight={'semibold'} justifyContent={'start'} gap={2}><MdVisibility /> {data.current.vis_km}KM</Center>
    </Center>
      </Center>
    </Center>
    {/* Widget */}
    <Center padding={5} flexDir={'column'} justifyContent={'start'} alignItems={'start'} color={'gray.400'} w={{base: '1em', xs:'5em',  lg: '14em'}}  h={{base: '9em', lg: '12em'}} shadow={'md'} bgColor={'gray.50'} rounded={'md'}>
    <Center flexDir={'column'} h={'full'}>
    <Flex fontSize={'xl'} flex={1}>Air Quality</Flex>
    {/* <Flex><Image h={'3em'} src={data.condition.icon} alt={data.condition.text} /></Flex> */}
    <Center flexDir={'column'} gap='1' flex={5} h={'full'}>
    <Center fontSize={{base: 'xl', lg: '3xl'}} fontWeight={'semibold'} justifyContent={'start'} gap={2}><MdCo2 /> {data.current.air_quality.co.toFixed(2)}</Center>
    </Center>
      </Center>
    </Center>
    </SimpleGrid>
    </Center>
  );
}
