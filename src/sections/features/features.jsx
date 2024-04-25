import Cards from '../../compenents/cards'

const card1 = {
    icon: "bi bi-collection",
    title: "Fresh new layout",
    text: "With Bootstrap 5, we've created a fresh new layout for this template!"
}
const card2 = {
    icon:"bi bi-cloud-download",
    title: "Free to download",
    text: "As always, Start Bootstrap has a powerful collectin of free templates."
}
const card3 = {
    icon: "bi bi-card-heading",
    title: "Jumbotron hero header",
    text: "The heroic part of this template is the jumbotron hero header!"
}
const card4 = {
    icon: "bi bi-bootstrap",
    title: "Feature boxes",
    text: "We've created some custom feature boxes using Bootstrap icons!"
}
const card5 = {
    icon: "bi bi-code",
    title: "Simple clean code",
    text: "We keep our dependencies up to date and squash bugs as they come!"
}
const card6 = { 
    icon: "bi bi-patch-check",
    title: "A name you trust",
    text: "Start Bootstrap has been the leader in free Bootstrap templates since 2013!"
}

const allDataCards = [card1, card2, card3, card4, card5, card6];

function Features(){
    
    return (
        <section className="features pt-xl-1">
        <div className="container px-lg-5">
          <div className="row gx-5">
            {allDataCards.map((data) => (
                <Cards 
                icon={data.icon} 
                title={data.title} 
                text={data.text}
                />
            ))}
          </div>
        </div>
      </section>
    )
};
export default Features;