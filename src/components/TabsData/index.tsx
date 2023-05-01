import {Center, Divider, Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react'
import { forecastDay, hour } from '../../services/weather'
import moment from 'moment'
import Hour from '../Hour'
import WeekData from '../WeekData'
interface TabsDataProps{
  forecast:  Array<forecastDay>
}
export default function TabsData(forecast : TabsDataProps) {
  const nowHour : number = moment().local().hour()
  //@ts-ignore
  // const filtered = forecast.forecast.hour.filter((hour: hour, index: number) => index>=(nowHour+1) && index<(nowHour+9))
  const filtered = forecast.forecast[0].hour.filter((hour: hour, index: number) => index>=(nowHour+1) && index<(nowHour+9))
  console.log(filtered)
  return (
    <Center w={'full'} >
      <Tabs justifyContent={'start'} w={'full'} h={'calc(22vh)'} border={'transparent'} colorScheme={'blackAlpha'}>
  <TabList  color={'gray.700'}>
    <Tab fontFamily={'Quicksand'} fontWeight={'bold'}>Today</Tab>
    <Tab fontFamily={'Quicksand'} fontWeight={'bold'}>Week</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
    <Center
    flexDir={"column"}
    w={"full"}
    gap={"2"}
    padding={"0.5em"}
    rounded={"md"}
  >
   {/* <Center dir={'row'} gap={2} w={'full'} justifyContent={'start'}><BsClock /> Hourly Forecast</Center> */}
    <Divider />
     <Center dir={'row'} w={'full'} maxW={'-webkit-fit-content'} gap={2} overflowX={{base: 'scroll', lg: 'unset'}}>

    {filtered.map((item: hour, key: number) => 
    <Hour data={item} key={key}/>
    
    )}</Center>
    </Center>
    </TabPanel>

    <TabPanel>
      <Center flexDir={'row'}>

       <WeekData forecast={forecast.forecast} />
      </Center>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Center>
  )
}
