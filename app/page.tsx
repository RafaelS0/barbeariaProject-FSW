
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


const Home = async () => {

  const barbershops = await db.barbershop.findMany({})
  console.log({barbershops})

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

  <div className="mt-6 flex gap-3 p-2 ">

    <Button variant="secondary"> <Scissors/> CABELO </Button>
    <Button variant="secondary"> BARBA </Button>


  </div>

  {/* AGENDAMENTOS */}
  <h2 className="font-semibold text-gray-400 p-3 ">AGENDAMENTOS</h2>
  
  <div>
    <Card>
     <CardContent className=" flex justify-between p-0 ">
      {/*ESQUERDA*/}
      <div className=" flex flex-col gap-2 py-5 pl-5">
        <Badge className="w-fit">CONFIRMADO</Badge>
         <h3>CORTE DE CABELO</h3>
          <div className="flex items-center gap-2">
           <Avatar className="h-6 w-6">
            <AvatarImage src="https://github.com/shadcn.png"/>
            <AvatarFallback>CN</AvatarFallback>
           </Avatar>
           <p className="text-sm">Barbearia FSW</p>  
          </div>
      </div>
      
     {/*DIREITA*/}
      <div className="flex flex-col items-center justify-center px-5 border-l-2">
        <p className="text-sm"> Agosto</p>
        <p className="text-2xl">09</p>
        <p className="text-sm">20:00</p>
      </div>
      </CardContent>
    </Card>  
  </div>

  {/*RECOMENDADOS*/}
  <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
   Recomendados 
  </h2>

  <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

  </div>



}


export default Home