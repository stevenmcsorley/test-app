import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export const SuperCardOne = () => {
  return (
    <Card
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <CardMedia
        component="img"
        image="https://source.unsplash.com/random"
        alt="green iguana"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: '0',
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }}
      />
      <CardContent sx={{ position: 'relative', zIndex: '2' }}>
        <Typography gutterBottom variant="h5" component="div">
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus
          lectus magna. Nam a faucibus enim.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: 'black' }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default Card
