import { observable } from 'mobx';

const SearchText = observable({
    searchText: '',
    backgroundColor: 'yellow',
    color: 'black'
});

export default SearchText;