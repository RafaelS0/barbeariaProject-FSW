"use client"
import Image from "next/image"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Card, CardContent } from "./_components/ui/card"
import { Input } from "./_components/ui/input"
import { Search } from "lucide-react"

const Home = () => {
  return <div>
   <Header/>

  <div className="p-5">
    <h1 className="text-xl font-bold">Olá, Rafael</h1>
    <p>Quarta-feira, 07 de Agosto</p>
 
   <div className="flex items-center gap-2 mt-6">
   <Input placeholder="Faça sua busca.."></Input>
   <Button size="icon"> <Search></Search>  </Button>
    </div>
  </div>

  <div className="relative w-full h-[150px]">
    
  <Image alt="Agende nos melhores com fsw Barber" src="/Banner Pizza.png" fill className="object-contain rounded-xl"/> 

  </div>


  </div>



}


export default Home