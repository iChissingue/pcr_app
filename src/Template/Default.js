import Container from '@mui/material/Container';


import Header from "../Partials/Header";



const Default = ({children}) =>{


return (
    <>
        <Header/>
        <Container sx={ 'margin: 10px 100px'}>
            {children}
        </Container>
    </>
)}


export default Default