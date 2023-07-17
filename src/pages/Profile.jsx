import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { updateDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
export default function Profile(){
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(
    {
      name: auth.currentUser.displayName,
      email: auth.currentUser.email
    }
  );
  const {name, email} = formData;
  const [changeDetail, setChangeDetail] = useState(false);
  
  function onLogOut(){
    auth.signOut();
    navigate('/');
  }
  function onChange(e){
    setFormData((previousState)=> ({
      ...previousState,
      [e.target.id ]: e.target.value,
    }))
  }
  async function onSubmit(){
    try {
      if(auth.currentUser.displayName !== name){
        //Update name in firebase auth
        await updateProfile(auth.currentUser, {
          displayName :name,
        });

        //Update name in firestore
        const docRef = doc(db, "users", auth.currentUser.uid)
        await updateDoc(docRef, {
          name,
        })
      }
      toast.success("Successfully updated profile")
    } catch (error) {
      toast.error("Cannot Update the profile page");
    }
  }
  return(
    <>
    <section className="max-w-6xl flex-col mx-auto flex items-center justify-center">
      <h1 className="text-3xl text-center font-bold mt-6">
        My Profile</h1>
      

    <div className="w-full md:w-[50%] mt-6 px-3">
    <form>
      {/* Name */}
      <input type="text" id="name" value={name} disabled= {!changeDetail} 
      onChange={onChange}
      className={`text-xl text-center text-gray-600 bg-white border-gray-300
      rounded  transition ease-in-out px-4 py-2 w-full mb-6 
      ${changeDetail && "bg-red-200"}`}/>
     
      {/* EMAIL */}
      <input type="email" id="email" value={email} disabled
      onChange={onChange}
      className="text-xl text-center text-gray-600 bg-white border-gray-300
      rounded  transition ease-in-out px-4 py-2 w-full mb-6" />
      

      <div className="flex justify-between whitespace-nowrap sm:text-lg text-sm mb-6">
        <p className="flex items-center">Do you want to change your name?
        <span className="text-red-600 ml-1 transition ease-in-out
        duration-200 cursor-pointer"  
        onClick={()=> {
          changeDetail && onSubmit();
          setChangeDetail((previousState) => !previousState)
          }}>
          
          {changeDetail? "Apply Change" : "Edit"}
          </span>
        </p>
        
        <p className="cursor-pointer text-blue-600 hover:text-blue-800
        transition ease-in-out duration-200"
        onClick={onLogOut}>Sign Out</p>
      </div>


    </form>
    </div>

    </section>
    </>
  )
}
