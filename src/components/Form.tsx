import FormElement from "./FormElement";

const Form = () => {
  return (
    <form className="grid gap-4 grid-cols-2">
      <FormElement
        label="Keywords in title"
        placeholder="software, developer, nurse, physician, ..."
      />
      <FormElement
        label="Keywords not in title"
        placeholder="software, developer, nurse, physician, ..."
      />
      <FormElement
        label="Companies included"
        placeholder="software, developer, nurse, physician, ..."
      />
      <FormElement
        label="Companies excluded"
        placeholder="software, developer, nurse, physician, ..."
      />
      <FormElement
        label="Locations included"
        placeholder="software, developer, nurse, physician, ..."
      />
      <FormElement
        label="Locations excluded"
        placeholder="software, developer, nurse, physician, ..."
      />
      <FormElement
        label="Keywords in job description"
        placeholder="software, developer, nurse, physician, ..."
      />
      <FormElement
        label="Keywords not in job description"
        placeholder="software, developer, nurse, physician, ..."
      />
    </form>
  );
};

export default Form;
