import { useState, useEffect } from 'react'
import Axios from 'axios'
import MemberCard from '../Components/MemberCard'


const Members = () =>{
    const [ members, setMembers ] = useState([])


    useEffect(()=> {
        Axios.get('http://localhost:2020/members')
            .then((members) => {
                const { data } =members
                console.log(data)

                setMembers(data)
            })
    }, [])

    return (
        <>
            <h3 sx={'margin: auto'}>Membros do Grupo</h3>
            {  
                members.map(item => (
                <MemberCard 
                    name={item.name}
                    admissionDate={item.admissionDate}
                    age={item.age}
                    sex={item.sex}
                    inheritant={item.inheritant}
                    contact={item.contacts}
                    adress={item.adress}
                />))
            }  
        </>    
    )
}

export default Members