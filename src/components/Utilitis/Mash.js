import { Formik, Form, ErrorMessage } from "formik";
import { useState } from "react";
import functions from "../../functions/Math";

const Water = () => {
    const [qty, setQty] = useState(0);
  return (
      <div  className="ruleContainer">
        <h2 className="sugarTitle">Agua para mash</h2>
        <div className="sugarForm">
        <Formik
          initialValues={{
            grainQty: 0,
          }}
          validate={(values) => {
            const errors = {};
    
            if (!values.grainQty) {
              errors.grainQty = "Required";
            } else if (values.grainQty < 0) {
              errors.grainQty = "Must be positive";
            }
            return errors;
          }}
          onSubmit={(values) => {
            
            setQty(functions.water(values.grainQty));
          }}
        >
          {({ handleChange }) => (
            <Form>
              <label>Cantidad de granos:</label>
              <input type="number" placeholder="5.5kg"
                onChange={handleChange}
                name="grainQty"
                className="grainQty" 
                step='any'/>
                <ErrorMessage name="grainQty" />
              <button type="submit" className="submitButton">Calcular</button>
            </Form>
          )}
        </Formik>

        <p className='totalStyle' >Total: {qty[0]} lts</p>
        <p className='totalStyle' >Total: {qty[1]} cm ( de arriba para abajo)</p>
      </div>

      </div>
  )
};

export default Water;
