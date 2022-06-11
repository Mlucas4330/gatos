const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
const catBtn = document.querySelector("#change-cat")

const getCats = async () => {
    const data = await fetch(BASE_URL)
        .then(res => res.json())
        .catch(e => console.log(e))
    return data.webpurl
}

const loadimg = async () => {
    const cat = document.querySelector("#cat")
    cat.src = await getCats()
}


catBtn.addEventListener("click", loadimg)


loadimg()