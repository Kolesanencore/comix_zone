import { useEffect, useState } from 'react';

import { getComics } from '../../services/marvelApi';

import ComicItem from './ComicItem';

import { ComicList } from './ComicList.styled';

const ComixList = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    async function fetchComics() {
      try {
        const comicData = await getComics();
        setComics(comicData);
      } catch (error) {
        console.error('Error fetching comics:', error);
      }
    }
    fetchComics();
  }, []);

  return (
    <ComicList>
      {comics.map(comic => (
        <ComicItem key={comic.id} comic={comic} />
      ))}
    </ComicList>
  );
};

export default ComixList;
