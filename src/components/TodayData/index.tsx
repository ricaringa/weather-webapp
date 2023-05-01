import { Box, Center, Divider } from '@chakra-ui/react'
import { forecastDay, hour } from '../../services/weather'
import Hour from '../Hour'
import moment from 'moment'
import { BsClock } from 'react-icons/bs'
interface WeekDataProps{
  forecast:  forecastDay
}
export default function TodayData({forecast} : WeekDataProps) {
  const nowHour : number = moment().local().hour()
  //@ts-ignore
  const filtered = forecast.hour.filter((hour: hour, index: number) => index>=(nowHour+1) && index<(nowHour+6))
  console.log(filtered)
 
  
  return (
    <Center
    flexDir={"column"}
    w={"full"}
    gap={"2"}
    padding={"0.5em"}
    rounded={"md"}
    fontStyle={"unset"}
    fontFamily={'Quicksand'}
  >
   <Center dir={'row'} gap={2} w={'full'} overflowX={'scroll'} justifyContent={'start'}><BsClock /> Hourly Forecast</Center>
    <Divider />
     <Box dir={'column'} w={'50px'} overflowX={'scroll'}>
    {filtered.map((item: hour, key: number) => 
    <Hour data={item} key={key}/>
    
    )}</Box>
    </Center>
   
  )
}
