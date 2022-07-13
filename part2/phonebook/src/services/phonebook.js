import axios from "axios"
const baseUrl = '/api/'

const getAll = () => {
  return axios.get(baseUrl + "persons")
}

const create = newObject => {
  return axios.post(baseUrl + "persons", newObject)
}

const remove = id => {
  return axios.delete(`${baseUrl}persons/${id}`)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}persons/${id}`, newObject)
}

export default {
  getAll, create, update, remove
}
