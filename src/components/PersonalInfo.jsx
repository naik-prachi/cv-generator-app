import '../App.css';

function PersonalInfo({ personalInfo, onChange }) {
  return (
    <div>
      <h2>--- PERSONAL INFO ---</h2>
      <form>
        <label>
          
          <input
            type="text"
            name="fullName"
            placeholder='full name'
            value={personalInfo.fullName}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          
          <input
            type="email"
            name="email"
            placeholder='email'
            value={personalInfo.email}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          
          <input
            type="tel"
            name="phone"
            placeholder='phone no.'
            value={personalInfo.phone}
            onChange={onChange}
          />
        </label>
      </form>
    </div>
  );
}

export default PersonalInfo;
