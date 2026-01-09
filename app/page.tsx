'use client';

import Button from "./src/design-system/atom/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <Button
          label="Click Me"
          color="azure"
          handleClick={() => alert("Button clicked!")}
          p="m"
        />
    </div>
  );
}
