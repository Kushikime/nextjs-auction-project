import styles from './BaseTemplate.module.css';

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  const onClickTemplate = () => {
    console.log('TEMPLATE!!!');
  };
  return (
    <div onClick={onClickTemplate} className={styles.container}>
      {sampleTextProp}
    </div>
  );
};

export default BaseTemplate;
