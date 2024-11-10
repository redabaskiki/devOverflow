import { auth, signOut } from "@/auth";
import ROUTES from "@/constatnts/Routes";

 const Home = async () => {
  const session = await auth();
  return (
    <>
   
    <h1 className="text-3kl text-violet-700 font-black">
    <form   action={ async()=>
      {"use server"
      await  signOut({ redirectTo: ROUTES.SIGN_IN })}
    }>
     <button  className="px-10 pt-[100px]" type="button" >
     log out 
     
     </button></form>
    
    </h1> </>
  );
}
export default Home