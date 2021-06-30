import './styles.css';
import logo from '../../assets/images/logo.svg';
import iconGoogle from '../../assets/images/icon-google.svg'
import { FaRegCheckCircle } from 'react-icons/fa'
import { Button } from '../../components/Button'
import { useState } from 'react';

export function Index() {
  const [lembrarUsuario, setLembrarUsuario] = useState(false);

  async function rememberUser() {
    if(lembrarUsuario === false){
      setLembrarUsuario(true);
      console.log(lembrarUsuario)
    } else {
      setLembrarUsuario(false);
      console.log(lembrarUsuario)
    }    
  }

  return (
    <div className="container">
      <aside>
        <div className="conteudo-aside">
          <img src={logo} alt="Melhor Preço" />
          <div className="texto-aside">
            <h1>O seu melhor preço nunca foi tão fácil!</h1>
          </div>
        </div>
      </aside>
      <main>
        <div className="login">
          <button className="criar-conta"> <img src={iconGoogle} alt="Google Account"/> Entrar com uma conta Google </button>
          <div className="separador">ou entre com sua conta</div>
          <form action="/">
          <input type="text" name="usuario" id="usuario" placeholder="Digite seu usuário"/>
          <input type="password" name="senha" id="senha" placeholder="Digite sua senha"/>
          <div onClick={rememberUser} className={lembrarUsuario ? "lembrar-usuario-ativado" : "lembrar-usuario"}>
            <FaRegCheckCircle/> Lembrar Usuário
          </div>
          <Button>Entrar</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
