
import { 
        Card,
        CardHeader,
        CardMedia,
        CardActions,
        Avatar,
        IconButton,
    } from '@mui/material'

    import { useNavigate } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'






const MemberCard = ({ id, name, age, sex, inheritant, admissionDate, contact, adress}) => {
const navigate = useNavigate() 

const handleMemberCardClick = () => {
  navigate(`/memberprofile/${id}`)
 
}
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader 
        avatar={
          <Avatar sx={ 'backgroundColor: primary' } aria-label="recipe">
            I
          </Avatar>
        }
       
        title= { name }
        subheader={ `Admitido em: ${admissionDate}`} onClick={()=> handleMemberCardClick()}
      />
      <CardMedia
        component="img"
        height="194"
        
      />
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      
    </Card>
  );
}

export default MemberCard