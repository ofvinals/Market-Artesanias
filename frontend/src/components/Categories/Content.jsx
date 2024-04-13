import Cards from "../Cards"
function Content({productos}) {
  return (
    <section className="mx-[104px] mt-8">
      <h1 className="text-general text-3tl mb-10">Vestimenta</h1>
      <Cards productos={productos}/>
    </section>
  )
}

export default Content