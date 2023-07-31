import { React, useState, useEffect } from 'react'
import Axios from 'axios'
import MemberCard from '../Components/MemberCard'
import { Grid } from '@mui/material'


const Members = () =>{
    const [ members, setMembers ] = useState([])


    useEffect(()=> {
        Axios.get('http://localhost:2020/members')
            .then((response) => {
                if(response.status === 200){
                    const { data } = response

                    setMembers(data)
                }else{
                    
                    React.alert(response.data)
                }
                
            })
    }, [])

    


    return (
        <>
            <h3 style={{textAlign: 'center'}}>Membros do Grupo</h3>
            <Grid container spacing={4}>
               
                {  
                    members.map(item => (
                    <Grid item xs={12} md={3}>    
                        <MemberCard 
                            id={item.id}
                            name={item.name}
                            admissionDate={item.admissionDate}
                            age={item.age}
                            sex={item.sex}
                            inheritant={item.inheritant}
                            contact={item.contacts}
                            adress={item.adress}
                        />
                    </Grid>    
                    ))
                } 
            </Grid> 
        </>    
    )
}

export default Members