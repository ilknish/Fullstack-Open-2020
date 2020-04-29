import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const delPerson = id => {
    return axios.delete(baseUrl+'/'+id)
  }

const changeNum = newObject => {
    const id = newObject.id
    return axios.put(baseUrl+'/'+id, newObject)
  }

export default { 
  getAll: getAll, 
  create: create,
  delPerson: delPerson,
  changeNum: changeNum
}