import { Button, Card, CardActions, CardContent, Input, Box, Typography } from '@mui/material';
import Image from 'next/image';

const MintNFTCard = ({title, description, action, canMint, showNumToMint, setNumToMint, mintStatus}) => {
  const handleChange = (event) => {
    const numToMint = parseInt(event.target.value);
    setNumToMint(numToMint);
  };

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Image alt="sample NFT" src='/sample-nft.png' width={250} height={250}/>
        {mintStatus ? <p>Success! Check your wallet in a few minutes.</p> : <p>{description}</p>}
      </CardContent>
      <CardActions>
        {showNumToMint &&
          <Input onChange={handleChange} defaultValue={3} type="range" name="hi" id="good"  label="number to mint"
          min="0" max="5" step="1"
            sx={{mx: 3}}
          />
        && <Box></Box>
          }
        <Button disabled={!canMint} onClick={action} variant="contained">Mint</Button>
      </CardActions>
    </Card>
    
  );
}

export default MintNFTCard;