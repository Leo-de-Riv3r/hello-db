// la URI de la db
const db = 'mongodb+srv://hellodb:hellodb@cluster0.iyo2l.mongodb.net/hellodb?retryWrites=true&w=majority';

//const db = 'mongodb://localhost/hellodb';

// array de usuarios para ingresar a la db
const users = [
  {
    id: 1,
    name: 'Juan',
    mail: 'juan@mail.com',
    birthday: '2000-05-24',
    Hinchade: 'Huracan'
  },
  {
    id: 2,
    name: 'Maria',
    mail: 'maria@mail.com',
    birthday: '2000-02-13',
    Hinchade: 'Banfield'
  },
  {
    id: 3,
    name: 'Pedro',
    mail: 'pedro@mail.com',
    birthday: '2000-05-19',
    Hinchade: 'Estudiantes de la plata'
  },
  {
    id: 4,
    name: 'Julia',
    mail: 'julia@mail.com',
    birthday: '1998-03-01',
    Hinchade: 'Racingclub'
  },
  {
  	id: 5,
  	name: 'Madrid',
  	mail: 'Holasoymadrid@santiagobernabeu.com',
  	birthday: '2018-09-12',
  	Hinchade: 'Boke' 
  }
];

// conectarse a la db
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    // si nos conectamos con exito mostrar mensajes
    // e insertar los usuarios en el array
    console.log(`DB connected @ ${db}`);
    console.log('Populating DB...');
    User.insertMany(users, (err, users) => {
      if (err) throw err;
      // un mensaje con la cantidad de documentos insertados
      console.log(`${users.length} documents inserted!`);
      // cerramos la conexion cuando terminamos
      mongoose.connection.close();
    });
  })
  .catch(err => console.error(`Connection error ${err}`));
