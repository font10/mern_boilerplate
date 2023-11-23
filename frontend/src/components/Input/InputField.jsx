import PropTypes from "prop-types";

export const InputField = ({ id, label, name, placeholder, defaultValue, type, error, register }) => (
  <div className="flex flex-col mt-5" key={id}>              
    <label htmlFor={name} className="text-sm text-gray-500 font-medium">{label}</label> 
    <input type={type} defaultValue={defaultValue} name={name} placeholder={placeholder} className="py-2.5 rounded-md px-5 border-2 border-gray-200 border-opacity-80" {...register(name)} />
    <p className="text-red-500 text-sm font-medium">{error}</p>            
  </div>
);

InputField.propTypes = {
  error: PropTypes.string,
  register: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  type: PropTypes.string.isRequired,
};
