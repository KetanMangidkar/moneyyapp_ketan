


const authorise =(permittedRoles)=>{
   return (req , res, next)=>{
      const user = req.user
      const isPermitted = false;
      permittedRoles.map(role=>{
        if(user.role.includes(role)){
            isPermitted = true;
        }
      })

      if(isPermitted){
        return next()
      }else{
        return res.status(401).send({message:"you are not authorised"})
      }
   }
}

module.exports =  authorise;