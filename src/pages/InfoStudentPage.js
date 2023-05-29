import styled from "styled-components";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots} from "react-loader-spinner";

export default function InfoStudentPage() {
    const { id } = useParams()
    const [student, setStudent] = useState(null)

    useEffect(() => {
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/students/${id}`)
        promise.then((res) => setStudent(res.data))
        promise.catch((err) => console.log(err.response.data))
        // eslint-disable-next-line
    }, [id])
    return (
        <>
            <Header />
            {student ? <Container>
                <h2>Registro de Estudante</h2>
                <img src={student.picture} alt="student" />
                <h3>Nome Completo: {student.name}</h3>
                <h3>CPF: {student.cpf}</h3>
                <h3>E-mail: {student.email}</h3>
                <h3>Turmas: </h3>
                {student.turmas.map((turma, index) => {
                    return (
                        <ClassDiv key={index}>
                            <h4>{turma.name}</h4>
                            <h3>Data de ingresso: {turma.entrydate.split('T')[0]}</h3>
                            <h3>Data de saída: {turma.exitdate ? turma.exitdate.split('T')[0] : '-'}</h3>
                        </ClassDiv>
                    )
                })}
            </Container> : <Container>
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#696969"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </Container>}


        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100vw;
    height: 100vh;
    padding: 25px 40%;
    gap: 15px;
    img {
        margin: 2vw 0 2vw 8vh;
        width: 150px;
        height: 150px;
        border-radius: 100%;
    }
`

const ClassDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
    height: 50px;
    border: solid 1px #696969;
    margin-left: 10px;
    padding: 5px;
`