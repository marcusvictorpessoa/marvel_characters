'use client'
import CharacterCard from "@/components/CharacterCard";
import CharactersGrid from "@/components/CharactersGrid";
import Container from "@/components/Container";
import FilterInput from "@/components/FilterInput";
import Header from "@/components/Header";
import Message from "@/components/Message";
import Nav from "@/components/Nav";
import PageTitle from "@/components/PageTitle";
import Pagination from "@/components/Pagination";
import useCharacters from "@/hooks/useCharacters";
import { useEffect, useState } from "react";

export default function Home() {

  const { characters, loading, getData, getSearch, hasError, pagination } = useCharacters()
  const [offset, setOffset] = useState(0)
  const [search, setSearch] = useState('');

  useEffect(() => {
    getData(0)
  }, [])

  useEffect(() => {
    getData(offset)
  }, [offset])

  useEffect(() => {
    if (!!search) {
      getSearch(search)
    } else {
      getData(0)
    }
  }, [search])

  return (
    <Container>
      <>
        <Header />
        <Nav />
        {!!hasError && <Message content={hasError} /> }
        <div className="flex w-full h-[7%] justify-between items-center">
          <PageTitle title="Início" />
          <FilterInput onSearch={setSearch} />
        </div>
        <CharactersGrid loading={loading}>
          {characters.length === 0 && <span className="ml-5">Nenhum personagem encontrado!</span>}
          {characters?.map((character: any) => {
            return (
              <CharacterCard
                key={character?.id}
                id={character?.id}
                name={character?.name}
                thumb={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`} />
            )
          })}
        </CharactersGrid>
        <Pagination
          isLoading={loading}
          isShow={!!search || characters.length === 0}
          total={pagination.total}
          limit={pagination.limit}
          offset={pagination.offset}
          setOffset={setOffset}
        />
      </>
    </Container>
  );
}
