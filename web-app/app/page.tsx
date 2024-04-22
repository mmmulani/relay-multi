import { graphql } from "relay-runtime";
import styles from "./page.module.css";
import TestComponent from '@my-app/shared/TestComponent';

const countriesQuery = graphql`
  query pageCountriesQuery {
    country(code: "US") {
      ...TestComponent_country
    }
  }
`;

export default function Home() {
  return (
    <main className={styles.main}>
      <TestComponent />
    </main>
  );
}
