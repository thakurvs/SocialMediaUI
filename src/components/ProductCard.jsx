import { Heart } from "lucide-react"
import { Button } from "./ui/button"

export default function ProductCard({ title, price, rating, imageSrc }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border">
      <div className="relative h-40 w-full group">
        <img src={imageSrc || "/placeholder.svg"} alt={title} className="object-cover w-full h-full" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-3">
        <h3 className="text-xs font-medium line-clamp-2">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            <span className="text-amber-400">★★</span>
            <span className="text-gray-300">★★★</span>
          </div>
          <p className="font-bold text-sm">${price}</p>
        </div>
      </div>
    </div>
  )
}

