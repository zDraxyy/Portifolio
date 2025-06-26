import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { BsDiscord } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaTwitch } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { 
  SiTypescript, SiNextdotjs, SiNodedotjs, SiReact,
  SiJavascript, SiGit, SiGithub, SiTailwindcss, 
  SiHtml5, SiCss3 
} from "react-icons/si";
export default function Home() {
  return (
        <>
      <Head>
    <title>Portifolio</title>
    </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          zDraxy
        </h1>
        <p>
            Óla, seja bem vindo ao meu portifolio. Aqui você vai saber mais sobre mim.
        </p> 
        </main>
        <div className={styles.Container}>
        <section className={styles.aboutme}>
         <h2 className={styles.me} > Sobre mim:</h2>
         <p >
          Tenho 16 anos, sou um desenvolvedor full stack,<br/>
          procuro sempre aprender mais ainda sobre programação.<br/>
          Faço alguns hobbys como fazer addons e videos.
         </p>
        </section>
        <section className={styles.projects}>
          <a href="projetos/projects.jsx">
          <h2 className={styles.pro}>
            Projetos:
            </h2>
            <p>
              Meus sites e projetos que estão feitos <br/>
               ou em desenvolviemnto
            </p>
            </a>
        </section>
        <section className={styles.addons}>
          <h2 className={styles.add}>
            Addons/Mods:
          </h2>
          <p>
            Addons e Mods para Minecraft
          </p>
        </section>
        </div>
        <div className={styles.technologiesSection}>
          <h2>
            Tecnologias:
            <div className={styles.technologies}>
              <SiTypescript size={30} />
              <SiNextdotjs size={30} />
              <SiNodedotjs size={30} />
              <SiReact size={30} />
              <SiJavascript size={30} />
              <SiGit size={30} />
              <SiGithub size={30} />
              <SiTailwindcss size={30} />
              <SiHtml5 size={30} />
              <SiCss3 size={30} />
            </div>
          </h2>
        </div>
        <div className={styles.contactSection}>
          <h2>
            Contato:
          </h2>
          <p>
            Email: <a href="mailto:draxycommercialcontact@gmail.com">draxycommercialcontact@gmail.com</a>
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
          <a href="https://www.youtube.com/channel/UCNL-FiewpHfFXUMiMe70HjQ" target="_blank"><BsYoutube size={50} /></a>
          <a href="https://github.com/zDraxyy" target="_blank"><IoLogoGithub size={50} /></a>
        </footer>
        </>
  );
}