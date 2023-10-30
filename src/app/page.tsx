import { LogIn } from '@/components/auth';
import SideBar from '@/components/common/SideBar';
import LandingPage from '@/components/landing/LandingPage';
import { redirect } from 'next/navigation';
import * as React from 'react';

export default function HomePage() {
  redirect("auth/log-in")
  return <>
    <LandingPage />
    <SideBar/>
    <LogIn />
  </>;
  // return <></>
}