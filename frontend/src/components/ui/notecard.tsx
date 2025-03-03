import Image from "next/image"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { TagBadge } from "@/components/Tagbadge"

export const NoteCard = ({ 
    tags, 
    title, 
    content, 
    listItems, 
    checklistItems, 
    image, 
    author, 
    date 
  }: {
    tags: { label: string, color: string }[]
    title: string
    content?: string
    listItems?: string[]
    checklistItems?: string[]
    image?: string
    author?: string
    date?: string
  }) => {
    return (
      <Card className="overflow-hidden">
        <CardHeader className="p-4 pb-0">
          <div className="flex gap-2 mb-3">
            {tags.map((tag, index) => (
              <TagBadge key={index} label={tag.label} color={tag.color} />
            ))}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </CardHeader>
        <CardContent className="p-4 pt-2 text-gray-600">
          {content && <p className="mb-3">{content}</p>}
          
          {listItems && listItems.length > 0 && (
            <ul className="list-disc pl-5 space-y-1">
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          
          {checklistItems && checklistItems.length > 0 && (
            <div className="space-y-2">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Checkbox id={`checkbox-${index}`} className="mt-1" />
                  <label htmlFor={`checkbox-${index}`} className="text-sm">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          )}
          
          {image && (
            <div className="mt-3">
              <Image
                src={image || "/placeholder.svg"}
                alt="Note image"
                width={400}
                height={200}
                className="rounded-md object-cover w-full h-32"
              />
            </div>
          )}
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center justify-between border-t mt-2">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <div className="bg-gray-200 w-full h-full flex items-center justify-center text-sm">
                J
              </div>
            </Avatar>
            <span className="text-sm font-medium">{author}</span>
          </div>
          <span className="text-sm text-gray-500">{date}</span>
        </CardFooter>
      </Card>
    )
  }
  