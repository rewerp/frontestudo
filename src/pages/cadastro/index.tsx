import Botao from '../../components/botao';
import Input from '../../components/input';
import styles from './styles.module.css';

const Cadastro = () => {
  return (
    <div className={styles.mainContainer} >
      <main className={styles.formContainer} >
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Botao titulo="Salvar" />
      </main>
    </div>
  );
};

export default Cadastro;