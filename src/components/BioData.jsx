const BioData = (obj) => {
  const { name, age, mobile, skills, interests } = obj;
  console.log(obj, "ob");
  return (
    <div className="biodata">
      <h1>Biodata of {name}</h1>
      <div className="personal-info">
        <p>Age: {age}</p>
        {mobile && <p>Mobie: { mobile }</p>}
        <p>Occupation: Ui/UX Designer</p>
        <p>Mobile: { mobile }</p>
      </div>
      <div className="skills">
        <h2>My Skills:</h2>
        <ul>
          {skills?.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="interests">
        <h2>My interest:</h2>
        <ul>
          {interests?.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default BioData;
