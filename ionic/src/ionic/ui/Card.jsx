import classNames from 'classnames';

const Card = ({ children, className, ...props }) => (
   <div {...props} className={classNames('max-w-xl', className)}>
      <div className="shadow-md rounded-xl">{children}</div>
   </div>
);

export default Card;
