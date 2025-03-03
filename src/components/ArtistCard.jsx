import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export default function ArtistCard({ name, handle, imageSrc, profileImageSrc, bgColor }) {
  return (
    <div className={`rounded-lg overflow-hidden ${bgColor}`}>
      <div className="relative h-24 w-full">
        <img src={imageSrc || "/placeholder.svg"} alt={name} className="object-cover w-full h-full opacity-70" />
        <div className="absolute inset-0 flex items-center p-3">
          <Avatar className="h-10 w-10 border-2 border-white">
            <AvatarImage src={profileImageSrc} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-3 text-white">
            <h3 className="font-medium text-sm">{name}</h3>
            <p className="text-xs opacity-90">{handle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

