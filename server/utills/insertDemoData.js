// const { HdrOffSelect } = require("@mui/icons-material");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoProducts = [
 
  // maluk
  {
    id: "p175df73-3807-4f19-9673-6e45097d03bn",
    title: "Hyaluronic Facemask",
    price: 499,
    salePrice: 129,
    rating: 5,
    description:
      "Our Face Sheet is designed to provide deep hydration and nourishment. Infused with vitamins and natural extracts, it delivers a refreshing boost to your skin, leaving it revitalized and glowing.",
    mainImage: "Hyaluronic.png",
    alternateImage1: "Hyaluronic.png",
    alternateImage2: "Hyaluronic-Back.png",
    alternateImage3: "Hyaluronic.png",
    alternateImage4: "Hyaluronic-Back.png",
    slug: "hyaluronic-facemask",
    manufacturer: "maluk",
    categoryId: "a19984e3-7ec2-445d-a5e0-1e6c001205a9",
    inStock: 10,
  },
  {
    id: "p275df73-3807-4f19-9673-6e45097d03bn",
    title: " Snailmucin Facemask",
    price: 499,
    salePrice: 129,
    rating: 5,
    description:
      "Our Face Sheet is designed to provide deep hydration and nourishment. Infused with vitamins and natural extracts, it delivers a refreshing boost to your skin, leaving it revitalized and glowing.",
    mainImage: "Snail-Mucin.png",
    alternateImage1: "Snail-Mucin.png",
    alternateImage2: "Snail-Mucin-Back.png",
    alternateImage3: "Snail-Mucin.png",
    alternateImage4: "Snail-Mucin-Back.png",
    slug: "snailmucin-facemask",
    manufacturer: "maluk",
    categoryId: "a19984e3-7ec2-445d-a5e0-1e6c001205a9",
    inStock: 10,
  },
  {
    id: "p375df73-3807-4f19-9673-6e45097d03bn",
    title: " Red Wine",
    price: 499,
    salePrice: 129,
    rating: 5,
    description:
      "Our Face Sheet is designed to provide deep hydration and nourishment. Infused with vitamins and natural extracts, it delivers a refreshing boost to your skin, leaving it revitalized and glowing.",
    mainImage: "Red-Wine.png",
    alternateImage1: "Red-Wine.png",
    alternateImage2: "Red-Wine-Back.png",
    alternateImage3: "Red-Wine.png",
    alternateImage4: "Red-Wine-Back.png",
    slug: "red-wine",
    manufacturer: "maluk",
    categoryId: "a19984e3-7ec2-445d-a5e0-1e6c001205a9",
    inStock: 10,
  },
  {
    id: "p475df73-3807-4f19-9673-6e45097d03bn",
    title: " Collagen",
    price: 499,
    salePrice: 129,
    rating: 5,
    description:
      "Our Face Sheet is designed to provide deep hydration and nourishment. Infused with vitamins and natural extracts, it delivers a refreshing boost to your skin, leaving it revitalized and glowing.",
    mainImage: "Collagen.png",
    alternateImage1: "Collagen.png",
    alternateImage2: "Collagen-Back.png",
    alternateImage3: "Collagen.png",
    alternateImage4: "Collagen-Back.png",
    slug: "collagen",
    manufacturer: "maluk",
    categoryId: "a19984e3-7ec2-445d-a5e0-1e6c001205a9",
    inStock: 10,
  },
  

];

const demoCategories = [

  {
    id: "a19984e3-7ec2-445d-a5e0-1e6c001205a9",
    name: "skin-care",
    displayName: "Skin Care",
    image: "Skin-Care.jpg",
    href: "/skin-care",
  },
  {
    id: "a29984e3-7ec2-445d-a5e0-1e6c001205a9",
    name: "personal-care",
    displayName: "Personal Care",
    image: "Personal-Care.jpg",
    href: "/personal-care",
  },
  {
    id: "a39984e3-7ec2-445d-a5e0-1e6c001205a9",
    name: "hair-accessories",
    displayName: "Hair Accessories",
    image: "Hair-Accessories.jpg",
    href: "/hair-accessories",
  },
  
];

async function insertDemoData() {
  for (const category of demoCategories) {
    await prisma.category.create({
      data: category,
    });
  }
  console.log("Demo categories inserted successfully!");

  for (const product of demoProducts) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("Demo products inserted successfully!");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });