import styles from './InfoItem.module.css';

interface InfoItemProps {
  date: string;
  category: string;
  title: string;
}

export default function InfoItem({ date, category, title }: InfoItemProps) {
  return (
    <div className={styles.item}>
      <span className={styles.date}>{date}</span>
      <span className={styles.category}>{category}</span>
      <p className={styles.title}>{title}</p>
    </div>
  );
}
