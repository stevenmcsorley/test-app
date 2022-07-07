import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Header from '../components/header/Header'
import MainNavigation from '../components/main-navigation/MainNavigation'
import MainFooter from '../components/footer/MainFooter'
import { SuperCardOne } from '../components/cards/SuperCardOne'
const Home = () => {
  return (
    <Box>
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
      <MainFooter />
    </Box>
  )
}

export default Home
