'use client';

import Button from "./src/design-system/atom/button";
import { useState, useEffect } from "react";
import { useTheme } from "./hooks/useTheme";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const MoonIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 12.79A9 9 0 0111.21 3 7 7 0 1012 21a9 9 0 009-8.21z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
  const SunIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
      <line x1="12" y1="1" x2="12" y2="4" stroke="currentColor" strokeWidth="2"/>
      <line x1="12" y1="20" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" stroke="currentColor" strokeWidth="2"/>
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2"/>
      <line x1="1" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="2"/>
      <line x1="20" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2"/>
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" stroke="currentColor" strokeWidth="2"/>
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="toggleTheme">
        <Button
          label=""
          icon={isDarkTheme ? MoonIcon : SunIcon}
          color="azure"
          handleClick={() => setIsDarkTheme(!isDarkTheme)}
          p="m"
        />  
      </div>
      <div className="min-h-screen bg-background">
      {/* <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40"><div className="container mx-auto px-4 py-4 flex items-center justify-between"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-foreground"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg></div><div><h1 class="text-xl font-bold text-foreground">CryptoVault</h1><p class="text-xs text-muted-foreground">Wallet Manager</p></div></div><button class="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>Add Wallet</button></div></header> */}
      </div>
    </div>
  );
}
