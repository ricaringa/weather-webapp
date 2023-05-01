import { Center, Link, Text} from '@chakra-ui/react'
import { FiGithub } from 'react-icons/fi'

interface CopyProps{
  showData : boolean
}
export default function Copy(showData : CopyProps) {
  return (
    <Center w={'full'} marginTop={{base: showData ? '1.5em' : '1.2em', lg: showData ? '1.5em' : '2em'}} fontFamily={'Quicksand'} padding={5} margin={3} flexDir={{base:'row', lg:'row'}} gap={5}>
      <Center justifyContent={'start'}>
      <Text> 2022 &copy; AnotherWeatherApi its built with React.js using <Link href={'https://www.weatherapi.com/'} isExternal> WeatherApi.com's</Link> data </Text>
      </Center>
      <Center >
      <Link href={'https://github.com/ricaringa/weather-webapp'} isExternal><FiGithub /></Link>
      </Center>
      </Center>
  )
}
