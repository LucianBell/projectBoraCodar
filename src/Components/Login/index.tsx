import styles from "./login.module.scss";
import imgLogin from "../../assets/imgLogin.png";

export default function Login() {
  return (
    <>
      <h1 className={styles.loginHeader}>Acesse a plataforma</h1>
      <p className={styles.loginParagraph}>
        Faça login ou registre-se para começar a construir <br /> seus projetos
        ainda hoje.
      </p>
      <p className={styles.loginParagraphInfo}>E-mail</p>
      <input
        className={styles.loginInput}
        type="Email"
        placeholder="Digite seu e-mail"
      />
      <div className={styles.loginDivPass}>
        <p className={styles.loginParagraphInfo}>Senha</p>
        <a href="#" className={styles.loginForgotPass}>
          Esqueceu a senha?
        </a>
      </div>
      <input
        className={styles.loginInputPass}
        type="password"
        placeholder="Digite sua senha"
      />
      <a className={styles.loginButton} href="">
        Entrar
      </a>
      <p className={styles.endParagraph}>
        Ainda não tem uma conta?{" "}
        <a href="www.google.com" className={styles.registerA}>
          Inscreva-se
        </a>
      </p>
    </>
  );
}
