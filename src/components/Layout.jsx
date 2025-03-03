import { Search, Filter, LogOut } from "lucide-react"
import { Button } from "./ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Input } from "./ui/input"
import SidebarNav from "./SidebarNav"
import ArtistCard from "./ArtistCard"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr_300px] h-screen">
        {/* Left Sidebar */}
        <div className="hidden md:flex flex-col border-r bg-white">
          <div className="p-6 border-b">
            <h1 className="text-xl font-bold">LOGO</h1>
          </div>
          <SidebarNav />
          <div className="mt-auto p-4 border-t">
            <Button variant="ghost" className="w-full justify-start text-muted-foreground">
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Button>
            <div className="mt-4 text-xs text-muted-foreground">
              <p>©2023 Page name</p>
              <p>Developed by Ivan Infotech</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col h-screen">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-white">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search here..." className="w-full pl-8 bg-gray-50" />
            </div>
            <Button variant="outline" className="ml-2">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-auto">{children}</div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden md:flex flex-col border-l bg-white">
          <div className="p-4 border-b">
            <Button className="w-full bg-teal-400 hover:bg-teal-500 text-white">Become a Seller</Button>
          </div>
          <div className="p-4">
            <Tabs defaultValue="artists">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="artists">Artists</TabsTrigger>
                <TabsTrigger value="photographers">Photographers</TabsTrigger>
              </TabsList>
              <TabsContent value="artists" className="mt-4 space-y-4">
                <ArtistCard
                  name="Thomas Edward"
                  handle="@thewallart"
                  imageSrc="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1374&auto=format&fit=crop"
                  profileImageSrc="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1374&auto=format&fit=crop"
                  bgColor="bg-blue-200"
                />
                <ArtistCard
                  name="Chris Doe"
                  handle="@thewallart"
                  imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop"
                  profileImageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop"
                  bgColor="bg-purple-200"
                />
                <ArtistCard
                  name="Emilie Jones"
                  handle="@thewallart"
                  imageSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop"
                  profileImageSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop"
                  bgColor="bg-yellow-200"
                />
                <ArtistCard
                  name="Jessica Williams"
                  handle="@thewallart"
                  imageSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop"
                  profileImageSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop"
                  bgColor="bg-orange-200"
                />
              </TabsContent>
              <TabsContent value="photographers" className="mt-4 space-y-4">
                <ArtistCard
                  name="Michael Scott"
                  handle="@photoart"
                  imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop"
                  profileImageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop"
                  bgColor="bg-green-200"
                />
                <ArtistCard
                  name="Angela Martin"
                  handle="@photoart"
                  imageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop"
                  profileImageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop"
                  bgColor="bg-red-200"
                />
              </TabsContent>
            </Tabs>
          </div>
          <div className="mt-auto p-4 border-t text-xs text-muted-foreground flex justify-between">
            <span>Privacy</span>
            <span>Terms of Service</span>
            <span>Cookie Notice</span>
          </div>
        </div>
      </div>
    </div>
  )
}

