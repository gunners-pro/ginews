import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts(): JSX.Element {
  return (
    <>
      <Head>
        <title>Posts | ginews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="##">
            <time>26 de maio de 2021</time>
            <strong>Dia do Trabalho: Emprego e Renda na Vida Financeira</strong>
            <p>
              No mês em que comemoramos o Dia do Trabalho, vamos conversar sobre a
              produção de renda!

              Em maio, comemoramos o Dia do Trabalho. A data tem muitos significados
              e, por isso, proponho uma reflexão sobre o tema.
            </p>
          </a>

          <a href="##">
            <time>26 de maio de 2021</time>
            <strong>Dia do Trabalho: Emprego e Renda na Vida Financeira</strong>
            <p>
              No mês em que comemoramos o Dia do Trabalho, vamos conversar sobre a
              produção de renda!

              Em maio, comemoramos o Dia do Trabalho. A data tem muitos significados
              e, por isso, proponho uma reflexão sobre o tema.
            </p>
          </a>

          <a href="##">
            <time>26 de maio de 2021</time>
            <strong>Dia do Trabalho: Emprego e Renda na Vida Financeira</strong>
            <p>
              No mês em que comemoramos o Dia do Trabalho, vamos conversar sobre a
              produção de renda!

              Em maio, comemoramos o Dia do Trabalho. A data tem muitos significados
              e, por isso, proponho uma reflexão sobre o tema.
            </p>
          </a>

          <a href="##">
            <time>26 de maio de 2021</time>
            <strong>Dia do Trabalho: Emprego e Renda na Vida Financeira</strong>
            <p>
              No mês em que comemoramos o Dia do Trabalho, vamos conversar sobre a
              produção de renda!

              Em maio, comemoramos o Dia do Trabalho. A data tem muitos significados
              e, por isso, proponho uma reflexão sobre o tema.
            </p>
          </a>

          <a href="##">
            <time>26 de maio de 2021</time>
            <strong>Dia do Trabalho: Emprego e Renda na Vida Financeira</strong>
            <p>
              No mês em que comemoramos o Dia do Trabalho, vamos conversar sobre a
              produção de renda!

              Em maio, comemoramos o Dia do Trabalho. A data tem muitos significados
              e, por isso, proponho uma reflexão sobre o tema.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
