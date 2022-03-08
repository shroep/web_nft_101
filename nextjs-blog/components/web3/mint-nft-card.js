import { Button, Card, CardActions, CardContent, Input, Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Grid, Stack } from '@mui/material';

const MintNFTCard = ({title, description,amount,total, action, canMint, showNumToMint, setNumToMint, mintStatus}) => {
  const handleChange = (event) => {
    const numToMint = parseInt(event.target.value);
    setNumToMint(numToMint);
  };

  return (
    <Card sx={{ maxwidth: 500 }} >


       <CardContent >

        
        <Typography  sx={{ fontSize: 30 }} color="white" bgcolor="black" align="center" gutterBottom>
             {title}
        </Typography>

        {mintStatus ? <p>Success! Check your wallet in a few minutes.</p> : <p align="center">{description}</p>}

        <pre>
             <br />
        </ pre>

       <Grid container spacing={3} direction="row" alignItems="left" paddingLeft={0} paddingRight={0} paddingbottom={0} paddingtop={0} width="100%">

          <Grid item lg={4}>
             <Typography sx={{ fontSize: 20 }} color="black" bgcolor="white" align="left" >
                   {amount}
             </Typography>
          </ Grid>
          <Grid item lg={4}>
             <output sx={{ fontSize: 20 }}><b> amountMinted </b></ output>
          </ Grid>

       </ Grid>

        <hr style={{ height: 4, width: "100%" }} />

        <pre>
                  <br />
        </ pre>

       <Grid container spacing={3} direction="row" alignItems="left" paddingLeft={0} paddingRight={3} paddingbottom={0} paddingtop={0} width="100%">

          <Grid item lg={4}>
             <Typography sx={{ fontSize: 20 }} color="black" bgcolor="white" align="left" >
                   {total}
             </Typography>
          </ Grid>
                  
          <Grid item lg={4} paddingbottom={0}>
                      <output>  </ output>

          </ Grid>
       </ Grid>


        <hr style={{ height: 4, width: "100%" }} />

       

      </CardContent>

      <CardActions>
        {showNumToMint &&
         <Input onChange={handleChange} defaultValue={2} type="number" label="number to mint" x={{ mx: 3 }} />
        }
      
        <Button disabled={!canMint} onClick={action} variant="contained">Mint</Button>
      </CardActions>
      
    </Card>
    
  );
}

export default MintNFTCard;