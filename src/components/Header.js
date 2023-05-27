import styled from "styled-components"
import {Link} from 'react-router-dom'

export default function Header() {
    const array = [
        {title:'Cadastro de Estudante', link: '/register'}, 
        {title:'Todos os Estudantes', link: '/'},
        {title:'Entrega de Projeto', link: '/delivery'},
        {title:'Listar Projetos', link: '/projects'}
    ]
    
    return (
        <HeaderContainer>
            <h1>Drovem</h1>
            {array.map((page, index) => <Link key={index} to={page.link}>{page.title}</Link>)}
            <div></div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 5px 15px;
    border: solid 1px #606060;
    h1 {
        font-size: 20px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: #666666;
    }
    a {
        font-size: 12px;
        font-family: 'Courier New', Courier, monospace;
        color: #606060;
        text-decoration: none;
    }
`

