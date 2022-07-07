import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Header from '../components/header/Header'
import MainNavigation from '../components/main-navigation/MainNavigation'
import Cta from '../components/cta/Cta'
import FeaturedItems from '../components/featured/FeaturedItems'
import MainFooter from '../components/footer/MainFooter'
import { SuperCardOne } from '../components/cards/SuperCardOne'
const Home = () => {
  return (
    <Container fixed>
      <Header />
      <MainNavigation />
      <Box maxWidth="lg" sx={{ margin: 'auto' }} p={8}>
        <Grid container rowSpacing={4} columnSpacing={4}>
          <Grid item xs={12} lg={8}>
            <SuperCardOne />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid item xs={12} pb={4}>
              <SuperCardOne />
            </Grid>

            <Grid item xs={12}>
              <SuperCardOne />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Cta />
      <FeaturedItems />
      <MainFooter />
    </Container>
  )
}

export default Home
