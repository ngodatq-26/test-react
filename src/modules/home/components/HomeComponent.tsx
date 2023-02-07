import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { IDataUser, IUser } from '../../../models/user';
import { AppState } from '../../../redux/reducer';
import ArrowDown from '../../common/components/arrow-down';
import ArrowUp from '../../common/components/arrow-up';
import Order from '../../common/components/order-arrow';
import { setItemSort, setSortValue } from '../../common/redux/sortReducer';
import { useViewPort } from '../../common/utils/viewPort';
import { setUser } from '../redux/homeReducer';
import { sortItem } from '../utils';
import UserComponent from './UserComponent';

const HomeComponent = () => {

    const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<String>>>();
    const stateData = useSelector((state: any) => state)
    const [sortCheck, setSortCheck] = React.useState<boolean>(false);

    const results = stateData.user.results;
    const page = stateData.user.page;
    const sortValue = stateData.sort.sortValue;
    const itemSort = stateData.sort.itemSort;

    const sortFullName = () => {
        dispatch(setItemSort('fullName'));
        if(sortValue == null) {
            dispatch(setSortValue('ASC'));
        }
        if (sortValue == 'DESC') {
            dispatch(setSortValue('ASC'));
        } 
        if (sortValue == 'ASC') {
            dispatch(setSortValue('DESC'));
        } 
        setSortCheck(!sortCheck)
    };

    const sortUserName = () => {
        dispatch(setItemSort('userName'));
        if (sortValue == null) {
            dispatch(setSortValue('ASC'));
        }
        if (sortValue == 'DESC') {
            dispatch(setSortValue('ASC'));
        }
        if (sortValue == 'ASC') {
            dispatch(setSortValue('DESC'));
        } 
        setSortCheck(!sortCheck)
    }

    React.useEffect(() => {
        if (stateData.sort.sortValue != null && stateData.sort.itemSort != null) {
            let items = stateData.user.user;
            if(items) {
              let newItems = sortItem(items, itemSort, sortValue );
              dispatch(setUser(newItems));
            }
        }
    }, [sortCheck])


    return (<>
        <thead>
            <tr>
              <th>STT</th>
              <th className='th-sort' onClick={sortFullName}><div>Full Name</div></th>
              <th className='th-sort' onClick={sortUserName}><div>Username</div></th>
              <th>Thumbnail Icon</th>
            </tr>
          </thead>
          <tbody>
            {
                stateData.user.user ? stateData.user.user.map((e : IUser, index : number) => {
                    return (
                        <tr key={index}>
                         <td>{index + 1 + results*(page - 1)}</td>
                        <UserComponent key={index} info={e} />
                        </tr>
                    )
                }) : null
            }
          </tbody>
    </>
    )
}

export default React.memo(HomeComponent)