<template>
  <div class="container-fluid">
    <b-alert :variant="alert.variant" :show="alert.show" dismissible @dismissed="alert.show=0">{{ alert.message }}</b-alert>
    <div class="row">
        <div class="col-12">
            <div class="card shadow-sm">
                <div class="card-header d-flex">
                  <h4 class="flex-grow-1">Turnos</h4>
                  <button v-if="!showForm" class="btn btn-primary" @click="displayCreateForm">Nuevo turno</button>
                </div>
                <div class="card-body">
                  <div v-if="!showForm">
                    <v-client-table :data="list" :columns="columns" :options="options">
                    <div slot="status" slot-scope="{ row }">
                      {{ row.status == 1 ? 'Activo' : 'Inactivo' }}
                    </div>
                    <div slot="actions" slot-scope="{ row }">
                      <div class="h4 mb-0">
                        <b-icon role="button" icon="pencil-fill" class="color-primary px-1" @click="edit(row)"></b-icon>
                        <b-icon role="button" icon="lock-fill" class="color-primary px-1" @click="changeStatus(row)"></b-icon>
                        <b-icon role="button" icon="trash-fill" class="color-primary px-1" @click="deleteModel(row)"></b-icon>
                      </div>
                    </div>
                    </v-client-table>
                  </div>
                  <div v-else>
                    <b-form @submit.prevent="submitForm">
                      <b-form-group
                      label="* Turno"
                      label-for="time_input">
                        <b-form-timepicker id="time_input" v-model="formData.time" locale="en"></b-form-timepicker>
                      </b-form-group>
                      <b-form-group>
                        <b-form-checkbox
                          v-model="formData.status"
                          name="status"
                          value="1"
                          unchecked-value="0">Activo?
                        </b-form-checkbox>
                      </b-form-group>
                      <div>
                        <b-button type="button" variant="outline-secondary" @click="cancel">Cancelar</b-button>
                        <b-button type="submit" variant="outline-primary">Guardar</b-button>
                      </div>
                    </b-form>
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
      alert: {
        show: false,
        variant: 'success',
        message: 'dasd'
      },
      editedItem: {},
      emptyFormData: {
        time: '',
        status: 'false'
      },
      formData: {
        time: '',
        status: 'false'
      },
      showForm: false,
      columns: [
        'id',
        'time',
        'status',
        'actions'
      ],
      list: [],
      options: {
        texts:{
            count: "Mostrando {from} a {to} de {count} registros|{count} registros|1 registro",
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
      cancel() {
        this.formData = {...this.emptyFormData};
        this.alert.show = false;
        this.showForm = false;
      },
      edit(row) {
        Object.assign(this.formData, row);
        Object.assign(this.editedItem, row);
        this.showForm = true;
      },
      getList() {
        axios.get('/api/showtimes')
        .then(response => {
          this.list = response.data;
        })
      },
      displayCreateForm() {
        this.showForm = true;
        Object.assign(this.formData, this.emptyFormData);
      },
      submitForm() {
        if(!this.formData.id)
          this.store();
        else 
          this.update(this.formData.id);
      },
      store() {
        axios.post('/api/showtimes', this.formData)
        .then(response => {
          this.displayAlert(5, 'success', 'Turno creado correctamente.');
          this.list.push(response.data);
          this.showForm = false;
        }).catch(error => {
          if(error.response.status === 422){
            this.displayAlert(true, 'danger', Object.values(error.response.data.errors)[0][0]);
          }
          else
            this.displayAlert(true, 'danger', 'Ocurrió un error, intente más tarde, por favor.');
        });
      },
      update(id) {
        axios.patch(`/api/showtimes/${id}`, this.formData)
        .then(response => {
          this.displayAlert(5, 'success', 'Turno actualizado correctamente.');
          this.showForm = false;
          Object.assign(this.list[this.list.findIndex((e) => { return e.id === this.formData.id})], this.formData);
        }).catch(error => {
          if(error.response.status === 422)
            this.displayAlert(true, 'danger', Object.values(error.response.data.errors)[0][0]);
          else
            this.displayAlert(true, 'danger', 'Ocurrió un error, intente más tarde, por favor.');
        });
      },
      changeStatus(row) {
        let newStatus = {status: row.status == 0 };
        axios.patch(`/api/showtimes/${row.id}/change-status`, {status: row.status == 0 ? 1 : 0})
        .then(response => {
          Object.assign(this.list.find(element => element.id === row.id), newStatus);
        })
        .catch(error => {
            this.displayAlert(true, 'danger', 'Ocurrió un error, intente más tarde, por favor.');
        });
      },
      deleteModel(row) {
        this.$swal.fire({
          title: 'Eliminar',
          text: "¿Seguro que deseas eliminar este registro?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí!'
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(`/api/showtimes/${row.id}`)
            .then(response => {
              this.displayAlert(5, 'success', 'Turno eliminado.');
              this.list.splice(this.list.findIndex((e) => { return e.id === row.id}), 1);
            })
            .catch(error => {
              if(error.response.status === 400)
                this.displayAlert(true, 'danger', error.response.data.message);
              else
                this.displayAlert(true, 'danger', 'Ocurrió un error, intente más tarde, por favor.');
            });
          }
        })
      },
      displayAlert(show, variant, message) {
        this.alert.show = show;
        this.alert.variant = variant;
        this.alert.message = message;
      }
    },
    computed: {
    }
}
</script>