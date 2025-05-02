import './MyForm.css'

import {useState} from 'react'

const MyForm = ({user}) => {

  //6 - controlled inputs
  //3- gerenciamento de dados

  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')

  const [bio, setBio] = useState(user ? user.bio : '');
  const [role, setRole] = useState(user ? user.role : '');

  const handleName = (e) =>{
    setName(e.target.value)
  }



  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("Enviando o formulário")
    console.log(name);
    console.log(email);
    console.log(bio);
    console.log(bio);

    //7 - limpar form

    setName("");
    setEmail("");
    setBio("");
  
  }


  return (
    <div>   
    {/*5- Envio de form */}
    {/*1- Criacao de form*/}
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" placeholder='Digite o seu nome'onChange={handleName} value={name}/>
        </div>
        <label>
          {/*Simplificacao de manipulacao */}
          <span>E-mail:</span>
          <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value) } value={email}/>
        </label>
        <label >
          <span>Bio:</span>
        </label>
        <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>

        {/*9 -  select */}
        <label>
          <span>Função</span>
        </label>
        <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
          <option value="user">Usuário</option>
          <option value="editor">Eidtor</option>
          <option value="admin">Administrador</option>
        </select>
        <input type="submit" value="Enviar" />
    </form></div>
  )
}

export default MyForm