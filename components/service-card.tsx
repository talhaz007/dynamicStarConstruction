import { Droplet, Home, Paintbrush, Warehouse, Construction, AppWindowIcon as Window } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "siding":
        return <Warehouse className="h-10 w-10 text-lime-500" strokeWidth={1.5} />
      case "roofing":
        return <Home className="h-10 w-10 text-lime-500" strokeWidth={1.5} />
      case "window":
        return <Window className="h-10 w-10 text-lime-500" strokeWidth={1.5} />
      case "masonry":
        return <Construction className="h-10 w-10 text-lime-500" strokeWidth={1.5} />
      case "waterproofing":
        return <Droplet className="h-10 w-10 text-lime-500" strokeWidth={1.5} />
      case "painting":
        return <Paintbrush className="h-10 w-10 text-lime-500" strokeWidth={1.5} />
      default:
        return <Home className="h-10 w-10 text-lime-500" strokeWidth={1.5} />
    }
  }

  return (
    <Card className="group overflow-hidden border-none bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardHeader className="pb-2">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-lime-50 transition-colors duration-300 group-hover:bg-lime-100">
          {getIcon()}
        </div>
        <CardTitle className="font-display text-xl text-steel-900 transition-colors duration-300 group-hover:text-lime-500">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-steel-600">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
