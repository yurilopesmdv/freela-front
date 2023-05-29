import styled from "styled-components";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DeliveryProjectPage() {
    const [classes, setClasses] = useState([])
    const [students, setStudents] = useState([])
    const [projects, setProjects] = useState([])


    const [turm, setTurm] = useState(0)
    const [id, setId] = useState(0)
    const [project, setProject] = useState(0)
    const [link, setLink] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/classes`)
        promise.then((res) => setClasses([{},...res.data]))
        promise.catch((err) => console.log(err.response.data))

        const secondPromise = axios.get(`${process.env.REACT_APP_API_URL}/students`)
        secondPromise.then((res) => setStudents(res.data))
        secondPromise.catch((err) => console.log(err.response.data))

        const thirdPromise = axios.get(`${process.env.REACT_APP_API_URL}/projects`)
        thirdPromise.then((res) => setProjects([{},...res.data]))
        thirdPromise.catch((err) => console.log(err.response.data))
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        const body = {projectId: Number(project), classId: Number(turm), projectUrl: link, userId: Number(id)}
        console.log(body)
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/projects`, body)
            navigate('/projects')
        }catch(err) {
            console.log(err.message)
        }
    }
    return (
        <>
            <Header />
            <Content>
                <h2>Entrega de Projeto</h2>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label for="turm">Selecione sua Turma: </label>
                        <select id="turm" value={turm} onChange={e => setTurm(e.target.value)} required>
                            {classes.map((turm) => <option value={turm.id}>{turm.class}</option>)}
                        </select>
                        <label for="name">Selecione seu nome:</label>
                        <select id="name" value={id} onChange={e => setId(e.target.value)} required>
                            {students.filter((s) => Number(s.classid) === Number(turm))
                            .map((student) => <option value={student.id}>{student.name}</option>)}
                        </select>
                        <label for="project">Selecione o Projeto:</label>
                        <select id="project" value={project} onChange={e => setProject(e.target.value)} required>
                            {projects.map((p) => <option value={p.id}>{p.projectname}</option>)}
                        </select>
                        <label for="link">Link do Projeto: </label>
                        <input type="text" name="link" id="link" value={link} onChange={e => setLink(e.target.value)} required/>
                        <button type="submit">ENTREGAR</button>
                    </form>
                </div>

            </Content>
        </>
    )
}
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
    gap: 25px;
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 60%;
        padding: 15px;
        border: solid 1px #606060;
        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
            height: 100%;
            input {
                height: 20px;
            }
            select {
                height: 30px;
            }
            button {
                width: 50%;
                height: 50px;
                margin: auto;
            }
        }
    }
`