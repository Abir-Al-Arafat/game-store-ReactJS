import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
    id: number;
    name: string;
  }
  
interface FetchGames {
    count: number;
    results: Game[];
    next: string;
    previous: string;
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        // for cancelling unnencessary fetchs
        const controller = new AbortController()

        apiClient
          .get<FetchGames>("/games", {signal: controller.signal})
          .then((res) => setGames(res.data.results))
          .catch((err) => {
            if(err instanceof CanceledError) return
            setError(err.message)
        });
        
        return () => controller.abort() 
      }, []);
    return {games, error}
}

export default useGames