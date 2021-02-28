import { Box, Grid, Typography, Container } from '@material-ui/core'
import React from 'react'
import banner from '../styles/images/shape/home1.png';
import banner2 from "../styles/images/shape/Home-responsive.png";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heroSection: {
      zIndex: 9,
      overflow: "hidden",
      paddingTop: "180px"
    },
    shapeWrapper: {
      position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: -1
    },
    imageShape: {
      position: "absolute",
      width: "900px",
    height: "900px",
    top: "-5px",
    right: "-10px",
    maxWidth: "100%",
    display: "block"
    },
    mainWrapper: {
      zIndex: 5,
      position: "relative"
    }
  }),
);


interface BannerProps {
  title: string;
  subtitle: string;
}

const Banner:React.FC<BannerProps> = ({title, subtitle}) => {
  const classes = useStyles();
  return (
   <Container className={classes.heroSection}>
      <Grid container className={classes.mainWrapper}>
      <Grid item lg={4}>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="h4">{subtitle}</Typography>
          <br />
          <br />
          <Typography>We are your one stop solution for all your digital marketing and software needs based in Pakistan which is fueled by young and dynamic people. We believe in building strong brands through our clean and creative designs, well-crafted content and integrated strategies. From digital marketing to website development and all your software needs; we're more than just another agency. We're your next business partner.</Typography>
        </Grid>
      </Grid>
      <div className={classes.shapeWrapper}>
            <img src={banner} alt="" className={classes.imageShape} />
            <img src={banner2} alt="" className={classes.imageShape}  />
          </div>
    </Container>
  )
}

export default Banner
