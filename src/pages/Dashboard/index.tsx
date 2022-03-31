import React, { useEffect, useState } from "react";
import { Title } from "./styles";
import api from "../../services/api";
import ListOfLaunch from "../../components/ListOfLaunch/ListOfLaunch";
import { Launch } from "../../components/ListOfLaunch/ListOfLaunch";
const Dashboard: React.FC = () => {
  const [date15, setDate15] = useState(new Date());
  const [launch, setLaunch] = useState<Launch[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
