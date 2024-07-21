"use client";
import { Button } from "@nextui-org/button";
import React from "react";
import Icon from "../iconify/Icon";
import { featuredCategoriesData } from "@/types/featured-categories";



const FeaturedCategories = () => {
  return (
    <div className="w-full bg-default-50 py-32">
      <div className="container mx-auto flex justify-between items-center mb-12 px-4 md:px-0">
        <div className="flex flex-col gap-1 w-full md:w-10/12">
          <h1 className="font-bold text-5xl">Featured Categories</h1>
          <p className="font-medium text-default-500">
            What do you need to find?
          </p>
        </div>
        <div className="text-right">
          <Button
            color="primary"
            radius="none"
            size="lg"
            endContent={<Icon icon={"icons8:right-round"} size={20} />}
          >
            View All
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 container mx-auto px-4 md:px-0">
        {featuredCategoriesData.map((category) => (
          <div
            key={category.name}
            className="relative flex flex-col items-center justify-center p-5 bg-default-50 shadow-lg rounded-lg text-center overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ backgroundImage: `url(${category.image})` }}
            ></div>
            <div className="absolute inset-0 bg-default-50 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>

            <div className="p-4 bg-default-100 rounded-full w-20 h-20 flex items-center justify-center transition-colors duration-500 z-10 group-hover:bg-white">
              <Icon
                icon={category.icon}
                size={40}
                className="text-primary z-10"
              />
            </div>

            <p className="font-semibold text-lg relative z-10 group-hover:text-white transition-colors duration-500">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
