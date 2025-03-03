import Layout from "../components/Layout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import PostCard from "../components/PostCard"

export default function ProfilePage() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-4">
        <div className="bg-white rounded-md p-6 border mb-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1374&auto=format&fit=crop" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-muted-foreground">@johndoe</p>
              <p className="mt-2">Digital artist and photographer</p>
            </div>
            <Button className="sm:ml-auto">Edit Profile</Button>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4">My Posts</h2>
        <div className="space-y-6">
          <PostCard
            username="John Doe"
            handle="@johndoe"
            content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            imageSrc="https://images.unsplash.com/photo-1523554888454-84137e72c3ce?q=80&w=1470&auto=format&fit=crop"
            likes="9.8k"
            comments="8.6k"
            shares="7.2k"
          />
        </div>
      </div>
    </Layout>
  )
}

