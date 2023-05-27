import styled from "styled-components";
import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterStudentPage() {
    const classes = [
        {id: 1, name: 'Turma 1'},
        {id: 2, name: 'Turma 2'},
        {id: 3, name: 'Turma 3'},
        {id: 4, name: 'Turma 4'},
    ]
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [picture, setPicture] = useState("")
    const [turm, setTurm] = useState("")
    const navigate = useNavigate()
    
    async function handleSubmit(e) {
        e.preventDefault()
        const body = {name, cpf, email, picture, class: turm}
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/register`, body)
            navigate('/')
        }catch(err) {
            console.log(err.message)
    }
    }
    return (
        <>
            <Header />
            <Content>
                <h2>Cadastro de Estudante</h2>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label for="name">Nome: </label>
                        <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Nome" required/>
                        <label for="cpf">CPF: </label>
                        <input type="text" name="cpf" id="cpf" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="12345678910" required/>
                        <label for="email">E-mail: </label>
                        <input type="text" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="exemplo@exemplo.com" required/>
                        <label for="pic">Foto: </label>
                        <input type="text" name="foto" id="pic" value={picture} onChange={e => setPicture(e.target.value)} placeholder="https://www.globo.com" required/>
                        <label for="turm">Turma: </label>
                        <select id="turm" value={turm} onChange={e => setTurm(e.target.value)} required>
                            {classes.map((turm) => <option value={turm.id}>{turm.name}</option>)}
                        </select>
                        <button type="submit">CADASTRAR</button>
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