import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small";
  fullWidth?: boolean;
};

const PHInput = ({
  name,
  label,
  type = "text",
  size,
  fullWidth,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          variant="outlined"
          size={size}
          fullWidth={true}
        />
      )}
    />
  );
};

export default PHInput;
