import { Input, Badge } from "@nextui-org/react";
import { FormEvent, useState, MouseEvent } from "react";
import { MdAddBox } from "react-icons/md";

const FormElement = ({
  label,
  placeholder
}: {
  label: string;
  placeholder: string;
}) => {
  const [value, setValue] = useState<string>("");
  const [values, setValues] = useState<Set<string>>(new Set());

  const handleAdd = (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (value) {
      setValues((values) => new Set([...values, ...value.split(",")]));
      setValue("");
    }
  };

  const handleRemove = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setValues((values) => {
      const newValues = new Set(values);
      newValues.delete(e.currentTarget.innerText);
      return newValues;
    });
  };

  return (
    <div>
      <div className="flex gap-2 items-end">
        <Input
          clearable
          label={label}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          width="300px"
        />
        <button type="submit" onClick={handleAdd}>
          <MdAddBox size={40} className="mt-auto cursor-pointer" />
        </button>
      </div>
      <div className="flex mt-2">
        {[...values].map((value) => (
          <Badge variant="flat" key={value} onClick={handleRemove}>
            {value}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default FormElement;
