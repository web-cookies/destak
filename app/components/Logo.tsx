"use client";

import Image from "next/image";
import { useState } from "react";

export default function Logo() {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="flex items-center">
      {!logoError && (
        <Image
          src="/images/logo.png"
          alt="Logo Destak"
          width={150}
          height={50}
          className="h-12 w-auto mr-3"
          onError={() => setLogoError(true)}
          priority
        />
      )}
      <span className="text-2xl font-bold text-blue-600">Destak</span>
    </div>
  );
}
