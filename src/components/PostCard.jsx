import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Heart, MessageCircle, Share2, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

export default function PostCard({ username, handle, content, imageSrc, likes, comments, shares }) {
  return (
    <div className="bg-white rounded-md overflow-hidden border">
      <div className="p-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={imageSrc} alt={username} />
            <AvatarFallback>{username.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">{username}</h3>
            <p className="text-sm text-muted-foreground">{handle}</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Save post</DropdownMenuItem>
            <DropdownMenuItem>Report</DropdownMenuItem>
            <DropdownMenuItem>Hide</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="px-4 pb-2">
        <p className="text-sm">
          {content} <span className="text-blue-500">Read More</span>
        </p>
      </div>
      <div className="relative h-80 w-full">
        <img src={imageSrc || "/placeholder.svg"} alt="Post image" className="object-cover w-full h-full" />
      </div>
      <div className="p-4 flex items-center gap-6">
        <Button variant="ghost" size="sm" className="gap-1">
          <Heart className="h-5 w-5" />
          <span>{likes}</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-1">
          <MessageCircle className="h-5 w-5" />
          <span>{comments}</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-1">
          <Share2 className="h-5 w-5" />
          <span>{shares}</span>
        </Button>
      </div>
    </div>
  )
}

