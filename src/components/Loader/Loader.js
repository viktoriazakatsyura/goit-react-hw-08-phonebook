import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <ThreeDots
        height="40"
        width="40"
        radius="10"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};