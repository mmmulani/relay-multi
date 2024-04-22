"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { Environment, FetchFunction, Network, RecordSource, Store } from "relay-runtime";
import { useMemo } from "react";

const inter = Inter({ subsets: ["latin"] });

const fetchGraphQL: FetchFunction = async (params, variables) => {
  const response = await fetch('https://countries.trevorblades.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  return await response.json();
}

function createEnvironment() {
  return new Environment({
    network: Network.create(fetchGraphQL),
    store: new Store(new RecordSource()),
  });
}

let relayEnvironment: Environment | null = null;
function initEnvironment() {
  const environment = relayEnvironment ?? createEnvironment();
    if (!relayEnvironment) {
    relayEnvironment = environment;
  }
  return relayEnvironment;
}

function useEnvironment() {
  const store = useMemo(() => initEnvironment(), []);
  return store;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const environment = useEnvironment();

  return (
    <html lang="en">
      <RelayEnvironmentProvider environment={environment}>
        <body className={inter.className}>{children}</body>
      </RelayEnvironmentProvider>
    </html>
  );
}
