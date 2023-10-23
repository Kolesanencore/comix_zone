import { useEffect, useState } from 'react';

import { getComics } from '../../services/marvelApi';

import ComicItem from './ComicItem';
import LoadMoreButton from '../Buttons/ButtonLoadMore';
import Loader from '../Loader/Loader';

import { ComicsList } from '../SearchInput/SearchInput.styled';
import { Container } from '../Header/Header.styled';

const ComicsGallery = () => {
  const [comics, setComics] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [allComics, setAllComics] = useState([]);

  const comicsPerPage = 12;

  const loadMoreComics = () => {
    setIsLoading(true);

    const indexOfLastComic = currentPage * comicsPerPage;
    const indexOfFirstComic = indexOfLastComic - comicsPerPage;
    const newComics = allComics.slice(indexOfFirstComic, indexOfLastComic);

    setComics([...comics, ...newComics]);
    setCurrentPage(currentPage + 1);

    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getComics()
      .then(comicsData => {
        setAllComics(comicsData);
        const indexOfLastComic = currentPage * comicsPerPage;
        const indexOfFirstComic = indexOfLastComic - comicsPerPage;
        const initialComics = comicsData.slice(
          indexOfFirstComic,
          indexOfLastComic,
        );
        setComics(initialComics);
        setCurrentPage(currentPage + 1);
      })
      .catch(console.log)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Container>
        <ComicsList>
          {comics.map(comic => (
            <ComicItem key={comic.id} comic={comic} />
          ))}
        </ComicsList>
      </Container>
      {allComics.length > comics.length && (
        <LoadMoreButton onClick={loadMoreComics}>Load More</LoadMoreButton>
      )}
    </>
  );
};

export default ComicsGallery;
