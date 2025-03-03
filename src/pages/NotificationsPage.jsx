import Layout from "../components/Layout"

export default function NotificationsPage() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Notifications</h1>
        <div className="bg-white rounded-md p-4 border">
          <p className="text-muted-foreground">No new notifications</p>
        </div>
      </div>
    </Layout>
  )
}

