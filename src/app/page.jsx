
import Featured from "./components/featured/Featured";
import CategoryList from "./components/CategoryList/CategoryList"
import styles from "./homepage.module.css";
import CardList from "./components/CardList/CardList";
import Menu from "./components/Menu/Menu";
import Footer from "./components/footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";


export default function Home() {
  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList />
      <div className={styles.content}>
        <CardList/>
        
        <Menu/>
        
      </div>
      <Newsletter/>
      
    </div>
  );
}
