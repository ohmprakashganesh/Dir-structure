

 export const BaseField = ({label,required, error, children}) => {
  return (
    <div>
       <label className="text-xs font-light  ">{label} {required && <span>*</span> }</label>
       {children}
       {error && <p className='text-red-400 text-xs tracking-tight'>{error}</p>}
    </div>
  )
}
export default BaseField;