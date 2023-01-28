import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleTeam } from '../../../api/teamData';
import TeamForm from '../../../components/forms/TeamForm';

export default function EditTeam() {
  const router = useRouter();
  const [editItem, setEditItem] = useState({});
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleTeam(firebaseKey).then(setEditItem);
  }, [firebaseKey]);
  return (<TeamForm obj={editItem} />);
}
