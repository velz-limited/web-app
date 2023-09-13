import HomeLink from '@/components/common/HomeLink'
import { Typography } from '@mui/material'
import React from 'react'
import { greenTextColor } from '@/theme/colors'
import Link from 'next/link'
import VelzIcon from '@/constants/Icons'
import Image from 'next/image'

export default function HomeButton() {
  return (
    <>
      <Link href="/">
        <Image src={VelzIcon} alt='Icon of Velz' />
      </Link>
      <Typography paddingLeft={1} variant="h4" component="div" sx={{ color: greenTextColor, flexGrow: 1 }}>
        Velz
      </Typography>
    </>
  )
}
