import { Grid, Box, Typography, Card, CardContent } from "@mui/material";

const ingredients = [
  {
    title: "Snail Mucin: Nature’s Secret to Radiant Skin",
    description:
      "Packed with hyaluronic acid, glycolic acid, proteins, and antioxidants, Snail Mucin deeply hydrates, repairs, and brightens your skin.",
    benefits: [
      "Deep Hydration: Locks in moisture for soft, plump skin.",
      "Skin Repair: Reduces scars and blemishes.",
      "Brightening: Evens out skin tone for a radiant complexion.",
      "Anti-Aging: Smooths fine lines and boosts collagen production.",
    ],
    image: "/how-we-make/snail.png",
  },
  {
    title: "Grapefruit: A Citrus Burst for Your Skin",
    description:
      "Grapefruit revitalises and balances the skin with its essential vitamins and antioxidants.",
    benefits: [
      "Rich in Vitamin C: Brightens skin and fights ageing.",
      "Natural Exfoliation: Gently removes dead skin cells.",
      "Oil Control: Balances excess oil production.",
      "Hydrating & Refreshing: Deeply hydrates for a healthy glow.",
      "Tightening & Firming: Improves elasticity and minimises pores.",
    ],
    image: "/how-we-make/grapefruit.png",
  },
  {
    title: "Rose: The Timeless Essence of Radiant Skin",
    description:
      "Rose extract, rich in antioxidants and vitamins, has been cherished for centuries for its ability to nurture and revitalise the skin.",
    benefits: [
      "Hydration & Moisture: Replenishes and keeps your skin soft, smooth, and nourished.",
      "Anti-Aging Properties: Protects skin from stressors and reduces fine lines.",
      "Soothing & Calming: Calms irritation and redness, perfect for sensitive skin.",
      "Balanced Skin Tone: Evens out skin tone and reduces dark spots.",
      "Pore Refining: Minimises pores for a flawless finish.",
    ],
    image: "/how-we-make/rose.png",
  },
  {
    title: "Sandalwood: A Natural Healer",
    description:
      "Revered for its anti-inflammatory and antiseptic properties, Sandalwood soothes irritated skin and promotes balance.",
    benefits: [
      "Reduces Inflammation: Soothes irritation and redness.",
      "Calms Sensitive Skin: Perfect for conditions like acne or eczema.",
      "Evens Skin Tone: Improves texture and tone.",
      "Heals Blemishes: Helps heal scars and blemishes.",
    ],
    image: "/how-we-make/sandalwood.png",
  },
  {
    title: "Vanilla: A Sweet Touch of Hydration",
    description:
      "Vanilla is packed with antioxidants and vitamins that protect your skin and keep it hydrated.",
    benefits: [
      "Rich in Antioxidants: Shields skin from environmental damage.",
      "Deeply Moisturises: Nourishes and softens the skin.",
      "Promotes Glow: Leaves your skin healthy and radiant.",
      "Calms & Soothes: Aids relaxation and reduces stress.",
    ],
    image: "/how-we-make/vanilla.png",
  },
  {
    title: "Lavender: Calm, Refresh, and Renew",
    description:
      "Known for its soothing properties, Lavender calms inflammation and enhances skin's healing.",
    benefits: [
      "Calms Inflammation: Reduces redness and irritation.",
      "Heals & Nourishes: Supports natural skin healing.",
      "Promotes Relaxation: Reduces stress with its soothing scent.",
      "Blemish Prevention: Antibacterial properties help prevent acne.",
    ],
    image: "/how-we-make/lavender.png",
  },
  {
    title: "Red Grapes: The Secret to Youthful, Glowing Skin",
    description:
      "Packed with resveratrol and polyphenols, Red Grapes protect and rejuvenate the skin.",
    benefits: [
      "Rich in Antioxidants: Prevents premature ageing and reduces dark spots.",
      "Deep Hydration: Nourishes for a soft, plump look.",
      "Improves Elasticity: Boosts collagen production.",
      "Brightens Skin: Evens tone for a glowing complexion.",
      "Fights Inflammation: Calms redness and irritation.",
    ],
    image: "/how-we-make/redgrape.png",
  },
  {
    title: "Hyaluronic Acid: The Ultimate Hydration for Your Skin",
    description:
      "A hydration powerhouse, Hyaluronic Acid helps skin retain moisture and stay youthful.",
    benefits: [
      "Deep Hydration: Attracts and retains moisture.",
      "Plumps & Smooths: Reduces fine lines and wrinkles.",
      "Enhances Elasticity: Improves skin firmness.",
      "Boosts Skin Repair: Supports healing and revitalisation.",
      "Perfect for All Skin Types: Gentle and suitable for everyone.",
    ],
    image: "/how-we-make/acid.png",
  },
  {
    title: "Collagen: The Building Block of Youthful, Radiant Skin",
    description:
      "Collagen helps maintain skin’s firmness and elasticity, reducing signs of ageing.",
    benefits: [
      "Improves Firmness: Boosts elasticity and structure.",
      "Reduces Fine Lines: Smooths wrinkles for a youthful look.",
      "Enhances Hydration: Strengthens the moisture barrier.",
      "Promotes Repair: Supports skin regeneration.",
      "Boosts Skin Health: Protects from environmental damage.",
    ],
    image: "/how-we-make/collegen.png",
  },
];

const Ingredients = () => {
  return (
    <section style={{ maxWidth: "1000px", margin: "20px auto", padding: "20px" }}>
      {ingredients.map((ingredient, index) => (
        <Card
          key={index}
          sx={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "20px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ color: "#b09614", marginBottom: "10px" }}>
              {ingredient.title}
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={9}>
                <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                  {ingredient.description}
                </Typography>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  {ingredient.benefits.map((benefit, index) => (
                    <li key={index} style={{ marginBottom: "8px" }}>
                      <strong style={{ color: "#444" }}>{benefit.split(":")[0]}:</strong>{" "}
                      {benefit.split(":")[1]}
                    </li>
                  ))}
                </ul>
              </Grid>
              <Grid item xs={12} sm={3}>
                <img
                  src={ingredient.image}
                  alt={ingredient.title}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default Ingredients;
