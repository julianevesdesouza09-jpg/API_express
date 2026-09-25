import projetoExprex from 'projetoExprex.js'
const app = express();
app.use(express.json());

const PORT =3000;
const tarefas =[
    {id:1, nome:"Limpar a casa", concluida:true},
    {id:2, nome:"Lavar a louça", concluida:true},
    {id:3, nome:"Passar roupa", concluida: true}

];
app.get('/',(req,res) => {
    res.send('API de tarefas no ar')
});
app.get('/tarefas',(req,res)=> {
    res.json(tarefas)

});
app.get('/tarefas/:id',(req,res)=> {
    const id = req.params.id;
    if(id===undefined || typeof id !=="number"){
        return res
        .status(404)
        .json({erro: 'Id não encontrado'})
    }
});
app.get('/tarefas',(req,res)=> {
    res.json(tarefas)
const status = req.query.status;
let resultado=tarefas;
if(status){
    resultado=resultado.filter((tarefas) => {
        tarefas.status === status;
    });

} res.json(resultado);
});
app.post('/tarefas', (req, res) => {
    const {titulo}=req.body;
    const tarefaNova = [
        {id: tarefas.length +1},
        { titulo: titulo,},
        {concluida: true}
    ]   
    tarefas.push(tarefaNova);
    return res
    .status(201)
});
function autenticar (req, res, next) {
    console.log('Autenticado');
    next();
};
app.use(autenticar);

function validacaoDoCorpo(req, res, next){
    if(!req.body.titulo){
        return res.status(400).json({erro: 'O título é obrigatório'})
    };
    next();
}
function registrarLog (req, res, next){
    console.log('Registro feito');
    next()
};
app.post('/tarefas' )[
        autenticar,
        validacaoDoCorpo,
        registrarLog
    ]
    res.status(201).json({mensagem: 'Tarefa criada'});
