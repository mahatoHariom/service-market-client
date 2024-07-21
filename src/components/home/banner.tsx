"use client";
import React from "react";
import { motion } from "framer-motion";
import Input from "../ui/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { BannerFormValues, bannerSchema } from "@/schema/banner";
import { Button } from "@nextui-org/button";
import Icon from "../iconify/Icon";
import FormWrapper from "../hook-form/hf-provider";
import { zodResolver } from "@hookform/resolvers/zod";

const Banner = () => {
  const defaultValues: BannerFormValues = {
    address: "",
    type: "",
  };
  const formMethods = useForm<BannerFormValues>({
    defaultValues,
    resolver: zodResolver(bannerSchema),
  });

  const onSubmit: SubmitHandler<BannerFormValues> = (data) => {
    console.log(data);
  };

  const renderFormContent = (
    <FormWrapper onSubmit={onSubmit} methods={formMethods}>
      <div className="flex flex-col md:flex-row justify-between items-center border border-default-50 p-4 rounded-lg mt-5 gap-5 w-full">
        <div className="flex items-center gap-3 flex-1">
          <div className="bg-primary-100 p-2 rounded-full">
            <Icon icon={"mynaui:location"} />
          </div>
          <div className="flex-1">
            <Input
              name="address"
              placeholder="Kathmandu"
              labelPlacement="inside"
              label="Location"
              variant="flat"
              size="sm"
              fullWidth
            />
          </div>
        </div>
        <div className="flex items-center gap-3 flex-1">
          <div className="bg-primary-100 p-2 rounded-full">
            <Icon icon={"bitcoin-icons:search-outline"} />
          </div>
          <div className="flex-1">
            <Input
              name="type"
              placeholder="Car Service"
              labelPlacement="inside"
              label="Looking for?"
              variant="flat"
              size="sm"
              fullWidth
            />
          </div>
        </div>
        <Button
          type="submit"
          radius="lg"
          color="primary"
          size="lg"
          variant="flat"
          className="flex gap-1"
         
        >
          Search{" "}
          <Icon
            icon={"bitcoin-icons:search-outline"}
            className="text-inherit "
          />
        </Button>
      </div>
    </FormWrapper>
  );

  const renderContent = (
    <>
      <div className="text-left z-10 w-full md:w-1/2">
        <h1 className="text-2xl md:text-4xl mb-2 font-medium">
          Professional Services For Your Home & Commercial
        </h1>
        <p className="text-lg md:text-xl font-medium text-default-500">
          Search From 100 Awesome Verified Ads!
        </p>
        {renderFormContent}
      </div>
      <div className="relative h-full w-0 md:w-1/2 flex items-center justify-center">
        <motion.img
          src="https://images.unsplash.com/photo-1657664066042-c59e5f84b7a8?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full hidden md:block"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ top: "4%", right: "10%" }}
        />
        <motion.img
          src="https://plus.unsplash.com/premium_photo-1663113651965-3b5ad52144ad?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute w-24 h-24 md:w-44 md:h-44 rounded-full hidden md:block"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.img
          src="https://plus.unsplash.com/premium_photo-1663126940582-09ce70a2c70d?q=80&w=2958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute w-72 h-72 md:w-60 md:h-60 rounded-full hidden md:block"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ bottom: "25%", left: "10%" }}
        />
        <motion.img
          src="https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute w-24 h-24 md:w-48 md:h-48 rounded-full hidden md:block"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ bottom: "20%", right: "10%" }}
        />
      </div>
    </>
  );

  return (
    <div className="relative container  flex flex-col md:flex-row items-center justify-between h-screen bg-background md:h-screen overflow-hidden w-full p-10 mx-auto">
      {renderContent}
    </div>
  );
};

export default Banner;
