import Layout from "../components/Layout"
import ProductCard from "../components/ProductCard"

export default function ShopPage() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Shop</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
          <ProductCard
            title="Abstract Canvas Art"
            price="149.99"
            rating={4}
            imageSrc="https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=1374&auto=format&fit=crop"
          />
          <ProductCard
            title="Minimalist Wall Art"
            price="89.99"
            rating={5}
            imageSrc="https://images.unsplash.com/photo-1571172964276-91faaa704e1f?q=80&w=1470&auto=format&fit=crop"
          />
          <ProductCard
            title="Geometric Pattern Art"
            price="129.99"
            rating={4}
            imageSrc="https://images.unsplash.com/photo-1605106702734-205df224ecce?q=80&w=1470&auto=format&fit=crop"
          />
        </div>
      </div>
    </Layout>
  )
}

