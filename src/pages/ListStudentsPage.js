import styled from "styled-components";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ListStudentsPage() {
    const classes = [
        {id: 1, name: 'Turma 1'},
        {id: 2, name: 'Turma 2'},
        {id: 3, name: 'Turma 3'},
        {id: 4, name: 'Turma 4'},
    ]
    const [students, setStudents] = useState([])
    useEffect(() => {
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/students`)
        promise.then((res) => setStudents(res.data))
        promise.catch((err) => console.log(err.response.data))
    }, [])
    const [classSelected, setClassSelected] = useState(1)
    const navigate = useNavigate()
    function loadStudentPage(id) {
        navigate(`students/${id}`)
    }
    return (
        <>
            <Header />
            <Container>
                <SideBarClass>
                    {classes.map((c, i) => <Filter key={i} onClick={() => setClassSelected(c.id)} selected={classSelected === c.id ? true : false} >{c.name}</Filter>)}
                </SideBarClass>
                <Content>
                    <h2>Estudantes da Turma {classSelected}</h2>
                    {students.filter((s) => s.classid === classSelected).map((s,i) => {
                        return (
                            <StudentCard key={i} onClick={() => loadStudentPage(s.id)}>
                                <img src={s.picture} alt={s.name}/>
                                <h4>{s.name}</h4>
                            </StudentCard>
                        )
                    })}
                </Content>
            </Container>
        </>
    )
}
const SideBarClass = styled.div`
    width: 7%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 40px;
    border-right: solid 1px #606060;
    gap: 15px;
`
const Container = styled.div`
    display: flex;
`

const Filter = styled.h3`
    cursor: pointer;
    border-bottom: ${(props) => (props.selected === true ? "solid 1px #696969" : 'none')};
    color: ${(props) => (props.selected === true ? 'black' : '#606060')};
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 25px;
    padding: 30px;
`

const StudentCard = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 15px;
    width: 80vw;
    height: 50px;
    border: solid 1px #696969;
    gap: 0 15px;
    img {
        width: 25px;
        height: 25px;
        border-radius: 100%;
    }
`
