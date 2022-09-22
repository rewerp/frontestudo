import styles from './styles.module.css';

type BotaoProps = {
  titulo: string;
}

const Botao = ({ titulo }: BotaoProps) => {
  return (
    <button className={styles.botao} >
      {titulo}
    </button>
  );
};

export default Botao;