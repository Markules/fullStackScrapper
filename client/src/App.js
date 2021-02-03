import classes from './App.module.css';
import UrlInput from './components/UrlInput/UrlInput';
import Preview  from './containers/Preview/Preview';


const App = (props) => {
 return(
   <div>
     <h1 className={classes.Title}>SCRAPER</h1>
     <UrlInput />
   <Preview />
   </div>
  );
}

export default App;
