export function Square(props) {
  return (
    <button 
    className="float-left text-xl font-bold leading-8 h-[34px] -m-px -mt-px p-0 text-center w-[34px] border-[.5px] border-gray-400 focus:outline-none"
    onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}