import { Container, Grid } from '@mui/material';
import styles from '../styles/Home.module.css';
import { Button, Card, CardActions, CardContent, Input, Box, Typography } from '@mui/material';
import Image from 'next/image';
import profilePic from '/public/draft-3.png'


const GetStarted = () => {
  return (
    
    <Container width="100%">
      <Grid container justifyContent="left" alignItems="center">
      <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        
        </Typography>
        <Image alt="sample NFT" src={profilePic} width={500} height={500}/>
        
      </CardContent>
      </Card>
      </Grid>
    </Container>
);
}

export default GetStarted;
