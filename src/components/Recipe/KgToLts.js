
import functions from '../../functions/Math';

const KgToLts = (props) => {
    const kg = functions.water(Number(props.grainKg))
    const cm = functions.lts(kg)

  return <div>
        <p className='mashTotal'>{kg} lts</p>
        <p className='mashTotal'>Regla</p>
        {cm !== 34 && <p className='mashTotal'>{cm} cm</p>}
        
  </div>;
};

export default KgToLts;
