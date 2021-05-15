import styles from './styles.module.scss';

export function Header(): JSX.Element {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h2>gi.news</h2>
        <nav>
          <a className={styles.active} href="##">Home</a>
          <a href="#33">Posts</a>
        </nav>
      </div>
    </header>
  );
}
