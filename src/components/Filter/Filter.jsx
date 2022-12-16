import { useSelector, useDispatch } from 'react-redux';
import { Box } from 'Utils/Box';
import { filterContact, getFilter } from '../../Redux/contacts/filterSlice';
import * as SC from './Filter.style';
import AddContactButton from 'components/AddContactButton/AddContactButton';

const Filter = () => {
  const filterList = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={3}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <SC.Title>Find contact </SC.Title>
        <SC.FindArea
          type="text"
          name="filter"
          value={filterList}
          autoComplete="off"
          placeholder="Name"
          onChange={evt => dispatch(filterContact(evt.target.value))}
        />
      </Box>
      <AddContactButton />
    </Box>
  );
};

export default Filter;
