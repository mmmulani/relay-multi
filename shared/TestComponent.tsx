import { graphql } from "relay-runtime";
import { TestComponent_country$key } from "./__generated__/TestComponent_country.graphql";
import { useFragment } from "react-relay";

const countryFragment = graphql`
  fragment TestComponent_country on Country {
    name
    phone
    currency
    emoji
  }
`

type TestComponentProps = {
  data: TestComponent_country$key,
};
const TestComponent: React.FC<TestComponentProps> = ({ data }) => {
  const countryData = useFragment(countryFragment, data);

  return (
    <div>
      {'This is <TestComponent /> from shared/.'} <br />
      The country is named "{countryData.name}".
    </div>
  );
}

export default TestComponent;
