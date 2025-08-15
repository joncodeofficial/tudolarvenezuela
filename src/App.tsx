import ListCards from './components/ListCards';
import Layout from './container/Layout';

console.log({
  name: 'Jonathan',
  age: 25,
  city: 'Santiago',
  country: { name: 'Chile', code: 'cl' },
  options: ['a', 'b', 'c'],
});

console.log({
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    coordinates: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
  hobbies: ['reading', 'swimming', { type: 'sport', name: 'tennis' }],
  isActive: true,
  metadata: null,
});

function App() {
  return (
    <Layout>
      <ListCards />
    </Layout>
  );
}

export default App;
