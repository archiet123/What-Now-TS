import {v4 as uuidV4} from "uuid"

type LoginDetails = {
  id: string,
  Username: string,
  Password: string
}

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("form") as HTMLFormElement | null
const SubBtn = document.getElementById("#SubmitButton") as HTMLButtonElement | null
const Username = document.querySelector<HTMLInputElement>("#username")
const Password = document.querySelector<HTMLInputElement>("#password")

form?.addEventListener("submit", e =>{ 
  e.preventDefault() //would be cool to subscribe to this event to display an error message

  if (Username?.value == "" || Username?.value == null || Password?.value == "" || Password?.value == null) return


  const NewLoginDetails: LoginDetails = {
    id: uuidV4(),
    Username: Username.value,
    Password: Password.value
  }

  AppendToList(NewLoginDetails)
})

function AppendToList(loginDetails: LoginDetails){
  const item = document.createElement("li")
  const label = document.createElement("label")
  label.append(loginDetails.Username," ", loginDetails.Password)
  // item.append(label)
  list?.append(label)
  window.alert(loginDetails.Username)
  //git test
}