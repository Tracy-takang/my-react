export const STATS = [
  {
    title: "Total Employees",
    value: 250,
    badge: { text: "+15 this month", type: "up" },
    footer: [
      { dot: "green", text: "Active (153)" },
      { dot: "red", text: "Inactive (35)" },
      { dot: "orange", text: "On Leave (84)" },
    ],
  },
  {
    title: "On Leave",
    value: 12,
    badge: { text: "+15 this month", type: "up" },
    footer: [{ text: "2 pending approvals", bold: "2" }],
  },
  {
    title: "Late Check-ins",
    value: 25,
    badge: { text: "+0.5% this month", type: "down" },
    footer: [
      { icon: "tag", text: "Sales (7)" },
      { icon: "tag", text: "Tech (5)" },
    ],
  },
];

export const INITIAL_EMPLOYEES = [
  { id: 1, name: "Roger Calzoni", code: "#31645", role: "Senior Developer", dept: "Engineering", joined: "11 Aug,25", status: "Active", location: "Office", avatar: "man-2.jpg" },
  { id: 2, name: "Marcus Workman", code: "#31645", role: "Senior Developer", dept: "Engineering", joined: "02 Aug,25", status: "Active", location: "San Diego, US", avatar: "pastor1march.jpeg" },
  { id: 3, name: "Aspen Dokidis", code: "#31645", role: "Senior Developer", dept: "Engineering", joined: "04 Jun,25", status: "Active", location: "Office", avatar: "uncle jam.jpeg" },
  { id: 4, name: "Zaire Dorwart", code: "#31645", role: "Senior Developer", dept: "Engineering", joined: "01 Jul,25", status: "On Leave", location: "Office", avatar: "MAN.png" },
  { id: 5, name: "Talan Vetrovs", code: "#31645", role: "Senior Developer", dept: "Engineering", joined: "15 April,25", status: "Active", location: "Office", avatar: "man-3.jpg" },
  { id: 6, name: "Madelyn Botosh", code: "#31645", role: "Senior Developer", dept: "Engineering", joined: "19 April,25", status: "Inactive", location: "Office", avatar: "woman-3.jpg" },
  { id: 7, name: "Alena Botosh", code: "#31645", role: "Senior Developer", dept: "Engineering", joined: "25 May,25", status: "Leave Ask", location: "New York, NY", avatar: "proffesional 5.jpg" },
  { id: 8, name: "wood crus", code: "#31645", role: "Senior Developer", dept: "Engineering", joined: "18 Jul,25", status: "Leave Ask", location: "Office", avatar: "today 1.jpeg" },
  { id: 9, name: "Lincoln Dias", code: "#31645", role: "Senior Developer", dept: "Engineering", joined: "18 Jul,25", status: "Leave Ask", location: "Office", avatar: "NNDQ5238.JPG" },
  { id: 10, name: "Nora Whitfield", code: "#31645", role: "Senior Developer", dept: "Engineering", joined: "03 Mar,25", status: "Active", location: "Office", avatar: "woman 2.jpg" },
  { id: 11, name: "Daniel Okafor", code: "#31645", role: "Senior Developer", dept: "Engineering", joined: "22 Feb,25", status: "Active", location: "Remote", avatar: "man-3.jpg" },
  { id: 12, name: "Sofia Marchetti", code: "#31645", role: "Senior Developer", dept: "Engineering", joined: "14 Jan,25", status: "On Leave", location: "Office", avatar: "pic 4.jpg" },
  { id: 13, name: "Ethan Brooks", code: "#31645", role: "Senior Developer", dept: "Engineering", joined: "09 Dec,24", status: "Active", location: "Chicago, US", avatar: "today 3.jpeg" },
  { id: 14, name: "Amara Nwosu", code: "#31645", role: "Senior Developer", dept: "Engineering", joined: "30 Nov,24", status: "Inactive", location: "Office", avatar: "woman-3.jpg" },
  { id: 15, name: "Lucas Moreau", code: "#31645", role: "Senior Developer", dept: "Engineering", joined: "17 Oct,24", status: "Leave Ask", location: "Paris, FR", avatar: "p m2.jpeg" },
  { id: 16, name: "Chloe Bennett", code: "#31645", role: "Senior Developer", dept: "Engineering", joined: "05 Sep,24", status: "Active", location: "Office", avatar: "PIC 1.jpeg" },
];

export const TOTAL_PAGES = 12;
