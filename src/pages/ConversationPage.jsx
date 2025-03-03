import Layout from "../components/Layout"

export default function ConversationPage() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Conversations</h1>
        <div className="bg-white rounded-md p-4 border">
          <p className="text-muted-foreground">No conversations yet</p>
        </div>
      </div>
    </Layout>
  )
}

