import { useEffect, useState } from "react";
import { tasks } from "../../utils/tasks";

import { Tasks } from "../../components/Tasks";
import { Search } from "../../components/Search";
import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { Priorities } from "../../components/Priorities";

import { Container, FixedContent } from "./styles";

export function Home() {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  useEffect(() => {
    switch (filter) {
      case "pending":
        return setData(tasks.filter((tasks) => tasks.done === false));
      case "finished":
        return setData(tasks.filter((tasks) => tasks.done === true));
      default:
        return setData(tasks);
    }
  }, [filter]);

  return (
    <Container>
      <SideMenu 
        menuIsOpen={menuIsOpen}
        onCloseMenu={toggleMenu}
      />

      <FixedContent>
        <Header 
          onOpenMenu={toggleMenu}
        />
        <Priorities />
        <Search setFilter={setFilter} filter={filter} />
      </FixedContent>

      <Tasks data={data} />
    </Container>
  );
}