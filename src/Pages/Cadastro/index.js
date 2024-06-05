import React, { useState } from "react";
import { Container, Form, Logo, FormContainer, ToggleButton, OutlineUser } from "./styles";
import logo from '../../assets/logo.png';
import Input from '../../Components/Input/index';
import Botao from '../../Components/Botao/index';
import { validarEmail, validarSenha } from "../../Utils/validadores";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AiOutlineUser } from "react-icons/ai";
import { NavLink, useNavigate } from 'react-router-dom';

const Cadastro = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ email: '', senha: '', confirmarSenha: '' });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        if (form.senha !== form.confirmarSenha) {
            alert('As senhas não coincidem');
            return;
        }

        setLoading(true);

     
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        
        const usuarioExistente = usuarios.find(user => user.email === form.email);
        if (usuarioExistente) {
            alert('Usuário já cadastrado');
            setLoading(false);
            return;
        }

        
        usuarios.push({ email: form.email, senha: form.senha });

         
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Usuário cadastrado com sucesso');
        setLoading(false);
        navigate('/home');
    };

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const isValidInput = () => {
        return validarEmail(form.email) && validarSenha(form.senha);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container>
            <Logo src={logo} alt="Logo" />
            <Form onSubmit={handleSubmit}>
                <FormContainer>
                    <Input
                        name="email"
                        placeholder="Digite seu e-mail"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                    />
                    <OutlineUser type="button" >
                        <AiOutlineUser />
                    </OutlineUser>
                </FormContainer>
                <FormContainer>
                    <Input
                        name="senha"
                        placeholder="Digite sua senha"
                        value={form.senha}
                        onChange={handleChange}
                        type={showPassword ? "text" : "password"}
                    />
                    <ToggleButton type="button" onClick={handleTogglePassword}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </ToggleButton>
                </FormContainer>
                <FormContainer>
                    <Input
                        name="confirmarSenha"
                        placeholder="Repita sua senha"
                        value={form.confirmarSenha}
                        onChange={handleChange}
                        type={showPassword ? "text" : "password"}
                    />
                    <ToggleButton type="button" onClick={handleTogglePassword}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </ToggleButton>
                </FormContainer>
                <Botao
                    type='submit'
                    text="Cadastrar"
                    disabled={loading || !isValidInput()}
                />
            </Form>
        </Container>
    );
};

export default Cadastro;
