// Import Swiper React components
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react'

import React, { useRef } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

// import required modules
import SwiperCore, { Navigation } from 'swiper'

SwiperCore.use([Navigation])

const data = [
  {
    id: 1,
    title: 'Featured Item 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://source.unsplash.com/random/400x200',
    path: '/',
  },
  {
    id: 2,
    title: 'Featured Item 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://source.unsplash.com/random/400x200',
    path: '/',
  },
  {
    id: 3,
    title: 'Featured Item 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://source.unsplash.com/random/400x200',
    path: '/',
  },
  {
    id: 4,
    title: 'Featured Item 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://source.unsplash.com/random/400x200',
    path: '/',
  },
  {
    id: 5,
    title: 'Featured Item 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://source.unsplash.com/random/400x200',
    path: '/',
  },
  {
    id: 6,
    title: 'Featured Item 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://source.unsplash.com/random/400x200',
    path: '/',
  },
]

const FeaturedItems = () => {
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{
            textAlign: 'left',
            fontSize: 12,
            mb: 2,
            textTransform: 'uppercase',
          }}
        >
          Featured Items
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
          <Box ref={prevRef}>
            <ArrowLeftIcon />
          </Box>
          <Box ref={nextRef}>
            <ArrowRightIcon />
          </Box>
        </Box>
      </Box>

      <SwiperReact
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        className="mySwiper"
        navigation={{
          prevEl: prevRef.current ? prevRef.current : undefined,
          nextEl: nextRef.current ? nextRef.current : undefined,
        }}
        onInit={(swiper) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.prevEl = prevRef.current
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.update()
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Card key={item.id}>
              <Link
                href={item.path}
                variant="body1"
                sx={{
                  position: 'absolute',
                  left: 12,
                  top: 12,
                  textTransform: 'uppercase',
                  fontSize: 12,
                  color: 'gray',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'silver',
                  },
                }}
              >
                {item.title}
              </Link>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: '5px',
                }}
              />
            </Card>
          </SwiperSlide>
        ))}
      </SwiperReact>
    </Box>
  )
}

export default FeaturedItems
