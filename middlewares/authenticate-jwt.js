export default async function authenticateToken(req, res, next, auth){
    const jwt = req.headers.authorization;
    if(!jwt){
        res.status(401).json({message: "Usuário não autorizado"})
        return
    }
  
    let decodedIdToken = ""
    try{
        decodedIdToken = await auth.verifyIdToken(jwt, true)
    }catch(e){
        res.status(401).json({message: "Usuário não encontrado"})
        return
    }
  
    req.user = {
      uid: decodedIdToken.sub
    }
  
    next()
}