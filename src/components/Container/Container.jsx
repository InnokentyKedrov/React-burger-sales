import style from './Container.module.css';
import cn from 'classnames'

const Container = ({ children, className }) => {
  return (
  <div className={cn(style.container, className)}>
    {children}
  </div>
  )
};

export default Container;