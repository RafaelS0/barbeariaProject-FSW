
import Image from "next/image"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./_components/ui/avatar"
import { Card, CardContent } from "./_components/ui/card"
import { Input } from "./_components/ui/input"
import { Search , Scissors, Logs } from "lucide-react"
import { db } from "./_lib/prisma"
import { log } from "console"
import BarbershopItem from "./_components/barbershop-item"
import quickSearchOption from "./_constants/search"
import BookingItem from "./_components/booking-item"




const Home = async () => {

  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

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

  <div className="relative mt-6 w-full h-[150px]">
   <Image alt="Agende nos melhores com fsw Barber" src="/Banner Pizza.png" fill className="object-contain rounded-xl "/> 
  </div>
 
   {/* BUSCA RÁPIAD */}
  <div className="mt-6 flex gap-3 p-2  overflow-auto [&::-webkit-scrollbar]:hidden ">
   {quickSearchOption.map((option)=> (
    <Button className="gap-2" variant="secondary"  key={option.tilte}> 
    <Image src={option.imageUrl} width={16} height={16} alt={option.tilte}/>
    {option.tilte}
   </Button>
   ))}
   </div>
     
      {/* AGENDAMENTOS */}
      <BookingItem/>
  

     {/*RECOMENDADOS*/}
     <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">  Recomendados  </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
             {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
           ))}
         </div>

   {/*POPULARES*/}
    <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400"> Populares </h2>
         <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
             {popularBarbershops.map((barbershop) => (
             <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
         </div>

   <footer className="mt-3">
   <Card>
     <CardContent className="px-5 py-6">
      <p className="text-sm text-grey-400"> © 2023 Copyright FSW Barber </p>
     </CardContent>
   </Card>
   </footer>
      
  </div>

  



}


export default Home