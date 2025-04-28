import React from 'react'

const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <ul>
            <li>nome: {nome}</li>
            <li>idade: {idade}</li>
            <li>profissao: {profissao}</li>
            {idade >= 18 ? <li>Pode tirar carteira de habilitação</li> : <li>Não pode tirar carteira de habilitação</li>}
        </ul>
    </div>
  )
}

export default UserDetails