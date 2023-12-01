import React, { useEffect, useState } from "react";

const SenderWidget = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const loadScript = () => {
      (function (s, e, n, d, er) {
        s["Sender"] = er;
        // eslint-disable-next-line no-unused-expressions
        (s[er] =
          s[er] ||
          function () {
            (s[er].q = s[er].q || []).push(arguments);
          }),
          (s[er].l = 1 * new Date());
        var a = e.createElement(n),
          m = e.getElementsByTagName(n)[0];
        a.async = 1;
        a.src = d;
        m.parentNode.insertBefore(a, m);
      })(
        window,
        document,
        "script",
        "https://cdn.sender.net/accounts_resources/universal.js",
        "sender"
      );
      window.sender("1d98acae827431");
    };

    loadScript();
  }, []);

  const handleSubmit = (event) => {
    // Handle form submission logic (e.g., send data to backend or perform actions)
    event.preventDefault();
    // Example: You can simulate a form submission by setting formSubmitted to true after 2 seconds
    // Replace this with your actual submission logic
    setTimeout(() => {
      setFormSubmitted(true);
    }, 2000);
  };

  const handleFormReload = () => {
    setFormSubmitted(false);
  };

  console.log(formSubmitted,"formSubmitted")

  return (
    <div style={{ backgroundColor: "black" }}>
      <div>
        {!formSubmitted ? (
          <form onSubmit={handleSubmit}>
            {/* Your form fields */}
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            {/* Display a message or any content after successful submission */}
            <p>Form submitted successfully!</p>
            <button onClick={handleFormReload}>Submit another response</button>
          </div>
        )}
        <div
          className="sender-form-field"
          data-sender-form-id="lpmtfmbue3aq4b3lust"
        ></div>
      </div>
    </div>
  );
};

export default SenderWidget;
