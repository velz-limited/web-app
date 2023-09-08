import ThemeRegistry from '@/theme/ThemeRegistry';
import * as React from 'react';

export const metadata = {
  title: 'Velz Travel Planner',
  description: 'AI Oriented travel planner',
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry >
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
