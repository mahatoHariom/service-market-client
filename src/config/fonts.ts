import {
  Montserrat as FontMontserrat,
  Roboto as FontRoboto,
} from "next/font/google";

export const fontMontserrat = FontMontserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const fontRoboto = FontRoboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});