import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleMember } from '../../../api/memberData';
import MemberForm from '../../../components/forms/MemberForm';

export default function EditMember() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // grab the firebasekey
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMember(firebaseKey).then(setEditItem);
  }, [firebaseKey]);
  // pass the object to form
  return (<MemberForm obj={editItem} />);
}
