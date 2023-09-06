import { Button, Icon, IconButton, SvgIcon, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import VelzIcon from "@/constants/Icons"
import Image from 'next/image'
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

function TopBar() {
  return (
    <Toolbar>
      <Link href="/">
        <Image src={VelzIcon} alt='Icon of Velz'/>
      </Link>
      <Typography paddingLeft={1} variant="h4" component="div" sx={{ flexGrow: 1 }}>
        Velz
      </Typography>
      <ThemeToggle />
      <Button >Login / Sign Up</Button>
    </Toolbar>
  )
}

export default TopBar