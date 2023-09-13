import React from 'react'
import VelzIcon from "@/constants/Icons"
import Image from 'next/image'
import Link from 'next/link';

export default function HomeLink() {
  return (
    <Link href="/">
      <Image src={VelzIcon} alt='Icon of Velz' />
    </Link>
  )
}
