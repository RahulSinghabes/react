export const Input =  ({
    placeholder,
    type,
    onClick
})=>{ return(
   <span  onClick={onClick} className={"flex cursor-pointer items-center justify-center px-1 py-1 rounded-2xl text-4xl bg-blue-400"}>
      <input type={type} placeholder={placeholder} className={"pl-4 pb-2 bg-blue-400 outline-none "}></input>
   </span>
);
};