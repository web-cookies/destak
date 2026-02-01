"use client";

import Image from "next/image";
import { useState } from "react";

export default function Logo() {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="flex items-center">
      {!logoError && (
        <Image
          src="/images/logo.svg"
          alt="Logo Destak"
          width={150}
          height={100}
          className="h-16 w-auto mr-3"
          onError={() => setLogoError(true)}
          priority
        />
      )}
    </div>
  );
}
