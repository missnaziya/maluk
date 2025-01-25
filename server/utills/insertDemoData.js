// const { HdrOffSelect } = require("@mui/icons-material");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoProducts = [
  // maluk
  {
    id: "p175df73-3807-4f19-9673-6e45097d03bn",
    title: "Hyaluronic Facemask",
    price: 499,
    salePrice: 299,
    rating: 5,
    description:
      "Our Face Sheet is designed to provide deep hydration and nourishment. Infused with vitamins and natural extracts, it delivers a refreshing boost to your skin, leaving it revitalized and glowing.",
    mainImage: "Hyaluronic.jpg",
    alternateImage1: "Hyaluronic.jpg",
    alternateImage2: "Hyaluronic-Back.png",
    alternateImage3: "Hyaluronic.png",
    alternateImage4: "Hyloronic-direction.jpg",
    slug: "hyaluronic-facemask",
    manufacturer: "maluk",
    categoryId: "a19984e3-7ec2-445d-a5e0-1e6c001205a9",
    inStock: 10,
  },
  {
    id: "p275df73-3807-4f19-9673-6e45097d03bn",
    title: " Snailmucin Facemask",
    price: 99,
    salePrice: 129,
    rating: 5,
    description:
      "Our Face Sheet is designed to provide deep hydration and nourishment. Infused with vitamins and natural extracts, it delivers a refreshing boost to your skin, leaving it revitalized and glowing.",
    mainImage: "snail-mucin.jpg",
    alternateImage1: "snail-mucin.jpg",
    alternateImage2: "Snail-Back.png",
    alternateImage3: "Snail-Front.png",
    alternateImage4: "Hyloronic-direction.jpg",
    // mainImage: "Snail-Mucin.png",
    // alternateImage1: "Snail-Mucin.png",
    // alternateImage2: "Snail-Mucin-Back.png",
    // alternateImage3: "Snail-Mucin.png",
    // alternateImage4: "Snail-Mucin-Back.png",
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
    mainImage: "Red-Wine.jpg",
    alternateImage1: "Red-Wine.jpg",
    alternateImage2: "Red-Wine-front.png",
    alternateImage3: "Red-Wine-Back.png",
    alternateImage4: "Hyloronic-direction.jpg",
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
    mainImage: "Collagen.jpg",
    alternateImage1: "Collagen.jpg",
    alternateImage2: "Collagen-front.png",
    alternateImage3: "Collagen-back.png",
    alternateImage4: "Hyloronic-direction.jpg",
    slug: "collagen",
    manufacturer: "maluk",
    categoryId: "a19984e3-7ec2-445d-a5e0-1e6c001205a9",
    inStock: 10,
  },
  {
    id: "p575df73-3807-4f19-9673-6e45097d03bn",
    title: "Claw Clip",
    price: 199,
    salePrice: 129,
    rating: 5,
    description:
      "Our Claw Clip is designed to combine style and functionality. Crafted with durable materials and a chic design, it provides a secure hold while elevating your look, making it a perfect accessory for any occasion.",
    mainImage: "shopping.jpg",
    alternateImage1: "shopping.jpg",
    alternateImage2: "shopping.jpg",
    alternateImage3: "shopping.jpg",
    alternateImage4: "shopping.jpg",
    slug: "claw-clip",
    manufacturer: "maluk",
    categoryId: "a39984e3-7ec2-445d-a5e0-1e6c001205a9",
    inStock: 10,
  },
  {
    id: "p675df73-3807-4f19-9673-6e45097d03bn",
    title: "Ipl",
    price: 499,
    salePrice: 129,
    rating: 5,
    description:
      "Our IPL Personal Care device is designed for effective and gentle hair reduction. Utilizing advanced IPL technology, it provides long-lasting results, leaving your skin smooth and radiant with regular use.",
    mainImage: "Personal-Care.jpg",
    alternateImage1: "Personal-Care.jpg",
    alternateImage2: "Personal-Care.jpg",
    alternateImage3: "Personal-Care.jpg",
    alternateImage4: "Personal-Care.jpg",
    slug: "ipl",
    manufacturer: "maluk",
    categoryId: "a29984e3-7ec2-445d-a5e0-1e6c001205a9",
    inStock: 10,
  },
  {
    id: "p775df73-3807-4f19-9673-6e45097d03bn",
    title: "Shower Oil",
    price: 499,
    salePrice: 129,
    rating: 5,
    description:"Experience soft, hydrated skin with our nourishing Shower Oil. Enriched with natural oils, it gently cleanses while locking in moisture, leaving your skin smooth and radiant.",
    mainImage: "showeroil.jpg",
    alternateImage1: "showeroil.jpg",
    alternateImage2: "showeroil.jpg",
    alternateImage3: "showeroil.jpg",
    alternateImage4: "showeroil.jpg",
    slug: "shower-oil",
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
