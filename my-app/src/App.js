import css from './App.module.css';
import Sidebar from './components/Sidebar';
// import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import ContentAPI from './components/ContentAPI';
import ContentHooks from './components/ContentHooks';

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <ContentAPI />
      {/* <ContentHooks /> */}
      {/* <Content /> */}
      <Sidebar />
    </div>
  );
}

export default App;