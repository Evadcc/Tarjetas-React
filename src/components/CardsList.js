import Card from "./Card"



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