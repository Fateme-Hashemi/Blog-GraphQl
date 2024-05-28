import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from "@mui/material"
import { Link } from "react-router-dom"
function CardElement ({title, slug, coverPhoto, author}) {
    return(
        <Card sx={{boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4, alignItems: 'center'}}>
<CardHeader
content="5"
 avatar={<Avatar src={author?.avatar?.url} sx={{marginLeft: 2}} />} 
 title={<Typography component="p" variant="p" color="text.secondary">
    {author?.name}
</Typography>} />
<CardMedia component="img" height="194" image={coverPhoto?.url} alt={slug} />
<CardContent>
    <Typography component="h3" variant="h6" color="text.primary" fontWeight="600" >{title}</Typography>
</CardContent>
<Divider variant="middle" sx={{margin: '10px'}} />
<CardActions>
  <Link to={`/blog/{${slug}}`} style={{textDecoration: "none", width: "100%"}}>
       <Button variant="outlined" size="small" sx={{width: "100%", borderRadius: 3}}>Read Blog</Button>
   </Link>
</CardActions>
        </Card>
    )
}

export default CardElement