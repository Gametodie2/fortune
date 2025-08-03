import styles from "./FeatureItem.module.scss";

const FeatureItem = ({ icon, text }) => {
  return (
    <div className={styles.featureItem}>
      {icon && <img src={icon} className={styles.icon} alt="" />}
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default FeatureItem;
