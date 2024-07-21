"use client";
import React from "react";
import Link from "next/link";
import { loginUser } from "@/actions/users";
import { closeModal } from "@/store/slices/modalSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { ILoginUser, userLoginSchema } from "@/schema/users";
import { API_KEYS, MODAL_KEYS } from "@/types";
import { Button } from "@nextui-org/button";
import Input from "@/components/ui/Input";
import FormWrapper from "@/components/hook-form/hf-provider";
import Cookies from "js-cookie";
import { setUser } from "@/store/slices/userSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const formMethods = useForm<ILoginUser>({
    resolver: zodResolver(userLoginSchema),
  });

  const { mutate: loginUserHandler, isPending } = useMutation({
    mutationKey: [API_KEYS.LOGIN_USER],
    mutationFn: loginUser,
  });

  const onSubmit: SubmitHandler<ILoginUser> = async (values) => {
    loginUserHandler(values, {
      onSuccess: (data) => {
        toast.success("Successfully Logged In");
        formMethods.reset();
        dispatch(setUser(data?.user));
        Cookies.set("accessToken", data?.token.accessToken);
        Cookies.set("refreshToken", data?.token?.refreshToken);
        dispatch(closeModal(MODAL_KEYS.LOGIN_MODAL));
      },
      onError: (err) => {
        console.log(err, "e");
        toast.error(err.message);
      },
    });
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
            Login
          </Button>
        </div>
      </FormWrapper>

      <Link
        className="mt-5 flex gap-2 text-gray-500"
        href="/seller/seller-login"
      >
        Dont have an Account? <p className="text-primary">Register</p>
      </Link>
    </section>
  );
};

export default LoginForm;
