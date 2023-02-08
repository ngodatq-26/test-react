import React from 'react'
import { IUser } from '../../../models/user'
import { useViewPort } from '../../common/utils/viewPort';

interface props {
  info : IUser
}

const UserComponent = (props : props) => {
  const {info} = props;

  const viewPort = useViewPort();
  const isMobile = viewPort.width <= 480;
  const isDesktop = viewPort.width >= 1025;

  const [img, setImg] = React.useState<string>('')
  React.useEffect(() => {
    if(isMobile) {
      setImg(info.thumbnail.thumbnail);
    } else if(isDesktop) {
      setImg(info.thumbnail.large);
    } else setImg(info.thumbnail.medium);
  }, [viewPort]);

  return (
    <>
      <td>{info.fullName}</td>
      <td>{info.userName}</td>
      <td><img src = {img} /></td>
    </>
  )
}

export default UserComponent