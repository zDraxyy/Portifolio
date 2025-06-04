import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

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
        <footer>
          <h2>
            Redes Sociais:
          </h2>
        </footer>
        </>

  );
}
