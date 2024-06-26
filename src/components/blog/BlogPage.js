import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { GET_POST_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CommentForm from "../comment/CommentForm";
import Comment from "../comment/Comment";


function BlogPage() {
    const {slug} = useParams();
    const navigate = useNavigate();
    const {data, loading, error} = useQuery(GET_POST_INFO, {variables: {slug}})
    if (loading) return <Loader />
if (error) return null;
    return (
    <Container maxWidth='lg'>
<Grid container>
<Grid item xs={12} mt={9} display='flex' justifyContent='space-between'>
<Typography component='h2' variant="h4" fontWeight='700' color='primary'>
{data.post.title}
</Typography>
<ArrowForwardIcon color="primary" fontWeight='700' onClick={()=> navigate(-1)} sx={{cursor: 'pointer'}}  />
</Grid>
<Grid item xs={12} mt={6}>
    <img src={data.post.coverPhoto.url} alt={data.post.title} width='100%' style={{borderRadius: '15px'}} />
</Grid>
<Grid item xs={12} mt={7} display='flex' alignItems='center'>
    {data?.post?.author?.avatar?.url && (
        <Avatar src={data?.post?.author?.avatar?.url} sx={{width: '80px', height: '80px', marginRight: '15px'}} />
    )}

<Box component='div' >
<Typography component='p' variant="h5" fontWeight={700} >
{data.post.author.name}
</Typography>
<Typography component='p' variant="p" color='text.secondary' >
{data.post.author.filed}
</Typography>
</Box>

</Grid>
<Grid item xs={12} mt={5}>
<div dangerouslySetInnerHTML={{__html:data.post.content.html}}>

</div>
</Grid>
<Grid item xs={12}>
<CommentForm slug={slug} />
</Grid>
<Grid item  xs={12}>
    <Comment slug={slug} />
</Grid>
</Grid>
</Container>
    )
}

export default BlogPage;