import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DotsVerticalIcon, PersonIcon } from "@radix-ui/react-icons"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteIssue } from "../../Redux/Issue/Action"
import UserList from "./UserList"

const IssueCard = ({item,projectId}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleIssueDelete=()=>{
        dispatch(deleteIssue(item.id))
    }
  return (
    <Card className="rounded-md  py-0">
        <CardHeader className="py-0 pb-1">
            <div className="flex justify-between items-center">
                <CardTitle className="cursor-pointer"
                    onClick={() => navigate(`/project/${projectId}/issue/${item.id}`)}>{item.title}
                </CardTitle>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button className="rounded-full cursor-pointer" size="icon" variant="outline"><DotsVerticalIcon /></Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuItem>In Progress</DropdownMenuItem>
                        <DropdownMenuItem>Done</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem onClick={handleIssueDelete}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </CardHeader>
        <CardContent className=" px-3 py-2">
            <div className="flex items-center justify-between">
                <p>FBP - {1}</p>
                <DropdownMenu className="w-[30rem] border border-red-400">
                    <DropdownMenuTrigger>
                        <Button 
                        size="icon" 
                        className="bg-gray-900 hover:text-black text-white rounded-full">
                            <Avatar>
                                <AvatarFallback>
                                    <PersonIcon />
                                </AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <UserList issueDetails={item}/>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </CardContent>
    </Card>
  )
}

export default IssueCard
