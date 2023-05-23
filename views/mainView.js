const wrapView = require("./viewWrapper.js")
const html = require("html-template-tag")

function mainView(people = [], places = [], things = [], souvenirs = []) {
  return wrapView(html`
    <div class="container mb-4">
      <h3>People</h3>
      <ul class="list-group list-group-flush">
        ${people.map((person) => {
          return html` <li class="list-group-item">${person.name}</li> `
        })}
      </ul>
    </div>
    <div class="container mb-4">
      <h3>Places</h3>
      <ul class="list-group list-group-flush">
        ${places.map((place) => {
          return html` <li class="list-group-item">${place.name}</li> `
        })}
      </ul>
    </div>
    <div class="container mb-4">
      <h3>Things</h3>
      <ul class="list-group list-group-flush">
        ${things.map((thing) => {
          return html` <li class="list-group-item">${thing.name}</li> `
        })}
      </ul>
    </div>
    <div class="container mb-4">
      <h3>Souvenir Purchases</h3>
      <p>
        Create a new Souvenir Purchase by selecting a Person, the Place they
        purchased the souvenir, and the Thing they bought.
      </p>
      <form class="row g-3 mb-4" action="/" method="POST">
        <div class="col-auto">
          <select class="form-select" name="PersonId">
            <option value="" disabled selected>select person</option>
            ${people.map((person) => {
              return html` <option value=${person.id}>${person.name}</option> `
            })}
          </select>
        </div>
        <div class="col-auto">
          <select class="form-select" name="PlaceId">
            <option value="" disabled selected>select place</option>
            ${places.map((place) => {
              return html` <option value=${place.id}>${place.name}</option> `
            })}
          </select>
        </div>

        <div class="col-auto">
          <select class="form-select" name="ThingId">
            <option value="" disabled selected>select thing</option>
            ${things.map((thing) => {
              return html` <option value=${thing.id}>${thing.name}</option> `
            })}
          </select>
        </div>
        <div class="col-auto">
          <button class="btn btn-outline-primary">Create</button>
        </div>
      </form>
      <ul class="list-group list-group-flush">
        ${souvenirs.map((souvenir) => {
          return html`
            <li class="list-group-item">
              <div class="row">
                <div class="col">
                  ${souvenir.Person.name} purchased a ${souvenir.Thing.name} in
                  ${souvenir.Place.name}
                </div>
                <div class="col">
                  <form method="POST" action="/${souvenir.id}?_method=DELETE">
                    <button class="btn btn-outline-danger btn-sm">
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            </li>
          `
        })}
      </ul>
    </div>
  `)
}

module.exports = mainView
