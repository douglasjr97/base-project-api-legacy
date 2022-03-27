import React, { useEffect, useState } from "react";
import { Title } from "./styles";
import { Calendar } from "primereact/calendar";
import api from "../../services/api";
import ListOfLaunch from "../../components/ListOfLaunch/ListOfLaunch";
import { Launch } from "../../components/ListOfLaunch/ListOfLaunch";
const Dashboard: React.FC = () => {
  // const [date, setDate] = useState<Date | Date[] | undefined>(new Date());
  const [date15, setDate15] = useState(new Date());
  const [launch, setLaunch] = useState<Launch[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  //   {
  //     name_launch: "Lançamento 1",
  //     rocket: {
  //       rocket_id: "1",
  //       rocket_name: "Foguete 1",
  //       rocket_type: "Normal",
  //     },
  //   },
  //   {
  //     name_launch: "Lançamento 2",
  //     rocket: {
  //       rocket_id: "2",
  //       rocket_name: "Foguete 2",
  //       rocket_type: "Normal",
  //     },
  //   },
  //   {
  //     name_launch: "Lançamento 3",
  //     rocket: {
  //       rocket_id: "3",
  //       rocket_name: "Foguete 3",
  //       rocket_type: "Normal",
  //     },
  //   },
  //   {
  //     name_launch: "Lançamento 4",
  //     rocket: {
  //       rocket_id: "4",
  //       rocket_name: "Foguete 4",
  //       rocket_type: "Normal",
  //     },
  //   },
  //   {
  //     name_launch: "Lançamento 5",
  //     rocket: {
  //       rocket_id: "5",
  //       rocket_name: "Foguete 5",
  //       rocket_type: "Normal",
  //     },
  //   },
  // ]);

  useEffect(() => {
    api
      .get("/launches")
      .then((response) => {
        setLaunch(response.data);
        setIsLoading(true);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(true);
      });
  }, []);
  return (
    <>
      <Title>SpaceX | Falcons</Title>

      <ListOfLaunch releases={launch} loaded={isLoading} />
    </>
  );
};

export default Dashboard;
