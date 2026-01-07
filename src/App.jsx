
import { FaCheck } from 'react-icons/fa6'
import './App.css'
import ProfessionalForm from './components/forms/Form'
import Button1 from './components/ui/Button1'
import { Card } from './components/ui/Card'
 import  Products from "./data/Mock"
function App() {
  return (
    <>
      <ProfessionalForm />
<div className="max-w-7xl bg-amber-100 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 items-start">
          { Products.map(product=>(
              <Card 
             key={product.id}
          {...product}
          onAction={() => console.log(`Added ${product.title} to cart`)}
        />
            )
            )
           }
        
      </div>
      {/* button section with animation  */}
 <Button1 colorVariant="red">Delete Record</Button1>
<Button1 colorVariant="green" icon={FaCheck}>Success</Button1>
    </>
  )
}
export default App
