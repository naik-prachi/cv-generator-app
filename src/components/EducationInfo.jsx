import '../App.css';

function EducationInfo({ value, onChange }) {
  return (
    <div>

      <h2>--- EDUCATIONAL INFO ---</h2>
      <label className='label-info'>
        (School & University)
      </label>
      <textarea
        value={value}
        onChange={onChange}
        rows="4"
        cols="50"
      />
    </div>
  );
}

export default EducationInfo;