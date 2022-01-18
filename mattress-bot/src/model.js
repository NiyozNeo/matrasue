const pg = require("./lib/pg")

const queryAdd = `
    insert into users (user_name, user_uuid , user_step) values ($1 , $2 , $3) return *
`

const addUser = (name , id , step) => {
    return await pg(queryAdd, name , id , step)
}

const queryGet = `
    select * from users
`
const getUser = () => {
    return await pg(queryGet)
}

const queryStep = `
    update users set user_step = $1 where user_uuid = $2 return
`
const setStep = (step, uuid) => {
    return await  pg(queryStep, step , uuid)
}

module.exports = {
    addUser,
    getUser, 
    setStep
}