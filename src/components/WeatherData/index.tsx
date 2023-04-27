import { Center, Flex, Spinner, Image, SimpleGrid, HStack } from '@chakra-ui/react'
import { weatherData } from '../../services/weather'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import TodayData from '../TodayData'
import moment from 'moment'
import WeekData from '../WeekData'
interface weatherDataProps{
  data: weatherData,
  isLoading : boolean
}
export default function WeatherData({data , isLoading} : weatherDataProps) {
  return (
    <Center flex={3} flexDir={'column'} padding={5}  h={'wrap'} gap={2} w={'full'}>
      {isLoading ? <><Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='md'
/></> : <>
     <Center flexDir={'column'} w={'full'}>
     <Flex fontSize={{base: 'xs', lg:'sm'}} fontStyle={'italic'}>
     <HStack spacing='24px' >
      <BiSkipPrevious size={'1.5em'} />
      <Flex>{moment(moment.now()).format('dddd, MMMM Do, YYYY')}</Flex>
      <BiSkipNext size={'1.5em'} />
      </HStack> 
      </Flex>
     <Center fontSize={{base: '4xl', lg: '5xl'}} w={'full'} >
      <Center w={'full'} >
     <Image src={data.current.condition.icon} alt={data.current.condition.text} />
      {data.location.name}
        </Center></Center>
      <Flex fontSize={{base: '5xl'}}>
        {data.current.temp_c}°C
      </Flex>
      {/* <Flex fontSize={'lg'} fontStyle={'italic'}>
      {data.current.condition.text}</Flex> */}
      <Flex fontSize={'md'} fontStyle={'italic'}>
      Feels like: {data.current.feelslike_c}°C</Flex>
      </Center>
      <SimpleGrid columns={{base: 1, lg: 2}} gap={{lg:10}}>
      
      <Flex dir={'row'} alignItems={'start'}>
      <TodayData  forecast={data.forecast.forecastday[0]}/>
      </Flex>
      <Flex>
      <WeekData  forecast={data.forecast.forecastday}/> 
      </Flex>
      </SimpleGrid>
      </>}
       </Center>
  )
}
