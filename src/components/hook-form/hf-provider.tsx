"use client"
import React from "react";
import {
  FormProvider,
  UseFormReturn,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";

interface FormWrapperProps<T extends FieldValues> {
  methods: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  children: React.ReactNode;
}

const FormWrapper = <T extends FieldValues>({
  methods,
  onSubmit,
  children,
}: FormWrapperProps<T>) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FormWrapper;
