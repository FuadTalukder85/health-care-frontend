import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();
  console.log(specialties);
  return (
    <Container>
      <Box sx={{ margin: "40px 0px", textAlign: "center" }}>
        <Box sx={{ textAlign: "start" }}>
          <Typography variant="h4" fontWeight={600}>
            Explore Treatments Across Specialities
          </Typography>
          <Typography component={"p"} fontWeight={300} fontSize={"18px"}>
            Experienced Doctora Across All Specialities
          </Typography>
        </Box>
        <Stack direction={"row"} gap={4} mt={5}>
          {specialties.map((speciality: any) => (
            <Box
              key={speciality.id}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                border: "1px solid rgba(250, 250, 250, 1)",
                borderRadius: "10px",
              }}
            >
              <Image
                src={speciality?.icon}
                width={100}
                height={100}
                alt="speciality icon"
              ></Image>
              <Box>
                <Typography component={"p"} fontWeight={300} fontSize={"18px"}>
                  {speciality?.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default Specialist;
