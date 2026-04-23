import Container from "../components/layout/Container";
import Header from "../components/layout/Header";
import EmptyState from "../components/invoice/EmptyState";
import Sidebar from "../components/layout/Sidebar";

export default function Home() {
  return (

    <Container>
      <Header />
      <EmptyState />
      <Sidebar />
    </Container>

  );
}
