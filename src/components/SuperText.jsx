import React from "react";
import localFont from "next/font/local";

const Extenda = localFont({
  src: [
    {
      path: "../app/fonts/Extenda-40-Hecto-trial.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/Extenda-80-Peta-trial.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function SuperText({ Text }) {
  return <h1 className={`${Extenda.className}`}>{Text}</h1>;
}
