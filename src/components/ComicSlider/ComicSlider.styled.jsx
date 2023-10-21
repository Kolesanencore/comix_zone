import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

export const CustomSwiperContainer = styled(Swiper)`
  padding: 64px 0 64px 0;
`;

export const CustomSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  -webkit-box-reflect: below 5px
    linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));
`;
