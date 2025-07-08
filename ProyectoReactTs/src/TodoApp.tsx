import { useState } from "react";
import ListaTareas from "./ListaTareas";


export  const TodoApp = () => {
    const [nuevaTarea, setNuevaTarea] = useState<string>('');
    const [tareas, setTareas] = useState<string[]>([]);

    const handleAddTodo = () => {
        if(nuevaTarea.trim() === '') return
        setTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
        setNuevaTarea('')
    }
    const handleDeleteTodo = (index: number) => {
        setTareas(tareas => tareas.filter((_, i) => i !== index))
    }

    return (
        <div>
            <h1>Lista de tareas</h1>
            <div>
                <input type="text" 
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
                placeholder="Nueva tarea" 
                />
                <button onClick={handleAddTodo}>Agregar</button>
            </div>
            <ListaTareas listaTareas={tareas} borrarTarea={handleDeleteTodo} />
        </div>
        )
}