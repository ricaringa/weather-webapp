import { Center, Divider } from "@chakra-ui/react";
import { forecastDay } from "../../services/weather";
import {BsCalendar3} from 'react-icons/bs'
import Day from "../Day";
interface WeekDataProps {
  forecast: Array<forecastDay>;
}
export default function WeekData({ forecast }: WeekDataProps) {
  return (
    <Center
      flexDir={"column"}
      w={"full"}
      gap={"2"}
      padding={"0.5em"}
      rounded={"md"}
      fontStyle={"unset"}
    >
     <Center dir={'row'} gap={2} w={'full'} justifyContent={'start'}><BsCalendar3 /> 7 Days Forecast</Center>
      <Divider />
      {forecast.map((item: forecastDay) => (
        <Day data={item} />
      ))}
    </Center>
  );
}
