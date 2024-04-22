import styles from "./page.module.css";
import TestComponent from '@my-app/shared/TestComponent';

export default function Home() {
  return (
    <main className={styles.main}>
      <TestComponent />
    </main>
  );
}
