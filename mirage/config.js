export default function() {
  this.timing = 1000; // 400 default

  this.namespace = '/api';

  this.get('/users', () => {
     return {
       users: [
         {id:1,name:'Pablo',username:'pablo',mail:'pablo@mail.es',picture:'/male_user'},
         {id:2,name:'Poison',username:'asesino',mail:'poison@mail.es',picture:'/male_user'},
         {id:3,name:'Victoria',username:'esposa',mail:'victoria@mail.es',picture:'/female_user'},
         {id:4,name:'Juan',username:'hijo',mail:'juan@mail.es',picture:'/male_user'},
       ]
     };
   });

//on peut automatiser, juste pour éviter l'erreur dans la console
   this.get('/users/:id', () => {
      return {
        users: [
          {id:1,name:'Pablo',username:'pablo',mail:'pablo@mail.es',picture:'/male_user'},
          {id:2,name:'Poison',username:'asesino',mail:'poison@mail.es',picture:'/male_user'},
          {id:3,name:'Victoria',username:'esposa',mail:'victoria@mail.es',picture:'/female_user'},
          {id:4,name:'Juan',username:'hijo',mail:'juan@mail.es',picture:'/male_user'},
        ]
      };
    });
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
