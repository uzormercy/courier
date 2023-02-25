import { database } from "@/config/firebase"
import { ref, get, child } from "firebase/database"
import { compareSync } from "bcryptjs";

const fetchUser = async (email) => {
    const databaseReference = ref(database)
    const users = await get(child(databaseReference, 'users')); 
    const getUsersValue = Object.values(users.val())
    const user = getUsersValue.find((user) => user.email === email);
    if(!user){
        return { status: 422, title: "User Authentication", message: "Credentials do not match"}
    }
    return {status: 200, title: "User Authentication", message: "", entity: user}
}

const handler =  async (req, res) => {
    const { email, password } = req.body
    if(req.method === 'POST'){
        const user = await fetchUser(email);
        if(user.status === 422){
          return res.status(422).json({status: 422, title: "User Authentication", message: "Credentials do not"})
        }
        const comparePassword = compareSync(password, user.entity.password);
        if(!comparePassword){
            return res.status(422).json({status: 422, title: "User Authentication", message: "Credentials do not"})
        }
    
        return res.status(200).json({status: 200, title: "User Authentication", message: "User Logged in successfully", entity: {
            id: user.entity.id,
            fullname: user.entity.fullname,
            email: user.entity.email
        }})
    }
  }
  
export default handler;
