

export default function ProfileCard(

){

    const profile=[{


        profileImage:'/images/profile1.jpg',
        name:'John Doe',
        jobTitle:'Software Engineer',
        company:'Tech Solutions',
        shortbio:'A passionate software engineer with over 5 years of experience in building scalable web applications. Loves coding, coffee, and open-source contributions.',
        skills:['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'Git', 'Agile', 'Problem Solving', 'Team Collaboration'],

    },

{
    profileImage:'/images/profile2.jpg',
    name:'Jane Smith',
    jobTitle:'Product Manager',
    company:'Innovatech',
    shortbio:'A results-driven product manager with a knack for identifying market opportunities and driving product strategy. Enjoys collaborating with cross-functional teams to deliver exceptional user experiences.',
    skills:['Product Management', 'Agile', 'UX Design', 'Data Analysis'],
},
{
    profileImage:'/images/profile3.jpeg',
    name:'Alice Johnson',
    jobTitle:'Data Scientist',
    company:'Data Insights',
    shortbio:'A data enthusiast with expertise in machine learning and statistical analysis. Passionate about turning data into actionable insights to drive business decisions.',
    skills:['Python', 'Machine Learning', 'Data Visualization', 'SQL'],
},
{
    profileImage:'/images/profile4.jpg',
    name:'Bob Brown',
    jobTitle:'UX Designer',
    company:'Creative Agency',
    shortbio:'A creative UX designer with a passion for crafting user-centered designs. Enjoys collaborating with clients to bring their visions to life.',
    skills:['UX Design', 'Wireframing', 'Prototyping', 'User Research'],
},
{
    profileImage:'/images/profile5.jpg',
    name:'Charlie Green',
    jobTitle:'DevOps Engineer',
    company:'Cloud Solutions',
    shortbio:'A DevOps engineer with a strong background in cloud infrastructure and automation. Committed to improving deployment processes and ensuring system reliability.',
    skills:['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
}
];

return (

<div className="profile-card-container">
    {profile.map((item, index) => (
        <div key={index} className="profile-card">
            <img src={item.profileImage} alt={`${item.name}'s profile`} className="profile-image" />
            <h2 className="profile-name">{item.name}</h2>
            <h3 className="profile-job-title">{item.jobTitle}</h3>
            <p className="profile-company">{item.company}</p>
            <p className="profile-bio">{item.shortbio}</p>
            <h3 className="profile-skills-title">Skills</h3>
            <ul className="profile-skills">
                {item.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="profile-skill">{skill}</li>
                ))}
            </ul>

            <button onClick={
                ()=> {

                    console.log(`Contacting ${item.name}`);
                  
                }
            } className="profile-button">Contact</button>
        </div>



    ))}

</div>


)


}