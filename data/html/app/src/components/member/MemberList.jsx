import React  from 'react';
import PropTypes from 'prop-types';

const MemberList = ({ members }) => {
  //membersは{ members:[] } っていうオブジェクト
  //{}で指定したキーの値を展開してくれるのかな

  return (
    <ul>
      {members.map(member => (
        <li key={ member._id }>{ member.name }</li>
      ))}
    </ul>
  )
};

MemberList.propTypes = {
  members: PropTypes.arrayOf(PropTypes.any)
}

export default MemberList;