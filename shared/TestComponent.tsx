import { graphql } from "relay-runtime";

const countryFragment = graphql`
  fragment TestComponent_country on Country {
    name
    phone
    currency
    emoji
  }
`

type TestComponentProps = {

};
const TestComponent: React.FC<TestComponentProps> = ({ }) => {
  return (
    <div>
      {'This is <TestComponent /> from shared/.'}
    </div>
  );
}

export default TestComponent;
