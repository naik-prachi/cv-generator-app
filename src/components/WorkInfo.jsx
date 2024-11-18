import '../App.css';

function WorkInfo({ value, onChange }) {
    return (
      <div>
        <h2>--- WORK EXPERIENCE ---</h2>
        <label className='label-info'>(List all your work experience.)</label>
        <textarea
          value={value}
          onChange={onChange}
          rows="4"
          cols="50"
        />
      </div>
    );
  }
  
 export default WorkInfo; 