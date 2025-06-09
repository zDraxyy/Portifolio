import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { BsDiscord } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaTwitch } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";

export default function Home() {
  return (
        <>
      <Head>
    <title>Portifolio</title>
    </Head>
      <main className={styles.main}>
        <h1>
          zDraxy
        </h1>
        <p>
            Óla, seja bem vindo ao meu portifolio, aqui você vai saber mais sobre mim.
        </p> 
        </main>
        <section>
         <h2> Sobre mim:</h2>
         <p>
          Tenho 16 anos, sou um desenvolvedor full stack,<br/>
          procuro sempre aprender mais ainda sobre programação.<br/>
          Faço alguns hobbys como fazer addons e videos no youtube.
         </p>
        </section>
        <section>
          <a href="projetos/projects.jsx">
          <h2>
            Projetos:
            </h2>
            <p>
              Meus sites e projetos que estão feitos <br/>
               ou em desenvolviemnto
            </p>
            </a>
        </section>
        <section>
          <h2>
            Addons/Mods:
          </h2>
          <p>
            Addons e Mods para Minecraft
          </p>
        </section>
        <div>
          <h2>
            Tecnologias:
          </h2>
        </div>
        <div>
          <h2>
            Contatos
          </h2>
          <p>
            Email: draxypersonalcontact@gmail.com
          </p>
        </div>
        <footer className={styles.footer}>
          <h2>
            Redes Sociais:
          </h2>
         <a href="https://discord.com/users/1174471132221538304" target="_blank">
          <BsDiscord size={50} /> </a>
         <a><BsTwitterX size={45} /></a>
         <a> <FaTwitch size={50} /></a>
          <a><BsYoutube size={50} /></a>
          <a href="https://github.com/zDraxyy" target="_blank"><IoLogoGithub size={50} /></a>
        </footer>
        </>

  );
}
