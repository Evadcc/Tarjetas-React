import Card from "./Card"

const x = [1,2,3,4,5,6]


const CardsList = (props) => {
  return (
    
    <section style={{
      display: "flex",
      flexWrap:"wrap"
    }}> 
      {
      props.data.map(item => <Card
        key={item.id}
        card= {item}
        />)
      }
    </section>
    
  )
}

export default CardsList