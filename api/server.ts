import cors from 'cors';
import express from 'express' 
import { randomUUID } from 'node:crypto'

type Tareas = {
    id: string; titulo: string;
    materia: string;  hecha: boolean;
}

const tareas: Tareas[] = [
    { id:randomUUID(), titulo: "Resolver ejercicios de ecuaciones diferenciales", materia: "Ecuaciones diferenciales", hecha: false },
  { id: randomUUID(), titulo: "Leer capítulo sobre el libro de Kobe Bryant", materia: "pensamiento crítico", hecha: true },
  { id: randomUUID(), titulo: "Preparar presentación sobre potencia", materia: "electronica", hecha: false },
  { id: randomUUID(), titulo: "Entregar informe de Flowcommerce", materia: "Programación", hecha: true },
]


const app = express()
app.use(cors({ origin: 'http://localhost:3000'}));
app.use(express.json())

app.get('/tareas', async (_req, res) => {
    await new Promise((r) => setTimeout(r, 600))
    res.json(tareas)
})

app.listen(4000,() => {
    console.log('Api lista en http://localhost:4000/tareas')
} )