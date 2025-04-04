// components/create-contact-modal.tsx
import { X, Upload } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

interface CreateContactModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (contactData: any) => void
}

export default function CreateContactModal({ isOpen, onClose, onSave }: CreateContactModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    category: '',
    email: '',
    phone: '',
    personalId: '',
    birthDate: '',
    occupation: '',
    gender: 'male',
    country: '',
    city: '',
    address: ''
  })

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    onSave(formData)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>Create New Contact</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 gap-6">
          {/* Avatar Upload */}
          <div className="flex flex-col items-center justify-center">
            <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center mb-2">
              <div className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Upload className="h-4 w-4" />
              Upload Image
            </Button>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input 
                id="firstName" 
                placeholder="Enter first name here" 
                value={formData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
              />
            </div>

            {/* Last Name */}
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input 
                id="lastName" 
                placeholder="Enter last name here" 
                value={formData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
              />
            </div>

            {/* Contact Categories */}
            <div>
              <Label htmlFor="category">Contact Categories</Label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => handleChange('category', value)}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="employee">Employee</SelectItem>
                  <SelectItem value="customers">Customers</SelectItem>
                  <SelectItem value="partners">Partners</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter email here" 
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone">Phone</Label>
              <div className="flex">
                <Select defaultValue="+1">
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="+1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+1">+1</SelectItem>
                    <SelectItem value="+44">+44</SelectItem>
                    <SelectItem value="+91">+91</SelectItem>
                  </SelectContent>
                </Select>
                <Input 
                  id="phone" 
                  className="flex-1 ml-2" 
                  placeholder="Enter phone number" 
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
              </div>
            </div>

            {/* Personal ID */}
            <div>
              <Label htmlFor="personalId">Personal ID / Passport</Label>
              <Input 
                id="personalId" 
                placeholder="Enter personal ID here" 
                value={formData.personalId}
                onChange={(e) => handleChange('personalId', e.target.value)}
              />
            </div>

            {/* Birth Date */}
            <div>
              <Label htmlFor="birthDate">Birth Date</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
                </div>
                <Input 
                  id="birthDate" 
                  type="text" 
                  className="pl-10" 
                  placeholder="Select Date" 
                  value={formData.birthDate}
                  onChange={(e) => handleChange('birthDate', e.target.value)}
                />
              </div>
            </div>

            {/* Occupation */}
            <div>
              <Label htmlFor="occupation">Occupation</Label>
              <Input 
                id="occupation" 
                placeholder="Enter occupation here" 
                value={formData.occupation}
                onChange={(e) => handleChange('occupation', e.target.value)}
              />
            </div>

            {/* Gender */}
            <div>
              <Label>Gender</Label>
              <RadioGroup 
                defaultValue="male" 
                className="flex gap-4 mt-2"
                value={formData.gender}
                onValueChange={(value) => handleChange('gender', value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Country */}
            <div>
              <Label htmlFor="country">Country</Label>
              <Select 
                value={formData.country} 
                onValueChange={(value) => handleChange('country', value)}
              >
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🇺🇸</span> United States
                    </div>
                  </SelectItem>
                  <SelectItem value="uk">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🇬🇧</span> United Kingdom
                    </div>
                  </SelectItem>
                  <SelectItem value="ca">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🇨🇦</span> Canada
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Cities */}
            <div>
              <Label htmlFor="city">Cities</Label>
              <Select 
                value={formData.city} 
                onValueChange={(value) => handleChange('city', value)}
              >
                <SelectTrigger id="city">
                  <SelectValue placeholder="Select Cities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="los-angeles">Los Angeles</SelectItem>
                  <SelectItem value="chicago">Chicago</SelectItem>
                  <SelectItem value="houston">Houston</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Address - Full Width */}
            <div className="col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input 
                id="address" 
                placeholder="Enter address here" 
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between gap-4 mt-4">
            <Button variant="outline" className="w-full" onClick={onClose}>
              Cancel
            </Button>
            <Button className="w-full bg-black text-white hover:bg-gray-800" onClick={handleSubmit}>
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}