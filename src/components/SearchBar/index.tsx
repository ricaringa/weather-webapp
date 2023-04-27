import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react'
import { MdOutlineSearch } from 'react-icons/md'

export default function SearchBar({handleClick, q, setQ} : any) {
  return (
    <Stack spacing={4} w={'full'} maxW={{base: 'calc(75vw)',lg:'calc(30vw)'}} alignItems={'center'}>
              <InputGroup
              >
                <InputLeftElement
                  pointerEvents="none"
                  children={<MdOutlineSearch color="gray.300" />}
                  />
                <Input type='text' placeholder="Enter your city" 
                value={q}
                onChange={(event)=>{setQ(event.target.value)}}
                fontSize={'lg'}
                width={'full'}
                maxW={{base: 'calc(75vw)',lg:'calc(30vw)'}}
                />
                 <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' 
        onClick={handleClick}
        >
          Search
        </Button>
      </InputRightElement>
              </InputGroup>

              
            </Stack>
  )
}
