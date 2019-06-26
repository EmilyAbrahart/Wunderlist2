import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { FlexFunc, Input, Button } from "./../../styles/reusables";
import moment from "moment";

const UpdateFormDiv = styled.div`
  width: 100%;
  ${FlexFunc("column", "center", "flex-start")};
  display: ${props => (props.isUpdating ? "flex" : "none")};
  position: absolute;
  background: white;

  form {
    width: 100%;
    ${FlexFunc("row", "flex-start", "flex-start")}

    div {
      ${FlexFunc("row", "center", "center")};
      height: 1.5rem;
    }
  }
`;

const FormButtonContainer = styled.div`
  width: 15%;
  opacity: 0%;
`;

const FormButton = styled.button`
  ${Button("white", "black")};
`;

const FormPriorityContainer = styled.div`
  width: 5%;
  select {
    ${Input("95%")}
  }
`;

const FormInfoContainer = styled.div`
  width: 50%;

  input {
    ${Input("45%")};
    margin: 0 0.5rem;
  }
`;

const FormCatergoryContainer = styled.div`
  width: 15%;
  select {
    ${Input("95%")}
  }
`;

const FormDateContainer = styled.div`
  width: 15%;
  input {
    ${Input("95%")}
  }
`;

const UpdateTodoForm = props => {
  const { values } = props;
  return (
    <UpdateFormDiv isUpdating={props.isUpdating}>
      <Form>
        <FormButtonContainer>
          <FormButton type="button" onClick={() => props.toggleUpdate()}>
            Cancel
          </FormButton>
          <FormButton type="submit">Submit</FormButton>
        </FormButtonContainer>
        <FormPriorityContainer>
          <Field component="select" name="priority" value={values.priority}>
            {props.priorities.map(priority => (
              <option key={priority} name={priority}>
                {priority}
              </option>
            ))}
          </Field>
        </FormPriorityContainer>
        <FormInfoContainer>
          <Field type="text" name="item" placeholder="Title" />
          <Field type="text" name="description" placeholder="Description" />
        </FormInfoContainer>
        <FormCatergoryContainer>
          <Field component="select" name="catergory" value={values.catergory}>
            {props.catergories.map(catergory => (
              <option key={catergory} name={catergory}>
                {catergory}
              </option>
            ))}
          </Field>
        </FormCatergoryContainer>
        <FormDateContainer>
          <Field type="date" name="due_date" value={values.due_date} />
        </FormDateContainer>
      </Form>
    </UpdateFormDiv>
  );
};

const updateTodoFormValidationSchema = Yup.object().shape({
  item: Yup.string()
    .max(128, "Item must not exceed 128 characters.")
    .required("Item is required."),
  description: Yup.string()
});

const FormikUpdateTodoForm = withFormik({
  mapPropsToValues(props) {
    return {
      item: props.item,
      description: JSON.parse(props.description)[0],
      priority: props.priority,
      catergory: JSON.parse(props.description)[1],
      due_date: moment().format("YYYY-MM-DD")
    };
  },
  validationSchema: updateTodoFormValidationSchema,
  handleSubmit(values, { props, resetForm }) {
    const todoObj = {
      item: values.item,
      description: JSON.stringify([values.description, values.catergory]),
      priority: values.priority,
      due_date: values.due_date
    };
    props.updateTodo(props.todoIndex, props.id, todoObj);
    resetForm();
    props.toggleUpdate();
   
  }
})(UpdateTodoForm);

export default FormikUpdateTodoForm;
