import styles from "@styles/Feedback.module.css";
import Image from "next/image";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function Feedback() {
    return (
        <div className={styles.feedback}>
            <div className={styles.feedbackQuote}>
              <p><FormatQuoteIcon className={styles.feedbackQuoteIcon} /></p>
            </div>
            <div className={styles.feedbackClient}>
              <Image className={styles.feedbackImg} src="/img/avatar.jpg" alt="client" width="200" height="200" />
              <div>
                <h4>Avatar User</h4>
                <p>avatar user</p>
              </div>
            </div>
            <div className={styles.feedbackDetail}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, porro. Vitae aliquam hic rerum magnam eaque, quos numquam quidem fugit tenetur</p>
            </div>
        </div>
    )
}