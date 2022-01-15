import { criaTarefa, handleValores, renderizaTarefa, criaData } from "./components/tarefas.js"
import { carregarValores } from './components/storage.js'

const novaTarefa = document.querySelector("[data-form-button]")
novaTarefa.addEventListener("click", criaTarefa);
carregarValores()