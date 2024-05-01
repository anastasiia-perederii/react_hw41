import { Formik, Form, Field, ErrorMessage } from "formik";
import "./App.css"; // Імпортуйте файл CSS для стилізації

function App() {
  return (
    <div className="container">
      <h1>Registration Form</h1>
      <Formik
        initialValues={{
          username: "",
          email: "",
          phone: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Please enter your username";
          }
          if (!values.email) {
            errors.email = "Please enter your email";
          } else if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/.test(values.email)) {
            errors.email = "Please enter a valid email";
          }
          if (!values.phone) {
            errors.phone = "Please enter your phone number";
          } else if (values.phone.replace(/\D/g, "").length !== 12) {
            errors.phone = "Please enter a valid 12-digit phone number";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          console.log("Sending new user...", values);
          resetForm(); // Очистити форму після відправки
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <div className="form-group">
              <Field name="username" placeholder="Username" className="form-control" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div className="form-group">
              <Field type="email" name="email" placeholder="Email" className="form-control" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-group">
              <Field type="tel" name="phone" placeholder="Phone" className="form-control" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
