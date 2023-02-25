import { database } from "@/config/firebase"
import { ref, get, child } from "firebase/database"

const fetchUser = async (id) => {
    const databaseReference = ref(database)
    const users = await get(child(databaseReference, 'users')); 
    const getUsersValue = Object.values(users.val())
    const user = getUsersValue.find((user) => user.id === id);
    return !user? false : user
}

const handler =  async (req, res) => {
    const { userId } = req.query;
    if(req.method === 'GET'){
        const user = await fetchUser(userId);
        if(!user) return res.status(422).json({status: 422, message: 'Invalid User'})
        delete user.password;
        return res.status(200).json({status: 200, ...user})
    }
    return false;
  }
  
export default handler;
