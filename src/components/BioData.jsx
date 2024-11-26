const BioData = (obj) => {
  return (
    <div className="biodata">
      <h1>Biodata of {obj.name}</h1>
      <div className="personal-info">
        <p>Age: {obj.age}</p>
        <p>Occupation: Ui/UX Designer</p>
        <p>Mobile: { obj.mobile }</p>
      </div>
      <div className="skills">
        <h2>My Skills:</h2>
        <ul>
          {obj?.skills?.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="interests">
        <h2>My interest:</h2>
        <ul>
          {obj?.interests?.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default BioData;
