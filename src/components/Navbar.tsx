import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <header className="w-full shadow py-1 bg-[#BBD0CB] sticky top-0">
      <div className="flex items-center justify-between mx-20">
        <Link to={"/"}>
          <img src={logo} alt="logo-web" width={60} />
        </Link>
        <div className="flex items-center rounded-md px-2 bg-white">
          <Search />
          <Input type="text" placeholder="Search Product" className="border-0 w-80 focus-visible:ring-0 focus-visible:ring-offset-0" />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Hi, John Doe</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Home</DropdownMenuItem>
            <DropdownMenuItem>Product</DropdownMenuItem>
            <DropdownMenuItem>History</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Clinic</DropdownMenuItem>
            <DropdownMenuItem>Edit Profile</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
