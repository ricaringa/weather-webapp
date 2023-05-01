import { Center } from "@chakra-ui/react";
import SearchBar from "../SearchBar";
import { Dispatch, SetStateAction } from "react";
import WeatherCard from "../WeatherCard";
import { weatherData } from "../../services/weather";

interface sidebarProps{
  isLoading : boolean,
  showData: boolean,
  setIsLoading ?: (value: boolean) => void,
  handleSearch?: Dispatch<SetStateAction<string>>,
  setQ?: Dispatch<SetStateAction<string>>,
  getUserLocation: () => void,
  q: string,
  data: weatherData
}
export default function Sidebar(props: sidebarProps) {
  
  return (
    <Center flexDir={"column"} padding={5} w={{base: props.showData ? 'calc(100vw)': 'calc(30vw)', lg: props.showData ? 'calc(40vw)': 'calc(10vw)'}}
    minW={'calc(20vw)'}>
      <Center flexDir={'row'} w={ 'calc(20vw)' }>
      <SearchBar showData={props.showData} q={props.q} setQ={props.setQ} handleClick={props.handleSearch} getUL={props.getUserLocation} />
      </Center>
      {props.showData ? <WeatherCard data={props.data} /> : <></>}
      
    </Center>
  );
}
