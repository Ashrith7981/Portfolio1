import React from 'react'
import './contact.css'

const Contact = () => {

   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a7f7b451-88fb-4bad-be6e-b4b717dc7caa");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };


  return (
    
    <section className="contact">
      
      <form onSubmit={onSubmit}>
        <h2>Contact Form</h2>

        <div className="input-box">
          <label>Full Name</label>
          <input
          name='Name'
            type="text"
            className="field"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="input-box">
          <label>Email Address</label>
          <input
            name='Email'
            type="email"
            className="field"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-box">
          <label>Your Message</label>
          <textarea
            name="Message"
            id="message"
            className="field mess"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default Contact
