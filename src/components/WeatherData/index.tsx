import {
  Center,
  Spinner,
} from "@chakra-ui/react";
import { weatherData } from "../../services/weather";
import TabsData from "../TabsData";
import Highlights from "../Highlights";
interface weatherDataProps {
  data: weatherData;
  isLoading: boolean;
}
export default function WeatherData({ data, isLoading }: weatherDataProps) {
  return (
    <Center
      flexDir={"column"}
      bgGradient='linear(to-bl, blackAlpha.100, ghostwhite)'
      roundedRight={{base: '', lg: "calc(2vh)"}}
      padding={5}
      gap={10}
      justifyContent={'start'}
      minW={'calc(40vw)'}
      maxW={{base: 'calc(100vw)', lg: 'calc(40vw)'}}
    >
      {isLoading ? (
        <Center w={'full'} h={'full'}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="md"
          />
        </Center>
      ) : (
        <>
          <Center flexDir={"column"} w={"full"} gap={25}>
            <TabsData forecast={data.forecast.forecastday} />
            <Highlights data={data} />
            
          </Center>
          
        </>
      )}
    </Center>
  );
}
