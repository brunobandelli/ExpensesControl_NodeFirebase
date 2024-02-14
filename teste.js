import admin from 'firebase-admin';
import fs from 'fs';

// Caminho para o arquivo de credenciais de serviço
const serviceAccount = './serviceAccountKey.json';

// Ler o arquivo de credenciais de serviço como um JSON
const serviceAccountJson = JSON.parse(fs.readFileSync(serviceAccount, 'utf8'));

// Inicializar o Firebase Admin com as credenciais lidas do arquivo
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountJson)
});

// UID do usuário para o qual você está gerando o token
const uid = '123abc';

// Opções adicionais, se necessário (opcional)
const additionalClaims = {
  premiumAccount: true
};

// Gerar o token de SDK do Firebase
admin.auth().createCustomToken(uid, additionalClaims)
  .then((customToken) => {
    // O token de SDK do Firebase foi gerado com sucesso
    console.log("Token de SDK do Firebase gerado:", customToken);
  })
  .catch((error) => {
    // Ocorreu um erro ao gerar o token de SDK do Firebase
    console.error("Erro ao gerar o token de SDK do Firebase:", error);
  });
