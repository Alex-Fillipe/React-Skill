import React, { useState, useEffect } from "react";
import { Container, Form, Logo, CheckboxContainer, FormContainer, ToggleButton, OutlineUser } from "./styles";
import logo from '../../assets/logo.png';
import Input from '../../Components/Input/index';
import Botao from '../../Components/Botao/index';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AiOutlineUser } from "react-icons/ai";

import { validarEmail, validarSenha } from "../../Utils/validadores";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ email: '', senha: '' });
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const savedEmail = localStorage.getItem('savedEmail');
        const savedPassword = localStorage.getItem('savedPassword');

        if (savedEmail && savedPassword) {
            setForm({ email: savedEmail, senha: savedPassword });
            setRememberMe(true);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        const usuarioExistente = usuarios.find(user => user.email === form.email && user.senha === form.senha);
        if (usuarioExistente) {
            alert("Usuário logado com sucesso");
            localStorage.setItem('isAuthenticated', 'true');

            if (rememberMe) {
                localStorage.setItem('savedEmail', form.email);
                localStorage.setItem('savedPassword', form.senha);
            } else {
                localStorage.removeItem('savedEmail');
                localStorage.removeItem('savedPassword');
            }

            navigate('/home');
        } else {
            alert("Login falhou");
        }

        setLoading(false);
    };

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const isValidInput = () => {
        return validarEmail(form.email) && validarSenha(form.senha);
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
                <CheckboxContainer>
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                    />
                    <label>Gravar Senha</label>
                </CheckboxContainer>
                <Botao
                    type='submit'
                    text="Entrar"
                    className="primary"
                    disabled={loading || !isValidInput()}
                />
                <div>
                    <p>Não possui conta?</p>
                    <NavLink to="cadastrar">Cadastrar-se</NavLink>
                </div>
            </Form>
        </Container>
    );
};

export default Login;
