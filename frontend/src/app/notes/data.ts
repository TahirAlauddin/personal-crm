type Tag = {
  label: string;
  color: string;
};

export type Note = {
  tags: Tag[];
  title: string;
  content: string;
  author: string;
  date: string;
  checklistItems?: null | string[];
  listItems?: null | string[];
  image?: string;
};

export const notes_list = [
  {
    tags: [
      { label: "Weekly", color: "yellow" },
      { label: "Product", color: "blue" },
    ],
    title: "Product Team Meeting",
    content: "This monthly progress agenda is following this items:",
    listItems: [
      "Introduction to Newest Product Plan",
      "Monthly Revenue updates for each",
    ],
    author: "John Doe",
    date: "Mar 5 04:25",
  },
  {
    tags: [
      { label: "Monthly", color: "green" },
      { label: "Business", color: "purple" },
    ],
    title: "Product Team Meeting",
    content: "This monthly progress agenda is following this items:",
    listItems: [
      "Introduction to Newest Product Plan",
      "Monthly Revenue updates for each",
    ],
    author: "John Doe",
    date: "Apr 11 18:30",
  },
  {
    tags: [
      { label: "Personal", color: "orange" },
      { label: "Business", color: "purple" },
    ],
    title: "HR Interview",
    content: "This monthly progress agenda is following this items:",
    listItems: [
      "Introduction to Newest Product Plan",
      "Monthly Revenue updates for each",
    ],
    author: "John Doe",
    date: "Jun 23 14:31",
  },
  {
    tags: [
      { label: "Monthly", color: "green" },
      { label: "Product", color: "blue" },
    ],
    title: "Monthly Team Progress",
    content: "This monthly progress agenda is following this items:",
    listItems: [
      "Introduction to Newest Product Plan",
      "Monthly Revenue updates for each",
    ],
    author: "John Doe",
    date: "Jan 31 09:53",
  },
  {
    tags: [
      { label: "Monthly", color: "green" },
      { label: "Business", color: "purple" },
    ],
    title: "Product Team Meeting",
    content:
      "Some Summaries of this weeks meeting with some conclusion we get :",
    checklistItems: ["Some of our product uploaded improved"],
    author: "John Doe",
    date: "Aug 15 10:29",
  },
  {
    tags: [{ label: "Personal", color: "orange" }],
    title: "Document Images",
    content: "Report Document of Weekly Meetings",
    image:
      "https://images.unsplash.com/photo-1583521214690-73421a1829a9?width=450&height=120",
    author: "John Doe",
    date: "Dec 30 21:28",
  },
  {
    tags: [
      { label: "Badge", color: "yellow" },
      { label: "Product", color: "blue" },
    ],
    title: "Weekly Team Progress",
    content: "This weekly progress agenda is following this items:",
    listItems: [
      "Introduction to Newest Product Plan",
      "Monthly Revenue updates for each",
    ],
    author: "John Doe",
    date: "Feb 4 19:08",
  },
  {
    tags: [{ label: "Business", color: "purple" }],
    title: "Revenue Progress",
    content: "Report Document of Weekly Meetings",
    image:
      "https://images.unsplash.com/photo-1583521214690-73421a1829a9?width=450&height=120",
    author: "John Doe",
    date: "May 22 04:43",
  },
  {
    tags: [{ label: "Product", color: "blue" }],
    title: "Monthly Products",
    content: "Report Document of Weekly Meetings",
    image:
      "https://images.unsplash.com/photo-1583521214690-73421a1829a9?width=450&height=120",
    author: "John Doe",
    date: "Oct 4 15:49",
  }
];
