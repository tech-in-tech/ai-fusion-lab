'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { set } from "mongoose"
export function AppSidebar() {
  const { theme, setTheme } = useTheme();
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-3 ">


          <div className=" flex justify-between items-center">
            <div className="flex items-center gap-3">

              <Image
                src="/logo.svg"
                alt="Logo"
                width={60}
                height={60}
                className="w-[40px] h-[40px]"
              />
              <h2 className="font-bold text-xl">AI Fusion</h2>
            </div>
            {

              theme == 'light' ?
                <Button variant={'ghost'}
                  onClick={() => setTheme('dark')}><Sun /></Button> : <Button onClick={() => setTheme('light')} variant={'ghost'}><Moon /></Button>
            }
          </div>
          <Button className='mt-7 w-full' size='lg'>+ New Chat</Button>
        </div>

      </SidebarHeader>
      <SidebarHeader />
      <SidebarContent>

        <SidebarGroup >
          <div className="p-3">
            <h2 className=" font-bold text-lg"></h2>
            <p className="text-sm text-gray-400">Sign in to start chating with multiple AI model</p>
          </div>
        </SidebarGroup >

      </SidebarContent>
      <SidebarFooter >
        <div className="p-3 mb-10 ">
          <Button className='w-full' size={'lg'}>Sign In / Sign Up</Button>
        </div>
      </SidebarFooter >
    </Sidebar>
  )
}