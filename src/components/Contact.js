import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("useEffect Before");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("useEffect After cleaing");
    };
  }, []);

  return (
    <div>
      <h1>Contact Us Page</h1>
    </div>
  );
};
export default Contact;
