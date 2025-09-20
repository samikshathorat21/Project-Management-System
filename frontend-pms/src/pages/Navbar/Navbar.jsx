import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { PersonIcon } from "@radix-ui/react-icons"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "../../Redux/Auth/Action"
import CreateProjectForm from "../Project/CreateProjectForm"


const Navbar = () => {
    const {auth} = useSelector(store=>store)
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const handleLogout=()=>{
        dispatch(logout())
    }
  return (
    <div className="border-b py-4 px-5 flex items-center justify-between">

        <div className='flex items-center gap-3'>

            <p onClick={() => navigate("/")} className='cursor-pointer font-semibold text-lg'>Project Management System</p>

            <Dialog>
            <DialogTrigger>
                <Button className="cursor-pointer" variant="outline">New Project</Button>
            </DialogTrigger>
            
            <DialogContent>
                <DialogHeader>Create New Project</DialogHeader>
                <CreateProjectForm />
            </DialogContent>

            </Dialog>
            <Button onClick={() => navigate("/upgrade_plan")} className="cursor-pointer" variant="outline">Upgrade</Button>
        </div>

        <div className="flex gap-3 items-center">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button size="icon" className="rounded-full border-2 border-gray-500">
                        <PersonIcon />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <p>{auth.user?.fullName}</p>
        </div>
      
    </div>
  )
}

export default Navbar
