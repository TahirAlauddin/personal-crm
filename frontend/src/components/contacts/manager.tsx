"use client";

import EmptyState from "@/components/empty-state";
import { useState } from "react";
import {
  List,
  KanbanSquare,
  Table2,
  Grid3X3,
  ChevronDown,
  Filter,
  Plus,
  MoreVertical,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Contact, contactsData } from "@/lib/data/contacts";
import ListView from "@/components/contacts/views/list";
import KanbanView from "@/components/contacts/views/kanban";
import TableView from "@/components/contacts/views/table";
import GridView from "@/components/contacts/views/grid";
import ContactDetailsModal from "@/components/contacts/detail-modal";
import CreateContactModal from "@/components/contacts/create-modal";

type ViewType = "list" | "kanban" | "table" | "grid";
type CategoryType = "all" | "employee" | "partners" | "customers";

export default function ContactsManager() {
  const [viewType, setViewType] = useState<ViewType>("list");
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const filteredContacts =
    activeCategory === "all"
      ? contactsData
      : contactsData.filter(
          (contact) => contact.category.toLowerCase() === activeCategory
        );

  const handleViewChange = (view: ViewType) => {
    setViewType(view);
  };

  const handleCategoryChange = (category: CategoryType) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveContact = (contactData: any) => {
    // Here you would normally send this to an API
    // For now, we'll just log it
    console.log("New contact data:", contactData);

    // You could add the contact to your local state if needed
    // const newContact = {
    //   id: String(contactsData.length + 1),
    //   name: `${contactData.firstName} ${contactData.lastName}`,
    //   email: contactData.email,
    //   phone: contactData.phone,
    //   category: contactData.category.charAt(0).toUpperCase() + contactData.category.slice(1),
    //   location: contactData.city,
    //   gender: contactData.gender.charAt(0).toUpperCase() + contactData.gender.slice(1),
    //   avatar: "/placeholder.svg?height=40&width=40"
    // }
    // Add logic to update your contacts list
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Contacts</h1>
        <div className="flex items-center gap-2">
          {/* View Switcher */}
          <div className="border rounded-md p-1 flex items-center">
            <Button
              variant={viewType === "list" ? "default" : "ghost"}
              size="sm"
              className="px-2"
              onClick={() => handleViewChange("list")}
            >
              <List className="h-4 w-4" />
              <span className="ml-1">List</span>
            </Button>
            <Button
              variant={viewType === "kanban" ? "default" : "ghost"}
              size="sm"
              className="px-2"
              onClick={() => handleViewChange("kanban")}
            >
              <KanbanSquare className="h-4 w-4" />
              <span className="ml-1">Kanban</span>
            </Button>
            <Button
              variant={viewType === "table" ? "default" : "ghost"}
              size="sm"
              className="px-2"
              onClick={() => handleViewChange("table")}
            >
              <Table2 className="h-4 w-4" />
              <span className="ml-1">Table</span>
            </Button>
            <Button
              variant={viewType === "grid" ? "default" : "ghost"}
              size="sm"
              className="px-2"
              onClick={() => handleViewChange("grid")}
            >
              <Grid3X3 className="h-4 w-4" />
              <span className="ml-1">Grid</span>
            </Button>
          </div>

          {/* Sort & Filter */}
          <Button variant="outline" className="gap-1">
            <span>Sort By</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="gap-1">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button
            className="bg-black text-white hover:bg-gray-800 gap-1"
            onClick={() => setIsCreateModalOpen(true)}
          >
            <Plus className="h-4 w-4" />
            <span>Add Contact</span>
          </Button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-1 border-b w-full">
          <Button
            variant="ghost"
            className={`rounded-none border-b-2 ${
              activeCategory === "all" ? "border-black" : "border-transparent"
            }`}
            onClick={() => handleCategoryChange("all")}
          >
            All Contacts
          </Button>
          <Button
            variant="ghost"
            className={`rounded-none border-b-2 ${
              activeCategory === "employee"
                ? "border-black"
                : "border-transparent"
            }`}
            onClick={() => handleCategoryChange("employee")}
          >
            Employee
          </Button>
          <Button
            variant="ghost"
            className={`rounded-none border-b-2 ${
              activeCategory === "partners"
                ? "border-black"
                : "border-transparent"
            }`}
            onClick={() => handleCategoryChange("partners")}
          >
            Partners
          </Button>
          <Button
            variant="ghost"
            className={`rounded-none border-b-2 ${
              activeCategory === "customers"
                ? "border-black"
                : "border-transparent"
            }`}
            onClick={() => handleCategoryChange("customers")}
          >
            Customers
          </Button>
          <div className="flex-grow"></div>
          <Button variant="ghost" className="gap-1">
            <Plus className="h-4 w-4" />
            <span>Add Categories</span>
          </Button>
        </div>
      </div>

      {/* View Content */}
      <div className="mb-4">
        {filteredContacts.length === 0 ? (
          <EmptyState onAddContact={() => setIsCreateModalOpen(true)} />
        ) : (
          <>
            {viewType === "list" && (
              <ListView
                contacts={filteredContacts}
                onContactClick={handleContactClick}
              />
            )}
            {viewType === "kanban" && (
              <KanbanView
                contacts={filteredContacts}
                onContactClick={handleContactClick}
              />
            )}
            {viewType === "table" && (
              <TableView
                contacts={filteredContacts}
                onContactClick={handleContactClick}
              />
            )}
            {viewType === "grid" && (
              <GridView
                contacts={filteredContacts}
                onContactClick={handleContactClick}
              />
            )}
          </>
        )}
      </div>

      {/* Pagination (for List and Table views) only if there are contacts */}
      {filteredContacts.length > 0 && (viewType === "list" || viewType === "table") && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredContacts.length / rowsPerPage)}
            onPageChange={setCurrentPage}
          />
      )}

      {/* Create Contact Modal */}
      <CreateContactModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSave={handleSaveContact}
      />

      {/* Contact Details Modal */}
      <ContactDetailsModal
        contact={selectedContact}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

const Pagination = ({ currentPage, totalPages, onPageChange }: { currentPage: number; totalPages: number; onPageChange: (page: number) => void }) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  return (
    <div className="flex items-center justify-between mt-4 border-t pt-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Show</span>
            <Select
              value={rowsPerPage.toString()}
              onValueChange={(value) => setRowsPerPage(parseInt(value))}
            >
              <SelectTrigger className="w-16 h-8">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm text-gray-500">Row</span>
          </div>
          

          
    <div className="flex items-center gap-1">
    <Button
      variant="outline"
      size="icon"
      className="w-8 h-8"
      disabled={currentPage === 1}
      >
      <ChevronLeft className="h-4 w-4" />
    </Button>
    <Button
      variant="outline"
      size="sm"
      className="w-8 h-8 bg-black text-white"
      >
      1
    </Button>
    <Button variant="outline" size="sm" className="w-8 h-8">
      2
    </Button>
    <Button variant="outline" size="sm" className="w-8 h-8">
      3
    </Button>
    <Button variant="outline" size="sm" className="w-8 h-8">
      4
    </Button>
    <Button variant="outline" size="sm" className="w-8 h-8">
      5
    </Button>
    <span className="mx-1">...</span>
    <Button variant="outline" size="sm" className="w-8 h-8">
      10
    </Button>
    <Button variant="outline" size="icon" className="w-8 h-8">
      <ChevronRight className="h-4 w-4" />
    </Button>
      </div>
  </div>
  )
}