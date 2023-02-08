import { Pagination } from 'antd'
import { PaginationProps } from 'antd/es/pagination';
import React from 'react'
import { API_PATHS } from '../../../config/api';
import { serviceHttp } from '../../common/utils/httpSerive';
import UserComponent from '../components/UserComponent'
import './style.css';
import {IData, IUser} from '../../../models/user';
import HomeComponent from '../components/HomeComponent';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../redux/reducer';
import { Action } from 'redux';
import { useSelector } from 'react-redux';
import { setPage, setResults, setUser } from '../redux/homeReducer';
import { useViewPort } from '../../common/utils/viewPort';
import logo from '../../../images/twendee.png'

const HomePage = () => {
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<String>>>();
  const stateData = useSelector((state : any) => state);

  const [checkHttp, setCheckHttp] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [pageCheck, setPageCheck] = React.useState<number>(stateData.user.page);
  const [resultCheck, setResultCheck] = React.useState<number>(stateData.user.results);
  const [sortCheck, setSortCheck] = React.useState<boolean>(false);

  const onChangePagination = (page: number, pageSize : number) => {
    setPageCheck(page)
    setResultCheck(pageSize);
    setCheckHttp(!checkHttp)
  }

  React.useEffect(() => {
    if(stateData.user.page == pageCheck && stateData.user.results == resultCheck && stateData.user.user.length != 0) {
      return;
    } else {
      serviceHttp(API_PATHS.getUser, 'GET', {
        page: pageCheck,
        results: resultCheck
      }, null).then(res => {
        let arr = res.results
        var list : Array<IUser> = [];

        for (let i in arr) {
          var info : IUser = {
            fullName: arr[i].name.first + ' ' + arr[i].name.last,
            userName: arr[i].login.username,
            thumbnail :arr[i].picture
          }
          list.push(info);
        }
        dispatch(setUser(list));
      });

      dispatch(setPage(pageCheck))
      dispatch(setResults(resultCheck))
    }
  }, [checkHttp]);

  console.log(stateData)

  return (
    <div className='container'>
      <div className='header-data' style={{alignItems : 'center'}}>
        <img src={logo} className="logo" />
      </div>
      <div className='container-data'>
        <table className='styled-table'>
          <HomeComponent />
        </table>
      </div>
      <div className='pagination'>
        <Pagination 
            showSizeChanger
            defaultPageSize = {stateData.user.results}
            defaultCurrent={stateData.user.page}
            onChange = {onChangePagination}
            total={100}
            responsive = {true}
        />
      </div>
    </div>
  )
}

export default HomePage