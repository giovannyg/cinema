<template>
  <div class="container-fluid">
    <b-alert :variant="alert.variant" :show="alert.show" dismissible @dismissed="alert.show=0">{{ alert.message }}</b-alert>
    <div class="row">
        <div class="col-12">
            <div class="card shadow-sm">
                <div class="card-header d-flex">
                  <h4 class="flex-grow-1">Películas</h4>
                  <button v-if="!showForm" class="btn btn-primary" @click="displayCreateForm">Nueva película</button>
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
                      label="* Nombre"
                      label-for="name_input">
                        <b-form-input id="name_input" v-model="formData.name" placeholder="Nombre"></b-form-input>
                      </b-form-group>
                      <b-form-group
                      label="* F. de publicación"
                      label-for="release_date_input">
                        <b-form-datepicker id="release_date_input" v-model="formData.release_date"></b-form-datepicker>
                      </b-form-group>
                    <b-form-group
                    :label="(formData.id ? '' : '*') + ' Imagen'"
                    label-for="image_input">
                      <b-form-file
                        id="image_input"
                        v-model="formData.image"
                        accept="image/*"
                        placeholder="Selecciona una imagen..."
                        drop-placeholder="Drop file here..."
                      ></b-form-file>
                    </b-form-group>
                    <b-form-group
                    label="Turnos"
                    label-for="showtimes_input">
                      <multiselect id="showtimes_input" 
                      v-model="formData.showtimes" 
                      :options="showTimeoptions"
                      label="time"
                      track-by="id"
                      :multiple="true"
                      :show-no-results="false"
                      :searchable="true"
                      placeholder="Seleccionar turnos...">
                      </multiselect>
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
      showTimeoptions: [],
      alert: {
        show: false,
        variant: 'success',
        message: 'dasd'
      },
      editedItem: {},
      emptyFormData: {
        name: '',
        release_date: '',
        image: null,
        showtimes: []
      },
      formData: {
        name: '',
        release_date: '',
        image: null,
        showtimes: []
      },
      showForm: false,
      columns: [
        'id',
        'name',
        'release_date_fh',
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
          name: "Nombre",
          release_date_fh: "Fecha de publicación",
          status: "Estatus",
          actions: 'Acciones'
        },
        sortable: ["id", "name", "status", "release_date_fh"],
        filterable: ["name", "status", "release_date_fh"]
      }
    }),
    mounted() {
      this.getList();
      this.formData.image = null
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
        this.formData.image = null;
        this.showForm = true;
      },
      getList() {
        axios.get('/api/movies')
        .then(response => {
          this.list = response.data.list;
          this.showTimeoptions = response.data.activeShowtimes;
        })
      },
      displayCreateForm() {
        Object.assign(this.formData, this.emptyFormData);
        this.showForm = true;
      },
      submitForm() {
        let data = new FormData();
        Object.entries(this.formData).forEach(e => {
          if(e[0] !== 'showtimes') data.append(e[0], e[1]);
        });

        let showtimes = [];
        this.formData.showtimes.forEach(e => { showtimes.push(e.id); })
        data.append('showtimes', JSON.stringify(showtimes));

        if(!this.formData.id)
          this.store(data);
        else
          this.update(this.formData.id, data);
      },
      store(data) {
        axios.post('/api/movies', data)
        .then(response => {
          this.displayAlert(5, 'success', 'Película creada correctamente.');
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
      update(id, data) {
        data.append("_method", "put");
        axios.post(`/api/movies/${id}`, data)
        .then(response => {
          this.displayAlert(5, 'success', 'Película actualizada correctamente.');
          this.showForm = false;
          Object.assign(this.list.find(element => element.id === id), this.formData);
        }).catch(error => {
          if(error.response.status === 422)
            this.displayAlert(true, 'danger', Object.values(error.response.data.errors)[0][0]);
          else
            this.displayAlert(true, 'danger', 'Ocurrió un error, intente más tarde, por favor.');
        });
      },
      changeStatus(row) {
        let newStatus = {status: row.status == 0 };
        axios.patch(`/api/movies/${row.id}/change-status`, newStatus)
        .then(response => {
          Object.assign(this.list.find(element => element.id === row.id), {status: row.status == 0 ? 1 : 0});
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
            axios.delete(`/api/movies/${row.id}`)
            .then(response => {
              this.displayAlert(5, 'success', 'Película eliminada.');
              this.list.splice(this.list.findIndex((e) => { return e.id === row.id}), 1);
            })
            .catch(error => {
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