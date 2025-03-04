import Image from "next/image"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { TagBadge } from "@/components/Tagbadge"
import React from "react"
import { Button } from "./button"
import { Note } from "@/app/notes/data"
import { cn } from "@/lib/utils"

interface NoteCardProps extends Note {
    onClick: () => void
    className?: string
}

export const NoteCard = ({ 
    tags, 
    title, 
    content, 
    image, 
    author, 
    date, 
    listItems=null, 
    checklistItems=null, 
    onClick=()=>{},
    className=""
  }: NoteCardProps) => {
      const [isFullPreview, setIsFullPreview] = React.useState(false)
    return (
          <>
            <Card
              className={cn("overflow-hidden relative flex flex-col h-[350px] cursor-pointer", className)}
              onClick={() => onClick ? onClick() : setIsFullPreview(true)}
            >
              <CardHeader className="p-4 pb-0">
                <div className="flex gap-2 mb-3">
                  {tags.map((tag, index) => (
                    <TagBadge key={index} label={tag.label} color={tag.color} />
                  ))}
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
              </CardHeader>
              <CardContent className="p-4 pt-2 text-gray-600 overflow-y-auto flex-1">
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
              <CardFooter className="p-4 pt-3 flex items-center justify-center border-t sticky bottom-0 bg-white w-full">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <div className="bg-gray-200 w-full h-full flex items-center justify-center text-sm">J</div>
                  </Avatar>
                  <span className="text-sm font-medium">{author}</span>
                </div>
                <span className="text-sm text-gray-500 ml-auto">{date}</span>
              </CardFooter>
            </Card>
      
            {isFullPreview && (
              <div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                onClick={() => setIsFullPreview(false)}
              >
                <Card className="w-full max-w-2xl max-h-[80vh] overflow-hidden m-4" onClick={(e) => e.stopPropagation()}>
                  <CardHeader className="p-6 pb-2">
                    <div className="flex gap-2 mb-3">
                      {tags.map((tag, index) => (
                        <TagBadge key={index} label={tag.label} color={tag.color} />
                      ))}
                    </div>
                    <h3 className="text-2xl font-semibold">{title}</h3>
                  </CardHeader>
                  <CardContent className="p-6 pt-2 text-gray-600 overflow-y-auto max-h-[50vh]">
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
                            <Checkbox id={`modal-checkbox-${index}`} className="mt-1" />
                            <label htmlFor={`modal-checkbox-${index}`} className="text-sm">
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
                          width={800}
                          height={400}
                          className="rounded-md object-cover w-full"
                        />
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="p-6 pt-3 flex items-center justify-center border-t bg-white">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <div className="bg-gray-200 w-full h-full flex items-center justify-center text-sm">J</div>
                      </Avatar>
                      <span className="text-sm font-medium">{author}</span>
                    </div>
                    <span className="text-sm text-gray-500 ml-auto">{date}</span>
                    <Button variant="outline" size="sm" className="ml-4" onClick={() => setIsFullPreview(false)}>
                      Close
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            )}
          </>


    )
  }
  