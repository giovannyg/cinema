<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="card shadow-sm">
                <div class="card-header d-flex">
                  <h4 class="flex-grow-1">Turnos</h4>
                  <button class="btn btn-primary">Nuevo turno</button>
                </div>
                <div class="card-body">
                <div id="people">
                  <v-client-table :data="list" :columns="columns" :options="options">
                  <div slot="status" slot-scope="{ row }">
                    {{ row.status + ''}}
                  </div>
                  <div slot="actions" slot-scope="{ row }">
                    {{ 'actions' }}
                  </div>
                  </v-client-table>
                </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    data: () => ({
      columns: [
        'id',
        'time',
        'status',
        'actions'
      ],
      list: [],
      options: {
        texts:{
            count: "Showing {from} to {to} of {count} records|{count} records|One record",
            limit: 'Registros',
            filter:"",
            filterPlaceholder:"Buscar",
            page:"Página:",
            noResults:"No se encontaron registros",
            loading:'Cargando...',
        },
        headings: {
          id: "ID",
          time: "Horario",
          status: "Estatus",
          actions: 'Acciones'
        },
        sortable: ["id", "time", "status"],
        filterable: ["time", "status"]
      }
    }),
    mounted() {
      this.getList();
    },
    methods: {
      getList() {
        axios.get('/api/showtimes')
        .then(response => {
          console.log(response.data);
          this.list = response.data;
        })
      }
    }
}
</script>