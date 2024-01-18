import { createTheme } from "@mantine/core";
import { Inter } from "next/font/google"

const font = Inter({
  subsets: ["latin"],
})

const themeColors = [
    "#f2feeb",
    "#e3fcd5",
    "#c3faa6",
    "#a2f874",
    "#86f64b",
    "#75f534",
    "#6bf429",
    "#5ad91f",
    "#4ec017",
    "#3ea607",
];

export const theme = createTheme({
  colors: {
    themeColors,
  },
  fontFamily: font.style.fontFamily,
});
