import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"

interface BarberShopItemsProps{
 barbershop: Barbershop    
}


const BarbershopItem = ({barbershop} : BarberShopItemsProps) => {
    return <Card className=" min-w-[159px] rounded-2xl">

            <CardContent className="p-0 px-1 pt-1" > 
                {/*IMAGME */}
                <div className="relative h-[159px] w-full ">
                <Image fill className="object-cover rounded-2xl" src={barbershop.imageUrl} alt={barbershop.name}></Image>
                </div>

                {/*TEXTO */}
                <div className=" py-3 px-1">
                    <h3 className="font-semibold truncate">{barbershop.name}</h3>
                    <p className="text-sm text-grey-400 truncate">{barbershop.address}</p>
                    <Button variant="secondary" className="mt-3 w-full"> RESERVAR</Button>
                </div>

              </CardContent>

            </Card>

}

export default BarbershopItem