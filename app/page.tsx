'use client';

import Button from "./src/design-system/atom/button";
import { useState, useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import { SunIcon, MoonIcon, WalletIcon, AddIcon } from './src/styles/icons';

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className="flex items-center justify-center min-h-screen w-full">

    <div className="min-h-screen bg-background w-full">
      <header className="w-full border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3 px-4 py-2 rounded-xl border border-border bg-background/50">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <WalletIcon />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CryptoVault</h1>
              <p className="text-xs text-muted-foreground">Wallet Manager</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-background/50">
            <Button
              label="Add Wallet"
              icon={<AddIcon />}
              handleClick={() => alert('Add Wallet Clicked')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            />

            <Button
              label=""
              icon={isDarkTheme ? <MoonIcon /> : <SunIcon />}
              handleClick={() => setIsDarkTheme(!isDarkTheme)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:bg-muted hover:rotate-12 transition-transform"
            />
          </div>

        </div>
      </header>
    </div>

    </div>
  );
}
