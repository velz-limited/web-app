import DateInput from '@/components/DateInput';
import DestinationInput from '@/components/DestinationInput';
import ThemeToggle from '@/components/common/ThemeToggle';
import TopBar from '@/components/landing/TopBar/TopBar';
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

