import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { MdOutlineSearch } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

export default function SearchBar({ handleClick, q, setQ, getUL, showData }: any) {
  return (
    <Stack
      spacing={4}
      w={{ base: "calc(80vw)", lg: showData ? 'calc(18vw)' : 'calc(25vw)' }}
      alignItems={"center"}
      fontFamily={'Quicksand'}
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<MdOutlineSearch color="gray.300" />}
        />
        <Input
          type="text"
          placeholder="Enter your city"
          border={"none"}
          value={q}
          onKeyUp={(event)=>{event.keyCode == 13 ? handleClick() : ''}}
          onChange={(event) => {
            setQ(event.target.value);
          }}
          fontSize={"md"}
          w={{ base: "calc(80vw)", lg: showData ? 'calc(20vw)' : 'calc(25vw)' }}
          maxW={{ base: "calc(75vw)", lg: "calc(40vw)" }}
        />
        <InputRightElement width="4.5rem">
          <IconButton
            aria-label="User location"
            rounded={"full"}
            icon={<CiLocationOn />}
            onClick={() => {
              getUL()
            }}
          />
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
}
