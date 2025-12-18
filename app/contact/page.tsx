import ContactForm from '../_components/ContactForm/ContactForm';
import styles from './page.module.css';

import React from 'react';

export default function Page() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        ご質問・ご相談は下記フォームよりお問い合わせください。
        <br />
        内容確認を担当より通常３営業日以内にご連絡いたします。
      </p>

      <ContactForm />
    </div>
  );
}
