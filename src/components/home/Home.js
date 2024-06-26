import { Container, Grid, Typography } from "@mui/material";
import Authors from "../authors/Authors";
import Blog from "../blog/Blog";


function Home() {

  return (
   
   <Container maxWidth='lg'>
<Grid container spacing={2} padding={3}>
<Grid item xs={12} md={3} mt={4}>
<Typography component='h3' variant="h5" mb={3} fontWeight={700}>Authors</Typography>
<Authors />

</Grid>
<Grid item xs={12} md={9} mt={4}>
<Typography component='h3' variant="h5" mb={3} fontWeight={700}>Blog</Typography>
<Blog />
</Grid>
</Grid>
   </Container>
  );
}

export default Home;
