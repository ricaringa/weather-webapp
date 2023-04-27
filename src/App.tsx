import { Center, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherData from "./components/WeatherData";
import getData, { weatherData } from "./services/weather";
import moment from "moment";

function App() {
  const [showData, setShowData] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [q, setQ] = useState<string>("");
  const [data, setData] = useState<weatherData>({} as weatherData);
  const toast = useToast();
  const handleSearch = async () => {
    if(q !==''){
      setShowData(true);
    setIsLoading(true)
    setData(await getData(q));
    console.log(q);
    setQ("");setIsLoading(false)
    } else {
      toast({
        title: 'OOOOOPS',
        description: "You need to type in something before clicking the button buddy ",
        status: 'error',
        duration: 9000,
        isClosable: true,

      })
    }
  };
  const handleLocationDetected = async (position: any) => {
    setShowData(true);
    setIsLoading(true)
    setData(
      await getData(`${position.coords.latitude},${position.coords.longitude}`)
    );
    setIsLoading(false)
  };
  useEffect(() => {
    const successCallback = (position: any) => {
      handleLocationDetected(position);
    };

    const errorCallback = (error: any) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);
  console.log(moment().hour())
  return (
    <>
    

      <Center h={"calc(100vh)"}  bgGradient='linear(to-br, tomato, pink.400)'>
        <Center
          w={{ base: "calc(80vw)", lg: "calc(40vw)" }}
          // maxH={'calc(50vh)'}
          h={'wrap'}
          bg={"ghostwhite"}
          rounded={"lg"}
          shadow={"xl"}
          flexDir={"column"}
          padding={10}
          border={'2px'}
          borderColor={'blackAlpha.100'}
        >
          <Center flex={1} w={"full"} alignItems={'center'} >
            <SearchBar q={q} setQ={setQ} handleClick={handleSearch} />
          </Center>
          {showData ? <WeatherData data={data} isLoading={isLoading}/> : <></>}
        </Center>
      </Center>
    </>
  );
}

export default App;
