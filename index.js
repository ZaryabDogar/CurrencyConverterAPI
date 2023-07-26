const firstel = document.getElementById("first")
const iiel = document.getElementById("2nd")
const firstwel = document.getElementById("worthist")
const iiwel = document.getElementById("worth2nd")
const displayel = document.getElementById("display")
const key = "i0/fX3tyfRzjcDo3sYPdtw==4RaKBHIZgPdVaG1G"
const options = {
    method: "get",
    Headers: {
        "X-Api-Key ": key,
    },
};
async function currate() {
    try {

        const result = await fetch(`https://api.api-ninjas.com/v1/convertcurrency?have=${firstel.value}&want=${iiel.value}&amount=${firstwel.value}`, options)
        const response = await result.json()
        if (response.error) {

            console.log(response.error)
            displayel.innerText = `sorry tou put the invalid currency can't provide you information right now`

        } else {

            console.log(response)

            iiwel.value = (response.new_amount).toFixed(3);

            displayel.innerText = `1 ${firstel.value} is equal to ${(iiwel.value / firstwel.value).toFixed(3)} ${iiel.value}`

        }

    } catch (error) {
        console.log(error)
        displayel.innerText=`an error ocurred please try again later`
    }


}
firstel.addEventListener("change", currate)
iiel.addEventListener("change", currate)
firstwel.addEventListener("input", currate)
iiwel.addEventListener("input", currate)