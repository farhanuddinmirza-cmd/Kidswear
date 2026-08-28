import { realPhoto } from "../lib/images";

export const promoBanners = [
  {
    id: "promo-1",
    title: "The Festive Edit",
    subtitle: "Hand-embroidered occasion wear for celebrations big and small",
    cta: "Explore Festive",
    to: "/occasion/festive",
    image: realPhoto("1597294151491-1d22b38698d6"),
  },
  {
    id: "promo-2",
    title: "Little Layers, Big Comfort",
    subtitle: "Cosy fleece and corduroy edits for the season ahead",
    cta: "Shop the Edit",
    to: "/category/boys",
    image: realPhoto("1758782213532-bbb5fd89885e"),
  },
  {
    id: "promo-3",
    title: "Gift-Worthy Baby Sets",
    subtitle: "Thoughtfully packaged essentials for new parents",
    cta: "Shop Gifting",
    to: "/occasion/gifting",
    image: realPhoto("1637591524228-c97670278b50"),
  },
];

export const sustainabilityHighlights = [
  {
    id: "sus-1",
    title: "GOTS-Certified Cotton",
    description: "Grown without harmful pesticides, gentle on skin and on the planet.",
    icon: "leaf",
  },
  {
    id: "sus-2",
    title: "Child-Safe Construction",
    description: "Flat-lock seams, tag-free necklines and non-toxic dyes, tested for sensitive skin.",
    icon: "shield-check",
  },
  {
    id: "sus-3",
    title: "Breathable, Season-Ready Fabric",
    description: "Fabrics chosen to keep little ones comfortable through India's varied climates.",
    icon: "wind",
  },
  {
    id: "sus-4",
    title: "Responsible Packaging",
    description: "Recyclable, plastic-light packaging for every order that reaches your door.",
    icon: "recycle",
  },
];

export const brandStory = {
  eyebrow: "Our Story",
  title: "Made for Little Adventures",
  body:
    "Pip & Panda began with a simple idea: dressing children shouldn't mean choosing between comfort and craftsmanship. Every piece is designed in-studio and tested for the way real children move: climbing, twirling, napping, and everything in between, using fabrics soft enough for sensitive skin and sturdy enough for daily play.",
  image: realPhoto("1776660913956-213dc8e7e1af"),
  stats: [
    { label: "Fabrics Lab-Tested", value: "100%" },
    { label: "Happy Families", value: "40,000+" },
    { label: "Cities Delivered To", value: "500+" },
  ],
};

export const testimonials = [
  {
    id: "t-1",
    author: "Ishita Malhotra",
    location: "Mumbai",
    rating: 5,
    body: "The quality genuinely rivals imported brands we used to order. My daughter's eczema hasn't flared up once since we switched.",
  },
  {
    id: "t-2",
    author: "Rohan Kapoor",
    location: "Bengaluru",
    rating: 5,
    body: "Fast delivery, beautiful packaging, and the sizing chart was spot on. Ordering festive wear online finally feels safe.",
  },
  {
    id: "t-3",
    author: "Simran Kaur",
    location: "Delhi",
    rating: 4,
    body: "Love that they have options right from newborn to my 12-year-old. One website for both my kids now.",
  },
  {
    id: "t-4",
    author: "Aditya Rao",
    location: "Hyderabad",
    rating: 5,
    body: "The return process was painless when a size didn't work. Genuinely parent-friendly experience from browsing to delivery.",
  },
];

export const faqs = [
  {
    category: "Orders & Payment",
    items: [
      { q: "What payment methods do you accept?", a: "We accept all major credit and debit cards, UPI, net banking, and popular wallets. Cash on delivery is available on select pincodes." },
      { q: "Can I modify or cancel my order after placing it?", a: "You can cancel or edit your order within 2 hours of placing it from the Order Tracking page. After that, our fulfilment team may have already begun packing it." },
      { q: "Do you offer EMI options?", a: "Yes, EMI is available on orders above ₹3,000 through select bank cards at checkout." },
    ],
  },
  {
    category: "Shipping & Delivery",
    items: [
      { q: "How long does delivery take?", a: "Most orders arrive within 3–6 business days depending on your pincode. Metro cities typically see 2–4 day delivery." },
      { q: "Do you deliver across India?", a: "Yes, we deliver to over 500 cities and towns across India. Enter your pincode on any product page to check serviceability." },
      { q: "Is shipping free?", a: "Shipping is free on all prepaid orders above ₹1,499. A nominal fee applies below this threshold." },
    ],
  },
  {
    category: "Returns & Exchanges",
    items: [
      { q: "What is your return policy?", a: "We offer a 15-day easy return and exchange window from the date of delivery, provided the tags are intact and the product is unworn." },
      { q: "How do I initiate a return?", a: "Go to Order Tracking, select the item, and choose 'Return or Exchange'. A pickup will be scheduled from your address." },
      { q: "When will I get my refund?", a: "Refunds are processed within 5–7 business days after the returned item passes quality check." },
    ],
  },
  {
    category: "Sizing & Products",
    items: [
      { q: "How do I choose the right size?", a: "Each product page includes a detailed Size Guide with age and body measurement charts. When in doubt, we recommend sizing up for growing children." },
      { q: "Are your fabrics safe for sensitive skin?", a: "Yes, all our fabrics are lab-tested for harmful substances and finished without harsh chemical treatments." },
    ],
  },
];
