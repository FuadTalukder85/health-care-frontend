"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import SpecialtyModal from "./components/SpecialistModal";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        <SpecialtyModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
        ></SpecialtyModal>
        <TextField size="small" placeholder="Search specialty"></TextField>
      </Stack>
    </Box>
  );
};

export default SpecialtiesPage;
