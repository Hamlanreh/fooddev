import styles from "@styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

import Navbar from '@components/Navbar';
import Menu from '@components/Menu';
import Footer from '@components/Footer';
import Feedback from '@components/Feedback';


export default function Home() {   

    return (
        <div className={styles.homepage}>
            <Navbar />

            <main className={styles.homeMain}>
                <section className={styles.hero}>     
                    <div className={styles.heroLt}>
                        <h1 className={styles.heroBig}>
                            <span className={styles.heroBig1}>Experience the best</span> <span className={styles.heroBig2}>quality of naija food</span>
                        </h1>
                        <p className={styles.heroText}>The best nigeria cuisines and delicacies can be experienced at the jekaeat online restaurant where you can make your order and there will be fast delivery to your doorsteps</p>
                        <div className={styles.heroBtnBox}>
                            <Link href="#menuHome" className={styles.heroBtn}>Order From Menu!</Link>
                        </div>
                        <div className={styles.more}>
                            <div className={styles.moreLt}>
                                <span className={`${styles.roundBox} ${styles.roundBox1}`}>
                                    <Image className={styles.roundImg} src="/img/food-plate.png" alt="food plate" width="100" height="100" />
                                </span>
                                <span className={`${styles.roundBox} ${styles.roundBox2}`}>
                                    <Image className={styles.roundImg} src="/img/food-plate.png" alt="food plate" width="100" height="100" />
                                </span>
                                <span className={`${styles.roundBox} ${styles.roundBox3}`}>
                                    <Image className={styles.roundImg} src="/img/food-plate.png" alt="food plate" width="100" height="100" />
                                </span>
                                <span className={`${styles.roundBox} ${styles.roundBox4}`}>
                                    <Image className={styles.roundImg} src="/img/food-plate.png" alt="food plate" width="100" height="100" />
                                </span>
                            </div>
                            <div className={styles.moreRt}>
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.heroRt}>
                        <Image src="/img/food-plate.png" alt="Large food" width="700" height="700" />
                    </div>
                </section>

                <section className={styles.about}>
                    <div className={styles.aboutImgBox}>
                        <Image className={styles.aboutImg} src="/img/food-plate.png" alt="food" width="500" height="500" />
                    </div>
                    <div className={styles.aboutDetail}>
                        <h4>About Us</h4>
                        <h2>Food is an important part of your health</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab consequatur dolorem architecto alias eaque inventore nisi atque, pariatur, ullam ex corrupti laborum temporibus aperiam earum odit omnis accusamus iure unde nulla repudiandae, incidunt culpa. Quod, amet eveniet. Omnis sunt animi quasi!</p>
                        <button>See More <ArrowRightAltIcon className={styles.aboutIcon} /></button>
                    </div>
                </section>

                <section id="menuHome" className={styles.menuHome}>
                    <div className={styles.menuHeader}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Soluta</p>
                        <h1>Our Popular Offers</h1>
                    </div>

                    <Menu />

                    <div className={styles.menuMoreBox}>
                        <Link className={styles.menuMoreBtn} href="#">
                            View more <ArrowRightAltIcon className={styles.menuMoreIcon} />
                        </Link>
                    </div>
                </section>

                <section className={styles.testimonial}>
                    <div className={styles.feedbackHeader}>
                        <div>
                            <p>Testimonials</p>
                            <h2>See Our Client Feedback</h2>
                        </div>
                        <div>
                            <button className={`${styles.feedbackBtn} ${styles.feedbackBtnLt}`}>
                                <NavigateBeforeIcon className={styles.feedbackIcon} />
                            </button>
                            <button className={`${styles.feedbackBtn} ${styles.feedbackBtnRt}`}>
                                <NavigateNextIcon className={styles.feedbackIcon} />
                            </button>
                        </div>
                    </div>

                    <div className={styles.feedbackList}>
                        <Feedback />
                        <Feedback />
                        <Feedback />
                        <Feedback />
                    </div>

                </section>

                <section className={styles.contact}>
                    <div className={styles.contactMapBox}>
                        <Image className={styles.contactMap} src="/img/locationmap.png" alt="Location map" width="500" height="500" />
                        <div className={styles.contactIconList}>
                            <Link className={styles.contactIconLink} href="#"><FacebookIcon className={styles.contactIcon} /></Link>
                            <Link className={styles.contactIconLink} href="#"><TwitterIcon className={styles.contactIcon} /></Link>
                            <Link className={styles.contactIconLink} href="#"><InstagramIcon className={styles.contactIcon} /></Link>
                            <Link className={styles.contactIconLink} href="#"><WhatsAppIcon className={styles.contactIcon} /></Link>
                        </div>
                    </div>
                    <div className={styles.contactDetail}>
                        <h4>Contact us</h4>
                        <h2>Talk to us about your experience</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab consequatur dolorem architecto alias eaque inventore nisi atque, pariatur, ullam ex corrupti laborum temporibus aperiam earum</p>
                        <form className={styles.contactForm}>
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <textarea placeholder="Your Message"></textarea>
                            <button type="submit">Send <SendIcon className={styles.contactSendIcon} /></button>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}