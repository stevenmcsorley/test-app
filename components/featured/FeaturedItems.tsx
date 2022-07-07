// Import Swiper React components
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react'

import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

// import required modules
import { Pagination, Navigation } from 'swiper'

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
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h4" component="div" sx={{ textAlign: 'center' }}>
        Featured Items
      </Typography>
      <SwiperReact
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Card key={item.id}>
              <Link
                href={item.path}
                variant="body1"
                sx={{
                  p: 4,
                  color: 'gray',
                  fontWeight: 'bold',
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
