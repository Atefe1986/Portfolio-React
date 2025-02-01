const Contact = () => {
  return (
    <main>
      <section className="contact-form">
        <h2>Thank you for your time. Let's connect!</h2>
        <p>Please send me a message, and let's get started!</p>
        <form action="#" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your text</label>
            <textarea id="message" name="message" placeholder="Write your message here"></textarea>
          </div>
          <button type="submit" className="submit-btn">Send message</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;