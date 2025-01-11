// import React from "react";
// import { Box, Container, Typography, List, ListItem, Link } from "@mui/material";
// import SectionTitle from "./SectionTitle";

// const TermConditionPolicy: React.FC = () => {
//   return (
//     <>
//        <div className="bg-white">
//     <SectionTitle title="Terms and Conditions" path="Home | Terms and Conditions" />
//        </div>
//        <Box
//       component="section"
//       sx={{
//         maxWidth: "1000px",
//         margin: "20px auto",
//         padding: "40px",
//         backgroundColor: "#fff",
//         borderRadius: "8px",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <Container>
//         <Typography variant="body1" sx={{ marginBottom: "20px", color: "#333" }}>
//           Welcome to Maluk Forever! By using our website, making a purchase, or engaging with our services, you agree to
//           comply with and be bound by the following terms and conditions. Please read these carefully.
//         </Typography>

//         <Typography variant="h3" sx={headingStyle}>
//           Privacy and Data Protection
//         </Typography>
//         <Typography sx={paragraphStyle}>
//           We respect your privacy and are committed to protecting your personal information. For more details on how we
//           collect, use, and protect your data, please review our Privacy Policy.
//         </Typography>

//         <Typography variant="h3" sx={headingStyle}>
//           Intellectual Property
//         </Typography>
//         <Typography sx={paragraphStyle}>
//           All content on the Maluk Forever website, including text, images, logos, and trademarks, is the property of
//           Maluk Forever or its affiliates and is protected by copyright laws. You may not use, reproduce, or distribute
//           any content without permission from Maluk Forever.
//         </Typography>

//         <Typography variant="h3" sx={headingStyle}>
//           User Conduct
//         </Typography>
//         <Typography sx={paragraphStyle}>When using the website, you agree not to:</Typography>
//         <List sx={{ paddingLeft: "20px", color: "#333" }}>
//           <ListItem>Engage in any fraudulent activity</ListItem>
//           <ListItem>Post or transmit harmful, offensive, or unlawful content</ListItem>
//           <ListItem>Disrupt or interfere with the website’s functionality</ListItem>
//         </List>
//         <Typography sx={paragraphStyle}>
//           We reserve the right to suspend or terminate your access to the site if we believe you have violated these
//           terms.
//         </Typography>

//         <Typography variant="h3" sx={headingStyle}>
//           Limitation of Liability
//         </Typography>
//         <Typography sx={paragraphStyle}>
//           Maluk Forever is not liable for any direct, indirect, incidental, or consequential damages resulting from your
//           use or inability to use the website or products. This includes any loss of data, profit, or damage to your
//           device or skin due to the use of our products.
//         </Typography>

//         <Typography variant="h3" sx={headingStyle}>
//           Disclaimer
//         </Typography>
//         <Typography sx={paragraphStyle}>
//           While we strive to provide accurate and effective products, individual results may vary. Please follow the
//           product instructions carefully, and discontinue use if irritation occurs. Maluk Forever is not responsible for
//           any adverse reactions or damages caused by misuse of our products.
//         </Typography>

//         <Typography variant="h3" sx={headingStyle}>
//           Changes to Terms
//         </Typography>
//         <Typography sx={paragraphStyle}>
//           We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be posted
//           on this page with the updated date. By continuing to use our website after such changes, you agree to be bound
//           by the revised terms.
//         </Typography>

//         <Typography variant="h3" sx={headingStyle}>
//           Governing Law
//         </Typography>
//         <Typography sx={paragraphStyle}>
//           These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in
//           which Maluk Forever operates.
//         </Typography>

//         <Typography variant="h3" sx={headingStyle}>
//           Contact Us
//         </Typography>
//         <Typography sx={paragraphStyle}>
//           If you have any questions about these Terms and Conditions or any aspect of your order, please contact us at:
//         </Typography>
//         <Typography sx={paragraphStyle}>
//           Email:{" "}
//           <Link href="mailto:operations@malukforever.com" sx={linkStyle}>
//             operations@malukforever.com
//           </Link>
//         </Typography>
//         <Typography sx={paragraphStyle}>
//           Phone: +91 85888 01711
//         </Typography>
//         <Typography sx={paragraphStyle}>
//           Address: E-169 Lower Ground Part 1, Sector 63, G B Nagar, Noida, Uttar Pradesh, 201301
//         </Typography>
//       </Container>
//     </Box>
//     </>
//   );
// };

// // Styling using the sx prop
// const headingStyle = {
//   color: "#b09614",
//   marginTop: "15px",
//   fontSize: "1.3rem",
//   fontWeight: "bold",
//   borderLeft: "10px solid #f4f2e4",
//   borderRight: "3px solid #f4f2e4",
//   borderBottomLeftRadius: "23px",
//   paddingLeft: "10px",
// };

