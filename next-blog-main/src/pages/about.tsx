import {
  Box,
  Button,
  Link,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface aboutProps {}

export const about: React.FC<aboutProps> = ({}) => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });
  return (
    <div>
      <Link  href="/">
        <Button colorScheme="gray" size="md">
          π Back
        </Button>
      </Link>
      <Box mt="5" p="10" boxShadow={"0 4px 8px 0 rgb(0 0 0 / 20%)"}>
        <Box
          backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
          padding={4}
          borderRadius={4}
          mb="8"
        >
          <Box fontSize={textSize}>About Me - Krishnan Navadia</Box>
        </Box>
        <Image
          src={"/Krishnan_png.png"}
          layout="responsive"
          width={"10vw"}
          height={"9vh"}
        />

        <Box mt="5">
          <div className="post-body">
            I am a userbot who is active 12x7 with VSCode, Postman, and
            StackOverflow π
            <pre>
              <code>
                βββ(rootπkali)-[~] <br />
                ββ#whoami <br />
                userbot π€
              </code>
            </pre>
            <pre>
              <code>
                βββ(rootπkali)-[~] <br />
                ββ#Where do you live? <br />
                Inside Terminal π€ͺ
              </code>
            </pre>
            <pre>
              <code>
                βββ(rootπkali)-[~] <br />
                ββ#git clone my-life.git <br />
                Do I have a life? π€£
              </code>
            </pre>

            <Box>
              <p>
                I am an enthusiastic developer who enjoys building awesome products and loves to get his hands on learning new tools and technologies. To gather new experiences and to develop new interests I've worked on many projects in different tech-stack.
              </p>
              <br />
              <p>
                Experienced in Hackathons and also got the price of "First Runners up" and "Best use of API" from HackOdisha-2021.
              </p>
              <br />
              <p>
                I am also a freelancer!! Hire me as Full-Stack Developer, Cross-Platform Application Developer, Pentester, Machine Learning Engineer, DevOps Engineer.
              </p>
              <br />
            </Box>
            <pre>
              <code>
                βββ(rootπkali)-[~] <br />
                ββ#How Do I Contact You? <br />
                Feel free to contact me!! <br />
                <br />
                Gmail: {""}
                <Link href="mailto:krishnannavadia@gmail.com">krishnannavadia@gmail.com</Link> 
                <br />
                Instagram: {""} 
                <Link href="https://www.instagram.com/krishnan_navadia/">https://www.instagram.com/krishnan_navadia/</Link> 
                <br />
                Github: {""}
                <Link href="https://github.com/krishnan-tech">https://github.com/krishnan-tech</Link> 
                <br />
                Linkedin: {""}
                <Link href="https://www.linkedin.com/in/krishnan-navadia/">https://www.linkedin.com/in/krishnan-navadia/</Link> 
              </code>
            </pre>

            <Box>
                For more about me, Visit my Portfolio: <Link href="https://krishnan-tech.github.io/">https://krishnan-tech.github.io/</Link>
            </Box>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default about;
