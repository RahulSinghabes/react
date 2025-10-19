export const Button =  ({
    disabled,
    children,
    onClick
})=>{ return(
   <span  onClick={onClick} className={`inline-flex cursor-pointer text-center items-center justify-center px-47 py-3 rounded-2xl ${disabled ? "bg-blue-500": "bg-green-400"}`}>
      {children}
   </span>
);
};