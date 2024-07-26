'use client'
import CharacterDetails from "@/components/CharacterDetails";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import PageTitle from "@/components/PageTitle";
import { useParams } from "next/navigation";


export default function Details() {

  const { id } = useParams<{ id: string }>()

  return (
    <Container>
      <>
        <Header />
        <Nav />
        <div className="flex w-full h-[7%] items-center">
          <PageTitle title="Detalhes" />
        </div>
        <CharacterDetails id={id} />
      </>
    </Container>
  );
}
