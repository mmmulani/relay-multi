"use client";

import { fetchQuery, graphql } from "relay-runtime";
import styles from "./page.module.css";
import TestComponent from '@my-app/shared/TestComponent';
import { useEffect, useState } from "react";
import { pageCountriesQuery, pageCountriesQuery$data } from "../__generated__/pageCountriesQuery.graphql";
import { useRelayEnvironment } from "react-relay";

const countriesQuery = graphql`
  query pageCountriesQuery {
    country(code: "US") {
      ...TestComponent_country
    }
  }
`;

export default function Home() {
  const [data, setData] = useState<pageCountriesQuery$data>();
  const environment = useRelayEnvironment();
  useEffect(() => {
    fetchQuery<pageCountriesQuery>(environment, countriesQuery, {}).toPromise().then(x => setData(x));
  }, []);

  return (
    <main className={styles.main}>
      {data?.country ? <TestComponent data={data.country} /> : null}
    </main>
  );
}
