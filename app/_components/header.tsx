import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return ( <div>
     <Card>
        <CardContent className="p-5 flex flex-row items-center justify-between">
            <Image src="/Logo.png" alt="fsw-barber" height={18} width={120} />
            <Button variant="outline"> 
                <MenuIcon></MenuIcon>
            </Button>
        </CardContent>
     </Card>

    </div> );
}
 
export default Header ;