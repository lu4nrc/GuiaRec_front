import arrowRight from '../assets/arrowRight.svg'
const Button = (props) => {





const base = `flex justify-center items-center px-4 py-3 text-white`
const base2 = `flex justify-center items-center px-3 py-2 text-white`
const btnDefault = `${base} bg-primary rounded-lg`
const btnNone = `flex justify-center items-center pr-4 py-3 text-primary `
const btnBorder = `${base2} text-primary border-primary border-solid border-2 rounded-full`

const typeBtn = () => props.type === 'none' ? btnNone : props.type === 'border' ? btnBorder : btnDefault
  return (
    <div className={`${typeBtn()}`}>
      <a className="font-poppins text-xs sm:text-lg" href={props.link}>
        {props.title}
      </a> 
      <img className={props.icon ? 'ml-3': ''} src={props.icon === 'arrowRight' ? arrowRight : '' }/>
    </div>
  );
};

export default Button;
