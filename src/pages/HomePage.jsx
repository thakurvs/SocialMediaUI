import Layout from "../components/Layout"
import PostCard from "../components/PostCard"
import ProductCard from "../components/ProductCard"

export default function HomePage() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-4 space-y-6">
        <PostCard
          username="Lara Leones"
          handle="@thewallart"
          content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          imageSrc="https://images.unsplash.com/photo-1523554888454-84137e72c3ce?q=80&w=1470&auto=format&fit=crop"
          likes="9.8k"
          comments="8.6k"
          shares="7.2k"
        />

        <PostCard
          username="Thomas J."
          handle="@thewalldesigner"
          content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          imageSrc="https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=1374&auto=format&fit=crop"
          likes="9.8k"
          comments="8.6k"
          shares="7.2k"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          <ProductCard
            title="Modern Wall Decor Framed Painting"
            price="199.99"
            rating={5}
            imageSrc="https://images.unsplash.com/photo-1577720580479-7d839d829c73?q=80&w=1374&auto=format&fit=crop"
          />
          <ProductCard
            title="Modern Wall Decor Framed Painting"
            price="199.99"
            rating={5}
            imageSrc="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1490&auto=format&fit=crop"
          />
          <ProductCard
            title="Modern Wall Decor Framed Painting"
            price="199.99"
            rating={5}
            imageSrc="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1374&auto=format&fit=crop"
          />
        </div>
      </div>
    </Layout>
  )
}

