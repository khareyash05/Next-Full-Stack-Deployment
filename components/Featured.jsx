import styles from '../styles/Featured.module.css';
import Image from 'next/image';

const Featured = () => {
    return ( 
        <div className={styles.container}>
            <Image src="/images/arrowl.png" layout='fill'/>
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                <Image src="/images/arrowl.png" layout='fill'/>
                </div>
            </div>
            <Image src="/images/arrowr.png" layout='fill'/>
        </div>
    );
}
 
export default Featured;