import { Formik, Field, Form } from "formik";
const Career = (props) => {
  return (
    <div className="intro">
      <div className="col-md-5 intro-text main">
        <h1>
          {props.data ? props.data.title : "Loading"}
          <span></span>
        </h1>
        <Formik
          initialValues={{
            Name: "",
            fieldOfExperience: "",
            phoneNumber: "",
            email: "",
          }}
          onSubmit={async (values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <div className="form-group">
            <div className="form-item">
              <label htmlFor="Name">Name:</label>
              <Field id="Name" name="Name" placeholder="" />
            </div>

            <div className="form-item">
              <label htmlFor="fieldOfExperience">FieldOfExperience:</label>
              <Field
                id="fieldOfExperience"
                name="fieldOfExperience"
                placeholder=""
              />
            </div>

            <div className="form-item">
              <label htmlFor="phoneNumber">PhoneNumber:</label>
              <Field id="phoneNumber" name="phoneNumber" placeholder="" />
            </div>

            <div className="form-item">
              <label htmlFor="email">Email:</label>
              <Field id="email" name="email" placeholder="" type="email" />
            </div>
            <button className="upload-btn" type="submit">Upload CV</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default Career;
