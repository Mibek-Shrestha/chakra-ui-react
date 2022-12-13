import React from 'react'
import { Box, Image,Heading } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'
function Home() {
  return <Box>
    <MyCarousel/>

  </Box>
};
const MyCarousel = () => {
    <Carousel autoPlay infiniteLoop interval={1000} showArrows={false}
    showStatus={false}
    showThumbs={false}    >
        <Box w="full" h={'100vh'}>
           
            <Image src={img1} />
            <Heading 
              bgColor={'blackAlpha:600'} color={'white'}>
                Watch the Future
            </Heading>
        </Box>
    </Carousel>
}
export default Home