import { Typography } from '@material-ui/core';
import Header from '../Header/Header';
import styles from './Layout.module.css';

export interface ILayout {
  children: any;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header></Header>
      {children}
    </div>
  );
};

export default Layout;
