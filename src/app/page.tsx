import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/Components/Button/Button";
import MainPage from "@/Components/MainPage/MainPage";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainPage />
    </div>
  );
}
