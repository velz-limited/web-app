import DateInput from '@/components/DateInput';
import DestinationInput from '@/components/DestinationInput';
import ThemeToggle from '@/components/ThemeToggle';
import TopBar from '@/views/landing/TopBar';
import { Button } from '@mui/material';
import * as React from 'react';

export default function HomePage() {
  return (
    <div>
      <TopBar />
      <DateInput label="Date" />
      <DestinationInput />
    </div>
  );

}

