import React from 'react'
import Link from 'next/link';
import { VelzIcon } from '@/icons';

export default function HomeLink() {
  return (
    <Link href="/">
      <VelzIcon/>
    </Link>
  )
}
