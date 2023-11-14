import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h3>This is About Component!</h3>
      <User
        type={"Function"}
        name={"Saily Jadhav"}
        location={"Jersey"}
        contact={"shellyseasail"}
      />
      <br />
      <UserClass
        type={"Class"}
        name={"Saily Jadhav"}
        location={"Jersey"}
        contact={"shellyseasail"}
      />
    </div>
  );
};

export default About;
