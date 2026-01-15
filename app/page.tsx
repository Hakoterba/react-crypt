'use client';

import Button from "./src/design-system/atom/button";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className="flex items-center justify-center min-h-screen">
        <Button
          label="Click Me"
          color="azure"
          handleClick={() => alert("Button clicked!")}
          p="m"
        />
        <Button
          label="Switch theme"
          color="azure"
          handleClick={() => setIsDarkTheme(!isDarkTheme)}
          p="m"
        />   
      </div>
  );
}
