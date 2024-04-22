/**
 * @generated SignedSource<<a43e2d0e64683e35852ca5a795ecaf57>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pageCountriesQuery$variables = Record<PropertyKey, never>;
export type pageCountriesQuery$data = {
  readonly country: {
    readonly " $fragmentSpreads": FragmentRefs<"TestComponent_country">;
  } | null | undefined;
};
export type pageCountriesQuery = {
  response: pageCountriesQuery$data;
  variables: pageCountriesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "code",
    "value": "US"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pageCountriesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TestComponent_country"
          }
        ],
        "storageKey": "country(code:\"US\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pageCountriesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "phone",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "currency",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "emoji",
            "storageKey": null
          }
        ],
        "storageKey": "country(code:\"US\")"
      }
    ]
  },
  "params": {
    "cacheID": "2552b623341a9e7882336721b086ca38",
    "id": null,
    "metadata": {},
    "name": "pageCountriesQuery",
    "operationKind": "query",
    "text": "query pageCountriesQuery {\n  country(code: \"US\") {\n    ...TestComponent_country\n  }\n}\n\nfragment TestComponent_country on Country {\n  name\n  phone\n  currency\n  emoji\n}\n"
  }
};
})();

(node as any).hash = "5e3fa07a05c9848cfcdb27b051cd56e3";

export default node;
