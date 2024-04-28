import PHFileUploader from "@/components/Forms/PHFileUploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtyModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = (values: FieldValues) => {
    console.log(values);
  };
  return (
    <div>
      <PHModal open={open} setOpen={setOpen} title="Create a new Speciality">
        <PHForm onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <PHInput name="title" label="Title" size="small"></PHInput>
            </Grid>
            <Grid item md={6}>
              <PHFileUploader name="file" label="Upload file"></PHFileUploader>
            </Grid>
          </Grid>
          <Button sx={{ mt: 1 }} type="submit">
            Create
          </Button>
        </PHForm>
      </PHModal>
    </div>
  );
};

export default SpecialtyModal;
