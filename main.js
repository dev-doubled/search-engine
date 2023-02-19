const url = 'https://dummyjson.com/users'
const userCards = document.querySelector('.user--cards')
const searchBar = document.getElementById('search')
let output = []


fetch(url)
  .then(response => response.json())
  .then(data => {
    let userCardsHtml = ''
    output = data.users.map(user => {
      const fullName = user.firstName + user.lastName
      userCardsHtml += `
      <div class="user-card">
        <div class="user__card__img">
          <img src="${user.image}" alt="" class="user--img">
        </div>
        <div class="user__card__info">
          <div class="info--detail">
            <p class="info--header">${user.firstName} ${user.lastName}</p>
            <p class="info--body">${user.email}</p>
          </div>
        </div>
      </div>
    `
      return {
        name: fullName,
        email: user.email,
        image: user.image
      }
    })
    userCards.innerHTML = userCardsHtml
  })

searchBar.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase()
  const finded = output.filter((user) => user.name.toLowerCase().includes(value))
  let userCardsHtml = ''
  finded.forEach(user => {
    userCardsHtml += `
    <div class="user-card">
      <div class="user__card__img">
        <img src="${user.image}" alt="" class="user--img">
      </div>
      <div class="user__card__info">
        <div class="info--detail">
          <p class="info--header">${user.name}</p>
          <p class="info--body">${user.email}</p>
        </div>
      </div>
    </div>
  `
  })
  userCards.innerHTML = userCardsHtml
})
