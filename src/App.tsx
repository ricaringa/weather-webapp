import { Center, Flex, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import WeatherData from "./components/WeatherData";
import getData, { weatherData } from "./services/weather";
import Sidebar from "./components/Sidebar";
import Copy from "./components/Copy";
function App() {
  const [showData, setShowData] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [q, setQ] = useState<string>("");
  const [data, setData] = useState<weatherData>({} as weatherData);
  const toast = useToast();
  const handleSearch = async () => {
    if(q !==''){
      setIsLoading(true)
     setData(await getData(q));
     console.log(data)
      if(data.code===0){
        toast({
          title: 'OOOOOPS',
          description: "Location not found",
          status: 'warning',
          duration: 4000,
          isClosable: true,
          position: 'top-left'
  
        })
      } else{
        setQ("");
        setIsLoading(false)
        setShowData(true);
      }
    } else {
      toast({
        title: 'OOOOOPS',
        description: "You need to type in something before clicking the button buddy ",
        status: 'info',
        duration: 4000,
        isClosable: true,
        position: 'top-left'

      })
    }
  };
  const handleLocationDetected = async (position: any) => {
    setIsLoading(true)
    setData(
      await getData(`${position.coords.latitude},${position.coords.longitude}`)
      );
      setIsLoading(false)
      setShowData(true);
  };
  const getUserLocation = () => {
    const successCallback = (position: any) => {
      handleLocationDetected(position);
    };

    const errorCallback = (error: any) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }
  useEffect(() => {
    const successCallback = (position: any) => {
      handleLocationDetected(position);
    };

    const errorCallback = (error: any) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);
  return (
    <>
    

      <Center h={{base: showData ? 'full' : 'calc(100vh)', lg:('calc(100vh)')}} w={'calc(100vw)'} bgColor={'gray.200'} flexDir={'column'}>
        <Center
          w={{ base: showData ? 'calc(100vw)' : 'calc(85vw)' , lg: showData ? 'calc(60vw)' : 'calc(30vw)'}}
          h={{ base: showData ? 'full' : 'calc(20vw)', lg : showData ?  'calc(80vh)' : 'calc(5vw)'}}
          bg={"ghosyWhite"}
          rounded={{base: '2xl', lg: 'calc(2vh)'}}
          shadow={"xl"}
          flexDir={"column"}
          // padding={5}
          border={'2px'}
          borderColor={'blackAlpha.100'}
        >
          {/* <Center flex={1} w={"full"} alignItems={'center'} >
            <SearchBar q={q} setQ={setQ} handleClick={handleSearch} />
          </Center>
          {showData ? <WeatherData data={data} isLoading={isLoading}/> : <></>} */}

          <Flex flexDir={{base:'column', lg:'row'}} w={showData ? 'full' : 'wrap'} h={'full'} justifyContent={'start'} >
            <Sidebar q={q} setQ={setQ} showData={showData} setIsLoading={setIsLoading} isLoading={isLoading} handleSearch={handleSearch} data={data} getUserLocation={getUserLocation} />
            {/* <WeatherData data={data} isLoading={isLoading}/> */}
            {showData ? <WeatherData data={data} isLoading={isLoading}/> : <></>}
          </Flex>
        </Center>
        <Center w={{base: showData ? 'calc(80vw)' : 'calc(80vw)', lg: showData ? 'calc(75vw)' : 'calc(28vw)'}}>
        <Copy showData={showData} />
        </Center>
      </Center>
    </>
  );
}

export default App;
