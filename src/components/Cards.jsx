import Card from './Card'
import Data from './Data'


function Cards () {
    return (
        Data.map( item => (
            <Card key={item.id} {...item}/>
        ))
    )
}

export default Cards