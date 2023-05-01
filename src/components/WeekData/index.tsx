import { Center, Divider } from "@chakra-ui/react";
import { forecastDay } from "../../services/weather";
import Day from "../Day";
interface WeekDataProps {
  forecast: Array<forecastDay>;
}
export default function WeekData({ forecast }: WeekDataProps) {
  console.log(forecast)
  return (
    <Center
    flexDir={"column"}
    w={"full"}
    gap={"2"}
    padding={"0.5em"}
    rounded={"md"}
  >
   {/* <Center dir={'row'} gap={2} w={'full'} justifyContent={'start'}><BsCalendar3 /> Hourly Forecast</Center> */}
    <Divider />
     <Center dir={'row'} w={'full'} maxW={'-webkit-fit-content'} gap={2} overflowX={{base: 'scroll', lg: 'unset'}}>

     {forecast.map((item: forecastDay, key: number) => (
        <Day data={item} key={key} />
        ))}</Center>
    </Center>
    // <Center
    //   flexDir={"column"}
    //   w={"full"}
    //   gap={"2"}
    //   padding={"0.5em"}
    //   rounded={"md"}
    //   fontStyle={"unset"}
    // >
    //  <Center dir={'row'} gap={2} w={'full'} justifyContent={'start'}><BsCalendar3 /> 7 Days Forecast</Center>
    //   <Divider />
    //   <Box dir={'column'} gap={2} w={'50px'} overflowX={'scroll'}>

    //   {forecast.map((item: forecastDay, key: number) => (
    //     <Day data={item} key={key} />
    //     ))}
    //     </Box>
    // </Center>
  );
}
