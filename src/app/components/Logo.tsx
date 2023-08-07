"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return <Image src="/images/logo.svg" alt="Logo" width={148} height={29} />;
};

export default Logo;
