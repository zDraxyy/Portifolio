import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
        <>
      <Head>
    <title>Portifolio</title>
    </Head>
      <main id="main">
        <h1>
          zDraxy
        </h1>
        <p >
          This is a simple portfolio page built with Next.js and Geist.
        </p> 
        </main>
        </>
  );
}
