import './App.css';
import Pricing from './components/Pricing'

let data = [
  {
    plan:"FREE",
    price:"0",
    users:"Single User",
    usersEnabler:true,
    storage:"5GB Storage",
    storageEnabler:true,
    publicprojects:'Unlimited Public Projects',
    publicprojectsEnabler:true,
    access:"Community Access",
    accessEnabler:true,
    privateprojects:"Unlimited Private Projects",
    privateprojectsEnabler:false,
    support:"Dedicated Phone Support",
    supportEnabler:false,
    subdomain:"Free Subdomain",
    subdomainEnabler:false,
    status:"Monthly Status Reports",
    statusEnabler:false
  },
  {
    plan:"PLUS",
    price:"9",
    users:"5 User",
    usersEnabler:true,
    storage:"50GB Storage",
    storageEnabler:true,
    publicprojects:'Unlimited Public Projects',
    publicprojectsEnabler:true,
    access:"Community Access",
    accessEnabler:true,
    privateprojects:"Unlimited Private Projects",
    privateprojectsEnabler:true,
    support:"Dedicated Phone Support",
    supportEnabler:true,
    subdomain:"Free Subdomain",
    subdomainEnabler:true,
    status:"Monthly Status Reports",
    statusEnabler:false
  },
  {
    plan:"PRO",
    price:"49",
    users:"Unlimited User",
    usersEnabler:true,
    storage:"150GB Storage",
    storageEnabler:true,
    publicprojects:'Unlimited Public Projects',
    publicprojectsEnabler:true,
    access:"Community Access",
    accessEnabler:true,
    privateprojects:"Unlimited Private Projects",
    privateprojectsEnabler:true,
    support:"Dedicated Phone Support",
    supportEnabler:true,
    subdomain:"Unlimited Free Subdomain",
    subdomainEnabler:true,
    status:"Monthly Status Reports",
    statusEnabler:true
  }
]

function App() {
  return <>
       <section className="Pricing py-5">
  <div className="container">
    <div className="row">
     <Pricing data = {data[0]}/>
     <Pricing data = {data[1]}/>
     <Pricing data = {data[2]}/>
    </div>
  </div>
</section>
    </>

}

export default App;
