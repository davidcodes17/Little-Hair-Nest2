import { Box, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const Logo = ({width, height}) => {
  return (
    <Box>
        <Image as={motion.img} objectFit={"cover"} whileHover={{ scale : 1.5}} src='/logo (2).png' width={width} height={height} borderRadius={100} />
    </Box>
  )
}

export default Logo