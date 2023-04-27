import { Center, Divider } from '@chakra-ui/react'
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
  >
   <Center dir={'row'} gap={2} w={'full'} justifyContent={'start'}><BsClock /> Hourly Forecast</Center>
    <Divider />
     <Center dir={'row'} w={'full'}>

    {filtered.map((item: hour) => 
    <Hour data={item}/>
    
    )}</Center>
    </Center>
   
  )
}
