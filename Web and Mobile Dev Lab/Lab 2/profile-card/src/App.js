import logo from './logo.svg';
import './App.css';

import ProfileCard from './components/ProfileCard';

function App(props) {

  return(

    <div className="App">
      <ProfileCard 

      profileImage={props.profileImage}
      name={props.name}
      jobTitle={props.jobTitle}
      company={props.company}
      shortbio={props.shortbio}
      skills={props.skills} 


      
      
      />
    </div>
  )
}





export default App;
