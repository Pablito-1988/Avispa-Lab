import functions from "../../functions/Math";
import { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import './styles.css'
const Sugar = () => {
  const [qty, setQty] = useState(0);

  return (
    <div className="sugarContainer">
      <h2 className="sugarTitle">Calculadora de azucar</h2>
      <div className="sugarForm">
        <Formik
          initialValues={{
            beerQty: 0,
          }}
          validate={(values) => {
            const errors = {};
    
            if (!values.beerQty) {
              errors.beerQty = "Required";
            } else if (values.beerQty < 0) {
              errors.beerQty = "Must be positive";
            }
            return errors;
          }}
          onSubmit={(values) => {
           
            setQty(functions.sugar(values.beerQty));
          }}
        >
          {({ handleChange }) => (
            <Form>
              <label>Litros de cerveza:</label>
              <input type="number" placeholder="0"
                onChange={handleChange}
                name="beerQty"
                className="beerQty" />
                <ErrorMessage name="beerQty" />
              <button type="submit" className="submitButton">Calcular</button>
            </Form>
          )}
        </Formik>

        <p className='totalStyle'>Total: {qty} gm</p>
      </div>
    </div>
  );
};

export default Sugar;
