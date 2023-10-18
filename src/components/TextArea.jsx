import "./TextArea.module.css";

const TextArea = ({
  value,
  onChange,
  type,
  placeholder,
  name,
  className,
  id,
}) => {
  return (
    <textarea
      type={type ? type : "text"}
      value={value} // menyimpan hasil input dari user
      onChange={onChange} // event handler yang dilakukan oleh user
      placeholder={placeholder}
      name={name}
      className={className}
      id={id ? id : ""}
    />
  );
};

export default TextArea;
