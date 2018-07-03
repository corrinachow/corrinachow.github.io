import React from 'react'

const Contact = () => (
  <section id="contact">
    <div className="subheader">
      <h2>Contact me</h2>
    </div>
    <div className="contact-text">
      <p>
        Have a project you'd like to discuss? If you're an artist and would like
        to collaborate, feel free to send me a message as well.
      </p>
    </div>
    <form
      className="row"
      method="POST"
      action="https://formspree.io/hello@corrinachow.com"
    >
      <div className="col-12 name-form">
        <label for="name">First &amp; Last Name*</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="col-6 email-form">
        <label for="email">Email Address*</label>
        <input type="text" id="email" name="email" required />
      </div>
      <div className="col-6 timeline-form">
        <label for="timeline">Timeline</label>
        <select id="timeline" name="timeline" optional>
          <option value="">---</option>
          <label for="days" className="sr-only">
            Days
          </label>
          <option value="days">Days</option>
          <label for="Weeks" className="sr-only">
            Weeks
          </label>
          <option value="weeks">Weeks</option>
          <label for="Months" className="sr-only">
            Months
          </label>
          <option value="months">Months</option>
        </select>
      </div>
      <div className="col-12 message-form">
        <label for="message">Message</label>
        <textarea id="message" name="message" required />
      </div>
      <div className="col-3">
        <input type="submit" value="Send" />
      </div>
    </form>
  </section>
)

export default Contact
