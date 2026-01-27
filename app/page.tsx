'use client';

import Button from "./src/design-system/atom/button";
import Card  from "./src/design-system/atom/card";
import CardWallet from "./src/design-system/atom/cardWallet";
import { useState, useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import { SunIcon, MoonIcon, WalletIcon, AddIcon, BitcoinIcon, EthereumIcon } from './src/styles/icons';

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className="flex items-center justify-center min-h-screen w-full">

    <div className="min-h-screen bg-background w-full p-3">
      <header className="w-full border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="mx-auto px-6 py-2 flex items-center justify-between">

          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-background/50">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <WalletIcon />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ReactCrypt</h1>
              <p className="text-xs text-muted-foreground">Wallet Manager</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-xl">
            <Button
              label="Add Wallet"
              icon={<AddIcon />}
              handleClick={() => alert('Add Wallet Clicked')}
              className="flex items-center gap-2 mr-10 px-4 py-2 rounded-lg border border-border font-medium transition-colors"
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
      <main className="mx-auto max-w-7xl py-10">
        <div className="flex">
          <Card
            title="Total porfolio value"
            value="1281,18$"
            total="3 wallets"
            valueSize="lg"
            className="border-gray-500 w-1/2 flex-none"
          />

          <Card
            icon={<BitcoinIcon />}
            title="Bitcoin"
            value="0.056 BTC"
            total="1281,18$"
            className="flex-1 ml-6"
          />

          <Card
            icon={<EthereumIcon />}
            title="Ethereum"
            value="2.5 ETH"
            total="4000,00$"
            className="flex-1 ml-6"
          />
        </div>

        <div className="mt-10">
          <div className="flex w-full gap-6">

            <div className="w-2/3">

              <div className="mb-5 flex items-center justify-between px-10">
                <h2 className="text-xl font-bold text-foreground">
                  Your Wallets
                </h2>
                <p>Nombre de wallets: 3</p>
              </div>

              <div className="flex flex-wrap gap-6 px-10">
                  <CardWallet
                    icon="Ξ"
                    title="Main Ethereum"
                    address="0x742d35Cc66...95f2bD31"
                    value="12.4582"
                    currency="ETH"
                    total="$40 494,38"
                    totalTransaction={8}
                    onDelete={() => alert('Delete wallet')}
                  />
                <div className="w-[calc(50%-12px)] rounded-xl bg-white p-6 shadow">
                  Card 2
                </div>
                <div className="w-[calc(50%-12px)] rounded-xl bg-white p-6 shadow">
                  Card 3
                </div>
              </div>
            </div>

            <div className="w-1/3 rounded-xl bg-white p-6 shadow">
              Wallets détails
            </div>
          </div>
        </div>

        </main>
    </div>

    </div>
  );
}
