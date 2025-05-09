

export default function Input({label, id, ...props}){
    return <p className="flex flex-col gap-2">
        <label htmlFor={id} 
        className="cursor-pointer text-base font-light lg:text-lg">
            {label}
        </label>
        <input 
        className="border-transparent border-2 p-2 w-full max-w-[20rem] hover:border-browny focus:border-browny
        transition duration-300" 
        id={id} name={id} {...props} required />
    </p>
}