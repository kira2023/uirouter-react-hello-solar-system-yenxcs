import peopleService from '../common/peopleService';
import Hello from '../components/Hello';
import About from '../components/About';
import People from '../components/People';
import Person from '../components/Person';

const hello = {
  name: 'hello',
  url: '/hello',
  component: Hello
};

const about = {
  name: 'about',
  url: '/about',
  component: About
};

const people = {
  name: 'people',
  url: '/people',
  component: People,
  resolve: [{
    token: 'people',
    resolveFn: () => peopleService.getAllPeople()
  }]
};

const person = {
  name: 'person',
  url: '/people/:personId',
  component: Person,
  resolve: [{
    token: 'person',
    deps: ['$transition$'],
    resolveFn: (trans) => peopleService.getPerson(trans.params().personId)
  }]
};

const states = [hello, about, people, person];
export default states;