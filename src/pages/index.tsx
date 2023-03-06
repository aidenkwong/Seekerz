import Head from "next/head";
import { Text } from "@nextui-org/react";
import styles from "@/styles/Home.module.css";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <Head>
        <title>Seekerz</title>
        <meta
          name="description"
          content=" A more customizable job search tool."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Text h1 size={64} weight="bold">
          Seekerz
        </Text>
        <Text h2 size={32} weight="bold">
          A more customizable job search tool.
        </Text>
        <Form />
      </main>
    </>
  );
}
