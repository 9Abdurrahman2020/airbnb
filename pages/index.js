import { createClient } from "next-sanity";
const client = createClient({
  projectId: "w3ldbcl1",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

import Destinations from "../components/Destinations";
import Header from "../components/Header";

export default function Home({ destinations }) {
  return (
    <div>
      <Header />
      <Destinations destinations={destinations} />
    </div>
  );
}
export async function getServerSideProps() {
  const destinations = await client.fetch(`*[_type == "destination"]`);
  return {
    props: {
      destinations,
    },
  };
}
