<script setup>
    const props = defineProps(['cadastraTarefa', 'tarefaTemp', 'editaTarefaTemp', 'trocarFiltro'])
</script>

<template>
    <!-- O ".PREVENT" FUNCIONA COMO UM PREVENT DEFAULT,
    PRA FAZER COM QUE O FORMULÁRIO NÃO RECARREGUE A PÁGINA -->
    <form @submit.prevent="props.cadastraTarefa">
        <div class="row">
            <div class="col">
                <input :value="props.tarefaTemp" @change="props.editaTarefaTemp" required type="text" placeholder="Digite aqui a descrição da tarefa" class="form-control">
            </div>
            <div class="col-md-2">
                <button type="submit" class="btn btn-primary">Cadastrar</button>
            </div>
            <div class="col-md-2">
                <!-- ESSE CHANGE PEGA O NOME DO FILTRO A MEDIDA QUE ELE MUDA -->
                <select @change="props.trocarFiltro" class="form-control">
                    <option value="todas">Todas tarefas</option>
                    <option value="pendentes">Pendentes</option>
                    <option value="finalizadas">Finalizadas</option>
                </select>
            </div>
        </div>
    </form>
</template>