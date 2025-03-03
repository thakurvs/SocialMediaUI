import Layout from "../components/Layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="mt-4">
            <div className="bg-white rounded-md p-6 border space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john@example.com" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="johndoe" />
              </div>

              <Button>Save Changes</Button>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="mt-4">
            <div className="bg-white rounded-md p-6 border">
              <p>Notification settings will appear here</p>
            </div>
          </TabsContent>

          <TabsContent value="privacy" className="mt-4">
            <div className="bg-white rounded-md p-6 border">
              <p>Privacy settings will appear here</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}

