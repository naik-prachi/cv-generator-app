import '../App.css';

function SkillsInfo({ value, onChange }) {
    return (
      <div>
        <h2>--- SKILLS ---</h2>
        <label className='label-info'>(List down all your technical and soft skills.</label>
        <textarea
          value={value.replace(/\n/g, '\n')}
          onChange={onChange}
          rows="4"
          cols="50"
        />
      </div>
    );
  }
  
export default SkillsInfo;