import Header from '../Header/Header';

export interface ILayout {
  children: any;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
};

export default Layout;
