import React from 'react'

function ContactUs() {
  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', color: '#fff', padding: '50px 0' }}>
      
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 30px' }}>
        
        <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '36px' }}>Contact Us</h1>

        <div style={{ display: 'flex', gap: '30px' }}>

          {/* left side - form */}
          <div style={{ flex: 2, backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '35px' }}>
            <h3 style={{ marginBottom: '25px' }}>Send Us a Message</h3>

            <form>
              <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '6px', color: '#ccc', fontSize: '14px' }}>Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    style={inputStyle}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '6px', color: '#ccc', fontSize: '14px' }}>Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '6px', color: '#ccc', fontSize: '14px' }}>Phone Number</label>
                <input
                  type="text"
                  placeholder="+91 9876543210"
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '6px', color: '#ccc', fontSize: '14px' }}>Subject</label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '6px', color: '#ccc', fontSize: '14px' }}>Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                ></textarea>
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: '#0d6efd',
                  color: '#fff',
                  border: 'none',
                  padding: '10px 28px',
                  borderRadius: '6px',
                  fontSize: '15px',
                  cursor: 'pointer'
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* right side - info */}
          <div style={{ flex: 1, backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '35px' }}>
            <h3 style={{ marginBottom: '25px' }}>Get In Touch</h3>

            <div style={{ marginBottom: '20px' }}>
              <h5 style={{ marginBottom: '5px' }}>📍 Address</h5>
              <p style={{ color: '#ccc', margin: 0, lineHeight: '1.6' }}>
               Near Poona Motor Driving School, Nimbalkar Corner, Chinchwad, Pune
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h5 style={{ marginBottom: '5px' }}>📞 Phone</h5>
              <p style={{ color: '#ccc', margin: 0 }}>+91 98765 43210</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h5 style={{ marginBottom: '5px' }}>📧 Email</h5>
              <p style={{ color: '#ccc', margin: 0 }}>info@biraynihouse.com</p>
            </div>

            <div>
              <h5 style={{ marginBottom: '5px' }}>🕒 Working Hours</h5>
              <p style={{ color: '#ccc', margin: 0, lineHeight: '1.6' }}>
                Monday - Friday<br />
                10:00 AM - 10:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* map */}
        <div style={{ marginTop: '40px', borderRadius: '10px', overflow: 'hidden' }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Pune,Maharashtra,India&output=embed"
            width="100%"
            height="380"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  backgroundColor: '#2a2a2a',
  color: '#fff',
  border: '1px solid #444',
  borderRadius: '6px',
  fontSize: '14px',
  outline: 'none',
  boxSizing: 'border-box'
}

export default ContactUs
