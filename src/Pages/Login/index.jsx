import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../../services/api";



const Input = ({ name, type, placeholder, label, handle }) => {
  return (
    <fieldset className="flex flex-col" >
      <label htmlFor={name} className="text-sm text-gray-500 mb-2 font-bold">
        {label}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        onChange={(e) => handle(e.target.value)}
        className=" bg-slate-200 py-3 px-2  border border-gray-700 rounded-lg focus:outline focus:outline-1"
      />
    </fieldset>
  );
};

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
     
      const { data } = await api().post("/auth/login", { email: email, password: password });
      console.log(data)
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("user", JSON.stringify(data.user));
      alert("Sucess Login")
      setIsAuth(true);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }
  const handleEmail = (e) => {
    setEmail(e);
  }
  const handlePassword = (e) => {
    setPassword(e);
  }
  useEffect(()=>{
    var token = localStorage.getItem("token");
    if(token){
      setIsAuth(true)
    }
  },[isAuth])

  return (
    <div className="h-screen flex justify-center items-center">
      {isAuth && (
          <Navigate to="/dashboard" replace={true} />
        )}
      <header className="absolute top-2">
        <img src="/logoguia.svg" className="w-32 md:w-40" />
      </header>
      <main className="container max-w-md py-16 flex flex-col items-center space-y-4 shadow-lg rounded-sm">
        <h2 className="text-3xl font-bold text-primary">Login</h2>
        <form className="w-full px-8 space-y-2" onSubmit={handleLogin}>
          <Input
            label="Usuário"
            name="email"
            type="text"
            placeholder="Digite seu Email"
            handle={handleEmail}
          />
          <Input
            label="Senha"
            name="senha"
            type="password"
            placeholder="Digite sua senha"
            handle={handlePassword}
          />
          <div className="flex justify-center items-center pt-3">
            <button className="block w-full text-center text-white bg-primary px-6 py-3 rounded-lg">
              Entrar
            </button>
            <a href="/" className="block w-full text-center text-primary border border-primary px-6 py-3 rounded-lg">
              Cancelar
            </a>

          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
