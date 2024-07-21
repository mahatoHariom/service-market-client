"use client";
import React from "react";
import Link from "next/link";
import registerUser, { loginUser } from "@/actions/users";
import { closeModal } from "@/store/slices/modalSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import {  IRegisterUser, userRegisterSchema } from "@/schema/users";
import { API_KEYS, MODAL_KEYS } from "@/types";
import { Button } from "@nextui-org/button";
import Input from "@/components/ui/Input";
import FormWrapper from "@/components/hook-form/hf-provider";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const formMethods = useForm<IRegisterUser>({
    resolver: zodResolver(userRegisterSchema),
  });

  const { mutate: createUserHandler, isPending } = useMutation({
    mutationKey: [API_KEYS.REGISTER_USER],
    mutationFn: registerUser,
  });

  const onSubmit: SubmitHandler<IRegisterUser> = async (values) => {
    createUserHandler(values, {
      onSuccess: () => {
        toast.success("Successfully created");
        formMethods.reset();
        dispatch(closeModal(MODAL_KEYS.REGISTER_MODAL));
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
  };

  const defaultValues: IRegisterUser = {
    name: "",
    email:"",
    password: "",
  };
  return (
    <section className="h-auto w-full rounded-xl bg-card  dark:border-none">
      <FormWrapper methods={formMethods} onSubmit={onSubmit}>
        <div className="flex w-full flex-col gap-5">
          <p>
            Fill the form below or write us. We will help you as soon as
            possible.
          </p>

          <Input
            name="name"
            // type="email"
            placeholder="hariom"
            label={"Name"}
            fullWidth
          />
          <Input
            name="email"
            type="email"
            placeholder={"example@gmail.com"}
            label={"Email"}
            fullWidth
          />

          <Input name="password" type="password" label={"Password"} fullWidth />
        </div>

        <div className="mt-5">
          <Button
            type="submit"
            color="primary"
            fullWidth
            isDisabled={isPending || !formMethods?.formState?.isValid}
            isLoading={isPending}
          >
            Register
          </Button>
        </div>
      </FormWrapper>

      <Link
        className="mt-5 flex gap-2 text-gray-500"
        href="/seller/seller-login"
      >
        Already have an Account? <p className="text-primary">Log In</p>
      </Link>
    </section>
  );
};

export default RegisterForm;
