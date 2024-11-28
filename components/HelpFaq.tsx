import React from "react";
import { Box, Typography, Container } from "@mui/material";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "1. What makes Maluk Forever products unique?",
    answer:
      "Maluk Forever products are crafted with the finest natural, plant-based ingredients, designed to nourish and enhance your skin's health. We focus on creating effective, gentle formulas that are safe for all skin types.",
  },
  {
    question: "2. Are your products cruelty-free?",
    answer: "Yes, we are 100% cruelty-free. None of our products are tested on animals.",
  },
  {
    question: "3. Can I use your products if I have sensitive skin?",
    answer:
      "Yes, our products are designed to be gentle and suitable for sensitive skin. We recommend doing a patch test before use.",
  },
  {
    question: "4. Are your products suitable for all skin types?",
    answer:
      "Yes, our products are designed for all skin types, including dry, oily, combination, and sensitive skin. We offer a range of products tailored to different skincare needs and concerns.",
  },
  {
    question: "5. How do I choose the right products for my skin?",
    answer:
      "Browse our product guides or contact our customer support for personalized recommendations based on your skin type.",
  },
  {
    question: "6. Can I return or exchange products?",
    answer:
      "Yes, we offer returns and exchanges within a specific timeframe. Please refer to our return policy for more details.",
  },
];

const HelpFaq: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: "1000px",
        margin: "20px auto",
        padding: "40px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container>
        {faqs.map((faq, index) => (
          <Box key={index} sx={{ marginBottom: "20px" }}>
            <Typography
              variant="h5"
              sx={{
                color: "#b09614",
                fontWeight: "bold",
                fontSize: "1.3rem",
                marginTop: "15px",
                paddingLeft: "10px",
                borderLeft: "4px solid #f4f2e4",
                borderRight: "3px solid #f4f2e4",
                borderBottomLeftRadius: "23px",
              }}
            >
              {faq.question}
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                lineHeight: "1.6",
                color: "#333",
                marginTop: "10px",
              }}
            >
              {faq.answer}
            </Typography>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default HelpFaq;
