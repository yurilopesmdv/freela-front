import styled from "styled-components";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export function EditDeliveryPage() {
    const {id} = useParams()
    const [project, setProject] = useState(null)
    const [grade, setGrade] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/deliveries/${id}`)
        promise.then((res) => setProject(res.data))
        promise.catch((err) => console.log(err.response.data))
        // eslint-disable-next-line
    }, [])

    async function updateGrade(e) {
        e.preventDefault()
        
        const body = {grade}
        console.log(body)
        try {
            await axios.put(`${process.env.REACT_APP_API_URL}/deliveries/update/${id}`, body)
            navigate("/projects")
        }catch(err) {
            console.log(err.message)
        }
    }

    return (
        <>
            <Header />
            {project ? 
            <Container>
                <h2>Registro de Estudante</h2>
                <img src={project.picture} alt="student" />
                <h3>Nome Completo: {project.studentName}</h3>
                <h3>E-mail: {project.email}</h3>
                <h3>URL: </h3>
                <a href={project.projecturl}>{project.projecturl}</a>
                <form onSubmit={updateGrade}>
                    <label for="grade">Selecione uma nota para o projeto:</label>
                    <select if="grade" onChange={e => setGrade(e.target.value)} required>
                        <option value="Abaixo das Expectativas">Abaixo das Expectativas</option>
                        <option value="Dentro das Expectativas">Dentro das Expectativas</option>
                        <option value="Acima das Expectativas">Acima das Expectativas</option>
                    </select>
                    <button type="submit">Atualizar Nota do Projeto</button>
                </form>
            </Container> :
            <Container>
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
            </Container>
            }
        </>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 25px 0;
    gap: 15px;
    img {
        width: 150px;
        height: 150px;
        border-radius: 100%;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        select {
            width: 30vw;
            height: 40px;
        }
        button {
            width: 50%;
            height: 50px;
            margin: auto;
        }
    }
    a {
        text-decoration: none;
        font-size: 20px;
    }
    
`

