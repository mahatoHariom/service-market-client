import { z } from "zod";

export const bannerSchema = z.object({
  address: z
    .string()
    .min(3, { message: "Please enter address minimum 3 character" }),
  type: z.string().min(2, { message: "Please enter minimum  2 character" }),
});

export type BannerFormValues = z.infer<typeof bannerSchema>;
