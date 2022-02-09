import functions from "../../functions/Math";
import { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";

const Rule = () => {
    const [qty, setQty] = useState(0);

  return <div className="ruleContainer">
        <h2 className="sugarTitle">Conversión lts/cm</h2>
        <div className="sugarForm">
        <Formik
          initialValues={{
            ltQty: 0,
          }}
          validate={(values) => {
            const errors = {};
    
            if (!values.ltQty) {
              errors.ltQty = "Required";
            } else if (values.ltQty < 0) {
              errors.ltQty = "Must be positive";
            }
            return errors;
          }}
          onSubmit={(values) => {
            
            setQty(functions.lts(values.ltQty));
          }}
        >
          {({ handleChange }) => (
            <Form>
              <label>Cantidad de litros:</label>
              <input type="number" placeholder="5lt"
                onChange={handleChange}
                name="ltQty"
                className="ltQty" 
                step='any'/>
                <ErrorMessage name="ltQty" />
              <button type="submit" className="submitButton">Calcular</button>
            </Form>
          )}
        </Formik>

        <p className='totalStyle' >Total: {qty} cm</p>
      </div>
  </div>;
};

export default Rule;
