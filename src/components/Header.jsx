import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
  } from '@chakra-ui/react';
import {Link} from "react-router-dom"
import { BiMenuAltLeft } from "react-icons/bi"
function Header() {
  return (
    <>
        <Button>
            Menu
        </Button>
        <BiMenuAltLeft size={'20'}/>
    </>
  )
}

export default Header