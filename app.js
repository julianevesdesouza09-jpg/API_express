import express from 'express';

const app = express();
const PORT = 3000;
const usuarios = [
    {id:1 , nome: "Júlia"} ,
    {id:2 , nome: "Heloísa"},
    {id:13, nome: "Cesar"}
]

app.get('/', (req , res) => { 
    res.send('Seja Bem-Vindo ao Express');
});

app.get('/usuarios' , (req , res) => {
    res.json(usuarios);
    
})

app.post( '/usuarios', (res , req) => {
    const novoUsuarios = {
        id: usuarios.length + 1,
        nome: 'Vitor'
    }
     usuarios.push(novoUsuarios);
     res.status(201).json(novoUsuarios)
});

app.get('/usuarios/ :id' ,(req , res)=>{
    const id = req.params.id;
    const usuarios = usuarios.find(
        u => u.id === parseInt(id)
    );
    if(!usuarios){
        return res.status(404).json({error:'Usuarios não encontrado!'})
    }
    res.status(200).json(usuarios);
})

app.listen(PORT, () => {
    console.log(
        'Servidor rodando em http://localhost:${PORT}'
    );
})