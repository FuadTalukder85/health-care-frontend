import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import Image from "next/image";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography color="white" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="white">Health Plans</Typography>
          <Typography color="white">Medicine</Typography>
          <Typography color="white">Diagnostics</Typography>
          <Typography color="white">NGOS</Typography>
        </Stack>

        <Stack direction="row" justifyContent="center" gap={2} py={3}>
          <Image
            src={facebookIcon}
            alt="facebookIcon"
            width={30}
            height={30}
          ></Image>
          <Image
            src={facebookIcon}
            alt="facebookIcon"
            width={30}
            height={30}
          ></Image>
          <Image
            src={facebookIcon}
            alt="facebookIcon"
            width={30}
            height={30}
          ></Image>
          <Image
            src={facebookIcon}
            alt="facebookIcon"
            width={30}
            height={30}
          ></Image>
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems={"center"}
          gap={2}
          py={3}
        >
          <Typography component="p" color={"white"}>
            &copy; 2024 Ph Healthcare all Right Reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color={"white"}
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Typography component="p" color={"white"}>
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
