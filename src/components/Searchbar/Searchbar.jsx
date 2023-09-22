import { MdYoutubeSearchedFor } from 'react-icons/md';
import { Form, Input, Search, Thumb } from './Searchbar.styled';

export const SearchBar = ({ onSubmit }) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(evt);
  }
    return (
      <Thumb>
        <Form onSubmit={handleSubmit}>
        
          <Input 
            type="text" 
            name="query"  
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"/>
          <Search  type='submit'>
            <MdYoutubeSearchedFor/>
        </Search>
        </Form>
      </Thumb>
    );
  };