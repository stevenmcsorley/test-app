import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
const Header = () => {
  return (
    <Container maxWidth="lg">
      <header>
        <Typography
          variant="h4"
          component="div"
          sx={{ textAlign: 'center', py: 8 }}
        >
          Heading
        </Typography>
      </header>
    </Container>
  )
}

export default Header
