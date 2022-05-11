import { Form } from "react-bootstrap";

const CategorySelect = (props) => {
  const options = [
    {
      label: "Entertainment",
      value: "Entertainment",
    },
    {
      label: "Work",
      value: "Work",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];
  const categoryHandler = (e) => {
    const selectedCategory = e.target.value;
    // console.log(selectedCategory);
    props.liftedCategory(selectedCategory);
  };
  return (
    <div>
      <Form className="mb-5 mt-5">
        <h4>Select a category</h4>
        <Form.Select
          onChange={categoryHandler}
          aria-label="Default select example"
        >
          {options.map((option) => {
            return <option value={option.value}>{option.label}</option>;
          })}
        </Form.Select>
      </Form>
    </div>
  );
};
export default CategorySelect;
