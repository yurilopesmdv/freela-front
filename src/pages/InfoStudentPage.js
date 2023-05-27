import styled from "styled-components";
import Header from "../components/Header";

export default function InfoStudentPage() {
    const result = {
        name: 'Jorge de Almeida',
        cpf: '12345678910',
        email: 'jorge@jorge.com',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNOPJnJlEmcKXk8Xus0YhyVmVHsyFsN0qcV8IQ4T4aKg&s',
        turmas: [
            {name: 'Turma 2', entrydate: '2023-03-02', exitdate: '2023-04-05'},
            {name: 'Turma 3', entrydate: '2023-04-06', exitdate: null},
        ]
    }
    return (
        <>
            <Header />
            <Container>
                <h2>Registro de Estudante</h2>
                <img src={result.picture} alt="student"/>
                <h3>Nome Completo: {result.name}</h3>
                <h3>CPF: {result.cpf}</h3>
                <h3>E-mail: {result.email}</h3>
                <h3>Turmas: </h3>
                {result.turmas.map((turma) => {
                    return (
                        <ClassDiv>
                            <h4>{turma.name}</h4>
                            <h3>Data de ingresso: {turma.entrydate}</h3>
                            <h3>Data de saída: {turma.exitdate ? turma.exitdate : '-'}</h3>
                        </ClassDiv>
                    )
                })}
            </Container>
            
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
`