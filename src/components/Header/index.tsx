/* eslint-disable jsx-a11y/anchor-is-valid */
import { SignInButton } from '../SignInButton';
import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';

export function Header(): JSX.Element {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h2>gi.news</h2>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
