import mongoose from 'mongoose'

const MONGODB_PASSWORD='dUeQoobA3xzWyN62'

async function connectToDb() {
    try {
      mongoose.connect(`mongodb+srv://TalMoshel:${MONGODB_PASSWORD}@cluster0.oegjnmw.mongodb.net/?retryWrites=true&w=majority`)
      .then((res)=>{
        console.log('connected to DB')
        return res
      })
    } catch (error) {
      return Promise.reject(new Error(error))
    }
  }


export default connectToDb