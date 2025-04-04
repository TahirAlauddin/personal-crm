import { Search, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface EmptyStateProps {
  onAddContact: () => void
}

export default function EmptyState({ onAddContact }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="relative mb-6">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
          <div className="relative">
            <Search className="h-12 w-12 text-gray-400" />
            <div className="absolute top-1 right-1 bg-white rounded-full p-1">
              <X className="h-5 w-5 text-gray-700" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
        </div>
        <div className="absolute top-6 right-[-8px]">
          <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
        </div>
        <div className="absolute bottom-2 left-[-10px]">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 19C11 15 18 10 19 1" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-center mb-2">Expand Your Network!</h2>
      <p className="text-gray-500 text-center max-w-md mb-6">
        It looks like your contact list is off to a quiet start. 
        Add your contacts now to stay connected and stay organized.
      </p>
      
      <Button 
        onClick={onAddContact} 
        className="bg-black text-white hover:bg-gray-800 gap-1"
      >
        <span>+ Add Contact</span>
      </Button>
    </div>
  )
}