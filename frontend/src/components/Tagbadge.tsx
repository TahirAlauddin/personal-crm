import { Badge } from "@/components/ui/badge"

export const TagBadge = ({ label, color }: { label: string, color: string }) => {
    const getColorClasses = () => {
      switch (color) {
        case "yellow":
          return "bg-amber-100 text-amber-800 border-amber-200"
        case "blue":
          return "bg-blue-100 text-blue-800 border-blue-200"
        case "green":
          return "bg-green-100 text-green-800 border-green-200"
        case "purple":
          return "bg-purple-100 text-purple-800 border-purple-200"
        case "orange":
          return "bg-orange-100 text-orange-800 border-orange-200"
        default:
          return "bg-gray-100 text-gray-800 border-gray-200"
      }
    }
    
    return (
      <Badge variant="outline" className={`font-normal ${getColorClasses()}`}>
        {label}
      </Badge>
    )
  }
  