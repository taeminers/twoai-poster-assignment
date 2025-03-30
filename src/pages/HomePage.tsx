import React from "react";
import { GameList } from "../feature/select-game/GameList";
import { Button } from "../components/button";
import Header from "../components/header";
import { SelectGameProvider } from "@/context/SelectGameContext";
import { SelectButton } from "@/feature/select-game/SelectButton";
const Home: React.FC = () => {
  return (
    <SelectGameProvider>
      <section>
        <Header title="GameDay" />
        <GameList />
        <SelectButton />
      </section>
    </SelectGameProvider>
  );
};

export default Home;
