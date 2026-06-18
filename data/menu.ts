export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "Hot Drinks" | "Cold Drinks" | "Food";
  image: string;
};

export const menuData: MenuItem[] = [
  {
    id: "1",
    name: "Caramel Cloud Latte",
    description: "Espresso with steamed milk, sweet caramel syrup, and a cloud-like milk foam.",
    price: "₹250",
    category: "Hot Drinks",
    image: "/images/menu_1.png",
  },
  {
    id: "2",
    name: "Vanilla Mist Cappuccino",
    description: "Classic cappuccino infused with real Madagascar vanilla bean mist.",
    price: "₹220",
    category: "Hot Drinks",
    image: "/images/menu_2.png",
  },
  {
    id: "3",
    name: "Dark Mocha Truffle",
    description: "Rich dark chocolate melted into espresso, topped with whipped cream and cocoa.",
    price: "₹280",
    category: "Hot Drinks",
    image: "/images/menu_3.png",
  },
  {
    id: "4",
    name: "Classic Cortado",
    description: "Equal parts espresso and warm milk for a perfectly balanced flavor.",
    price: "₹200",
    category: "Hot Drinks",
    image: "/images/menu_4.png",
  },
  {
    id: "5",
    name: "Brown Sugar Espresso",
    description: "Double shot of espresso shaken with brown sugar and topped with oat milk.",
    price: "₹280",
    category: "Cold Drinks",
    image: "/images/menu_5.png",
  },
  {
    id: "6",
    name: "Iced Honey Lavender Latte",
    description: "Espresso over ice with local honey and organic lavender syrup.",
    price: "₹260",
    category: "Cold Drinks",
    image: "/images/menu_6.png",
  },
  {
    id: "7",
    name: "Cold Brew Reserve",
    description: "Slow-steeped for 18 hours, served over craft ice cubes.",
    price: "₹220",
    category: "Cold Drinks",
    image: "/images/menu_7.png",
  },
  {
    id: "8",
    name: "Matcha Coconut Chill",
    description: "Premium ceremonial matcha blended with creamy coconut milk over ice.",
    price: "₹290",
    category: "Cold Drinks",
    image: "/images/menu_8.png",
  },
  {
    id: "9",
    name: "Almond Croissant",
    description: "Flaky, buttery pastry filled with sweet almond frangipane.",
    price: "₹200",
    category: "Food",
    image: "/images/menu_9.png",
  },
  {
    id: "10",
    name: "Avocado Sourdough Toast",
    description: "Smashed avocado, cherry tomatoes, and microgreens on toasted artisanal sourdough.",
    price: "₹350",
    category: "Food",
    image: "/images/menu_10.png",
  },
  {
    id: "11",
    name: "Lemon Blueberry Scone",
    description: "Freshly baked scone bursting with wild blueberries and lemon zest.",
    price: "₹180",
    category: "Food",
    image: "/images/menu_11.png",
  },
  {
    id: "12",
    name: "Truffle Mushroom Quiche",
    description: "Savory tart with roasted mushrooms, gruyere cheese, and a hint of truffle oil.",
    price: "₹320",
    category: "Food",
    image: "/images/menu_12.png",
  },
];
