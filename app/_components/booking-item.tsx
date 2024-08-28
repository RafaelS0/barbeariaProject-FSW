
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

//TODO receber agendamento como prop

const BookingItem = () => {
    return(
        <>

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
        </>

    );
}

export default BookingItem