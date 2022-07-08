import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Header from '../components/header/Header'
import MainNavigation from '../components/main-navigation/MainNavigation'
import Cta from '../components/cta/Cta'
import FeaturedItems from '../components/featured/FeaturedItems'
import MainFooter from '../components/footer/MainFooter'
import SuperCardOne from '../components/cards/SuperCardOne'
import { MainBannerCards } from '../utils/MainBannerCards'
const Home = () => {
  return (
    <Container fixed>
      <Header />
      <MainNavigation />
      <Box sx={{ margin: 'auto' }} pt={8}>
        <Grid container rowSpacing={4} columnSpacing={4}>
          {MainBannerCards.slice(0, 1).map((item) => (
            <Grid item key={item.id} xs={12} lg={8}>
              <SuperCardOne
                title={item.title}
                image={item.image}
                imageAlt={item.imageAlt}
                description={item.description}
                buttonTitle={item.buttonTitle}
              />
            </Grid>
          ))}
          <Grid item xs={12} lg={4} sx={{ '& > div:first-of-type': { pb: 4 } }}>
            {MainBannerCards.slice(1, 3).map((item) => (
              <Grid item xs={12} key={item.id}>
                <SuperCardOne
                  title={item.title}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  description={item.description}
                  buttonTitle={item.buttonTitle}
                />
              </Grid>
            ))}
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
