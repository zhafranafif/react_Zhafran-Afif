import { axiosInstance } from "../config/axiosInstance";

 const todoAPI = {
    async getAllTodo() {
        try {
            const response = await axiosInstance.get('/todo')
            return response
        } catch (err) {
            console.log(err.response)
        }
     },
     async createTodo() {
         try {
             const response = await axiosInstance.post('/todo')
             return response
         } catch (err) {
             console.log(err.response)
         }
     },
     async deletingTodo(id) {
         try {
             const response = await axiosInstance.delete(`/todo/${id}`)
             return response
         } catch (err) {
             console.log(err)
        }
     }
}
export default todoAPI