import React, { useEffect, useState } from 'react'
import './App.css'
import PageWrapper from './components/PageWrapper/PageWrapper'
import ActionsRow from './components/ActionsRow/ActionsRow'
import HighlightAppointment from './components/HighlightAppointment/HighlightAppointment'
import { usersData } from './data/userData';

export default function App() {
  const [data, setData] = useState(usersData);

  const onDelete = () => {
    setData([]);
  };
  const onViewData = () => {
    setData(usersData);
  };
  useEffect(() => {
    setData([]);
  }, [])

  return (
    <PageWrapper>
      <HighlightAppointment data={data} />
      <ActionsRow deleteData={onDelete} viewData={onViewData} />
    </PageWrapper>
  );
}
