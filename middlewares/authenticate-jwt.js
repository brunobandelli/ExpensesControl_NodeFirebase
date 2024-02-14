import admin from 'firebase-admin'

export default async function authenticateToken(req, res, next){
    const jwt = req.headers.authorization;
    if(!jwt){
        res.status(401).json({message: "Usuário não autorizado"})
        return
    }
  
    let decodedIdToken = ""
    try{
        decodedIdToken = await admin.auth().verifyIdToken(jwt, true)
    }catch(e){
        res.status(401).json({message: "Usuário não encontrado"})
        return
    }
  
    req.user = {
      uid: decodedIdToken.sub
    }
  
    next()
}