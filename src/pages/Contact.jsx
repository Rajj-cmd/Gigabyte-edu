const Contact = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <p>
                <strong>Email:</strong> info@gigabyte-education.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>
              <p>
                <strong>Address:</strong><br />
                123 Education Street<br />
                Tech City, TC 12345
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border rounded h-32"
              ></textarea>
              <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;