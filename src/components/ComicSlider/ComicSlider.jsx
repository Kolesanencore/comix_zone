import { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
  Mousewheel,
} from 'swiper/modules';

import getComics from '../../services/marvelApi';

import ComicItem from '../ComicsList/ComicItem';

import { CustomSwiperContainer, CustomSwiperSlide } from './ComicSlider.styled';

const ComicSlider = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const comicsData = await getComics();
        setComics(comicsData);
      } catch (error) {
        console.error('Ошибка при запросе комиксов:', error);
      }
    };
    fetchComics();
  }, []);

  return (
    <>
      <CustomSwiperContainer
        effect={'coverflow'}
        mousewheel={true}
        slidesPerView={3}
        spaceBetween={40}
        autoplay={{
          delay: 8500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[
          Navigation,
          Pagination,
          Autoplay,
          EffectCoverflow,
          EffectCoverflow,
          Mousewheel,
        ]}
      >
        {comics.map(comic => (
          <CustomSwiperSlide key={comic.id}>
            <ComicItem comic={comic} />
          </CustomSwiperSlide>
        ))}
      </CustomSwiperContainer>
    </>
  );
};
export default ComicSlider;
