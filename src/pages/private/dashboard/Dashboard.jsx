import React from 'react'
import fr_flag from '../../../assets/icons/fr_flag.svg';
import sp_flag from '../../../assets/icons/sp_flag.svg';
import uk_flag from '../../../assets/icons/uk_flag.svg';
import { Link } from 'react-router-dom';
import louvre from '../../../assets/icons/louvre.png';
import country from '../../../assets/icons/country.svg';

import france_bg from '../../../assets/imgs/france_bg.jpg';
import spain_bg from '../../../assets/imgs/spain_bg.jpg';
import uk_bg from '../../../assets/imgs/uk_bg.jpeg';

import profile_one from '../../../assets/imgs/profile_one.jpg';
import profile_two from '../../../assets/imgs/profile_two.webp';


import cards from './Card.module.css';
import dashboard from './Dashboard.module.css';

import Btn2 from '../../../components/Buttons/Btn2/Btn2';
import Btn1 from '../../../components/Buttons/Btn1/Btn1';

function Dashboard() {

  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();

  let dayMessage = "";
  if (hour >= 6 && hour <= 11) {
    dayMessage = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    dayMessage = "Good Afternoon";
  } else if (hour >= 17 && hour <= 23) {
    dayMessage = "Good Evening";
  } else {
    dayMessage = "Good Night";
  }

  return (
    <div>


      <section className={dashboard.hero}>
        <div className={dashboard.greeting}>
          {dayMessage}, <br />
          <p>
            <span>Alonso</span>.
            <span className={dashboard.date}>{hour}:{minutes} - MON</span>
          </p>
        </div>
      </section>


      <section className={dashboard.training}>

        <div className={`header-basic`}>
          <h2>Let's get started</h2>
          <span>Remember, you're getting closer <br /> every day</span>
        </div>

        <Link to="/training"><Btn1 text1="Start" /></Link>
      </section>

      <section className={cards.languages}>

        <div className={`header-basic`}>
          <h2>Languages Availables</h2>
          <span>for learn on your language</span>
        </div>

        <div className={cards.cardCarrousel}>

          <section>
            <div className={cards.languageCard}>
              <img className={cards.countryBackground} src={france_bg} alt="" />

              <section>

                <header>
                  <section>
                    <img className={cards.countryFlag} src={fr_flag} alt="" />
                    <div>
                      <section>
                        <h3>French</h3>
                        <span>+30 <img className={cards.countryIcon} src={country} alt="" /></span>
                      </section>
                      <span>+300 million speakers</span>
                    </div>
                  </section>
                  <img className={cards.infoIcon} src={louvre} alt="" />
                </header>

                <main>
                  <h4>Spoken in +30 countries</h4>
                  <article>
                    <img src={profile_two} alt="" />
                    <div>
                      <h5>Kate Anderson <span>· 20:19</span> </h5>
                      <p>Comment vas-tu?</p>
                    </div>
                  </article>

                  <article>
                    <div>
                      <h5><span>20:30 ·</span> Jax Kuznetsova</h5>
                      <p>Je va bien, merci.</p>
                    </div>
                    <img src={profile_one} alt="" />
                  </article>
                </main>

              </section>

              <aside>
                <h5>Levels Available</h5>
                <section>
                  <div>
                    <span>A1 - A2</span>
                  </div>
                  <div>
                    <span>B1 - B2</span>
                  </div>
                  <div>
                    <span>C1 - C2</span>
                  </div>
                </section>
              </aside>

            </div>

            <footer>
              <Btn2 text1={"Empezar"} />
              <span>Speak with elegance</span>
            </footer>

          </section>

          <section>

            <div className={cards.languageCard}>
              <img className={cards.countryBackground} src={france_bg} alt="" />

              <section>

                <header>
                  <section>
                    <img className={cards.countryFlag} src={fr_flag} alt="" />
                    <div>
                      <section>
                        <h3>French</h3>
                        <span>+30 <img className={cards.countryIcon} src={country} alt="" /></span>
                      </section>
                      <span>+300 million speakers</span>
                    </div>
                  </section>
                  <img className={cards.infoIcon} src={louvre} alt="" />
                </header>

                <main>
                  <article>
                    <img src={profile_two} alt="" />
                    <div>
                      <span>Kate Anderson</span>
                      <p>Comment vas-tu?</p>
                    </div>
                  </article>

                  <article>
                    <div>
                      <span>Jax Kuznetsova</span>
                      <p>Je va bien, merci.</p>
                    </div>
                    <img src={profile_one} alt="" />
                  </article>
                </main>

              </section>

              <aside>
                <h5>Levels Available</h5>
                <section>
                  <div>
                    <span>A1</span>
                    <span>A2</span>
                  </div>
                  <div>
                    <span>B1</span>
                    <span>B2</span>
                  </div>
                  <div>
                    <span>C1</span>
                    <span>C2</span>
                  </div>
                </section>
              </aside>

            </div>

            <footer>
              <Btn2 text1={"Empezar"} />
              <span>Speak with elegance</span>
            </footer>

          </section>

          <section>

            <div className={cards.languageCard}>
              <img className={cards.countryBackground} src={france_bg} alt="" />

              <section>

                <header>
                  <section>
                    <img className={cards.countryFlag} src={fr_flag} alt="" />
                    <div>
                      <section>
                        <h3>French</h3>
                        <span>+30 <img className={cards.countryIcon} src={country} alt="" /></span>
                      </section>
                      <span>+300 million speakers</span>
                    </div>
                  </section>
                  <img className={cards.infoIcon} src={louvre} alt="" />
                </header>

                <main>
                  <article>
                    <img src={profile_two} alt="" />
                    <div>
                      <span>Kate Anderson</span>
                      <p>Comment vas-tu?</p>
                    </div>
                  </article>

                  <article>
                    <div>
                      <span>Jax Kuznetsova</span>
                      <p>Je va bien, merci.</p>
                    </div>
                    <img src={profile_one} alt="" />
                  </article>
                </main>

              </section>

              <aside>
                <h5>Levels Available</h5>
                <section>
                  <div>
                    <span>A1</span>
                    <span>A2</span>
                  </div>
                  <div>
                    <span>B1</span>
                    <span>B2</span>
                  </div>
                  <div>
                    <span>C1</span>
                    <span>C2</span>
                  </div>
                </section>
              </aside>

            </div>

            <footer>
              <Btn2 text1={"Empezar"} />
              <span>Speak with elegance</span>
            </footer>

          </section>

        </div>
      </section>


    </div>
  )
}

export default Dashboard