// const paragraphStyle = {
//   fontSize: "1rem",
//   lineHeight: "1.6",
//   color: "#333",
//   marginBottom: "15px",
// };

// const linkStyle = {
//   color: "#b09614",
//   textDecoration: "none",
//   "&:hover": {
//     textDecoration: "underline",
//   },
// };

// export default TermConditionPolicy;





import React from "react";
import { Box, Container, Typography, List, ListItem, Link } from "@mui/material";
import SectionTitle from "./SectionTitle";

const TermConditionPolicy: React.FC = () => {
  return (
    <>
      <div className="bg-white">
        <SectionTitle title="Terms and Conditions" path="Home | Terms and Conditions" />
      </div>
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
          <Typography variant="body1" sx={{ marginBottom: "20px", color: "#333" }}>
            Welcome to Maluk Forever! By using our website, making a purchase, or engaging with our services, you agree
            to comply with and be bound by the following terms and conditions. Please read these carefully.
          </Typography>

          {/* Existing Sections */}
          <Section title="Privacy and Data Protection" content="We respect your privacy and are committed to protecting your personal information. For more details on how we collect, use, and protect your data, please review our Privacy Policy." />
          <Section title="Intellectual Property" content="All content on the Maluk Forever website, including text, images, logos, and trademarks, is the property of Maluk Forever or its affiliates and is protected by copyright laws." />
          <Section title="User Conduct" content="When using the website, you agree not to engage in fraudulent activity or disrupt the functionality of the site." />
          <Section title="Limitation of Liability" content="Maluk Forever is not liable for any direct, indirect, incidental, or consequential damages resulting from your use of the website or products." />
          <Section title="Changes to Terms" content="We reserve the right to update or modify these Terms and Conditions at any time." />

          {/* Additional Sections */}
          <Section title="Payment Details" content="We accept the following modes of payment: Credit Cards, Debit Cards, Net Banking, UPI, and Wallet Payments. All payments are securely processed through our trusted payment gateway providers." />
          {/* <Section title="Shipment Policy" content="The product will be delivered within 4-5 days. Delivery timelines depend on the destination and chosen shipping method. We use Surface Transport for most deliveries." />
          <Section title="Return Policy" content="Products can be returned within 10 days of delivery if they are damaged, defective, or incorrect. To initiate a return, contact our support team with your order details." />
          <Section title="Refund Policy" content="Once your refund is approved, the amount will be credited to the original payment method in 7-8 days." />
          <Section title="Exchange Policy" content="You can request for a exchange within 2 days of the product to be delivered. once the request is approved you will get your exchange product in 5 days. Exchanges are applicable only for damaged or defective items. Ensure the product is unused and in its original packaging when requesting an exchange." /> */}
          <Section title="Mode of Transport" content="We primarily use Surface Transport for shipping products to ensure safe and reliable delivery to your doorstep." />



  {/* Additional Sections */}



          <Typography variant="h3" sx={headingStyle}>
            Contact Us
          </Typography>
          <Typography sx={paragraphStyle}>
            If you have any questions about these Terms and Conditions or any aspect of your order, please contact us at:
          </Typography>
          <Typography sx={paragraphStyle}>
            Email:{" "}
            <Link href="mailto:operations@malukforever.com" sx={linkStyle}>
              operations@malukforever.com
            </Link>
          </Typography>
          <Typography sx={paragraphStyle}>Phone: +91 85888 01711</Typography>
          <Typography sx={paragraphStyle}>
            Address: E-169 Lower Ground Part 1, Sector 63, G B Nagar, Noida, Uttar Pradesh, 201301
          </Typography>
        </Container>
      </Box>
    </>
  );
};

const Section: React.FC<{ title: string; content: string }> = ({ title, content }) => (
  <>
    <Typography variant="h3" sx={headingStyle}>
      {title}
    </Typography>
    <Typography sx={paragraphStyle}>{content}</Typography>
  </>
);

const headingStyle = {
  color: "#b09614",
  marginTop: "15px",
  fontSize: "1.3rem",
  fontWeight: "bold",
  borderLeft: "10px solid #f4f2e4",
  borderRight: "3px solid #f4f2e4",
  borderBottomLeftRadius: "23px",
  paddingLeft: "10px",
};

const paragraphStyle = {
  fontSize: "1rem",
  lineHeight: "1.6",
  color: "#333",
  marginBottom: "15px",
};

const linkStyle = {
  color: "#b09614",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
};

export default TermConditionPolicy;
