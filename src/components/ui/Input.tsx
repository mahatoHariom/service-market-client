import React from "react";
import { Input as NextInput, InputProps } from "@nextui-org/input";
import { useFormContext, Controller } from "react-hook-form";

interface CustomInputProps extends InputProps {
  name: string;
}

const Input: React.FC<CustomInputProps> = (props) => {
  const { name, ...inputProps } = props;
  const { control } = useFormContext();

  return (
    <div className="flex flex-col w-full">
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <NextInput
            {...field}
            {...inputProps}
            isInvalid={!!fieldState.error}
            errorMessage={fieldState.error ? fieldState.error.message : null}
          />
        )}
      />
    </div>
  );
};

export default Input;
