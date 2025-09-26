"use client"

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const {setTheme} = useTheme();
  return (
    <div>
      This is net js proje
      <Button onClick = {()=>setTheme('dark')}>Dark</Button>
      <Button onClick = {()=>setTheme('light')}>Light</Button>
    </div>
  );
}
