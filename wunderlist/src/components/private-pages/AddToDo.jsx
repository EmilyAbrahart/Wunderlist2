import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const AddTodoForm = props => {
  const { values } = props;
  return (
    <div>
      <h3>Add Task</h3>
      <Form>
        <div>
          <Field type="text" name="item" placeholder="Title" />
        </div>
        <div>
          <Field type="text" name="description" placeholder="Description" />
        </div>
        <div>
          Catergory:
          <Field component="select" name="catergory" value={values.catergory}>
            {props.catergories.map(catergory => (
              <option key={catergory} name={catergory}>
                {catergory}
              </option>
            ))}
          </Field>
        </div>

        <div>
          Priority:
          <Field component="select" name="priority" value={values.priority}>
            {props.priorities.map(priority => (
              <option key={priority} name={priority}>
                {priority}
              </option>
            ))}
          </Field>
        </div>

        <button type="submit">Add</button>
        <button type="reset">Clear</button>
      </Form>
    </div>
  );
};


const addTodoFormValidationSchema = Yup.object().shape({
  item: Yup.string()
    .max(128, "Item must not exceed 128 characters.")
    .required("Item is required."),
  description: Yup.string()
});

const FormikAddTodoForm = withFormik({
  mapPropsToValues() {
    return {
      item: "",
      description: "",
      priority: "2",
      catergory: "General"
    };
  },
  validationSchema: addTodoFormValidationSchema,
  handleSubmit(values, { props, resetForm }) {
    const todoObj = {
        item: values.item,
        description: JSON.stringify([values.description, values.catergory]),
        priority: values.priority
    };
    props.addTodo(todoObj);
    resetForm();
  }
})(AddTodoForm);

export default FormikAddTodoForm;
