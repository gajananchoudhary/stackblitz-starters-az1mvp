import styles from './../styles/Company.module.css';

export default function Contact() {
  return (
    <section className="w-100">
      <div className={styles.heroSection}>
        <h1>Contact the ZeroTier Sales Team</h1>
        <div className={styles.formContainer}>
          <div className={styles.formContainerFirst}>
            <p>
              For sales, proof-of-concept requests, or software licensing
              questions, fill out the form to the right.
            </p>
            <p>
              For product support, please visit the ZeroTier community board.
            </p>
          </div>
          <div className={styles.formContainerSecond}>
            <form
              method="POST"
              action="https://zerotier.activehosted.com/proc.php"
              id="form_1"
            >
              <div>
                <label className={styles.label}>First Name*</label>
                <input
                  placeholder="First Name"
                  type="text"
                  tabindex="1"
                  required
                  className={styles.input}
                />
              </div>
              <div>
                <label className={styles.label}>Last Name*</label>
                <input
                  placeholder="Last Name"
                  type="text"
                  tabindex="2"
                  required
                  className={styles.input}
                />
              </div>
              <div>
                <label className={styles.label}>Email Address*</label>
                <input
                  placeholder="Email Address"
                  type="email"
                  tabindex="3"
                  required
                  className={styles.input}
                />
              </div>
              <div>
                <label className={styles.label}>Intended Use*</label>
                <select className={styles.input}>
                  <option>--- select ---</option>
                  <option>Individual</option>
                  <option>Business / Team</option>
                  <option>Resell / Integrate</option>
                </select>
              </div>
              <div>
                <label className={styles.label}>Networking Use Case*</label>
                <select className={styles.input}>
                  <option> --- select ---</option>
                  <option value="Internet of Things (IoT)">
                    Internet of Things (IoT)
                  </option>
                  <option value="Platform Embedding (Hardware / Software)">
                    Platform Embedding (Hardware / Software)
                  </option>
                  <option value="Remote Monitoring / Management">
                    Remote Monitoring / Management
                  </option>
                  <option value="SD-WAN">SD-WAN</option>
                  <option value="VPN / Remote Access">
                    VPN / Remote Access
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className={styles.label}>Company</label>
                <input
                  placeholder="Company"
                  type="text"
                  tabindex="6"
                  required
                  className={styles.input}
                />
              </div>
              <div>
                <label className={styles.label}>Phone Number</label>
                <input
                  placeholder="Phone Number"
                  type="number"
                  tabindex="7"
                  required
                  className={styles.input}
                />
              </div>
              <div>
                <label className={styles.label}>
                  What Is Your Sales Question?
                </label>
                <textarea
                  placeholder=""
                  type="number"
                  tabindex="7"
                  required
                  className={styles.input}
                />
              </div>
              <div>
                <button type="submit" className="yellow-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
