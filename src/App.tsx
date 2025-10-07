import react from 'react';
import ProductCard from './components/ProductCard';
import DropdownCategory from './components/DropdownCategory';
import PostComments from './components/PostComments';
import UserFollow from './components/UserFollow';
import TextCard from './components/TextCard';

function App(){

  return(
    <div className='flex flex-col items-center justify-center min-h-screen w-full bg-white overflow-y-auto'>
      <ProductCard />
      <DropdownCategory />
      <PostComments />
      <UserFollow />
      <TextCard />
    </div>
  )
}

export default App;