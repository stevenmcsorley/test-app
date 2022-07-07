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
      <Box maxWidth="1200px" sx={{ margin: 'auto' }} py={8}>
        <Grid container rowSpacing={4} columnSpacing={4}>
          <Grid item xs={8}>
            <SuperCardOne />
          </Grid>
          <Grid item xs={4}>
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
