import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon} from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const Header = () => {
    return ( <div>
     <Card>
        <CardContent className="p-5 flex flex-row items-center justify-between">
            <Image src="/Logo.png" alt="fsw-barber" height={18} width={120} />
            <Sheet>
            <Button   variant="outline"> 
                <MenuIcon>  
                <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
                </MenuIcon>
            </Button>
            </Sheet>
        </CardContent>
        
     </Card>

    </div> );
}
 
export default Header ;